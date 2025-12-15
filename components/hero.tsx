import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* Placeholder: User should replace this with actual video asset in public/ folder */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback if video is missing or loading */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596423736858-29307730e730?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center -z-10" />

      {/* Content Overlay */}
      <div className="container relative z-20 flex flex-col items-center text-center text-white space-y-6 px-4">
        {/* Logo Placement: Center as requested */}
        <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full bg-white/10 backdrop-blur-sm mb-4 overflow-hidden border-2 border-primary/20">
            <Image 
                src="/Logo neira circle.png" 
                alt="Logo Neira Basudara"
                fill
                className="object-cover"
            />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Neira Basudara
        </h1>
        
        <p className="text-lg md:text-2xl font-light max-w-2xl text-gray-200">
          KKN-PPM UGM Banda Neira &bull; Maluku Tengah
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 h-auto" asChild>
                <Link href="#admin">Kebutuhan Administrasi</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/20 hover:text-white font-semibold text-lg px-8 py-6 h-auto" asChild>
                <Link href="#about">Tentang Kami</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
