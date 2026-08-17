"use client";

import Image from "next/image";

const leadershipMembers = [
  {
    name: "Dr. Muhammad Saleem",
    role: "Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "Guiding the hospital's strategic vision and commitment to clinical excellence.",
  },
  {
    name: "Ahsan Manan",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "Leading academic and nursing standards with extensive expertise in advanced healthcare education.",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="relative py-24 bg-[#e2e3dd] text-slate-700 overflow-hidden">
      
      {/* Background Image with warm/neutral styling */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
          alt="Leadership Background"
          fill
          unoptimized
          className="object-cover object-center opacity-15 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-[#e2e3dd]/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-300/70 mb-5 shadow-sm backdrop-blur-md">
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest">
              Executive Leadership & Faculty
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Leadership <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 font-light leading-relaxed">
            Meet the experienced leaders guiding Kiran General & Surgical Hospital toward excellence in healthcare and education.
          </p>
        </div>

        {/* Leadership Grid - Even larger circular images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {leadershipMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 group"
            >
              {/* Even Larger Circular Professional Headshot */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-8 rounded-full overflow-hidden border-4 border-slate-300/60 shadow-2xl bg-slate-200 transition-transform group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <div className="text-blue-600 font-semibold text-base mb-3">
                {member.role}
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-1 max-w-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}