"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Link, Share2, Code2, ArrowRight } from "lucide-react";

export default function AdmissionFormsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    phone: "",
    cnic: "",
    dob: "",
    gender: "Male",
    course: "General Nursing",
    address: "",
    qualification: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/admissionforms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit application.");
      }

      setSuccessMessage("Application submitted successfully! Your PDF download will start automatically.");
      
      setTimeout(() => {
        window.print();
      }, 1000);

    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e2e3dd] text-[#1c1c1c] font-sans flex flex-col justify-center items-center p-4 sm:p-6 lg:p-12 selection:bg-[#2563eb] selection:text-white">
      
      {/* Main Single-Column Container */}
      <div className="w-full max-w-3xl bg-[#F7F5F0] border border-[#d6d3cb] rounded-3xl overflow-hidden shadow-xl flex flex-col">
        
        {/* Top Header / Branding Section */}
        <div className="relative p-8 sm:p-12 flex flex-col items-center justify-center border-b border-[#d6d3cb] bg-[#E8E4DA] overflow-hidden text-center">
          
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

          {/* Logo */}
          <div className="relative z-10 my-4 flex flex-col items-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Portal Title & Info */}
          <div className="relative z-10 mt-2">
            <span className="inline-block py-1 px-3 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-[10px] font-black tracking-widest uppercase mb-3 border border-[#2563eb]/20">
              Official Admissions 2026
            </span>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1c1c1c]">
              KCON Admission <span className="text-blue-600">Portal</span>
            </h1>
            <p className="text-xs text-[#555555] font-medium mt-1 max-w-md mx-auto">
              Complete the credentials form below to officially apply for your desired nursing and health program.
            </p>
          </div>

          {/* Social Channels */}
          <div className="relative z-10 w-full flex flex-col items-center mt-6 pt-6 border-t border-[#d6d3cb]/60">
            <p className="text-[10px] font-extrabold text-[#777777] uppercase tracking-widest mb-3">
              Official Channels
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://whatsapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <Link className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Social Feed"
                className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Source Code"
                className="w-10 h-10 rounded-xl bg-[#F7F5F0] border border-[#d6d3cb] flex items-center justify-center text-[#444444] hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all shadow-sm"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Form Section */}
        <div className="p-8 sm:p-12 flex flex-col bg-[#F7F5F0]">
          
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#1c1c1c] mb-1">
              Application <span className="text-blue-600">Form</span>
            </h2>
            <p className="text-xs text-[#555555] font-medium">
              Fill out all required credentials accurately.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {successMessage && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold shadow-sm">
                ✨ {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl text-xs font-bold shadow-sm">
                ⚠️ {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Full Name <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                  placeholder="e.g. Muhammad Ali"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Father's Name <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  required
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                  placeholder="e.g. Ahmed Ali"
                />
              </div>

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
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Phone Number <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                  placeholder="03XXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  CNIC / B-Form <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  type="text"
                  name="cnic"
                  required
                  value={formData.cnic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                  placeholder="XXXXX-XXXXXXX-X"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Date of Birth <span className="text-[#2563eb]">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium cursor-pointer"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                  Select Program / Course <span className="text-[#2563eb]">*</span>
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-semibold cursor-pointer"
                >
                  <option value="General Nursing">General Nursing</option>
                  <option value="BSN (Post RN)">BSN (Post RN)</option>
                  <option value="Certified Nursing Assistant">Certified Nursing Assistant</option>
                  <option value="Lady Health Visitor">Lady Health Visitor</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                Last Academic Qualification <span className="text-[#2563eb]">*</span>
              </label>
              <input
                type="text"
                name="qualification"
                required
                value={formData.qualification}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium"
                placeholder="e.g. FSc Pre-Medical / Matric (Minimum 50% Marks)"
              />
            </div>

            <div>
              <label className="block text-[10px] font-extrabold text-[#555555] uppercase tracking-widest mb-1.5">
                Residential Address <span className="text-[#2563eb]">*</span>
              </label>
              <textarea
                name="address"
                rows={3}
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#EFECE6] border border-[#d6d3cb] rounded-xl text-[#1c1c1c] placeholder-[#888888] focus:outline-none focus:border-[#2563eb] transition-all text-xs font-medium resize-none"
                placeholder="Enter your complete residential address, city, and province"
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="group w-full py-4 px-6 bg-transparent border border-[#b8b4ab] hover:border-[#2563eb] rounded-xl flex items-center justify-between text-[#1c1c1c] hover:text-[#2563eb] transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                <span className="font-extrabold text-xs uppercase tracking-widest">
                  {loading ? "Processing Application..." : "Submit Application & Download PDF Receipt 📄"}
                </span>
                <div className="w-9 h-9 rounded-lg bg-[#2563eb] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-sm">
                  <ArrowRight className="w-4 h-4 font-bold" />
                </div>
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}