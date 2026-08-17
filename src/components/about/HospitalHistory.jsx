import Image from "next/image";

export default function HospitalHistory() {
  return (
    <section className="relative py-20 bg-[#e2e3dd] text-slate-700 overflow-hidden">
      
      {/* Background Image using unoptimized Next.js Image with warm/neutral styling */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
          alt="Hospital Background"
          fill
          unoptimized
          className="object-cover object-center opacity-95 "
          priority
        />
        <div className="absolute inset-0 bg-[#e2e3dd]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Hospital Name Above */}


        {/* Very Large Logo without any box */}
        <div className="relative w-56 h-56 sm:w-90 sm:h-90 mb-10">
          <Image
            src="/logo.png"
            alt="Kiran General & Surgical Hospital Logo"
            fill
            className="object-contain drop-shadow-md"
            priority
          />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-8">
          Kiran <span className="text-red-600">General</span> & <span className="text-blue-600">Surgical</span> Hospital
        </h2>

        {/* Simple Paragraph Text Telling History Below (No white box background) */}
        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700 max-w-3xl">
          <p>
            Kiran General & Surgical Hospital was established with a clear vision: to provide accessible, high-quality, and compassionate healthcare to our community. From our early days as a dedicated medical center, we have continuously grown our clinical capabilities, state-of-the-art facilities, and specialized surgical departments.
          </p>
          <p>
            Over the years, our unwavering commitment to patient safety and clinical excellence has made us a trusted healthcare partner for thousands of families. Today, our experienced team of physicians, surgeons, and support staff continue to uphold this proud tradition, delivering 24/7 emergency care, advanced diagnostics, and comprehensive medical treatments under one roof.
          </p>
        </div>

      </div>
    </section>
  );
}