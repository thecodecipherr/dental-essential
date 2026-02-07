// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* TOP INFO BAR */}
      <div className="bg-gray-900 text-gray-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span>Open Hour: 10:00 AM – 2:00 PM / 5:00 PM – 9:00 PM</span>
          <span className="flex items-center gap-4">
            <span>📞 +91 877-9648573</span>
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-medium">
              Top Notch Dental Services in Panvel
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-pink-500">A smile is your best</span>{' '}
              <span className="text-sky-500">accessory—let’s make it shine!</span>
            </h1>
            <p className="mt-6 text-gray-600 max-w-xl">
              At Dental Essential, we believe a healthy smile is the key to confidence and well-being. Our expert team provides gentle, personalized care using the latest technology.
            </p>
            <Link
              href="/book"
              className="inline-block mt-8 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md shadow"
            >
              Book Appointment
            </Link>

            <div className="mt-8 bg-white shadow rounded-lg p-4 inline-flex items-center gap-3">
              <span className="text-yellow-500">🏆</span>
              <span className="text-sm font-medium">Famdent Award Winner</span>
            </div>
          </div>

          {/* HERO IMAGE PLACEHOLDER */}
          <div className="relative">
            <div className="w-80 h-80 bg-sky-200 rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-semibold mb-12">Treatments</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Root Canal Treatment',
              'Full Mouth Rehabilitation',
              'Dental Implants',
              'Dentures',
              'Braces and Aligners',
              'Pediatric Dentistry',
              'Smile Designing and Correction',
              'Crowns and Bridges',
              'Wisdom Tooth Extraction',
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition text-center"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-full mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t}</h3>
                <p className="text-sm text-gray-600">
                  High-quality dental care with advanced technology and comfort.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-blue-200 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12">
            <span className="text-pink-500">Stories Behind</span>{' '}
            <span className="text-white">Happy Smiles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow">
                <p className="text-gray-600 text-sm mb-4">
                  Excellent experience from consultation to treatment. Very professional and caring staff.
                </p>
                <p className="font-semibold">★★★★★</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="w-64 h-64 bg-sky-100 rounded-lg mx-auto" />
          <div>
            <span className="inline-block text-sm bg-gray-100 px-4 py-1 rounded-full mb-4">
              ABOUT US
            </span>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-sky-500">10 Years of Experience</span>{' '}
              <span className="text-pink-500">in Dental Care</span>
            </h2>
            <p className="text-gray-600 mb-6">
              We combine experience, technology, and compassion to deliver world-class dental care.
            </p>
            <Link
              href="/about"
              className="bg-sky-500 text-white px-6 py-3 rounded-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section className="bg-blue-300 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow grid md:grid-cols-2 gap-8 p-8 items-center">
            <div className="w-full h-64 bg-gray-200 rounded-lg" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Dr. Sameer</h3>
              <p className="text-gray-600 mb-4">
                BDS, MDS – Prosthodontics<br />Dentist, Prosthodontist, Implantologist
              </p>
              <p className="text-gray-600 mb-6">
                Known for precision, comfort, and patient-centric treatment approach.
              </p>
              <Link href="/doctors" className="bg-sky-500 text-white px-6 py-3 rounded-md">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-pink-500 mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Book an Appointment to treat your teeth right now
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl h-80" />
            <div className="bg-white rounded-xl shadow p-6">
              <input className="w-full border rounded p-3 mb-4" placeholder="First Name" />
              <input className="w-full border rounded p-3 mb-4" placeholder="Email" />
              <input className="w-full border rounded p-3 mb-4" placeholder="Phone" />
              <textarea className="w-full border rounded p-3 mb-4" placeholder="Message" />
              <button className="bg-sky-500 text-white px-6 py-3 rounded-md">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
