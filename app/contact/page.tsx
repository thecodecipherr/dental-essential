export default function ContactPage() {
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
                <span className="text-sky-600 text-xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Our Clinic Address</p>
                  <p className="text-gray-600 text-sm">
                    Shop no. 16, Building No. 7/B, Gurusharnam Complex,<br />
                    Vishrali Naka, Old Panvel – 410206
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sky-600 text-xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Phone</p>
                  <p className="text-gray-600 text-sm">+91 877-9648573</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sky-600 text-xl">🕐</span>
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

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
                placeholder="First Name"
              />
              <input
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
                placeholder="Last Name"
              />
            </div>

            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Email Address"
            />

            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Phone Number"
            />

            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none bg-white text-gray-900 placeholder:text-gray-500"
              placeholder="Message"
              rows={4}
            />

            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-3 rounded-full hover:bg-sky-700 transition duration-300 shadow-md"
            >
              Book Appointment
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
