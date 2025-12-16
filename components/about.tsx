"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const aboutImages = [
  "/Tentang/tentang-slider-1.png",
  "/Tentang/tentang-slider-2.png",
  "/Tentang/tentang-slider-3.png",
];

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="relative h-12 md:h-16 w-80 md:w-[36rem] mx-auto">
             <Image
                src="/Judul/Tentang1.png"
                alt="Tentang Neira Basudara"
                fill
                className="object-contain"
             />
          </div>
          <p className="text-muted-foreground max-w-[800px] text-lg">
            KKN-PPM UGM Periode 2 di Banda Neira, Maluku Tengah.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed order-2 md:order-1 relative">
                {/* Batik Decoration */}
                <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10 pointer-events-none -z-10 rotate-12">
                   <Image 
                     src="/Asset/asset batik.png" 
                     alt="Batik Pattern" 
                     fill 
                     className="object-contain"
                   />
                </div>
                
                <p>
                    <span className="font-semibold text-foreground">Neira Basudara</span> merupakan inisiatif KKN-PPM UGM yang berfokus pada pengembangan berkelanjutan di wilayah Kepulauan Banda. 
                    Kami hadir dengan semangat kolaborasi untuk memberdayakan potensi lokal melalui pendekatan ekologis, sosial, dan kultural.
                </p>
                <p>
                    Mengusung nilai <span className="text-primary font-medium">Zero Waste</span> dan <span className="text-primary font-medium">Eco-Heritage Tourism</span>, 
                    kami berkomitmen untuk menjaga kelestarian alam Banda Neira sekaligus mengangkat kekayaan sejarahnya yang mendunia.
                </p>
            </div>
            
            {/* Image Slider */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-muted order-1 md:order-2 group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={aboutImages[currentIndex]}
                            alt={`Tentang Neira Basudara ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={nextSlide}
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {aboutImages.map((_, idx) => (
                        <div 
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                            }`} 
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
