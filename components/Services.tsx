
import React from 'react';

const SERVICE_CATEGORIES = [
  {
    id: 'haircuts',
    name: 'Haircuts',
    image: 'salon-images/image-1.jpg',
  },
  {
    id: 'hairstyles',
    name: 'Hairstyles',
    image: 'salon-images/image-2.jpg',
  },
  {
    id: 'coloring',
    name: 'Coloring',
    image: 'salon-images/image-3.jpg',
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-16">
          <h2 className="text-5xl text-[#1A1A1A] serif mb-6 tracking-tight">Our Services</h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed opacity-70">
            Beyond haircuts, discover a comprehensive range of services, from coloring to extensions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="relative aspect-[3/4] rounded-[40px] overflow-hidden group cursor-pointer shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />

              {/* Category Label Overlay */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full border border-white/50 shadow-sm">
                  <p className="text-xs font-black text-[#1A1A1A] tracking-widest uppercase">{cat.name}</p>
                </div>
              </div>

              {/* Hover Darken Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

