// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import ReviewsCarousel from "@/components/ReviewsCarousel";
import DoctorProfileCarousel from "@/components/DoctorProfileCarousel";

export default function HomePage() {
  return (
    <main>
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
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4V2H8v2H4v3a4 4 0 004 4h.09A6.002 6.002 0 0011 15.91V18H8v2h8v-2h-3v-2.09A6.002 6.002 0 0015.91 11H16a4 4 0 004-4V4h-4z" />
              </svg>
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

      {/* DOCTOR PROFILE */}
      <DoctorProfileCarousel />

      {/* PRACTO BOOKING SECTION */}
      <section className="py-12 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Book Your Appointment Online
          </h2>
          <p className="text-sky-100 mb-6 max-w-xl mx-auto">
            Quick and easy online booking through Practo. Choose your preferred time slot and get instant confirmation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.practo.com/navi-mumbai/clinic/dental-essential-old-panvel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sky-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-13 9h16a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z" />
              </svg>
              <span>Book on Practo</span>
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
            >
              Call: +91 877-9648573
            </Link>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION */}
      <ReviewsCarousel />
    </main>
  );
}