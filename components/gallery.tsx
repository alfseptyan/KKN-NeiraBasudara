"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Data Images (Pekan 1 - 4)
// Data Images (Pekan 1 - 4)
const galleryData = {
  "Pekan 1": [
    "/Gallery Web/Pekan 1/pekan1-6.jpg",
    "/Gallery Web/Pekan 1/pekan1-5.jpg",
    "/Gallery Web/Pekan 1/pekan1-4.jpg",
    "/Gallery Web/Pekan 1/pekan1-3.jpg",
    "/Gallery Web/Pekan 1/pekan1-2.jpg",
    "/Gallery Web/Pekan 1/pekan1-1.jpg",
  ],
  "Pekan 2": [
    "/Gallery Web/Pekan 2/pekan2-6.jpg",
    "/Gallery Web/Pekan 2/pekan2-5.jpg",
    "/Gallery Web/Pekan 2/pekan2-4.jpg",
    "/Gallery Web/Pekan 2/pekan2-3.jpg",
    "/Gallery Web/Pekan 2/pekan2-2.jpg",
    "/Gallery Web/Pekan 2/pekan2-1.jpg",
  ],
  "Pekan 3": [
    "/Gallery Web/Pekan 3/pekan3-6.jpg",
    "/Gallery Web/Pekan 3/pekan3-5.jpg",
    "/Gallery Web/Pekan 3/pekan3-4.jpg",
    "/Gallery Web/Pekan 3/pekan3-3.jpg",
    "/Gallery Web/Pekan 3/pekan3-2.jpg",
    "/Gallery Web/Pekan 3/pekan3-1.jpg",
  ],
  "Pekan 4": [
    "/Gallery Web/Pekan 4/pekan4-8.jpg",
    "/Gallery Web/Pekan 4/pekan4-7.jpg",
    "/Gallery Web/Pekan 4/pekan4-6.jpg",
    "/Gallery Web/Pekan 4/pekan4-5.jpg",
    "/Gallery Web/Pekan 4/pekan4-4.jpg",
    "/Gallery Web/Pekan 4/pekan4-3.jpg",
    "/Gallery Web/Pekan 4/pekan4-2.jpg",
    "/Gallery Web/Pekan 4/pekan4-1.jpg",
  ]
};

type PekanType = keyof typeof galleryData;

export function Gallery() {
  const [activeTab, setActiveTab] = useState<PekanType>("Pekan 1");

  return (
    <section id="gallery" className="w-full py-12 bg-[#FDFBF7]"> {/* Lightest warm background - Reduced padding */}
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
            {/* Header aligned with grid */}
            <div className="flex flex-col lg:flex-row justify-between items-end mb-6 gap-4 border-b border-orange-200/50 pb-4">
              <div className="text-left relative">
                 {/* Flower Decoration */}
                 <div className="absolute -top-10 -left-6 w-20 h-20 opacity-80 pointer-events-none -z-10">
                    <Image 
                        src="/Asset/asset bunga.png" 
                        alt="Bunga Pala" 
                        fill 
                        className="object-contain"
                    />
                 </div>
                <div className="relative h-12 lg:h-16 w-64 lg:w-96 mb-2 relative z-10">
                   <Image
                      src="/Judul/Galeri Kegiatan1.png"
                      alt="Galeri Kegiatan"
                      fill
                      className="object-contain object-left"
                   />
                </div>
                <p className="text-muted-foreground max-w-xl text-base font-medium relative z-10">
                  Jelajahi momen berkesan dari perjalanan KKN-PPM UGM di Banda Neira.
                </p>
              </div>

              {/* Minimalist Tabs Navigation */}
              <div className="flex flex-wrap gap-2">
                {Object.keys(galleryData).map((pekan) => (
                  <button
                    key={pekan}
                    onClick={() => setActiveTab(pekan as PekanType)}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium transition-all duration-300 relative",
                      activeTab === pekan
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {pekan}
                    {activeTab === pekan && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in slide-in-from-left-2 duration-300" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid with last row centered */}
            {(() => {
                const images = galleryData[activeTab].slice(0, activeTab === "Pekan 4" ? 8 : 6);
                const itemsPerRow = activeTab === "Pekan 4" ? 4 : 3; // lg breakpoint
                const fullRowsCount = Math.floor(images.length / itemsPerRow) * itemsPerRow;
                const fullRowImages = images.slice(0, fullRowsCount);
                const lastRowImages = images.slice(fullRowsCount);
                
                const renderImage = (src: string, idx: number) => (
                    <div 
                        key={`${activeTab}-${idx}`} 
                        className={cn(
                            "relative group overflow-hidden bg-gray-100 aspect-[4/5]",
                            activeTab === "Pekan 4"
                                ? "w-[calc(33.33%-6px)] lg:w-[calc(25%-6px)]" 
                                : "w-[calc(33.33%-6px)] lg:w-[calc(33.33%-6px)]"
                        )}
                    > 
                        <Image 
                            src={src} 
                            alt={`Dokumentasi ${activeTab} - ${idx + 1}`}
                            fill
                            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                            loading="lazy"
                            sizes="(max-width: 768px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                           <span className="inline-block px-2 py-0.5 bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-primary">
                             Foto {idx + 1}
                           </span>
                        </div>
                    </div>
                );
                
                return (
                    <div className="animate-in fade-in zoom-in duration-700">
                        {/* Full rows - left aligned */}
                        <div className="flex flex-wrap justify-start gap-2">
                            {fullRowImages.map((src, idx) => renderImage(src, idx))}
                        </div>
                        {/* Last row - centered */}
                        {lastRowImages.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {lastRowImages.map((src, idx) => renderImage(src, fullRowsCount + idx))}
                            </div>
                        )}
                    </div>
                );
            })()}
        </div>
      </div>
    </section>
  );
}
