// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {

  const treatments = [
    { title: 'Root Canal Treatment', image: 'root-canal.jpg' },
    { title: 'Full Mouth Rehabilitation', image: 'smile-correction.jpg' },
    { title: 'Dental Implants', image: 'dental-implants.jpg' },
    { title: 'Dentures', image: 'dentures.jpg' },
    { title: 'Braces and Aligners', image: 'braces-aligners.jpg' },
    { title: 'Pediatric Dentistry', image: 'pedetric.jpg' },
    { title: 'Smile Designing and Correction', image: 'smile-correction.jpg' },
    { title: 'Crowns and Bridges', image: 'crown-bridges.jpg' },
    { title: 'Wisdom Tooth Extraction', image: 'wisdom.jpg' },
  ];

  return (
    <main>
      {/* TOP INFO BAR */}
      <div className="bg-gray-900 text-gray-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span>Open Hour: 10:00 AM – 2:00 PM / 5:00 PM – 9:00 PM</span>
          <span>📞 +91 877-9648573</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-white py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-14 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-medium">
              Top Notch Dental Services in Panvel
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-pink-500">A smile is your best</span>{' '}
              <span className="text-sky-500">
                accessory—let’s make it shine!
              </span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              At Dental Essential, we believe a healthy smile is the key to
              confidence and well-being. Our expert team provides gentle,
              personalized care using the latest technology.
            </p>

            <Link
              href="/book"
              className="inline-block mt-8 bg-sky-500 hover:bg-sky-600 transition text-white px-8 py-3 rounded-md shadow-lg"
            >
              Book Appointment
            </Link>

            <div className="ml-4 mt-8 bg-white shadow rounded-lg px-8 py-3 inline-flex items-center gap-3 border border-gray-200">
              <span className="text-yellow-500">🏆</span>
              <span className="text-sm font-medium">
                Famdent Award Winner
              </span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[420px] h-[420px] bg-sky-400 rounded-full blur-2xl"></div>
            <div className="absolute w-[460px] h-[460px] bg-sky-300 rounded-full"></div>

            <div className="relative w-[500px] h-[600px] animate-float">
              <Image
                src="/images/home/babypic.png"
                alt="Happy Child Brushing Teeth"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-semibold mb-12">
            Treatments
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                {/* Treatment Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={`/images/services/${t.image}`}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Treatment Content */}
                <div className="p-6 text-center">
                  <h3 className="font-semibold mb-2">{t.title}</h3>
                  <p className="text-sm text-gray-600">
                    High-quality dental care with advanced technology and comfort.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REST OF YOUR CODE REMAINS SAME */}
      {/* OUR CLINIC GALLERY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">Our Modern</span>{' '}
              <span className="text-sky-500">Clinic</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience dental care in our state-of-the-art facility equipped
              with the latest technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large Image */}
            <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/clinic-1.png"
                alt="Modern Treatment Room"
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {[
              'clinic-2.png',
              'clinic-3.png',
              'clinic-4.png',
              'clinic-5.png',
            ].map((img, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden"
              >
                <Image
                  src={`/images/gallery/${img}`}
                  alt="Clinic Image"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section className="bg-blue-300 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg grid md:grid-cols-2 gap-8 p-8 items-center">
            
            <div className="relative w-full h-80">
              <Image
                src="/images/doctor.jpeg"
                alt="Dr. Sameer"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Dr. Sameer</h3>
              <p className="text-gray-600 mb-4">
                BDS, MDS – Prosthodontics
                <br />
                Dentist, Prosthodontist, Implantologist
              </p>
              <p className="text-gray-600 mb-6">
                Known for precision, comfort, and patient-centric treatment
                approach.
              </p>

              <Link
                href="/doctors"
                className="bg-sky-500 hover:bg-sky-600 transition text-white px-6 py-3 rounded-md"
              >
                Know More
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}