'use client';

import { useState } from 'react';

const reviews = [
  {
    name: "Saltanat",
    initial: "S",
    date: "2 years ago · Verified",
    review:
      "Receptionist behaviour was very polite. Doctor attended very carefully. Very good service. Thank you Dr. Sameer."
  },
  {
    name: "Vaishnavi Juvekar",
    initial: "V",
    date: "3 years ago · Verified",
    review:
      "Dr. Sameer identified my gum infection and suggested laser treatment, RCT and crowns to cure it. He is very knowledgeable, experienced, genuine, and truly an artist of dentistry. The composite filling was done amazingly. He is empathetic, caring, explains procedures clearly, and gives proper instructions. The staff is friendly and cooperative, and the clinic is spacious with state-of-the-art equipment. Overall, a very good experience."
  },
  {
    name: "Indira Menon",
    initial: "I",
    date: "3 years ago · Verified",
    review:
      "I went for tooth extraction, but Dr. Sameer advised root canal treatment and crown lengthening, saving my natural teeth. The clinic is very advanced, neat, and clean with all modern amenities. I also got partial dentures made on time. The entire treatment was painless and smooth. Very happy with my experience and would highly recommend Dr. Sameer."
  },
  {
    name: "Shreeja Menon",
    initial: "S",
    date: "3 years ago · Verified",
    review:
      "Visited Dr. Sameer for dental implant consultation. He explained the entire process in detail. I was scared initially, but the procedure was smooth and painless. The clinic also has in-house X-ray facilities, and the staff is friendly and helpful. I would definitely recommend Dr. Sameer to friends and family."
  },
  
  {
    name: "Niharika K",
    initial: "N",
    date: "4 years ago · Verified",
    review:
      "Can be recommended without any doubt. Painless treatment and excellent care for patients."
  }
];
export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 2;
  const maxIndex = Math.ceil(reviews.length / cardsToShow) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleReviews = reviews.slice(
    currentIndex * cardsToShow,
    currentIndex * cardsToShow + cardsToShow
  );

  return (
    <section className="py-16 bg-amber-50/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Happy Patient Saying..
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {visibleReviews.map((review, index) => (
            <div
              key={currentIndex * cardsToShow + index}
              className="bg-amber-50 rounded-2xl p-6 shadow-sm"
            >
              {/* Header with avatar, name, and Google logo */}
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-700 text-base">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                    <div className="text-yellow-500 text-sm mt-0.5">★★★★★</div>
                  </div>
                </div>
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-amber-500 hover:bg-amber-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-lg border-2 border-amber-500 bg-white flex items-center justify-center hover:bg-amber-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Review us button */}
        <div className="text-center mt-8">
          <a
            href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-medium transition shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Review us on Google
          </a>
        </div>

        <div className="text-center mt-6">
  <a
    href="https://www.practo.com/navi-mumbai/doctor/dr-sameer-gharat-dentist-1/recommended"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-[#13A6A1] hover:bg-[#0e8f8b] text-white px-6 py-3 rounded-full font-medium transition shadow-md"
  >
    <img
      src="https://www.practo.com/providers/static/images/practo-logo.svg"
      alt="Practo"
      className="w-5 h-5"
    />
    View all verified reviews on Practo
  </a>

  <p className="text-sm text-gray-500 mt-3">
    ★ Reviews shown are selected patient experiences.  
    View all verified reviews on Practo for complete transparency.
  </p>
</div>
      </div>
    </section>
  );
}
