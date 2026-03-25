import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface AppointmentPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<AppointmentPayload>;

    const firstName = body.firstName?.trim() || '';
    const lastName = body.lastName?.trim() || '';
    const email = body.email?.trim() || '';
    const phone = body.phone?.trim() || '';
    const message = body.message?.trim() || '';

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Please fill all required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: 'Email service is not configured on server.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const receptionistEmail = process.env.APPOINTMENT_TO || smtpUser;
    const fromEmail = process.env.APPOINTMENT_FROM || smtpUser;

    await transporter.sendMail({
      from: `Dental Essential Website <${fromEmail}>`,
      to: receptionistEmail,
      replyTo: email,
      subject: `New Appointment Request - ${firstName} ${lastName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
      text: `New Appointment Request\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send appointment request. Please try again.' },
      { status: 500 }
    );
  }
}
