import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-white pt-12 pb-8">
      <div className="container px-6 md:px-12 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-center w-full max-w-5xl">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-16 w-48">
                <Image 
                    src="/Neira Basudara Text.png" 
                    alt="Neira Basudara"
                    fill
                    className="object-contain" 
                />
            </div>
            <p className="text-white/80 leading-relaxed max-w-xs mx-auto text-sm">
              Media resmi KKN-PPM UGM di Banda Neira. Bergerak bersama masyarakat menuju pariwisata yang ekologis, berbudaya, dan berkelanjutan.
            </p>
            <div className="pt-2">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-medium tracking-wide bg-white/5 backdrop-blur-sm">
                    Periode 2 &bull; 2025
                </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Jelajahi</h3>
            <nav className="flex flex-col space-y-3 text-sm text-white/80">
              <Link href="#about" className="hover:text-amber-300 transition-colors duration-300">Tentang Kami</Link>
              <Link href="#location" className="hover:text-amber-300 transition-colors duration-300">Lokasi Desa</Link>
              <Link href="#timeline" className="hover:text-amber-300 transition-colors duration-300">Timeline OPREC</Link>
              <Link href="#gallery" className="hover:text-amber-300 transition-colors duration-300">Galeri Foto</Link>
              <Link href="#admin" className="hover:text-amber-300 transition-colors duration-300">Administrasi</Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold tracking-wide">Hubungi Kami</h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex flex-col items-center gap-1">
                 <p className="font-medium text-white">Narahubung (CP)</p>
                 <p className="hover:text-amber-300 transition-colors duration-300 cursor-pointer">Haiba: +62 815-7803-4989</p>
              </div>
              <div className="flex items-center justify-center gap-4 pt-1">
                 <Link
                    href="https://www.instagram.com/neirabasudara"
                    className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300 group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-2.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                        <Instagram className="h-4 w-4" />
                    </div>
                  </Link>

                  <Link
                    href="https://www.tiktok.com/@neira.basudara"
                    className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300 group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-2.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                        {/* TikTok SVG Icon since it might not be in lucide-react */}
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="h-4 w-4"
                        >
                          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                    </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col items-center gap-6 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} KKN Neira Basudara. Universitas Gadjah Mada.</p>
            <div className="flex gap-8">
                <span className="hover:text-white transition-colors cursor-pointer duration-300">Privacy Policy</span>
                <span className="hover:text-white transition-colors cursor-pointer duration-300">Terms of Service</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
