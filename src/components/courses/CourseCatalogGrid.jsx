"use client";

import Image from "next/image";
import Link from "next/link";
import { coursesData } from "@/data/coursesData";

export default function CourseCatalogGrid() {
  return (
    <section className="relative py-16 bg-[#e2e3dd] text-slate-700 overflow-hidden">
      
      {/* Background Image with warm/neutral styling */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
          alt="Courses Background"
          fill
          unoptimized
          className="object-cover object-center opacity-15 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-[#e2e3dd]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-300/70 mb-5 shadow-sm backdrop-blur-md">
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest">
              Professional Academic Programs
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Nursing & <span className="text-blue-600">Medical Courses</span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 font-light leading-relaxed">
            Empowering the next generation of healthcare professionals with specialized nursing degrees and rigorous clinical training.
          </p>
        </div>

        {/* Full Immersive Image Cards Grid (Grid of 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div 
              key={course.slug} 
              className="group relative flex flex-col justify-end h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/40 bg-slate-900"
            >
              {/* Full Card Background Image */}
              <Image
                src={course.image || `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop`}
                alt={course.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Immersive Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Floating Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-blue-600/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-blue-500/30">
                  {course.category}
                </span>
                <span className="text-[10px] font-bold text-slate-100 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-700/50">
                  {course.duration}
                </span>
              </div>

              {/* Content Overlayed on Image */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                  {course.badge}
                </span>

                <h3 className="text-2xl font-extrabold text-white leading-tight mb-2 drop-shadow-sm">
                  {course.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">
                    Accredited Program
                  </span>
                  
                  <Link 
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-md shadow-blue-900/50 group-hover:translate-x-1"
                  >
                    View Course
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}