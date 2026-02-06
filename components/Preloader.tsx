
import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Show preloader for at least 1.5 seconds, then trigger exit
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFBF7] ${isExiting ? 'loader-exit' : ''
                }`}
        >
            <div className="relative flex flex-col items-center">
                <div className="animate-logo-breathe mb-6">
                    <img
                        src="/salon-images/logo.jpg"
                        alt="American Beauty Salons Logo"
                        className="h-24 md:h-32 object-contain"
                    />
                </div>
                <div className="overflow-hidden h-[1px] w-24 bg-black/5 relative">
                    <div className="absolute inset-0 bg-[#8B2635] origin-left animate-[loadingBar_2s_ease-in-out_infinite]"></div>
                </div>
                <p className="mt-4 text-[10px] uppercase font-bold tracking-[0.4em] text-[#2D2424]/40">
                    American Beauty Salons
                </p>
            </div>

            <style>{`
        @keyframes loadingBar {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
        </div>
    );
};

export default Preloader;
