
import React from 'react';

const FEATURES = [
  {
    title: 'Artisan Stylists',
    desc: 'Our team consists of industry veterans like our master colorists specialized in grey correction.',
    icon: '✂️'
  },
  {
    title: 'Premium Botanicals',
    desc: 'We exclusively use sustainable, organic-certified products that respect your hair and the planet.',
    icon: '🌿'
  },
  {
    title: 'Precision Art',
    desc: 'From stacked bobs to textured pixies, we deliver cuts that define your personality.',
    icon: '📐'
  },
  {
    title: 'Sensory Experience',
    desc: 'Every visit includes a signature aromatherapy head massage and artisan beverage service.',
    icon: '🕯️'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#2D2424] text-white relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
        AMERICAN BEAUTY SALONS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
          <div className="max-w-2xl">
            <h2 className="text-[#C4A484] text-sm font-bold uppercase tracking-[0.3em] mb-4">The American Beauty Salons Philosophy</h2>
            <p className="text-4xl md:text-6xl text-white mb-8">
              Where Modern <span className="italic text-[#C4A484]">Elegance</span> Meets Precision.
            </p>
          </div>
          <div className="relative w-full lg:w-1/3">
            <div className="aspect-square rounded-[40px] overflow-hidden border-8 border-white/5 rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="salon-images/image-17.jpg"
                alt="Salon Experience"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://picsum.photos/600/600?random=17" }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#C4A484] text-[#2D2424] p-6 rounded-2xl luxury-shadow">
              <p className="text-[10px] uppercase font-bold tracking-widest mb-1">Expert Care</p>
              <p className="text-xl serif italic">Sensory Spa</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="group fade-in-on-scroll">
              <div className="w-16 h-16 rounded-2xl bg-[#C4A484]/10 flex items-center justify-center text-3xl mb-8 group-hover:bg-[#C4A484] group-hover:text-[#2D2424] transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
