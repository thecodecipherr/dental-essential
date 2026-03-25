"use client";

import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form.');
      }

      setFormStatus({
        type: 'success',
        message: 'Appointment request sent successfully. Our receptionist will contact you soon.',
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-24">

      {/* HEADER */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact <span className="text-sky-600">Us</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Book your appointment and experience professional, gentle dental care.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* MAP SECTION */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=loc:18.980009,73.1144911+(Dental+Essential+Advanced+Dental+Clinic)&z=18&iwloc=A&output=embed"
            height="350"
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />

          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sky-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Our Clinic Address</p>
                  <p className="text-gray-600 text-sm">
                    Shop no. 16, Building No. 7/B, Gurusharnam Complex,<br />
                    Vishrali Naka, Old Panvel – 410206
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sky-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Phone</p>
                  <p className="text-gray-600 text-sm">+91 877-9648573</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sky-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Working Hours</p>
                  <p className="text-gray-600 text-sm">
                    Mon - Sat: 10:00 AM – 2:00 PM / 5:00 PM – 9:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-semibold mb-8 text-sky-700">
            Book an Appointment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                value={formData.firstName}
                onChange={(event) => setFormData((prev) => ({ ...prev, firstName: event.target.value }))}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
                placeholder="First Name"
                required
              />
              <input
                value={formData.lastName}
                onChange={(event) => setFormData((prev) => ({ ...prev, lastName: event.target.value }))}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
                placeholder="Last Name"
                required
              />
            </div>

            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              value={formData.phone}
              onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Phone Number"
              required
            />

            <textarea
              value={formData.message}
              onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Message"
              rows={4}
              required
            />

            {formStatus && (
              <p
                className={`text-sm ${formStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
              >
                {formStatus.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-sky-600 text-white py-3 rounded-full hover:bg-sky-700 transition duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Book Appointment'}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
