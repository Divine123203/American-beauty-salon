
import React from 'react';

const TESTIMONIALS = [
    {
        id: 1,
        quote: "The attention to detail at American Beauty Salons is unparalleled. I've never felt more understood as a client.",
        author: "Amara Okoro",
        service: "Executive Styling",
        date: "Dec 2025"
    },
    {
        id: 2,
        quote: "A true sanctuary of style. The 'Icon of Style' experience isn't just a name—it's a transformation.",
        author: "Elena Rodriguez",
        service: "Luxe Color Reveal",
        date: "Jan 2026"
    },
    {
        id: 3,
        quote: "Sophistication in every snip. This is the only place I trust with my professional image.",
        author: "Chidi Mensah",
        service: "Precision Grooming",
        date: "Feb 2026"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="relative py-32 bg-[#F5EFEB] overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
                <span className="text-[20vw] font-black tracking-tighter uppercase whitespace-nowrap">
                    Elegance
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-sm font-bold text-[#A31D1D] uppercase tracking-[0.4em] mb-6">Client Experiences</h2>
                    <p className="text-4xl md:text-5xl text-[#1A1A1A] serif leading-tight">
                        Voices of <span className="italic">Distinction</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={t.id}
                            className="reveal-hidden relative p-8 bg-white/40 backdrop-blur-sm rounded-[32px] border border-white/20 shadow-xl transition-all duration-700 hover:-translate-y-2 flex flex-col h-full"
                            style={{ transitionDelay: `${i * 200}ms` }}
                        >
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-[#A31D1D]/20" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                                </svg>
                            </div>

                            <p className="text-xl text-[#1A1A1A] serif italic mb-12 leading-relaxed flex-grow">
                                "{t.quote}"
                            </p>

                            <div className="mt-auto border-t border-black/5 pt-6 flex justify-between items-center">
                                <div className="flex flex-col">
                                    <p className="font-bold text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A]">{t.author}</p>
                                    <p className="text-[9px] text-[#A31D1D] font-bold uppercase tracking-[0.15em] mt-1 opacity-60">{t.service}</p>
                                </div>
                                <span className="text-[10px] text-black/30 font-bold uppercase tracking-widest tabular-nums">{t.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subtle Decorative Line */}
                <div className="mt-24 h-[1px] w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-[#A31D1D]/20 to-transparent"></div>
            </div>
        </section>
    );
};

export default Testimonials;
