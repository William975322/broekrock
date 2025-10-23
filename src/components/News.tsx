import { useEffect, useState } from 'react';
import { supabase, NewsPost } from '../lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar } from 'lucide-react';

export function News() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setNews(data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section id="news" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-desert-text mb-4 text-center">
          NEWS
        </h2>
        <p className="font-inter text-center text-desert-muted mb-12 text-lg">
          Stay updated with the latest Broekrock updates
        </p>

        {loading ? (
          <div className="text-center font-inter text-desert-muted">Loading news...</div>
        ) : news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((post) => (
              <Card
                key={post.id}
                className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-2xl"
              >
                {post.image && (
                  <div className="aspect-video overflow-hidden rounded-t-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 brightness-110"
                      loading="lazy"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-desert-teal font-inter uppercase tracking-wider mb-3">
                    <Calendar size={14} />
                    {formatDate(post.published_at)}
                  </div>
                  <CardTitle className="font-bebas text-2xl tracking-wider text-desert-text group-hover:text-desert-coral transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-inter text-sm text-desert-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-desert-sand rounded-2xl p-12">
              <p className="font-inter text-desert-muted text-lg">
                More news about Broekrock 2026 coming soon!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
