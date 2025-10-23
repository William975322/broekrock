import { Button } from './ui/button';
import { Bus, ArrowRight } from 'lucide-react';

export function TravelInfo() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Bus size={48} className="text-desert-teal mx-auto mb-6" />
          <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-desert-text mb-6">
            Shuttles make getting here easy
          </h2>
          <p className="font-inter text-lg md:text-xl text-desert-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            Direct routes to Bulscampvelt with drop-off at the entrance. Safe, fast, reliable.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="font-inter text-base tracking-wide bg-transparent hover:bg-desert-teal/10 text-desert-teal border-2 border-desert-teal hover:border-desert-teal/80 px-8 py-6 rounded-full transition-all duration-300 motion-safe:hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            LEARN MORE <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
