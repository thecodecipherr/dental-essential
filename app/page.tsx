// app/page.tsx
import Link from 'next/link';
import ReviewsCarousel from "@/components/ReviewsCarousel";
import DoctorProfileCarousel from "@/components/DoctorProfileCarousel";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] mt-20 flex items-center overflow-hidden">
        
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            {/* IMPORTANT: no `public` in path */}
            <source src="/videos/homebg1.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-7xl mx-auto px-6 md:px-14 grid md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <span className="inline-block bg-white/20 backdrop-blur text-black px-4 py-1 rounded-full text-sm font-medium">
              Top Notch Dental Services in Panvel
            </span>

           <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
      <span className="text-pink-500">A smile is your best</span>{' '}
      <span className="text-blue-400">
        accessory—let’s make it shine!
      </span>
    </h1>

            <p className="mt-6 text-gray-200 max-w-xl">
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

            <div className="mt-8 ml-3 bg-white/90 text-gray-800 shadow rounded-lg px-6 py-3 inline-flex items-center gap-3 border border-gray-200">
              <span className="text-yellow-500">🏆</span>
              <span className="text-sm font-medium">
                Famdent Award Winner
              </span>
            </div>
          </div>

          {/* Empty column for balance (optional visual spacing) */}
          <div className="hidden md:block"></div>
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
              📅 Book on Practo
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