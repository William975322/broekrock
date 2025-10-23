export function Story() {
  return (
    <section id="story" className="bg-ink py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-red rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-neon-red mb-12 text-center">
          HET VERHAAL
        </h2>

        <div className="space-y-8 text-paper/90 font-inter text-base md:text-lg leading-relaxed">
          <p>
            Broekrock ontstond eind jaren '90 in Hertsberge: een kleine zaal, te veel versterkers
            en vrienden die geloofden dat het groter mocht. Tussen 1999 en 2005 groeide het uit tot
            een cultavond. Daarna viel het stil.
          </p>
          <p>
            In 2020 staken we de lont opnieuw aan. Niet omdat het moest, wel omdat die energie
            nooit weg was. Broekrock is vandaag opnieuw wat het altijd was: lokaal, luid en samen.
            Voor wie hier woont, voor wie hier speelde, en voor iedereen die zin heeft in een
            eerlijke rocknacht.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-paper/5 rounded-lg overflow-hidden border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 group">
            <img
              src="/assets/artists/Tusky5.jpg"
              alt="Broekrock archive"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="aspect-square bg-paper/5 rounded-lg overflow-hidden border border-neon-red/20 hover:border-neon-red/60 transition-all duration-300 group">
            <img
              src="/assets/artists/Itchy_P400-5_Ilkay-Karakurt_010.jpg"
              alt="Broekrock archive"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="aspect-square bg-paper/5 rounded-lg overflow-hidden border border-neon-lime/20 hover:border-neon-lime/60 transition-all duration-300 group">
            <img
              src="/assets/artists/Bellestate-2025-large.jpg"
              alt="Broekrock archive"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="aspect-square bg-paper/5 rounded-lg overflow-hidden border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 group">
            <img
              src="/assets/artists/2dd3654317af2b6584f62871070e1e70.jpg"
              alt="Broekrock archive"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-center">
          <div className="relative">
            <div className="font-bebas text-6xl md:text-8xl text-neon-cyan">1999</div>
            <div className="font-inter text-sm text-paper/60 uppercase tracking-wider mt-2">
              Eerste editie
            </div>
          </div>
          <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-red to-neon-lime" />
          <div className="relative">
            <div className="font-bebas text-6xl md:text-8xl text-neon-red">2005</div>
            <div className="font-inter text-sm text-paper/60 uppercase tracking-wider mt-2">
              Laatste editie (toen)
            </div>
          </div>
          <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-neon-red via-paper to-neon-cyan" />
          <div className="relative">
            <div className="font-bebas text-6xl md:text-8xl text-neon-lime">2020</div>
            <div className="font-inter text-sm text-paper/60 uppercase tracking-wider mt-2">
              Revival
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
