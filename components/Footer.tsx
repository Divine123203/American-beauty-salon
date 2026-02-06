
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1515] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8 inline-block">
              <img
                src="/salon-images/logo.jpg"
                alt="American Beauty Salons"
                className="h-24 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              The premier destination for luxury hair and beauty. Crafting iconic styles through artistic vision and scientific precision since 2012.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Pinterest', 'YouTube'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#8B2635] hover:border-[#8B2635] transition-all">
                  <span className="text-[10px] uppercase font-bold tracking-tighter">{social.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C4A484] text-xs font-bold uppercase tracking-[0.2em] mb-8">Navigate</h4>
            <ul className="space-y-4">
              {['Home', 'Our Services', 'Product Shop', 'Meet the Team', 'Gift Cards', 'Book Online'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#C4A484] text-xs font-bold uppercase tracking-[0.2em] mb-8">Visit Us</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li>
                <p className="text-white font-semibold mb-1">New York Flagship</p>
                <p>100 William St<br />New York, NY 10038</p>
              </li>
              <li>
                <p className="text-white font-semibold mb-1">Direct Inquiries</p>
                <p>info.americanbeautysalons@gmail.com<br />+1 (929) 210 1542</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#C4A484] text-xs font-bold uppercase tracking-[0.2em] mb-8">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6">Receive beauty insights and priority access to seasonal events.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border-b border-white/10 px-0 py-3 text-sm focus:outline-none focus:border-[#C4A484] flex-grow"
              />
              <button className="border-b border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#C4A484] hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} American Beauty Salons. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
