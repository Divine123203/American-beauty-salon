
import React from 'react';

interface HeroProps {
  isVisible?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isVisible = true }) => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/salon-images/hero-group.jpg"
          alt="American Beauty Salons Hero"
          className="w-full h-full object-cover opacity-90"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=1600" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} mb-6`}>
            <span className="text-sm font-bold tracking-[0.4em] uppercase text-[#F5EFEB]/60 block mb-2">
              American Beauty salon
            </span>
          </div>

          {/* Headline */}
          <h1 className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} text-6xl md:text-8xl leading-[1.1] mb-8 text-[#F5EFEB] serif font-normal tracking-tight delay-100`}>
            Uniquely catering to your <br />
            <span className="italic">every need.</span>
          </h1>

          {/* Subtext */}
          <p className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} text-[#F5EFEB]/70 text-lg leading-relaxed max-w-lg mb-12 font-light delay-200`}>
            Step into a realm of curated elegance. Our New York flagship offers an unparalleled journey into the art of luxury hair.
          </p>

          {/* CTA Group */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} flex items-center gap-8 delay-300`}>
            <a href="#about" className="group">
              <button className="bg-[#F5EFEB] text-[#1A1A1A] px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl flex items-center gap-2">
                Explore More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </a>
            <div className="hidden md:flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#F5EFEB]/30"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5EFEB]/50">Scroll to discover</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dotted Accent Pattern (mimicking reference) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex gap-4">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="w-1 h-1 rounded-full bg-white"></div>
            ))}
          </div>
        ))}
      </div>

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-[1px] border-b-[1px] border-white/10 m-12 pointer-events-none"></div>

    </section>
  );
};

export default Hero;
