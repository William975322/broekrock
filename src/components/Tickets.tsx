import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EVENTBRITE_URL = 'https://www.eventbrite.be/e/broekrock-2026-tickets-1862189150879';

export function Tickets() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isIframeVisible) {
            setIsIframeVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, [isIframeVisible]);

  return (
    <section id="tickets" className="bg-desert-cream py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-desert-text mb-4 text-center">
          TICKETS
        </h2>
        <p className="font-inter text-center text-desert-muted mb-16 text-lg max-w-2xl mx-auto">
          Get your official Broekrock 2026 ticket directly below.
        </p>

        <Card className="bg-white border-0 shadow-2xl mb-12 max-w-2xl mx-auto">
          <CardHeader className="pb-6 text-center border-b border-desert-sand">
            <h3 className="font-bebas text-4xl tracking-wider text-desert-text mb-4">
              BROEKROCK 2026
            </h3>
            <div className="space-y-3 text-desert-muted font-inter text-sm">
              <div className="flex items-center justify-center gap-2">
                <Calendar size={18} className="text-desert-coral" />
                <span>Saturday 4 April 2026</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock size={18} className="text-desert-teal" />
                <span>Doors open at 17:00 CEST</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={18} className="text-desert-gold" />
                <span>Zaal Bulscampvelt, Hertsberge, Belgium</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-8 pb-8 text-center">
            <div className="font-bebas text-7xl text-desert-coral mb-6">€30,65</div>
            <Button
              size="lg"
              className="font-bebas text-2xl tracking-wider bg-desert-coral hover:bg-desert-coral/90 text-white px-12 py-6 rounded-full transition-all duration-300 motion-safe:hover:scale-105 shadow-xl shadow-desert-coral/30 border-0 w-full sm:w-auto"
              onClick={() => window.open(EVENTBRITE_URL, '_blank')}
            >
              PURCHASE ON EVENTBRITE
            </Button>
          </CardContent>
        </Card>

        <div
          ref={iframeRef}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-desert-sand/30 mb-8"
        >
          {isIframeVisible ? (
            <iframe
              src={`${EVENTBRITE_URL}?aff=ebdssbdestsearch&embed=true`}
              frameBorder="0"
              height="800"
              width="100%"
              className="w-full"
              style={{ minHeight: '800px' }}
              scrolling="auto"
              allowTransparency={true}
              title="Eventbrite Ticket Widget"
            />
          ) : (
            <div className="h-[800px] flex items-center justify-center text-desert-muted font-inter">
              Loading ticket widget...
            </div>
          )}
        </div>

        <p className="text-center font-inter text-sm text-desert-muted max-w-xl mx-auto">
          All tickets are processed through Eventbrite. Secure checkout — no additional fees at
          the door.
        </p>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden lg:block">
        <Button
          size="lg"
          className="font-bebas text-2xl tracking-wider bg-desert-coral hover:bg-desert-coral/90 text-white px-12 py-6 rounded-full transition-all duration-300 motion-safe:hover:scale-105 shadow-2xl shadow-black/20 border-0"
          onClick={() => window.open(EVENTBRITE_URL, '_blank')}
        >
          PURCHASE TICKETS
        </Button>
      </div>
    </section>
  );
}
