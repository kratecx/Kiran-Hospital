"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-blue-600 backdrop-blur-md border-b border-blue-900/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo / Image and Name on Left */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-3 text-white font-bold text-xl tracking-tight group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full shadow-[0_0_12px_rgba(220,38,38,0.4)] transition-transform group-hover:scale-105 bg-white flex items-center justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Kiran General Hospital Logo" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex">
                <span className="font-extrabold tracking-tight text-lg leading-tight">KCON </span> 
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links on Right */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className="px-3.5 py-2 rounded-lg text-slate-100 hover:text-white hover:bg-white/10 font-medium text-md transition-all duration-200">
              Home
            </a>
            <a href="/about" className="px-3.5 py-2 rounded-lg text-slate-100 hover:text-white hover:bg-white/10 font-medium text-md transition-all duration-200">
              About
            </a>
            <a href="/courses" className="px-3.5 py-2 rounded-lg text-slate-100 hover:text-white hover:bg-white/10 font-medium text-md transition-all duration-200">
              Courses
            </a>
            <a href="/gallery" className="px-3.5 py-2 rounded-lg text-slate-100 hover:text-white hover:bg-white/10 font-medium text-md transition-all duration-200">
              Gallery
            </a>
            <a href="/contact" className="ml-2 px-8 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-md shadow-md shadow-red-900/20 transition-all duration-200">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2.5 rounded-xl text-slate-100 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A192F] border-t border-blue-900/40 px-4 pt-4 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <a 
            href="/" 
            className="block px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
          >
            Home
          </a>
          <a 
            href="/about" 
            className="block px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
          >
            About
          </a>
          <a 
            href="/courses" 
            className="block px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
          >
            Courses
          </a>
          <a 
            href="/gallery" 
            className="block px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
          >
            Gallery
          </a>
          <div className="pt-2">
            <a 
              href="/contact" 
              className="block text-center px-4 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium shadow-md transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}