import { InteractiveMap } from "@/components/interactive-map";

export function MapSection() {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary">
            Lokasi KKN
          </h2>
          <p className="text-muted-foreground max-w-[800px] text-lg">
            Jelajahi sebaran lokasi KKN di Kepulauan Banda Neira.
          </p>
        </div>

        <div className="w-full">
            <InteractiveMap />
        </div>
      </div>
    </section>
  );
}
