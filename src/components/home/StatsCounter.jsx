"use client";

import { useEffect, useState, useRef } from "react";

export default function StatsCounter() {
  const stats = [
    { numericValue: 99.8, suffix: "%", label: "Patient Satisfaction", decimals: 1 },
    { numericValue: 24, suffix: "/7", label: "Emergency Care", decimals: 0 },
    { numericValue: 50, suffix: "K+", label: "Successful Treatments", decimals: 0 },
    { numericValue: 15, suffix: "+", label: "Years of Excellence", decimals: 0 }
  ];

  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="relative pt-28 bg-[#e2e3dd] overflow-hidden">
      
      {/* Top Header & Intro Area (Out of the bluish background) */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          Our Impact in Numbers
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Trusted By <span className="text-blue-600">Our Community</span>
        </h2>
        
        <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Real feedback from patients and students who experienced our medical care and educational excellence firsthand.
        </p>
      </div>

      {/* Bluish Section Containing Stats Grid & CTA */}
      <div className="relative bg-blue-600/90 text-white py-24 overflow-hidden border-t border-b border-blue-900/50">
        {/* Background Image with Dark Blue Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop')` }}
        ></div>

        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-900/60 to-blue-950/80 backdrop-blur-md border border-blue-500/30 rounded-2xl p-7 text-center shadow-xl hover:border-blue-400/50 hover:bg-blue-900/70 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 font-mono drop-shadow-sm">
                  <CounterItem 
                    target={stat.numericValue} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                    start={hasStarted} 
                  />
                </div>
                <div className="text-blue-200/80 text-xs font-semibold tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Centered CTA Button */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-red-600 text-white font-semibold text-sm tracking-wide shadow-lg hover:bg-red-700 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Book an Appointment
              <svg className="w-4 h-4 ml-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}

function CounterItem({ target, suffix, decimals, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 2000; // Animation duration in milliseconds (2 seconds)

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out expo formula for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easeProgress * target;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [start, target]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}