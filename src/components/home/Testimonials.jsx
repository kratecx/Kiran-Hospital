export default function Testimonials() {
  const testimonials = [
    {
      category: "PATIENT STORIES",
      title: "Real Patient Feedback",
      description: "A collection of real patient stories showcasing how our 24/7 emergency care, specialized outpatient clinics, and advanced diagnostics saved lives and restored health.",
      name: "Dr. Ahmed Raza",
      role: "Cardiac Patient",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-having-fun-at-a-bar-41585-large.mp4",
      poster: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
      quote: "The 24/7 emergency care and the dedication of the medical staff saved my life during a critical cardiac event. The level of empathy and professional competence here is truly world-class."
    },
    {
      category: "STUDENT SUCCESS",
      title: "Student & Graduate Success",
      description: "Discover how our BSN nursing programs, allied health diplomas, and clinical workshops empower the next generation of healthcare professionals with hands-on expertise.",
      name: "Fatima Noor",
      role: "BSN Nursing, Final Year",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-working-on-a-laptop-in-a-cafe-41582-large.mp4",
      poster: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      quote: "Studying here has given me unmatched clinical exposure. Working side-by-side with experienced practitioners in real hospital wards has prepared me completely for my professional career."
    }
  ];

  return (
    <section className="relative py-32 bg-[#e2e3dd] border-b border-slate-300/80 overflow-hidden">
      {/* Ambient Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-300/40 rounded-full blur-[140px] pointer-events-none"></div>
      
      {/* Subtle Geometric Grid Texture */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-300/70 mb-5 shadow-sm backdrop-blur-md">
            {/* <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> */}
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted By <span className="text-blue-600">Our Community</span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 font-light leading-relaxed">
            Real feedback from patients and students who experienced our medical care and educational excellence firsthand.
          </p>
        </div>

        {/* Testimonials Rows (Both Patients & Students displayed simultaneously) */}
        <div className="space-y-24">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Content Column */}
              <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="inline-flex px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 w-max shadow-sm">
                  {item.category}
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed mb-8 font-light">
                  {item.description}
                </p>

                {/* Featured Quote Card */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 shadow-sm mb-8">
                  <p className="text-slate-700 text-sm leading-relaxed italic font-light">
                    "{item.quote}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>

                {/* Rating Score */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    4.9 <span className="text-slate-400 font-normal">/ 12,480 REVIEWS</span>
                  </div>
                </div>
              </div>

              {/* Video Column */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
                  <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden bg-slate-900">
                    <video 
                      src={item.videoUrl}
                      poster={item.poster}
                      controls
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}