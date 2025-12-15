export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary">
            Tentang Neira Basudara
          </h2>
          <p className="text-muted-foreground max-w-[800px] text-lg">
            KKN-PPM UGM Periode 2 di Banda Neira, Maluku Tengah.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                    <span className="font-semibold text-foreground">Neira Basudara</span> merupakan inisiatif KKN-PPM UGM yang berfokus pada pengembangan berkelanjutan di wilayah Kepulauan Banda. 
                    Kami hadir dengan semangat kolaborasi untuk memberdayakan potensi lokal melalui pendekatan ekologis, sosial, dan kultural.
                </p>
                <p>
                    Mengusung nilai <span className="text-primary font-medium">Zero Waste</span> dan <span className="text-primary font-medium">Eco-Heritage Tourism</span>, 
                    kami berkomitmen untuk menjaga kelestarian alam Banda Neira sekaligus mengangkat kekayaan sejarahnya yang mendunia.
                </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-muted">
                {/* Placeholder for About Image */}
                <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-muted-foreground">
                    Image: Team or Landscape
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
