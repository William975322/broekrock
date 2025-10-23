import { useEffect, useState } from 'react';
import { supabase, Artist } from '../lib/supabase';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Clock, MapPin } from 'lucide-react';

export function Lineup() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtists();
  }, []);

  async function fetchArtists() {
    try {
      const { data, error } = await supabase
        .from('artists')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setArtists(data || []);
    } catch (error) {
      console.error('Error fetching artists:', error);
    } finally {
      setLoading(false);
    }
  }

  const genres = ['all', ...Array.from(new Set(artists.map((a) => a.genre)))];
  const filteredArtists =
    selectedGenre === 'all' ? artists : artists.filter((a) => a.genre === selectedGenre);

  return (
    <section id="lineup" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-desert-text mb-4 text-center">
          LINE-UP 2026
        </h2>
        <p className="font-inter text-center text-desert-muted mb-12 text-lg">
          Five bands, one day, unforgettable
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`font-inter text-sm uppercase tracking-wider px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedGenre === genre
                  ? 'bg-desert-coral border-desert-coral text-white'
                  : 'bg-transparent border-desert-text/20 text-desert-muted hover:border-desert-teal hover:text-desert-teal'
              }`}
            >
              {genre === 'all' ? 'All Genres' : genre}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center font-inter text-desert-muted">Loading artists...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.map((artist) => (
              <Card
                key={artist.id}
                className="bg-desert-sand border-0 hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 brightness-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-desert-text via-desert-text/50 to-transparent opacity-40 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bebas text-4xl tracking-wider text-white mb-2">
                      {artist.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge
                        variant="outline"
                        className="bg-desert-coral/90 border-0 text-white font-inter"
                      >
                        {artist.country}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-desert-teal/90 border-0 text-white font-inter"
                      >
                        {artist.genre}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="font-inter text-sm text-desert-text leading-relaxed mb-4">
                    {artist.bio}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-desert-muted font-inter uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-desert-gold" />
                      {artist.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-desert-teal" />
                      Bulscampvelt
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredArtists.length === 0 && (
          <div className="text-center font-inter text-desert-muted">
            No artists found for this genre
          </div>
        )}
      </div>
    </section>
  );
}
