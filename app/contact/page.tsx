export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">

      {/* HEADER */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl font-bold text-sky-700 mb-4">
          Contact Us
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d73.1089!3d18.9934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e87a387dce0d%3A0x4f1df832c453a63e!2sOld%20Panvel%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin"
            height="350"
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />

          <div className="p-6 text-gray-600">
            <p className="font-semibold text-sky-700 mb-2">
              📍 Our Clinic Address
            </p>
            <p>
              Shop no. 16, Building No. 7/B, Gurusharnam Complex,  
              Vishrali Naka, Old Panvel – 410206
            </p>
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
