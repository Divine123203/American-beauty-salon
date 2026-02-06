import React, { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Testimonials from './components/Testimonials.tsx';
import Booking from './components/Booking.tsx';
import Products from './components/Products.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Team from './components/Team.tsx';
import Location from './components/Location.tsx';
import Footer from './components/Footer.tsx';
import Preloader from './components/Preloader.tsx';

import { useScrollReveal } from './hooks/useScrollReveal';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useScrollReveal();

  // Initial load sequencer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      <Header isVisible={isLoaded} />
      <main>
        <div className="reveal-hidden"><Hero isVisible={isLoaded} /></div>
        <div className="reveal-hidden"><WhyChooseUs /></div>
        <div className="reveal-hidden"><Services /></div>
        <div className="reveal-hidden"><Testimonials /></div>
        <Team />
        <div className="reveal-hidden"><Products /></div>
        <div className="reveal-hidden"><Location /></div>
        <div className="reveal-hidden"><Booking /></div>
      </main>
      <Footer />
    </>
  );
};

export default App;
