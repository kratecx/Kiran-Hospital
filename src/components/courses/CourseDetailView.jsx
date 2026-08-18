"use client";

import Image from "next/image";
import Link from "next/link";

export default function CourseDetailView({ course }) {
  const bgImage = course?.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop";
  const whatsappUrl = "https://wa.me/923339433632?text=" + encodeURIComponent(`Hello, I would like to inquire about the program: ${course?.title || "Course"}`);

  return (
    <section className="relative min-h-screen bg-[#e2e3dd] text-slate-800 pb-28 overflow-hidden font-sans">
      
      {/* Immersive Hero Header */}
      <div className="relative h-[300px] w-full bg-slate-900 overflow-hidden">
        <Image
          src={bgImage}
          alt={course.title || "Course Details"}
          fill
          unoptimized
          priority
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50 scale-105"
        />
        {/* Gradient overlay to ensure text contrast and aesthetic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#e2e3dd] via-slate-950/60 to-slate-950/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-14">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[11px] font-bold text-white uppercase tracking-wider bg-red-600/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-xs border border-red-500/30">
              {course.category}
            </span>
            <span className="text-[11px] font-semibold text-slate-900 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-xs">
              {course.duration}
            </span>
            <span className="text-[11px] font-semibold text-slate-200 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              {course.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md max-w-5xl leading-tight">
            {course.title}
          </h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        
        {/* 3-Grid Detail Cards Section with Premium Overhaul */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Program Overview */}
          <div className="group relative bg-gradient-to-br from-white/95 via-white/80 to-slate-100/90 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/15 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-red-500/[0.02] to-transparent pointer-events-none" />
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/20 text-red-600 flex items-center justify-center font-bold shadow-inner border border-red-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Program Overview
                </h3>
              </div>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {course.description}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-red-600 uppercase tracking-wider">
              <span>Comprehensive Study</span>
              <span>• Core Focus</span>
            </div>
          </div>

          {/* Card 2: Eligibility Criteria */}
          <div className="group relative bg-gradient-to-br from-white/95 via-white/80 to-slate-100/90 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/15 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-red-500/[0.02] to-transparent pointer-events-none" />
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/20 text-red-600 flex items-center justify-center font-bold shadow-inner border border-red-500/10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Eligibility Criteria
                </h3>
              </div>
              <div className="p-4 bg-gradient-to-r from-red-50/60 to-slate-50/60 rounded-2xl border border-red-100/80 shadow-xs">
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  {course.eligibility || "Open to all qualified professionals and practitioners seeking advanced credentials."}
                </p>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
              <span>Prerequisites</span>
              <span>• Verified</span>
            </div>
          </div>

          {/* Card 3: Quick Summary & Action Card */}
          <div className="group relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white backdrop-blur-2xl border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl shadow-slate-950/20 transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr via-transparent to-transparent pointer-events-none" />
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-red-400 flex items-center justify-center font-bold border border-white/10 shadow-inner">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  Program Summary
                </h3>
              </div>

              <div className="space-y-3.5 text-sm my-4">
                <div className="flex justify-between items-center py-2.5 border-b border-white/10">
                  <span className="text-slate-400 font-medium">Duration</span>
                  <span className="font-bold text-white">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/10">
                  <span className="text-slate-400 font-medium">Category</span>
                  <span className="font-bold text-white truncate max-w-[140px]">{course.category}</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-slate-400 font-medium">Credential</span>
                  <span className="font-bold text-red-400">{course.badge}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <Link 
                href="/contact"
                className="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-2xl shadow-lg shadow-red-600/30 transition-all duration-300 text-center block tracking-wide text-sm transform active:scale-[0.98]"
              >
                Apply For Program
              </Link>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/30 transition-all duration-300 text-center flex items-center justify-center gap-2 tracking-wide text-sm transform active:scale-[0.98]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Extended Curriculum Section */}
        {course.curriculum && (
          <div className="bg-gradient-to-br from-white/95 via-white/80 to-slate-100/90 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-slate-900/5">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/20 text-red-600 flex items-center justify-center font-bold shadow-inner border border-red-500/10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Core Curriculum & Modules
                </h3>
                <p className="text-slate-500 text-sm font-medium">Structured learning path designed for mastery.</p>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.curriculum.map((item, idx) => (
                <li key={idx} className="bg-white/90 p-5 rounded-2xl border border-slate-200/80 text-sm font-semibold text-slate-700 flex items-start gap-3.5 transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:bg-white">
                  <span className="flex-shrink-0 w-7 h-7 rounded-xl bg-red-100/80 text-red-600 flex items-center justify-center text-xs font-extrabold mt-0.5 shadow-inner">
                    0{idx + 1}
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-slate-200/60 flex flex-wrap justify-between items-center gap-4">
              <Link 
                href="/courses"
                className="py-3 px-6 bg-slate-200/70 hover:bg-slate-200 text-slate-700 font-semibold rounded-2xl transition-all text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Courses
              </Link>

              <div className="flex items-center gap-3">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm tracking-wide shadow-lg gap-2 transition-all duration-200"
                >
                  WhatsApp Chat
                </a>

                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-lg gap-2 transition-all duration-200"
                >
                  Enroll Now 
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}