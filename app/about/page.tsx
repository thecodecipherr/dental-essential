import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="w-full h-[75vh] relative">
        <Image
          src="/hero.jpg"
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
{/* WHY CHOOSE US */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-center text-pink-500 text-3xl font-bold mb-4">
      Why Choose Us
    </h2>

    <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
      We combine advanced dental technology with compassionate care to
      give you a comfortable, stress-free, and confident smile experience.
    </p>

    <div className="grid md:grid-cols-4 gap-8 text-center">

      {/* Card 1 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-blue-500 text-4xl mb-4">🦷</div>
        <h3 className="font-semibold text-lg mb-2">Expert Dentists</h3>
        <p className="text-gray-600 text-sm">
          Highly skilled and experienced dental professionals you can trust.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-blue-500 text-4xl mb-4">💙</div>
        <h3 className="font-semibold text-lg mb-2">Gentle Care</h3>
        <p className="text-gray-600 text-sm">
          We focus on pain-free treatments and patient comfort at every step.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-blue-500 text-4xl mb-4">⚙️</div>
        <h3 className="font-semibold text-lg mb-2">Latest Technology</h3>
        <p className="text-gray-600 text-sm">
          Modern equipment ensures accurate diagnosis and effective treatment.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="text-blue-500 text-4xl mb-4">😊</div>
        <h3 className="font-semibold text-lg mb-2">Patient Satisfaction</h3>
        <p className="text-gray-600 text-sm">
          Your smile, comfort, and confidence are our top priorities.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-center text-pink-500 text-3xl font-bold mb-2">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Book an Appointment to treat your teeth right now
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">

          {/* MAP */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/map.png"
              alt="Clinic Location"
              width={600}
              height={400}
              className="w-full"
            />
            <div className="p-4 text-gray-600 text-sm">
              📍 Shop no. 16, Building No. 7/B, Gurusharnam Complex,
              Vishrali Naka, Old Panvel – 410206
            </div>
          </div>

          {/* FORM */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="p-2 rounded border" placeholder="First name" />
                <input className="p-2 rounded border" placeholder="Last name" />
              </div>

              <input className="w-full p-2 rounded border" placeholder="Email" />
              <input className="w-full p-2 rounded border" placeholder="Phone" />

              <textarea
                className="w-full p-2 rounded border"
                placeholder="Message"
                rows={4}
              />

              <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                Book an Appointment
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
