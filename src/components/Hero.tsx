import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const FESTIVAL_DATE = new Date('2026-04-04T16:00:00+02:00');

export function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = FESTIVAL_DATE.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/artists/Tusky5.jpg)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="font-bebas text-[clamp(5rem,18vw,14rem)] leading-[0.85] tracking-tight text-white mb-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-700 drop-shadow-2xl">
          BROEKROCK
        </h1>
        <p className="font-inter text-lg md:text-xl text-white/95 mb-2 max-w-3xl mx-auto leading-relaxed motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-300 drop-shadow-lg">
          One day of loud guitars & small-town heart
        </p>
        <p className="font-inter text-sm md:text-base text-white/90 mb-12 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-500 drop-shadow-lg">
          Saturday 4 April 2026 · Zaal Bulscampvelt, Hertsberge
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-700">
          <Button
            size="lg"
            onClick={() => scrollToSection('tickets')}
            className="font-bebas text-3xl tracking-wider bg-desert-coral hover:bg-desert-coral/90 text-white px-12 py-7 rounded-full transition-all duration-300 motion-safe:hover:scale-105 shadow-2xl shadow-black/30 border-0"
          >
            TICKETS
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('lineup')}
            className="font-bebas text-xl tracking-wider bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 px-10 py-6 rounded-full transition-all duration-300 motion-safe:hover:scale-105 backdrop-blur-sm"
          >
            VIEW LINE-UP
          </Button>
        </div>

        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-1000">
          <div className="flex justify-center gap-6 md:gap-12">
            <div className="text-center">
              <div className="font-bebas text-5xl md:text-7xl text-white tabular-nums drop-shadow-xl">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="font-inter text-xs md:text-sm text-white/80 uppercase tracking-widest mt-2 drop-shadow-lg">
                Days
              </div>
            </div>
            <div className="font-bebas text-5xl md:text-7xl text-white/40 flex items-center drop-shadow-xl">:</div>
            <div className="text-center">
              <div className="font-bebas text-5xl md:text-7xl text-white tabular-nums drop-shadow-xl">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="font-inter text-xs md:text-sm text-white/80 uppercase tracking-widest mt-2 drop-shadow-lg">
                Hours
              </div>
            </div>
            <div className="font-bebas text-5xl md:text-7xl text-white/40 flex items-center drop-shadow-xl">:</div>
            <div className="text-center">
              <div className="font-bebas text-5xl md:text-7xl text-white tabular-nums drop-shadow-xl">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="font-inter text-xs md:text-sm text-white/80 uppercase tracking-widest mt-2 drop-shadow-lg">
                Min
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 motion-safe:animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 motion-safe:animate-pulse" />
        </div>
      </div>
    </section>
  );
}
