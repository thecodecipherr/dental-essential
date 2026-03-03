'use client';

import { useState } from 'react';

const reviews = [
  { 
    name: "Priya Sharma", 
    initial: "P", 
    date: "2 months Ago", 
    review: "Dr. Sameer and his team provided exceptional care during my root canal treatment. The procedure was painless and the follow-up care was outstanding. I believe this is one of the best dental clinics in Panvel for all dental treatments." 
  },
  { 
    name: "Rajesh Patel", 
    initial: "R", 
    date: "3 months Ago", 
    review: "My dental implant procedure was seamless. The clinic's modern equipment and Dr. Sameer's expertise gave me complete confidence. I can finally chew well and enjoy all my favorite foods...thanks to the team of the best dentist in Panvel." 
  },
  { 
    name: "Anjali Desai", 
    initial: "A", 
    date: "1 month Ago", 
    review: "My kids actually look forward to their dental visits now! The pediatric care here is wonderful. The staff is so patient and gentle with children. Highly recommend for families!" 
  },
  { 
    name: "Arjun Mehta", 
    initial: "A", 
    date: "2 months Ago", 
    review: "Got my braces done here and the transformation has been amazing. The team monitors progress regularly and the results exceeded my expectations! Professional service." 
  },
  { 
    name: "Sneha Kulkarni", 
    initial: "S", 
    date: "4 months Ago", 
    review: "The smile designing treatment completely changed my confidence. Professional, caring staff and state-of-the-art facilities. Best dental clinic in Panvel without a doubt!" 
  },
  { 
    name: "Vikram Singh", 
    initial: "V", 
    date: "1 month Ago", 
    review: "Excellent experience with clear aligners treatment. Dr. Sameer explained the entire process clearly and the results are amazing. Highly recommended for anyone looking for quality dental care!" 
  },
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
      </div>
    </section>
  );
}
