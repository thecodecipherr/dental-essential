// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function HomePage() {

  const testimonials = [
    {
      quote:
        "Dr. Sameer and his team provided exceptional care during my root canal treatment. The procedure was painless and the follow-up care was outstanding. Highly recommend Dental Essential!",
      name: "Priya Sharma",
      designation: "Root Canal Patient",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote:
        "My dental implant procedure was seamless. The clinic's modern equipment and Dr. Sameer's expertise gave me complete confidence. My new smile looks completely natural!",
      name: "Rajesh Patel",
      designation: "Dental Implant Patient",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote:
        "My kids actually look forward to their dental visits now! The pediatric care here is wonderful. The staff is so patient and gentle with children.",
      name: "Anjali Desai",
      designation: "Parent of Pediatric Patients",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote:
        "Got my braces done here and the transformation has been amazing. The team monitors progress regularly and the results exceeded my expectations!",
      name: "Arjun Mehta",
      designation: "Orthodontic Patient",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote:
        "The smile designing treatment completely changed my confidence. Professional, caring staff and state-of-the-art facilities. Best dental clinic in Panvel!",
      name: "Sneha Kulkarni",
      designation: "Cosmetic Dentistry Patient",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
  ];

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

      {/* PATIENT TESTIMONIALS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              <span className="text-pink-500">Stories Behind</span>{' '}
              <span className="text-sky-500">Happy Smiles</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Hear from our patients about their experience at Dental Essential
            </p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section className="bg-sky-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg grid md:grid-cols-2 gap-6 p-6 items-center">
            
            <div className="relative w-full h-64">
              <Image
                src="/images/doctor.jpeg"
                alt="Dr. Sameer"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Dr. Sameer Ramchandra Gharat</h3>
              <p className="text-gray-700 mb-3 font-medium text-sm">
                BDS, MDS – Prosthodontics
                <br />
                Dentist, Prosthodontist, Implantologist
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                Dr. Sameer Ramchandra Gharat is a Postgraduate in Prosthetic Dentistry. He completed his graduation and post-graduation from Dr. D. Y. Patil School of Dentistry and has also completed a Clinical Assistant Programme at Government Dental College & Hospital, Mumbai.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                He is a registered member of the Maharashtra State Dental Council (Reg. No. A-18924) and holds memberships with the IDA Navi Mumbai Branch, Indian Prosthodontic Society, and Panvel Dental Welfare Association.
              </p>

              <Link
                href="/doctors"
                className="bg-sky-500 hover:bg-sky-600 transition text-white px-6 py-2.5 rounded-md text-sm"
              >
                Know More
              </Link>
            </div>

          </div>
        </div>
      </section>

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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
              <span className="text-xl font-bold text-gray-700">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-lg font-semibold text-gray-700">5.0</span>
            </div>
            <p className="text-gray-500 text-sm">Based on 100+ reviews</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Priya Sharma", avatar: "PS", date: "2 weeks ago", review: "Dr. Sameer and his team provided exceptional care during my root canal treatment. The procedure was painless and the follow-up care was outstanding. Highly recommend!" },
              { name: "Rajesh Patel", avatar: "RP", date: "1 month ago", review: "My dental implant procedure was seamless. The clinic's modern equipment and Dr. Sameer's expertise gave me complete confidence. My new smile looks completely natural!" },
              { name: "Anjali Desai", avatar: "AD", date: "3 weeks ago", review: "My kids actually look forward to their dental visits now! The pediatric care here is wonderful. The staff is so patient and gentle with children." },
              { name: "Arjun Mehta", avatar: "AM", date: "1 month ago", review: "Got my braces done here and the transformation has been amazing. The team monitors progress regularly and the results exceeded my expectations!" },
              { name: "Sneha Kulkarni", avatar: "SK", date: "2 months ago", review: "The smile designing treatment completely changed my confidence. Professional, caring staff and state-of-the-art facilities. Best dental clinic in Panvel!" },
              { name: "Vikram Singh", avatar: "VS", date: "1 week ago", review: "Excellent experience with clear aligners treatment. Dr. Sameer explained the entire process clearly and the results are amazing. Highly recommended!" },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{review.review}</p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://g.page/r/dental-essential/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition"
            >
              See All Reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}