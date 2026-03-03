'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Painless Root Canal',
    'Dental Implants',
    'Dental Braces',
    'Clear Aligners',
    'Smile Designing',
    'Teeth Whitening',
    'Pediatric Dentistry',
    'General Checkup',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
            <p className="text-gray-600 mb-6">
              Your appointment request has been received. We will contact you shortly to confirm your booking.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-medium transition"
              >
                Back to Home
              </Link>
              <a
                href="tel:+918779648573"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium transition"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Book Your <span className="text-sky-500">Appointment</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with us. Choose from instant online booking or fill out the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Practo Booking - Primary Option */}
          <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-8 text-white">
            <div className="mb-6">
              <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
                ✨ Recommended
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Instant Online Booking</h2>
            <p className="text-sky-100 mb-6">
              Book your appointment instantly through Practo. Choose your preferred time slot and get immediate confirmation.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Instant confirmation</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>View available time slots</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>SMS & email reminders</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Easy rescheduling</span>
              </li>
            </ul>

            <a
              href="https://www.practo.com/navi-mumbai/clinic/dental-essential-old-panvel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition flex items-center justify-center gap-3 shadow-lg"
            >
              <img src="https://www.practo.com/favicon.ico" alt="Practo" className="w-6 h-6" />
              Book on Practo
            </a>

            {/* Quick Contact */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sky-100 text-sm mb-4">Or reach us directly:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918779648573"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition"
                >
                  📞 +91 877-9648573
                </a>
                <a
                  href="https://wa.me/918779648573?text=Hi, I would like to book an appointment at Dental Essential"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-sm transition"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Alternative Option */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Appointment</h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form and we'll contact you to confirm your appointment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
                  placeholder="Any specific concerns or requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-md"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>

        {/* Clinic Hours Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Clinic Hours</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-2">🕐</div>
              <h4 className="font-semibold text-gray-800">Morning</h4>
              <p className="text-gray-600">10:00 AM – 2:00 PM</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-2">🌙</div>
              <h4 className="font-semibold text-gray-800">Evening</h4>
              <p className="text-gray-600">5:00 PM – 9:00 PM</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-2">📍</div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-gray-600">Panvel, Navi Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
