import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="w-full h-[75vh] relative">
        <Image
          src="/smilewomen.png"
          alt="Dental Essential"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* WELCOME SECTION */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-pink-500 text-3xl font-semibold mb-2">
          Welcome to
        </h2>
        <h1 className="text-blue-500 text-4xl font-bold mb-6">
          Dental Essential
        </h1>

        <p className="text-gray-600 mb-4">
          At Dental Essential, we believe a healthy smile is the key to confidence
          and well-being. Our expert team provides gentle, personalized care using
          the latest technology to keep your teeth healthy and your visits stress-free.
        </p>

        <p className="text-gray-600">
          At Dental Essential, we believe a healthy smile is the key to confidence
          and well-being. Our expert team provides gentle, personalized care using
          the latest technology.
        </p>
      </section>

      {/* MISSION SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

          <Image
            src="/mission.jpg"
            alt="Our Mission"
            width={500}
            height={350}
            className="rounded-lg shadow-lg"
          />

          <div>
            <h2 className="text-pink-500 text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 mb-4">
              Our mission is to deliver exceptional dental care that goes beyond
              treating teeth — we care for people. We believe every patient
              deserves to feel heard, respected, and at ease.
            </p>

            <p className="text-gray-600 mb-6">
              By blending advanced technology with a gentle, personalized
              approach, we strive to support not just your oral health, but your
              overall well-being.
            </p>

            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
              BEHIND EVERY SMILE IS A STORY. LET'S HELP YOURS SHINE.
            </button>
          </div>
        </div>
      </section>
{/* DOCTORS & STAFF SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center text-pink-500 text-3xl font-bold mb-4">
      Our Doctors & Staff
    </h2>

    <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
      Meet our dedicated team of dental professionals committed to providing you with exceptional care and beautiful smiles.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Chief Dentist */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="relative h-72">
          <Image
            src="/images/doctor.jpeg"
            alt="Dr. Sameer Ramchandra Gharat"
            fill
            className="object-cover object-top"
          />
          <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Chief Dentist
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-1">Dr. Sameer Ramchandra Gharat</h3>
          <p className="text-sky-600 text-sm font-semibold mb-2">Prosthodontist & Implantologist</p>
          <p className="text-gray-500 text-xs mb-3">BDS, MDS – Prosthodontics & Implantology</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            With 10+ years of experience, Dr. Sameer specializes in dental implants, crowns, bridges, and complete smile makeovers. He is a member of IDA & Indian Prosthodontic Society.
          </p>
        </div>
      </div>

      {/* Visiting Orthodontist */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="relative h-72 bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center">
          <Image
            src="/images/staff/orthodontist.jpeg"
            alt="Visiting Orthodontist"
            fill
            className="object-cover object-top"
          />
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Visiting Specialist
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-1">Visiting Orthodontist</h3>
          <p className="text-sky-600 text-sm font-semibold mb-2">Braces & Aligners Specialist</p>
          <p className="text-gray-500 text-xs mb-3">BDS, MDS – Orthodontics</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Expert in traditional braces, clear aligners, and jaw correction treatments. Available on scheduled days for consultations and follow-ups.
          </p>
        </div>
      </div>

      {/* Clinical Staff */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="relative h-72 bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center">
          <Image
            src="/images/staff/clinical-staff.jpeg"
            alt="Clinical Staff"
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Clinical Team
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-1">Clinical Support Staff</h3>
          <p className="text-sky-600 text-sm font-semibold mb-2">Dental Assistants & Hygienists</p>
          <p className="text-gray-500 text-xs mb-3">Trained & Certified Professionals</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our skilled assistants ensure smooth procedures, maintain sterilization protocols, and provide chairside support for all treatments.
          </p>
        </div>
      </div>

      {/* Front Desk */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="relative h-72 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
          <Image
            src="/images/staff/reception.jpeg"
            alt="Front Desk Staff"
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Front Desk
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-1">Reception Team</h3>
          <p className="text-sky-600 text-sm font-semibold mb-2">Patient Coordinators</p>
          <p className="text-gray-500 text-xs mb-3">Customer Service Trained</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our friendly reception team handles appointments, insurance queries, and ensures you feel welcomed from the moment you walk in.
          </p>
        </div>
      </div>

      {/* Visiting Pediatric Dentist */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="relative h-72 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
          <Image
            src="/images/staff/pediatric.jpeg"
            alt="Pediatric Dentist"
            fill
            className="object-cover object-top"
          />
          <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Visiting Specialist
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-1">Visiting Pediatric Dentist</h3>
          <p className="text-sky-600 text-sm font-semibold mb-2">Children&apos;s Dental Specialist</p>
          <p className="text-gray-500 text-xs mb-3">BDS, MDS – Pedodontics</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Specialized in treating children with gentle care, making dental visits fun and fear-free for your little ones.
          </p>
        </div>
      </div>

      {/* Sterilization Staff */}
      <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="relative h-72 bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
          <Image
            src="/images/staff/sterilization.jpeg"
            alt="Sterilization Staff"
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Hygiene Team
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-1">Sterilization Team</h3>
          <p className="text-sky-600 text-sm font-semibold mb-2">Infection Control Specialists</p>
          <p className="text-gray-500 text-xs mb-3">Certified in Sterilization Protocols</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ensuring the highest standards of hygiene and sterilization for all instruments and equipment used in treatments.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* OUR FACILITIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-4">
            <span className="text-pink-500">Our State-of-the-Art</span>{' '}
            <span className="text-sky-500">Facilities</span>
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
            Step inside our modern, welcoming clinic designed for your comfort and equipped with cutting-edge dental technology.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main large image */}
            <div className="md:col-span-2 md:row-span-2">
              <img 
                src="/images/gallery/clinic-1.png" 
                alt="Modern Treatment Room" 
                className="w-full h-full min-h-[300px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              />
            </div>
            
            {/* Side images */}
            <div>
              <img 
                src="/images/gallery/clinic-2.png" 
                alt="Pediatric Dental Room" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              />
            </div>
            <div>
              <img 
                src="/images/gallery/clinic-3.png" 
                alt="Treatment Chair" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              />
            </div>
            
            {/* Bottom images */}
            <div>
              <img 
                src="/images/gallery/clinic-4.png" 
                alt="Reception & Certificates" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              />
            </div>
            <div>
              <img 
                src="/images/gallery/clinic-5.png" 
                alt="Advanced X-Ray Machine" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              />
            </div>
            <div className="bg-sky-500 rounded-2xl p-6 flex flex-col justify-center items-center text-white shadow-lg">
              <span className="text-4xl font-bold">10+</span>
              <span className="text-sm mt-2">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
