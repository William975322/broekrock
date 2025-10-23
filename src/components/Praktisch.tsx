import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Clock, Bus, CreditCard, Users } from 'lucide-react';

const INFO_CARDS = [
  {
    icon: MapPin,
    title: 'Locatie',
    content: 'Zaal Bulscampvelt, Hertsberge',
    accent: 'neon-cyan',
  },
  {
    icon: Clock,
    title: 'Tijdstip',
    content: 'Deuren: 16:00 · Eerste band: 17:00 · Laatste show: 23:15',
    accent: 'neon-red',
  },
  {
    icon: Bus,
    title: 'Vervoer',
    content: 'Gratis fietsenstalling · Bushalte Hertsberge Dorp (6 min wandelen)',
    accent: 'neon-lime',
  },
  {
    icon: CreditCard,
    title: 'Betaling',
    content: 'Cashless systeem · Bancontact & Payconiq geaccepteerd',
    accent: 'neon-cyan',
  },
];

export function Praktisch() {
  return (
    <section id="praktisch" className="bg-[#0d0d0e] py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-neon-lime mb-4 text-center">
          PRAKTISCH
        </h2>
        <p className="font-inter text-center text-paper/70 mb-12 text-lg">
          Alles wat je moet weten voor de beste festivalervaring
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INFO_CARDS.map((card) => (
            <Card
              key={card.title}
              className="bg-paper/5 border-2 border-paper/10 hover:border-neon-cyan/60 transition-all duration-300 group"
            >
              <CardHeader>
                <card.icon
                  size={32}
                  className={`text-${card.accent} mb-4 group-hover:scale-110 transition-transform`}
                />
                <CardTitle className="font-bebas text-2xl tracking-wider text-paper">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-sm text-paper/80 leading-relaxed">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-paper/5 border-2 border-neon-red/30 rounded-lg p-8 mb-12">
          <h3 className="font-bebas text-3xl tracking-wider text-neon-red mb-6 flex items-center gap-3">
            <MapPin size={32} />
            Route & Parkeren
          </h3>
          <div className="aspect-video bg-paper/10 rounded-lg overflow-hidden mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.234567890123!2d3.123456!3d51.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzI0LjQiTiAzwrAwNycyNC40IkU!5e0!3m2!1sen!2sbe!4v1234567890123!5m2!1sen!2sbe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Broekrock"
            />
          </div>
          <p className="font-inter text-sm text-paper/80 leading-relaxed">
            Gratis parking beschikbaar op 200m van de zaal. Kom met de fiets voor de beste ervaring
            en gebruik de gratis, bewaakte fietsenstalling.
          </p>
        </div>

        <div className="bg-gradient-to-r from-neon-cyan/10 via-neon-red/10 to-neon-lime/10 border-2 border-neon-lime/30 rounded-lg p-8 text-center">
          <Users size={48} className="text-neon-lime mx-auto mb-4" />
          <h3 className="font-bebas text-3xl tracking-wider text-paper mb-4">
            WORD VRIJWILLIGER
          </h3>
          <p className="font-inter text-paper/80 mb-6 max-w-2xl mx-auto">
            Zin om mee te draaien en achter de schermen te helpen? Word onderdeel van de
            Broekrock-crew en maak het festival mee vanuit een unieke hoek.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="font-bebas text-xl tracking-wider bg-transparent hover:bg-neon-lime/10 text-paper border-4 border-neon-lime hover:border-neon-lime/90 px-8 py-6 rounded-full transition-all duration-300 motion-safe:hover:scale-105"
            onClick={() => window.open('mailto:info@broekrock.be?subject=Vrijwilliger', '_blank')}
          >
            MELD JE AAN
          </Button>
        </div>
      </div>
    </section>
  );
}
