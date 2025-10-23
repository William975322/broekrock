import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@broekrock.be?subject=Contact van ${formData.name}&body=${encodeURIComponent(
      formData.message + '\n\nVan: ' + formData.email
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-[#0d0d0e] py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-neon-cyan mb-4 text-center">
          CONTACT
        </h2>
        <p className="font-inter text-center text-paper/70 mb-12 text-lg">
          Vragen? Shoot ons een bericht
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="bg-paper/5 border-2 border-paper/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-inter text-sm text-paper/80 mb-2 block">
                    Naam
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-paper/10 border-paper/20 text-paper focus:border-neon-cyan"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-inter text-sm text-paper/80 mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-paper/10 border-paper/20 text-paper focus:border-neon-cyan"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-inter text-sm text-paper/80 mb-2 block">
                    Bericht
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-paper/10 border-paper/20 text-paper focus:border-neon-cyan resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-bebas text-xl tracking-wider bg-neon-cyan hover:bg-neon-cyan/90 text-ink px-8 py-6 rounded-full border-4 border-neon-cyan hover:border-neon-cyan/90 transition-all duration-300"
                >
                  VERSTUUR
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-paper/5 border-2 border-paper/10 hover:border-neon-red/60 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail size={32} className="text-neon-red" />
                  <div>
                    <h3 className="font-bebas text-2xl tracking-wider text-paper mb-1">EMAIL</h3>
                    <a
                      href="mailto:info@broekrock.be"
                      className="font-inter text-paper/80 hover:text-neon-red transition-colors"
                    >
                      info@broekrock.be
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-paper/5 border-2 border-paper/10 hover:border-neon-cyan/60 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-bebas text-2xl tracking-wider text-paper mb-4">
                  VOLG ONS
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/broekrock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-paper/10 hover:bg-neon-red/20 border-2 border-paper/20 hover:border-neon-red flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-paper" />
                  </a>
                  <a
                    href="https://facebook.com/broekrock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-paper/10 hover:bg-neon-cyan/20 border-2 border-paper/20 hover:border-neon-cyan flex items-center justify-center transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} className="text-paper" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-neon-red/10 via-neon-cyan/10 to-neon-lime/10 border-2 border-neon-lime/30 rounded-lg p-6">
              <p className="font-inter text-paper/80 text-sm leading-relaxed">
                Voor persaanvragen, sponsoring, of technische info, mail ons rechtstreeks. We
                antwoorden zo snel mogelijk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
