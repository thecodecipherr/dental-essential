import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Dental Essential',
  description: 'Explore our comprehensive dental services including root canal treatment, dental implants, braces, smile designing, and more.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-sky-500 to-sky-600 py-20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            COMPREHENSIVE DENTAL CARE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-sky-100 max-w-2xl mx-auto text-lg">
            From routine check-ups to advanced treatments, we offer a full range of dental services 
            to keep your smile healthy and beautiful.
          </p>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100V0C240 66.6667 480 100 720 100C960 100 1200 66.6667 1440 0V100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">Expert Care</span>{' '}
              <span className="text-sky-500">for Every Smile</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive dental treatments using the latest technology and techniques 
              to ensure the best outcomes for our patients.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-500 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Dental Essential, we combine expertise with compassion to deliver exceptional dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "Award Winning", desc: "Recognized for excellence in dental care" },
              { icon: "⚡", title: "Latest Technology", desc: "State-of-the-art equipment and techniques" },
              { icon: "💝", title: "Gentle Care", desc: "Pain-free treatments with patient comfort" },
              { icon: "👨‍⚕️", title: "Expert Team", desc: "Highly qualified and experienced dentists" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center border border-sky-50 hover:border-sky-200 transition-colors">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-sky-100 mb-8 text-lg">
            Book an appointment today and take the first step towards a healthier, more confident smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
