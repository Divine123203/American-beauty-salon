import React from 'react';

const TEAM = [
  {
    id: '1',
    name: 'Elena Vance',
    role: 'Artistic Director',
    image: '/salon-images/image-21.jpg',
    bio: 'With over 15 years in high-fashion editorial, Elena brings a visionary approach to every transformation.'
  },
  {
    id: '2',
    name: 'Julian Cross',
    role: 'Master Colorist',
    image: '/salon-images/image-22.jpg',
    bio: 'A specialist in bespoke highlights and vibrant artisan colors that maintain hair integrity.'
  },
  {
    id: '3',
    name: 'Sarah Miller',
    role: 'Editorial Stylist',
    image: '/salon-images/image-23.jpg',
    bio: 'Known for her precision cuts and ability to translate runway trends into wearable luxury.'
  },
  {
    id: '4',
    name: 'Marcus Thorn',
    role: 'Texture Specialist',
    image: '/salon-images/image-24.jpg',
    bio: 'The master of natural textures, curls, and revolutionary structural styling.'
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-[#F5EFEB] overflow-hidden relative reveal-hidden">

      {/* Editorial Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-black/[0.02] select-none pointer-events-none whitespace-nowrap z-0">
        ARTISTRY • VISION • LUXURY
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-8 reveal-hidden">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#A31D1D]"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#A31D1D]">
                The Collective
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl text-[#1A1A1A] serif leading-[0.9] tracking-tighter">
              Bespoke Talent <br />
              <span className="italic opacity-40 font-light">Defined.</span>
            </h2>
          </div>
          <div className="lg:max-w-xs pb-4 text-gray-400 text-sm leading-relaxed serif italic">
            "Beauty is an art, and our stylists are the masters of the canvas."
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-24">
          {TEAM.map((member, idx) => (
            <div
              key={member.id}
              className="flex flex-col group reveal-hidden"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative mb-10">
                {/* Index Number */}
                <span className="absolute -top-6 -left-4 text-5xl serif text-black/[0.05] group-hover:text-[#A31D1D]/20 transition-colors duration-700">
                  0{idx + 1}
                </span>

                {/* Main Media Container */}
                <div className="relative p-3 bg-white shadow-2xl transition-transform duration-700 group-hover:-translate-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 filter brightness-90 contrast-110"
                      onError={(e) => { e.currentTarget.src = `https://images.unsplash.com/photo-${idx === 0 ? '1580618672591-eb180b1a973f' : '1595475242265-c182f24b4510'}?auto=format&fit=crop&q=80&w=800` }}
                    />

                    {/* Editorial Overlay */}
                    <div className="absolute inset-x-4 bottom-4 bg-white/10 backdrop-blur-md p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out border border-white/20">
                      <p className="text-white text-[11px] font-medium leading-relaxed tracking-wide">
                        {member.bio}
                      </p>
                      <button className="mt-4 text-[9px] font-black uppercase tracking-widest text-white border-b border-white/40 pb-1 hover:border-white transition-all">
                        Discover Portfolio
                      </button>
                    </div>
                  </div>

                  {/* Decorative Frame */}
                  <div className="absolute inset-0 border border-black/5 m-1 pointer-events-none"></div>
                </div>
              </div>

              <div className="px-1 relative">
                <h3 className="text-2xl serif text-[#1A1A1A] mb-1 group-hover:italic transition-all duration-500">
                  {member.name}
                </h3>
                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#A31D1D]/70 mb-4">
                  {member.role}
                </p>
                <div className="w-0 group-hover:w-full h-[1px] bg-black/10 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
