import { Music } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-desert-text py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <Music size={32} className="text-desert-coral" />
            <span className="font-bebas text-3xl tracking-wider text-white">BROEKROCK</span>
          </div>

          <div className="font-inter text-sm text-white/70 max-w-2xl">
            Local, loud, and together since 1999. Broekrock is an independent festival organized
            by volunteers and music lovers from Hertsberge and the surrounding area.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-inter text-white/60">
            <a href="#tickets" className="hover:text-desert-coral transition-colors">
              Tickets
            </a>
            <a href="#lineup" className="hover:text-desert-coral transition-colors">
              Line-up
            </a>
            <a href="#gallery" className="hover:text-desert-coral transition-colors">
              Gallery
            </a>
            <a href="#news" className="hover:text-desert-coral transition-colors">
              News
            </a>
          </div>

          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="font-inter text-xs text-white/50">
            © {currentYear} Broekrock. Made with noise & love in Hertsberge.
          </div>
        </div>
      </div>
    </footer>
  );
}
