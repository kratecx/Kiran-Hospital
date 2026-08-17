"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function GalleryHeroComponent() {
  const [activeTag, setActiveTag] = useState("All");

  // Pagination states for progressive loading
  const [visibleHospitalCount, setVisibleHospitalCount] = useState(4); // Load 4 initially, load more on scroll
  const [visibleAcademicCount, setVisibleAcademicCount] = useState(4); // Load 4     initially

  const tags = ["All", "Teachers", "Students", "Classrooms", "Labs"];

  // 8 Images for Hospital Service Related
  const hospitalCaptionImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop", caption: "Modern Hospital Facility" },
    { id: 2, src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop", caption: "Advanced Medical Equipment" },
    { id: 3, src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop", caption: "Emergency Care Unit" },
    { id: 4, src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", caption: "Diagnostic Machinery" },
    { id: 5, src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop", caption: "Surgery Wing & Care" },
    { id: 6, src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop", caption: "MRI & Imaging Technology" },
    { id: 7, src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop", caption: "Patient Recovery Room" },
    { id: 8, src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop", caption: "Intensive Care Ward" },
  ];

  const academicCategories = {
    Teachers: [
      { id: 1, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", caption: "Expert Faculty Lecture 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", caption: "Professor Guiding Student 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop", caption: "Senior Lecturer Speaking 3" },
      { id: 4, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", caption: "Instructor in Seminar 4" },
      { id: 5, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", caption: "Workshop Facilitator 5" },
      { id: 6, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", caption: "Academic Advisor Meeting 6" },
      { id: 7, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", caption: "Boardroom Presentation 7" },
      { id: 8, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", caption: "Faculty Team Briefing 8" },
    ],
    Students: [
      { id: 1, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", caption: "Collaborative Study Group 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop", caption: "Campus Library Reading 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", caption: "Project Discussion 3" },
      { id: 4, src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop", caption: "Graduation Celebration 4" },
      { id: 5, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop", caption: "Peer Learning Session 5" },
      { id: 6, src: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=800&auto=format&fit=crop", caption: "Campus Lawn Hangout 6" },
      { id: 7, src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop", caption: "Exam Preparation 7" },
      { id: 8, src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800&auto=format&fit=crop", caption: "University Hallway 8" },
    ],
    Classrooms: [
      { id: 1, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", caption: "Interactive Classroom Session 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop", caption: "Modern Lecture Hall 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", caption: "Bright Study Room 3" },
      { id: 4, src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop", caption: "Auditorium Setup 4" },
      { id: 5, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", caption: "Smart Board Teaching 5" },
      { id: 6, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", caption: "Tiered Seating Hall 6" },
      { id: 7, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", caption: "Small Group Pod 7" },
      { id: 8, src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop", caption: "Computer Lab Room 8" },
    ],
    Labs: [
      { id: 1, src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop", caption: "Science Research Laboratory 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", caption: "Advanced Chemistry Lab 2" },
      { id: 3, src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop", caption: "Microscope Experiment 3" },
      { id: 4, src: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=800&auto=format&fit=crop", caption: "Physics Equipment Testing 4" },
      { id: 5, src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop", caption: "Biotech Research Unit 5" },
      { id: 6, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop", caption: "Medical Tech Lab 6" },
      { id: 7, src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop", caption: "Robotics Workspace 7" },
      { id: 8, src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop", caption: "Imaging & Analysis Lab 8" },
    ],
  };

  const allAcademicImages = [
    ...academicCategories.Teachers,
    ...academicCategories.Students,
    ...academicCategories.Classrooms,
    ...academicCategories.Labs,
  ];

  const getFilteredAcademicImages = () => {
    const fullList = activeTag === "All" ? allAcademicImages : academicCategories[activeTag] || [];
    return fullList.slice(0, visibleAcademicCount);
  };

  const getFilteredHospitalImages = () => {
    return hospitalCaptionImages.slice(0, visibleHospitalCount);
  };

  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setVisibleAcademicCount(8);
  };

  const loadMoreHospitalRef = useRef(null);
  const loadMoreAcademicRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleHospitalCount((prev) => Math.min(prev + 4, hospitalCaptionImages.length));
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreHospitalRef.current) {
      observer.observe(loadMoreHospitalRef.current);
    }

    return () => observer.disconnect();
  }, [hospitalCaptionImages.length]);

  useEffect(() => {
    const currentList = activeTag === "All" ? allAcademicImages : academicCategories[activeTag] || [];
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleAcademicCount((prev) => Math.min(prev + 8, currentList.length));
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreAcademicRef.current) {
      observer.observe(loadMoreAcademicRef.current);
    }

    return () => observer.disconnect();
  }, [activeTag, allAcademicImages, academicCategories]);

  return (
    <div className="min-h-screen bg-[#e2e3dd] text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      <section className="relative h-[420px] w-full bg-slate-900 overflow-hidden flex flex-col justify-between">
        <Image
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop"
          alt="Hospital & Academic Gallery Hero"
          fill
          unoptimized
          priority
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-[#e2e3dd]" />



        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md mb-4">
            Hospital & Academic Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Discover our comprehensive presentation featuring top-tier hospital services, medical machinery, and fully loaded academic showcases with progressive loading.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-28 space-y-20">
        
        <section className="bg-gradient-to-br from-white/95 via-white/80 to-slate-100/90 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-6 sm:p-12 shadow-xl shadow-slate-900/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hospital service related
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getFilteredHospitalImages().map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-slate-900/90 backdrop-blur-md py-3 px-4 text-center border-t border-slate-800">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {visibleHospitalCount < hospitalCaptionImages.length && (
            <div ref={loadMoreHospitalRef} className="py-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
              Scrolling to load more hospital images...
            </div>
          )}
        </section>

        <section className="bg-gradient-to-br from-white/95 via-white/80 to-slate-100/90 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-6 sm:p-12 shadow-xl shadow-slate-900/5">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Academics related
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 border ${
                  activeTag === tag
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30"
                    : "bg-white text-slate-700 border-slate-300 hover:border-blue-500 hover:text-blue-600 shadow-xs"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getFilteredAcademicImages().map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      {activeTag === "All" ? (index < 8 ? "Teachers" : index < 16 ? "Students" : index < 24 ? "Classrooms" : "Labs") : activeTag}
                    </span>
                  </div>
                </div>
                <div className="bg-slate-900/90 backdrop-blur-md py-3 px-4 text-center border-t border-slate-800">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {visibleAcademicCount < (activeTag === "All" ? allAcademicImages.length : academicCategories[activeTag]?.length || 0) && (
            <div ref={loadMoreAcademicRef} className="py-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
              Scrolling to load more academic images...
            </div>
          )}
        </section>

      </div>
    </div>
  );
}