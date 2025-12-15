"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Data Images (Pekan 1 - 4)
const galleryData = {
  "Pekan 1": [
    "/Gallery Web/Pekan 1/[PEKAN PERTAMA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu pertama kami di Banda Neira sudah berl.jpg",
    "/Gallery Web/Pekan 1/[PEKAN PERTAMA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu pertama kami di Banda Neira sudah berl (1).jpg",
    "/Gallery Web/Pekan 1/[PEKAN PERTAMA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu pertama kami di Banda Neira sudah berl (2).jpg",
    "/Gallery Web/Pekan 1/[PEKAN PERTAMA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu pertama kami di Banda Neira sudah berl (3).jpg",
    "/Gallery Web/Pekan 1/[PEKAN PERTAMA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu pertama kami di Banda Neira sudah berl (4).jpg",
    "/Gallery Web/Pekan 1/[PEKAN PERTAMA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu pertama kami di Banda Neira sudah berl (5).jpg",
    "/Gallery Web/Pekan 1/[PEKAN PERTAMA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu pertama kami di Banda Neira sudah berl (6).jpg",
  ],
  "Pekan 2": [
    "/Gallery Web/Pekan 2/[PEKAN KEDUA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu kedua kami di Banda Neira telah berlalu .jpg",
    "/Gallery Web/Pekan 2/[PEKAN KEDUA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu kedua kami di Banda Neira telah berlalu  (1).jpg",
    "/Gallery Web/Pekan 2/[PEKAN KEDUA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu kedua kami di Banda Neira telah berlalu  (2).jpg",
    "/Gallery Web/Pekan 2/[PEKAN KEDUA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu kedua kami di Banda Neira telah berlalu  (3).jpg",
    "/Gallery Web/Pekan 2/[PEKAN KEDUA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu kedua kami di Banda Neira telah berlalu  (4).jpg",
    "/Gallery Web/Pekan 2/[PEKAN KEDUA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu kedua kami di Banda Neira telah berlalu  (5).jpg",
    "/Gallery Web/Pekan 2/[PEKAN KEDUA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu kedua kami di Banda Neira telah berlalu  (6).jpg",
  ],
  "Pekan 3": [
    "/Gallery Web/Pekan 3/[PEKAN KETIGA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu ketiga di Banda Neira, kami semakin men.jpg",
    "/Gallery Web/Pekan 3/[PEKAN KETIGA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu ketiga di Banda Neira, kami semakin men (1).jpg",
    "/Gallery Web/Pekan 3/[PEKAN KETIGA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu ketiga di Banda Neira, kami semakin men (2).jpg",
    "/Gallery Web/Pekan 3/[PEKAN KETIGA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu ketiga di Banda Neira, kami semakin men (3).jpg",
    "/Gallery Web/Pekan 3/[PEKAN KETIGA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu ketiga di Banda Neira, kami semakin men (4).jpg",
    "/Gallery Web/Pekan 3/[PEKAN KETIGA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu ketiga di Banda Neira, kami semakin men (5).jpg",
    "/Gallery Web/Pekan 3/[PEKAN KETIGA DI BANDA NEIRA]Halo, Kawan Neira! 👋Minggu ketiga di Banda Neira, kami semakin men (6).jpg",
  ],
  "Pekan 4": [
    "/Gallery Web/Pekan 4/[PEKAN KEEMPAT DI BANDA NEIRA]Halo, Kawan Neira! 🌿Empat pekan sudah kami belajar di Tanah Rempa.jpg",
    "/Gallery Web/Pekan 4/[PEKAN KEEMPAT DI BANDA NEIRA]Halo, Kawan Neira! 🌿Empat pekan sudah kami belajar di Tanah Rempa (1).jpg",
    "/Gallery Web/Pekan 4/[PEKAN KEEMPAT DI BANDA NEIRA]Halo, Kawan Neira! 🌿Empat pekan sudah kami belajar di Tanah Rempa (2).jpg",
    "/Gallery Web/Pekan 4/[PEKAN KEEMPAT DI BANDA NEIRA]Halo, Kawan Neira! 🌿Empat pekan sudah kami belajar di Tanah Rempa (3).jpg",
    "/Gallery Web/Pekan 4/[PEKAN KEEMPAT DI BANDA NEIRA]Halo, Kawan Neira! 🌿Empat pekan sudah kami belajar di Tanah Rempa (4).jpg",
    "/Gallery Web/Pekan 4/[PEKAN KEEMPAT DI BANDA NEIRA]Halo, Kawan Neira! 🌿Empat pekan sudah kami belajar di Tanah Rempa (5).jpg",
    "/Gallery Web/Pekan 4/[PEKAN KEEMPAT DI BANDA NEIRA]Halo, Kawan Neira! 🌿Empat pekan sudah kami belajar di Tanah Rempa (6).jpg",
    "/Gallery Web/Pekan 4/[PEKAN KEEMPAT DI BANDA NEIRA]Halo, Kawan Neira! 🌿Empat pekan sudah kami belajar di Tanah Rempa (7).jpg",
  ]
};

type PekanType = keyof typeof galleryData;

export function Gallery() {
  const [activeTab, setActiveTab] = useState<PekanType>("Pekan 1");

  return (
    <section id="gallery" className="w-full py-20 bg-[#FDFBF7]"> {/* Lightest warm background */}
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
            {/* Header aligned with grid */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 border-b border-orange-200/50 pb-8">
              <div className="text-left">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-secondary mb-3">
                  Galeri Kegiatan
                </h2>
                <p className="text-muted-foreground max-w-xl text-lg font-medium">
                  Jelajahi momen berkesan dari perjalanan KKN-PPM UGM di Banda Neira, yang terangkai indah dalam setiap pekannya.
                </p>
              </div>

              {/* Minimalist Tabs Navigation */}
              <div className="flex flex-wrap gap-2 md:gap-4">
                {Object.keys(galleryData).map((pekan) => (
                  <button
                    key={pekan}
                    onClick={() => setActiveTab(pekan as PekanType)}
                    className={cn(
                      "px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 relative",
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

            {/* Grid aligned with header */}
            <div className={cn(
              "grid gap-2 animate-in fade-in zoom-in duration-700 key={activeTab}",
              activeTab === "Pekan 4" 
                ? "grid-cols-2 md:grid-cols-4" 
                : "grid-cols-2 md:grid-cols-3"
            )}>
                {galleryData[activeTab].slice(0, activeTab === "Pekan 4" ? 8 : 6).map((src, idx) => (
                    <div key={`${activeTab}-${idx}`} className="relative group overflow-hidden bg-gray-100 aspect-[4/5]">
                        <Image 
                            src={src} 
                            alt={`Dokumentasi ${activeTab} - ${idx + 1}`}
                            fill
                            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                            loading="lazy"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                           <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur text-xs font-semibold uppercase tracking-wider text-primary">
                             {activeTab} &bull; Foto {idx + 1}
                           </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
