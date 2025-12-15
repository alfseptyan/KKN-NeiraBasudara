import { InteractiveMap } from "@/components/interactive-map";
import Image from "next/image";

export function MapSection() {
  return (
    <section id="location" className="py-20 bg-[#FDFBF7] relative overflow-visible">


      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary">
            Lokasi KKN
          </h2>
          <p className="text-muted-foreground max-w-[800px] text-lg">
            Jelajahi sebaran lokasi KKN di Kepulauan Banda Neira.
          </p>
        </div>

        <div className="w-full relative mt-8 md:mt-12">
            {/* Rotating Flower Decoration - Large and behind the map box */}
            <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 w-64 h-64 md:w-96 md:h-96 opacity-100 pointer-events-none z-0">
                <div className="w-full h-full animate-[spin_20s_linear_infinite]">
                    <Image
                        src="/Asset/asset bunga.png"
                        alt="Bunga Rotating"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            
            {/* Dashed Border Container */}
            <div className="relative z-10 p-2 md:p-4 border-4 border-dashed border-orange-300/60 rounded-[2rem] bg-white/20 backdrop-blur-sm shadow-xl">
                 <InteractiveMap />
            </div>
        </div>
      </div>
    </section>
  );
}
