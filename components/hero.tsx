"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onReady?: () => void;
}

export function Hero({ onReady }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1596423736858-29307730e730?q=80&w=1920&auto=format&fit=crop"
        className="absolute inset-0 h-full w-full object-cover"
        onLoadedData={onReady}
      >
        <source src="https://media.githubusercontent.com/media/alfseptyan/KKN-NeiraBasudara/master/public/videoNeira.mp4" type="video/mp4" />
      </video>

      {/* Robust Fallback/Overlay - Ensures background is never blank */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596423736858-29307730e730?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center -z-20" />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content Overlay */}
      <div className="container relative z-20 flex flex-col items-center text-center text-white px-4 animate-fade-in-up">
        <div className="relative h-32 w-32 md:h-48 md:w-48 mb-4 animate-fade-in-up delay-100">
            <Image 
                src="/Logo neira circle.png" 
                alt="Logo Neira Basudara"
                fill
                className="object-contain"
                priority
            />
        </div>
        
        <div className="relative mb-1 h-24 w-64 md:h-32 md:w-96 animate-fade-in-up delay-200">
            <Image 
                src="/Neira Basudara Text.png" 
                alt="Neira Basudara"
                fill
                className="object-contain drop-shadow-lg"
                priority
            />
        </div>
        
        <p className="text-lg md:text-2xl font-light max-w-2xl text-gray-200 mb-6 animate-fade-in-up delay-300">
          KKN-PPM UGM Kec. Banda & Kep. Banda, Maluku Tengah
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2 animate-fade-in-up delay-300">
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/20 hover:text-white font-semibold text-lg px-8 py-6 h-auto" asChild>
                <Link href="#about">Tentang Kami</Link>
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 h-auto" asChild>
                <Link href="#admin">Kebutuhan Administrasi</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
