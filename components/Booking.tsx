
import React from 'react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-16">
          <h2 className="text-5xl text-[#1A1A1A] serif mb-6 tracking-tight">Booking</h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed opacity-70">
            Ready for a transformative experience? Book your appointment now at American Beauty Salons and let us craft a style that defines you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12">

          {/* Left Block: Image & Calendar & Hours */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Large Image on left of this grid */}
            <div className="w-full md:w-1/2 rounded-[40px] overflow-hidden aspect-[4/5] shadow-lg">
              <img src="salon-images/image-4.jpg" alt="Booking Style" className="w-full h-full object-cover" />
            </div>

            {/* Calendar and Hours */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              {/* Minimalist Calendar */}
              <div className="luxury-card p-6">
                <div className="text-center mb-6">
                  <p className="text-sm font-bold text-[#1A1A1A]">January 2024</p>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-gray-400 font-bold mb-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d}>{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className={`text-xs py-2 rounded-lg cursor-pointer transition-colors ${i + 1 === 24 ? 'bg-[#A31D1D] text-white font-bold' : 'hover:bg-[#F5EFEB] text-[#1A1A1A]'}`}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">Working Hours</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Monday - Friday</span>
                    <span className="font-bold text-[#1A1A1A]">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-bold text-[#1A1A1A]">11:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Sunday</span>
                    <span className="font-bold text-[#1A1A1A]">11:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Dark Lead Form */}
          <div className="bg-[#1A1A1A] rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
            <h3 className="text-3xl serif mb-12 italic">We will call you</h3>

            <form className="space-y-6">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-8">
                <button className="bg-white text-[#1A1A1A] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F5EFEB] transition-all w-full md:w-auto">
                  Book appointment
                </button>
              </div>
            </form>

            {/* Subtle background interest */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;

