"use client";

import Image from "next/image";
import { useState } from "react";
import { Sparkles, Layers, ArrowUpRight } from "lucide-react";

export default function GalleryHeroComponent() {
  const [activeTag, setActiveTag] = useState("All");

  const tags = ["All", "Teachers", "Students", "Classrooms", "Labs"];

  const academicCategories = {
    Teachers: [
      { id: 1, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", caption: "Expert Faculty Lecture" },
      { id: 2, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", caption: "Professor Guiding Student" },
      { id: 3, src: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop", caption: "Senior Lecturer Speaking" },
      { id: 4, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", caption: "Instructor in Seminar" },
      { id: 5, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", caption: "Workshop Facilitator" },
      { id: 6, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", caption: "Academic Advisor Meeting" },
      { id: 7, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", caption: "Boardroom Presentation" },
      { id: 8, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", caption: "Faculty Team Briefing" },
    ],
    Students: [
      { id: 1, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", caption: "Collaborative Study Group" },
      { id: 2, src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop", caption: "Campus Library Reading" },
      { id: 3, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", caption: "Project Discussion" },
      { id: 4, src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop", caption: "Graduation Celebration" },
      { id: 5, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop", caption: "Peer Learning Session" },
      { id: 6, src: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=800&auto=format&fit=crop", caption: "Campus Lawn Hangout" },
      { id: 7, src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop", caption: "Exam Preparation" },
      { id: 8, src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800&auto=format&fit=crop", caption: "University Hallway" },
    ],
    Classrooms: [
      { id: 1, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", caption: "Interactive Classroom Session" },
      { id: 2, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop", caption: "Modern Lecture Hall" },
      { id: 3, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", caption: "Bright Study Room" },
      { id: 4, src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop", caption: "Auditorium Setup" },
      { id: 5, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", caption: "Smart Board Teaching" },
      { id: 6, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", caption: "Tiered Seating Hall" },
      { id: 7, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", caption: "Small Group Pod" },
      { id: 8, src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop", caption: "Computer Lab Room" },
    ],
    Labs: [
      { id: 1, src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop", caption: "Science Research Laboratory" },
      { id: 2, src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", caption: "Advanced Chemistry Lab" },
      { id: 3, src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop", caption: "Microscope Experiment" },
      { id: 4, src: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=800&auto=format&fit=crop", caption: "Physics Equipment Testing" },
      { id: 5, src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop", caption: "Biotech Research Unit" },
      { id: 6, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop", caption: "Medical Tech Lab" },
      { id: 7, src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop", caption: "Robotics Workspace" },
      { id: 8, src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop", caption: "Imaging & Analysis Lab" },
    ],
  };

  // Combine all images for the "All" view tag
  const allAcademicImages = [
    ...academicCategories.Teachers.map(item => ({ ...item, category: "Teachers" })),
    ...academicCategories.Students.map(item => ({ ...item, category: "Students" })),
    ...academicCategories.Classrooms.map(item => ({ ...item, category: "Classrooms" })),
    ...academicCategories.Labs.map(item => ({ ...item, category: "Labs" })),
  ];

  const getFilteredImages = () => {
    if (activeTag === "All") return allAcademicImages;
    return (academicCategories[activeTag] || []).map(item => ({ ...item, category: activeTag }));
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1c1c1c] font-sans selection:bg-[#2563eb] selection:text-white">
      
      {/* Hero Header Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#E8E4DA] border-b border-[#d6d3cb] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop"
            alt="Background pattern"
            fill
            unoptimized
            className="object-cover object-center"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-[10px] font-black tracking-widest uppercase mb-4 border border-[#2563eb]/20">
             Campus Visual Records
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1c1c1c] mb-3">
            Academic <span className="text-[#2563eb]">Gallery</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] font-medium max-w-xl mx-auto">
            Explore our state-of-the-art facilities, dedicated faculty, dynamic classrooms, and specialized research laboratories.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filters Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                activeTag === tag
                  ? "bg-[#2563eb] text-white border-[#2563eb] shadow-md shadow-blue-500/20 scale-105"
                  : "bg-[#EFECE6] text-[#444444] border-[#d6d3cb] hover:border-[#2563eb] hover:text-[#2563eb]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Clean Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getFilteredImages().map((item, index) => (
            <div
              key={`${item.category}-${item.id}-${index}`}
              className="group bg-[#EFECE6] border border-[#d6d3cb] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#2563eb]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-[#d6d3cb]">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#1c1c1c]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-4 flex items-center justify-between border-t border-[#d6d3cb]/60 bg-[#F7F5F0]">
                <span className="text-xs font-bold text-[#222222] uppercase tracking-wide truncate">
                  {item.caption}
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#EFECE6] border border-[#d6d3cb] flex items-center justify-center text-[#555555] group-hover:bg-[#2563eb] group-hover:text-white group-hover:border-[#2563eb] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}