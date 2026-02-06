
import React from 'react';

const PORTFOLIO_ITEMS = [
  { id: 1, img: 'salon-images/image-5.jpg', tag: 'Transformation' },
  { id: 2, img: 'salon-images/image-2.jpg', tag: 'Balayage' },
  { id: 3, img: 'salon-images/image-3.jpg', tag: 'Creative Color' },
  { id: 4, img: 'salon-images/image-12.jpg', tag: 'Luxe Waves' },
  { id: 5, img: 'salon-images/image-11.jpg', tag: 'Precision Fade' },
  { id: 6, img: 'salon-images/image-8.jpg', tag: 'Blonde Bob' },
  { id: 7, img: 'salon-images/image-13.jpg', tag: "Men's Styling" },
  { id: 8, img: 'salon-images/image-18.jpg', tag: 'Dimension' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#8B2635] uppercase tracking-[0.4em] mb-4">Gallery of Artistry</h2>
          <p className="text-4xl md:text-5xl text-[#2D2424] serif">Transformed by <span className="italic">American Beauty Salons</span></p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-[24px] fade-in-on-scroll">
              <img
                src={item.img}
                alt={item.tag}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                onError={(e) => { e.currentTarget.src = `https://picsum.photos/500/700?random=${item.id + 50}` }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] border border-white/40 px-6 py-2 rounded-full">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
