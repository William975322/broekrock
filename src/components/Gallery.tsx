const GALLERY_IMAGES = [
  { src: '/assets/artists/Tusky5.jpg', alt: 'Tusky live performance' },
  { src: '/assets/artists/Itchy_P400-5_Ilkay-Karakurt_010.jpg', alt: 'Itchy on stage' },
  { src: '/assets/artists/Bellestate-2025-large.jpg', alt: 'Bellestate performing' },
  { src: '/assets/artists/2dd3654317af2b6584f62871070e1e70.jpg', alt: 'Festival atmosphere' },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-desert-sand py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-desert-text mb-4 text-center">
          GALLERY
        </h2>
        <p className="font-inter text-center text-desert-muted mb-12 text-lg">
          Experience the energy of Broekrock
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 brightness-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="font-bebas text-3xl md:text-4xl tracking-wider text-desert-text mb-6 text-center">
            AFTERMOVIE
          </h3>
          <div className="aspect-video bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="w-full h-full flex items-center justify-center text-desert-muted font-inter">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-lg">Aftermovie available after the festival</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
