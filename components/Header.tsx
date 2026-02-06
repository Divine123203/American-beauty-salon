import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu.tsx';

interface HeaderProps {
  isVisible?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Products', href: '#products' },
    { name: 'Booking', href: '#booking' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer to detect active section
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-20% 0px -20% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          const idToName: Record<string, string> = {
            'home': 'Home',
            'about': 'About Us',
            'services': 'About Us',
            'testimonials': 'About Us',
            'team': 'Our Team',
            'products': 'Products',
            'location': 'Booking',
            'booking': 'Booking'
          };

          if (idToName[id]) {
            setActiveLink(idToName[id]);
          }
        }
      });
    }, observerOptions);

    // Observe all main section IDs
    const sectionIds = ['home', 'about', 'services', 'testimonials', 'booking', 'products', 'team', 'location'];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      <div className={`pill-nav-wrapper transition-all duration-1000 ${!isScrolled ? 'nav-is-transparent' : ''} ${!isVisible ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>

        {/* Desktop Pill Nav */}
        <div className="hidden lg:flex w-full px-12 items-center justify-between pointer-events-auto">
          {/* Left Side Logo */}
          <a href="#home" className="transition-transform hover:scale-105" onClick={() => setActiveLink('Home')}>
            <img
              src="/salon-images/logo.jpg"
              alt="Logo"
              className={`h-14 w-auto object-contain rounded-full border border-white/10 ${isScrolled ? 'mix-blend-multiply' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Centered Pill */}
          <nav className="pill-nav-container">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`pill-nav-link ${activeLink === link.name ? 'pill-nav-active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Action */}
          <a href="#booking" className="pointer-events-auto">
            <button className="h-12 px-8 rounded-full text-[10px] font-black uppercase tracking-[0.2em] btn-luxe-cta">
              Book Now
            </button>
          </a>
        </div>

        {/* Mobile Header */}
        <div className={`lg:hidden w-full px-6 flex items-center justify-between pointer-events-auto py-4 bg-transparent mt-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <a href="#home" onClick={() => setActiveLink('Home')}>
            <img src="/salon-images/logo.jpg" alt="Logo" className={`h-14 w-auto object-contain rounded-full border border-white/10 ${isScrolled ? 'mix-blend-multiply' : 'brightness-0 invert'}`} />
          </a>
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`w-12 h-12 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all ${isScrolled ? 'bg-[#1A1A1A]' : 'bg-white/10 backdrop-blur-md border border-white/20'
              }`}
          >
            <span className="w-5 h-[2px] bg-white rounded-full"></span>
            <span className="w-5 h-[2px] bg-white rounded-full"></span>
          </button>
        </div>
      </div>

      {/* New Redesigned Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeLink={activeLink}
        onLinkClick={(name) => {
          setActiveLink(name);
          setIsMenuOpen(false);
        }}
      />
    </header>
  );
};

export default Header;
