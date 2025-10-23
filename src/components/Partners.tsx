import { Button } from './ui/button';

const PARTNERS = [
  { name: 'Partner 1', logo: '🎸' },
  { name: 'Partner 2', logo: '🎤' },
  { name: 'Partner 3', logo: '🥁' },
  { name: 'Partner 4', logo: '🎹' },
  { name: 'Partner 5', logo: '🎧' },
];

export function Partners() {
  return (
    <section className="bg-[#0d0d0e] py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-neon-lime mb-4 text-center">
          PARTNERS
        </h2>
        <p className="font-inter text-center text-paper/70 mb-12 text-lg">
          Mogelijk gemaakt met de steun van
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="aspect-square bg-paper/5 border-2 border-paper/10 hover:border-neon-lime/60 rounded-lg flex items-center justify-center transition-all duration-300 group cursor-pointer"
              title={partner.name}
            >
              <span className="text-6xl group-hover:scale-110 transition-transform">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center bg-paper/5 border-2 border-neon-cyan/30 rounded-lg p-8">
          <h3 className="font-bebas text-3xl tracking-wider text-paper mb-4">WORD SPONSOR</h3>
          <p className="font-inter text-paper/80 mb-6 max-w-2xl mx-auto">
            Wil jouw bedrijf Broekrock ondersteunen? Neem contact op voor sponsormogelijkheden en
            help de lokale muziekscene groeien.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="font-bebas text-xl tracking-wider bg-transparent hover:bg-neon-cyan/10 text-paper border-4 border-neon-cyan hover:border-neon-cyan/90 px-8 py-6 rounded-full transition-all duration-300 motion-safe:hover:scale-105"
            onClick={() => window.open('mailto:sponsor@broekrock.be', '_blank')}
          >
            WORD PARTNER
          </Button>
        </div>
      </div>
    </section>
  );
}
