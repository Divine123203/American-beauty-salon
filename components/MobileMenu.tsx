
import React from 'react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    activeLink: string;
    onLinkClick: (name: string) => void;
}

const MENU_ITEMS = [
    {
        name: 'Home',
        href: '#home',
        subtitle: 'Return to elegance',
        icon: (
            <svg className="w-6 h-6 text-[#A31D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    {
        name: 'About Us',
        href: '#about',
        subtitle: 'Our philosophy and craft',
        icon: (
            <svg className="w-6 h-6 text-[#A31D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        )
    },
    {
        name: 'Our Team',
        href: '#team',
        subtitle: 'Meet the artisans',
        icon: (
            <svg className="w-6 h-6 text-[#A31D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        name: 'Products',
        href: '#products',
        subtitle: 'Luxe professional formulas',
        icon: (
            <svg className="w-6 h-6 text-[#A31D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        )
    },
    {
        name: 'Booking',
        href: '#booking',
        subtitle: 'Secure your session',
        icon: (
            <svg className="w-6 h-6 text-[#A31D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    }
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeLink, onLinkClick }) => {
    return (
        <div
            className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
                }`}
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={onClose}
            />

            {/* Menu Content */}
            <div
                className={`absolute top-0 right-0 w-[90%] md:w-[85%] max-w-sm h-full bg-white flex flex-col transition-transform duration-500 shadow-2xl z-20 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Banner Section */}
                <div className="relative h-48 flex items-center justify-center overflow-hidden">
                    <img
                        src="/salon-images/hero-group.jpg"
                        alt="Menu Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#8B2635]/90 to-transparent"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <img src="/salon-images/logo.jpg" alt="Logo" className="h-20 w-auto object-contain" />
                        <p className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mt-2 opacity-80">
                            American Beauty Salons
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-grow py-6 overflow-y-auto">
                    {MENU_ITEMS.map((item, i) => (
                        <React.Fragment key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    onLinkClick(item.name);
                                    onClose();
                                }}
                                className={`flex items-center gap-5 px-8 py-4 transition-all hover:bg-black/[0.02] ${activeLink === item.name ? 'border-r-4 border-[#A31D1D]' : ''
                                    }`}
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#A31D1D]/5 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className={`text-sm font-bold uppercase tracking-wider ${activeLink === item.name ? 'text-[#A31D1D]' : 'text-[#1A1A1A]'
                                        }`}>
                                        {item.name}
                                    </p>
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mt-0.5">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </a>
                            {i < MENU_ITEMS.length - 1 && (
                                <div className="mx-8 h-[1px] bg-black/[0.05]"></div>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                {/* Footer / CTA Section */}
                <div className="p-8 space-y-6">
                    <a href="#booking" onClick={onClose} className="block">
                        <button className="w-full h-14 rounded-[20px] text-[11px] font-black uppercase tracking-[0.3em] btn-luxe-cta">
                            Book Appointment
                        </button>
                    </a>

                    <div className="flex flex-col gap-2 pt-2">
                        <a href="#" className="text-[9px] font-bold text-gray-400 hover:text-[#1A1A1A] uppercase tracking-widest transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[9px] font-bold text-gray-400 hover:text-[#1A1A1A] uppercase tracking-widest transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
