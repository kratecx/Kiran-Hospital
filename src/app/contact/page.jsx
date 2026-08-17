"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Link, Share2, Code2, ArrowRight, CheckCircle2 } from "lucide-react";

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
      const response = await fetch("/api/admissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
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

          {/* Bottom Social Links */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <p className="text-[10px] font-extrabold text-[#777777] uppercase tracking-widest mb-3">
              Official Channels
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://whatsapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <Link className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Social Feed"
                className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Source Code"
                className="w-11 h-11 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Admission Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center bg-[#F7F5F0]">
          
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1c1c1c] mb-1">
              Course <span className="text-blue-600">Admission</span>
            </h2>
            <p className="text-xs text-[#555555] font-medium">
              Fill out the details below to submit your official application.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#EFECE6] border border-[#2563eb]/40 rounded-2xl p-8 text-center space-y-4 shadow-sm">
              <div className="w-14 h-14 bg-[#2563eb] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 font-black" />
              </div>
              <h3 className="text-xl font-extrabold text-[#1c1c1c]">Application Submitted!</h3>
              <p className="text-[#555555] text-xs sm:text-sm leading-relaxed max-w-sm mx-auto font-medium">
                Thank you, <strong className="text-[#1c1c1c]">{formData.name}</strong>. Your registration for <strong className="text-[#1c1c1c]">{formData.courseAdmission}</strong> has been logged successfully. We will reach out via email shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", fatherName: "", email: "", courseAdmission: "" });
                }}
                className="mt-4 px-6 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Full Name <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
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
                    {loading ? "Processing Application..." : "Submit Application"}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#2563eb] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-sm">
                    <ArrowRight className="w-4 h-4 font-bold" />
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