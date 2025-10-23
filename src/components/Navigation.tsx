import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'tickets', label: 'TICKETS', highlight: true },
  { id: 'lineup', label: 'LINE-UP', highlight: false },
  { id: 'gallery', label: 'GALLERY', highlight: false },
  { id: 'news', label: 'NEWS', highlight: false },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-black/20 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <button
              onClick={() => scrollToSection('hero')}
              className={`font-bebas text-2xl md:text-3xl tracking-wider transition-colors ${
                isScrolled ? 'text-desert-text hover:text-desert-coral' : 'text-white hover:text-desert-coral'
              }`}
            >
              BROEKROCK
            </button>

            <div className="hidden lg:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-bebas tracking-wider transition-colors relative ${
                    link.highlight
                      ? isScrolled
                        ? 'text-2xl text-desert-coral hover:text-desert-coral/80'
                        : 'text-2xl text-desert-coral hover:text-white drop-shadow-lg'
                      : isScrolled
                      ? 'text-base text-desert-text/70 hover:text-desert-teal'
                      : 'text-base text-white/90 hover:text-white drop-shadow-lg'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? 'text-desert-text hover:text-desert-coral' : 'text-white hover:text-desert-coral'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-white/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative flex flex-col items-center justify-center min-h-screen space-y-8 p-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-bebas tracking-wider transition-colors ${
                  link.highlight
                    ? 'text-4xl text-desert-coral hover:text-desert-coral/80'
                    : 'text-3xl text-desert-text hover:text-desert-teal'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
