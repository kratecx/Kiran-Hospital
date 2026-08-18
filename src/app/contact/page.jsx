"use client";

import { useState } from "react";
import Image from "next/image";

export default function AdmissionContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    courseAdmission: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const courses = [
    "Hospital Administration & Management",
    "Advanced Medical Imaging & Technology",
    "Nursing & Patient Care",
    "Clinical Laboratory Science",
    "General Academics & Foundation",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contactforms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e2e3dd] text-[#1c1c1c] font-sans flex flex-col justify-center items-center p-4 sm:p-6 lg:p-12 selection:bg-[#2563eb] selection:text-white">
      
      {/* Main Split Container */}
      <div className="w-full max-w-6xl bg-[#F7F5F0] border border-[#d6d3cb] rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column: Centered Logo & Bottom Social Links */}
        <div className="relative p-8 sm:p-12 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r border-[#d6d3cb] bg-[#E8E4DA] overflow-hidden">
          
          {/* Background Atmosphere Image */}
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
              alt="Academic Campus Background"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#E8E4DA] via-[#E8E4DA]/80 to-transparent z-0" />

          {/* Spacer to balance vertical layout */}
          <div className="relative z-10" />

          {/* Centered Bigger Logo from public/logo.png */}
          <div className="relative z-10 my-auto flex flex-col items-center">
            <div className="relative w-48 h-48 sm:w-90 sm:h-90">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Social Links with Inline SVGs */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <p className="text-[10px] font-extrabold text-[#777777] uppercase tracking-widest mb-3">
              Official Channels
            </p>
            <div className="flex items-center gap-3">
              
              {/* WhatsApp */}
              <a 
                href="https://whatsapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.711V8z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Right Column: Contact / Inquiry Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center bg-[#F7F5F0]">
          
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1c1c1c] mb-1">
              Contact <span className="text-blue-600">Form</span>
            </h2>
            <p className="text-xs text-[#555555] font-medium">
              Fill out the details below to submit your inquiry or registration.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#EFECE6] border border-[#2563eb]/40 rounded-2xl p-8 text-center space-y-4 shadow-sm">
              <div className="w-14 h-14 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <svg className="w-8 h-8 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-[#1c1c1c]">Form Submitted!</h3>
              <p className="text-[#555555] text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-medium">
                Thank you, <strong className="text-[#1c1c1c]">{formData.name}</strong>. Your inquiry for <strong className="text-[#1c1c1c]">{formData.courseAdmission}</strong> has been logged successfully to <code className="bg-black/5 px-1.5 py-0.5 rounded text-xs">contactforms</code>. We will reach out via email shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", fatherName: "", email: "", courseAdmission: "" });
                }}
                className="mt-4 px-6 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Name <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                />
              </div>

              {/* Father Name */}
              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Father Name <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  required
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Enter father's name"
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Email Address <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                />
              </div>

              {/* Course Admission Selection */}
              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Course Admission <span className="text-[#2563eb]">*</span>
                </label>
                <div className="relative">
                  <select
                    name="courseAdmission"
                    required
                    value={formData.courseAdmission}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] appearance-none focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#EFECE6] text-[#888888]">Select course program...</option>
                    {courses.map((course, idx) => (
                      <option key={idx} value={course} className="bg-[#EFECE6] text-[#1c1c1c]">{course}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#666666] text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full py-4 px-6 bg-transparent border border-[#b8b4ab] hover:border-[#2563eb] rounded-xl flex items-center justify-between text-[#1c1c1c] hover:text-[#2563eb] transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  <span className="font-extrabold text-xs uppercase tracking-widest">
                    {loading ? "Submitting Inquiry..." : "Submit Inquiry"}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#2563eb] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-sm">
                    <svg className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}