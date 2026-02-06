
import React from 'react';

const Location: React.FC = () => {
  // Updated map source to 100 William St, New York, NY 10038
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5441544434254!2d-74.00845352342543!3d34.0706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf05cc7aeec!2s100%20William%20St%2C%20New%20York%2C%20NY%2010038!5e0!3m2!1sen!2sus!4v1712845620124!5m2!1sen!2sus";

  return (
    <section id="location" className="py-24 bg-[#FDFBF7] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 bg-white rounded-[48px] overflow-hidden luxury-shadow border border-gray-100">
          
          {/* Map Area */}
          <div className="lg:w-3/5 relative h-[450px] lg:h-auto overflow-hidden group">
            <iframe 
              src={mapSrc}
              className="w-full h-full border-0 grayscale contrast-[1.1] brightness-[0.95] sepia-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="American Beauty Salon Location"
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none bg-[#C4A484]/5 group-hover:opacity-0 transition-opacity duration-500"></div>
            
            <div className="absolute top-8 right-8 z-10 pointer-events-none">
              <span className="bg-[#8B2635] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                Interactive Map
              </span>
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:w-2/5 p-10 lg:p-20 flex flex-col justify-center bg-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF5EF] rounded-bl-[100px] -z-0 opacity-50"></div>
            
            <div className="mb-10 relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-[#8B2635]"></span>
                <span className="text-[#8B2635] text-[10px] font-bold uppercase tracking-[0.4em]">Visit Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl serif text-[#2D2424] mb-8 leading-tight">
                Find Your <br/><span className="italic text-[#C4A484]">Beauty Haven</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF5EF] flex items-center justify-center text-[#8B2635] shrink-0 group-hover:bg-[#8B2635] group-hover:text-white transition-all duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Location</h4>
                    <p className="text-[#2D2424] text-lg leading-relaxed">
                      100 William St<br />
                      New York, NY 10038
                    </p>
                    <a 
                      href="https://maps.google.com/?q=100+William+St+New+York+NY+10038" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold uppercase tracking-widest text-[#8B2635] mt-2 inline-block border-b border-[#8B2635]/20 hover:border-[#8B2635] transition-all"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF5EF] flex items-center justify-center text-[#8B2635] shrink-0 group-hover:bg-[#8B2635] group-hover:text-white transition-all duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Concierge</h4>
                    <p className="text-[#2D2424] text-lg leading-relaxed">
                      +1 (929) 210 1542<br />
                      info.americanbeautysalons@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-gray-50">
                <a 
                  href="#booking" 
                  className="inline-flex items-center gap-4 bg-[#2D2424] text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#8B2635] transition-all shadow-xl shadow-black/10 group"
                >
                  Book Your Seat
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
