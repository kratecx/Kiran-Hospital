export default function ServicesOverview() {
  return (
    <section className="relative py-32 bg-[#e2e3dd] border-b border-slate-300/80 overflow-hidden">
      {/* Premium Ambient Background Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-slate-300/35 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Geometric Grid Texture */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-300/70 mb-5 shadow-sm backdrop-blur-md">
            {/* <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> */}
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest">
              Comprehensive Healthcare & Education
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Core Services & <span className="text-blue-600">Academic Programs</span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl mt-6 font-light leading-relaxed">
            Combining round-the-clock medical treatment with professional nursing and allied health training to build a healthier tomorrow.
          </p>
        </div>

        {/* Services & Programs Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: 24/7 Emergency Care */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop" 
                alt="24/7 Emergency & Trauma Ward" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-red-600 shadow-sm border border-slate-100">
                Active 24/7
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  24/7 Emergency & Trauma
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  Fully equipped emergency ward staffed by experienced physicians and nurses ready to handle critical care situations at any hour.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-red-600 font-semibold text-sm">Critical Care Unit</span>
              </div>
            </div>
          </div>

          {/* Card 2: BSN Nursing Program */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" 
                alt="BSN & Professional Nursing Students" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm border border-slate-100">
                Admissions Open
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  BSN & Professional Nursing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  Comprehensive Bachelor of Science in Nursing (BSN) and LHV programs designed with hands-on clinical training and expert mentorship.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-blue-600 font-semibold text-sm">Academic Track</span>
              </div>
            </div>
          </div>

          {/* Card 3: Allied Health Sciences */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop" 
                alt="Allied Health Sciences Laboratory" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm border border-slate-100">
                Specialized Labs
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Allied Health Sciences
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  Specialized diploma and certification programs including Ultrasound Technology, Pharmacy Technician, and Medical Lab Technology (MLT).
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-blue-600 font-semibold text-sm">Diploma Programs</span>
              </div>
            </div>
          </div>

          {/* Card 4: Specialized Outpatient Clinic */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop" 
                alt="Outpatient Clinic" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm border border-slate-100">
                Consultations
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Specialized Outpatient Clinic
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  Expert consultations across multi-specialty departments ensuring personalized treatment plans and long-term care management.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-blue-600 font-semibold text-sm">OPD Services</span>
              </div>
            </div>
          </div>

          {/* Card 5: Diagnostic & Imaging Center */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1000&auto=format&fit=crop" 
                alt="Diagnostic & Imaging Center" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm border border-slate-100">
                Advanced Tech
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Diagnostic & Imaging Center
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  State-of-the-art radiology, MRI, CT scan, and pathology laboratories providing accurate diagnostic results with precision.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-blue-600 font-semibold text-sm">Diagnostics</span>
              </div>
            </div>
          </div>

          {/* Card 6: Continuing Medical Education */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between">
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop" 
                alt="Continuing Medical Education" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm border border-slate-100">
                Workshops
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Continuing Medical Education
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  Professional development workshops, seminars, and clinical residency programs designed for ongoing practitioner excellence.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-blue-600 font-semibold text-sm">Workshops</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}