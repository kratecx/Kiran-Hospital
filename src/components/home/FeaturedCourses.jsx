"use client";

import { useState } from "react";

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Advanced Clinical Cardiology & Patient Care",
      category: "Medical",
      duration: "12 Weeks",
      level: "Advanced",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      price: "$499"
    },
    {
      id: 2,
      title: "Modern Nursing Practices & Emergency Response",
      category: "Healthcare",
      duration: "8 Weeks",
      level: "Intermediate",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
      price: "$349"
    },
    {
      id: 3,
      title: "Healthcare Administration & Hospital Management",
      category: "Management",
      duration: "10 Weeks",
      level: "All Levels",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200&auto=format&fit=crop",
      price: "$420"
    },
    {
      id: 4,
      title: "Pharmacology Essentials for Medical Professionals",
      category: "Pharmacy",
      duration: "6 Weeks",
      level: "Intermediate",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
      price: "$299"
    },
    {
      id: 5,
      title: "Physical Therapy & Rehabilitation Specialist",
      category: "Therapy",
      duration: "14 Weeks",
      level: "Advanced",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
      price: "$550"
    },
    {
      id: 6,
      title: "Global Public Health & Epidemiology Foundations",
      category: "Public Health",
      duration: "10 Weeks",
      level: "Intermediate",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200&auto=format&fit=crop",
      price: "$399"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of cards visible at a time
  const visibleCount = 2;
  const maxIndex = courses.length - visibleCount;

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - visibleCount));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + visibleCount));
  };

  return (
    <section className="relative py-28 bg-[#e2e3dd] overflow-hidden">
      
      {/* Centered Top Header & Intro Area with Integrated Big Red CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          Trending Courses
        </div>
        
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto mb-4">
          Featured <span className="text-blue-600">Medical</span> <br />
          <span className="text-blue-600">Courses</span>
        </h2>
        
        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-8">
          Explore top-tier medical and healthcare learning programs designed for professionals.
        </p>

        {/* Big Red "See all courses" CTA */}
        <div className="flex justify-center">
          <a
            href="/courses"
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-base tracking-wide shadow-xl hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            See all courses
            <svg className="w-5 h-5 ml-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content Showcase Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative flex items-center">
          
          {/* Left Arrow Button (Hidden when at the first slide) */}
          {currentIndex > 0 && (
            <button 
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute -left-4 sm:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-300 text-slate-800 flex items-center justify-center shadow-xl hover:bg-slate-100 hover:scale-105 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow Button (Hidden when at the last group of courses) */}
          {currentIndex < maxIndex && (
            <button 
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute -right-4 sm:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-300 text-slate-800 flex items-center justify-center shadow-xl hover:bg-slate-100 hover:scale-105 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Smooth Sliding Viewport Wrapper (2 cards viewable per screen) */}
          <div className="w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {courses.map((item) => (
                <div 
                  key={item.id}
                  className="min-w-[100%] md:min-w-[calc(50%-12px)] relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl group border border-slate-300 flex flex-col justify-end flex-shrink-0"
                >
                  
                  {/* Background Image */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Base Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                    <span className="bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider shadow-md">
                      {item.category}
                    </span>
                    <span className="bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-bold text-white shadow-md font-mono">
                      {item.price}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative p-6 sm:p-8 flex flex-col justify-end z-10">
                    
                    {/* Meta Details */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-300 mb-3 pb-3 border-t border-white/20">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        ★ {item.rating}
                      </span>
                      <span className="text-slate-200 bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">
                        {item.level}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-6">
                      {item.title}
                    </h3>

                    {/* Enroll CTA */}
                    <div>
                      <a 
                        href={`/courses/${item.id}`}
                        className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-lg gap-2 transition-all duration-200"
                      >
                        Enroll Now 
                        <span>&rarr;</span>
                      </a>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}