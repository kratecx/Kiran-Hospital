"use client";

import { useState } from "react";
import Link from "next/link";

export default function FeaturedCourses() {
  const courses = [
    {
      slug: "post-rn-bsn",
      title: "Post RN BSN",
      category: "Nursing Degree",
      duration: "2 Years",
      level: "BSN Program",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      price: "$499"
    },
    {
      slug: "msn",
      title: "MSN (Master of Science in Nursing)",
      category: "Master of Science in Nursing",
      duration: "2 Years",
      level: "Master's Program",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
      price: "$349"
    },
    {
      slug: "bsn-generic",
      title: "BSN Generic (4 Years)",
      category: "Undergraduate Degree",
      duration: "4 Years",
      level: "Degree Program",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
      price: "$420"
    },
    {
      slug: "certified-surgical-technologist",
      title: "Certified Surgical Technologist",
      category: "Allied Health",
      duration: "1 Year",
      level: "Diploma",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
      price: "$299"
    },
    {
      slug: "critical-care-nursing-diploma",
      title: "Critical Care Nursing",
      category: "Specialized Diploma",
      duration: "1 Year",
      level: "Specialization",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop",
      price: "$550"
    },
    {
      slug: "hospital-administration-management",
      title: "Healthcare Administration",
      category: "Management",
      duration: "6 Months",
      level: "Certificate",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      price: "$399"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive visible count: 1 card on mobile, 2 cards on medium screens and up
  const getVisibleCount = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return 1;
    }
    return 2;
  };

  // We can track index safely; maxIndex depends on view width layout logic or use CSS scroll-snap for mobile robustness
  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    const visibleCount = window.innerWidth < 768 ? 1 : 2;
    const maxIdx = courses.length - visibleCount;
    setCurrentIndex((prev) => Math.min(maxIdx, prev + 1));
  };

  return (
    <section className="relative py-28 bg-[#e2e3dd] overflow-hidden">
      
      {/* Centered Top Header & Intro Area with Integrated Big Red CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
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
          <Link
            href="/courses"
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-base tracking-wide shadow-xl hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            See all courses
            <svg className="w-5 h-5 ml-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Content Showcase Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative flex items-center">
          
          {/* Left Arrow Button */}
          {currentIndex > 0 && (
            <button 
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute -left-2 sm:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-300 text-slate-800 flex items-center justify-center shadow-xl hover:bg-slate-100 hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow Button */}
          {currentIndex < courses.length - (typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 2) && (
            <button 
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute -right-2 sm:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-300 text-slate-800 flex items-center justify-center shadow-xl hover:bg-slate-100 hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Smooth Sliding Viewport Wrapper with native mobile touch/scroll support */}
          <div className="w-full overflow-x-auto md:overflow-hidden scrollbar-none scroll-smooth">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2))}%)` }}
            >
              {courses.map((item) => (
                <div 
                  key={item.slug}
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
                      <Link 
                        href={`/courses/${item.slug}`}
                        className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-lg gap-2 transition-all duration-200"
                      >
                        Enroll Now 
                        <span>&rarr;</span>
                      </Link>
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