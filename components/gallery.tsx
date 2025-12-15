
export function Gallery() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1596423736858-29307730e730?q=80&w=600&fit=crop", alt: "Pemandangan Banda Neira" },
    { src: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=600&fit=crop", alt: "Laut Banda" },
    { src: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&fit=crop", alt: "Kegiatan Masyarakat" },
    { src: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=600&fit=crop", alt: "Budaya Lokal" },
    { src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&fit=crop", alt: "Ekowisata" },
    { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&fit=crop", alt: "Keindahan Alam" },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary mb-4">
            Galeri Kegiatan
          </h2>
          <p className="text-lg text-muted-foreground">
            Dokumentasi keindahan dan keseruan di Banda Neira.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl aspect-square shadow-md">
                    <img 
                        src={photo.src} 
                        alt={photo.alt} 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-center font-medium">{photo.alt}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
