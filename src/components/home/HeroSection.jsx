import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-slate-900 overflow-hidden py-32 lg:pb-44 border-b border-slate-200">
      
      {/* Background Hospital Environment Image with a balanced overlay for sharp image clarity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[0.5px] z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
          alt="Modern Hospital Facility & Institute Environment"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/95 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wider uppercase shadow-sm mb-6 backdrop-blur-sm">
          {/* <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> */}
          Kiran College of Nursing & Allied Health Sciences
        </div>

        {/* Strong Centered Tagline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6 drop-shadow-sm">
          Dedicated to <span className="text-blue-600">Compassionate Care</span> & World-Class Medical Education
        </h1>

        {/* Supporting Description */}
        <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-sm">
          Providing 24/7 advanced healthcare services alongside accredited professional programs including BSN, LHV, Ultrasound, Pharmacy, and MLT.
        </p>

        {/* Premium & Highly Visible CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          
          {/* Call Now Button (Accent Red with strong shadow & pulse effect) */}
          <a
            href="tel:+1234567890"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-all shadow-xl shadow-red-600/30 text-base hover:-translate-y-0.5 border border-red-500"
          >
            <span className="text-lg">📞</span> Call Now for Emergency & Admissions
          </a>

          {/* Premium Course CTA Button (Deep Medical Blue with gradient glow & arrow interaction) */}
          <Link
            href="/courses"
            className="w-full sm:w-auto group inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold transition-all shadow-xl shadow-blue-600/30 text-base hover:-translate-y-0.5 border border-blue-500"
          >
            <span>Explore Professional Courses</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          
        </div>

        {/* Quick Trust Strip */}
        <div className="mt-16 pt-8 border-t border-slate-300/90 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-left sm:text-center backdrop-blur-sm bg-white/30 p-4 rounded-2xl shadow-sm">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-slate-900">24/7 Active</p>
            <p className="text-xs text-slate-700 font-semibold uppercase tracking-wider mt-0.5">Emergency Services</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-slate-900">Recognized</p>
            <p className="text-xs text-slate-700 font-semibold uppercase tracking-wider mt-0.5">Medical Curriculum</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xl sm:text-2xl font-bold text-slate-900">Expert Care</p>
            <p className="text-xs text-slate-700 font-semibold uppercase tracking-wider mt-0.5">Qualified Staff</p>
          </div>
        </div>

      </div>
    </section>
  );
}