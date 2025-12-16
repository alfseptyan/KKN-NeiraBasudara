"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-white pt-10 pb-6 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          
          {/* LEFT SECTION: Brand, Check, Address, Contact, Socials */}
          <div className="flex flex-col space-y-4 max-w-lg">
            {/* Branding - Order swapped: Text first, then Image */}
            <div className="flex flex-col space-y-3">
                <h2 className="text-lg md:text-xl font-bold tracking-tight leading-snug">
                    KKN-PPM UGM Kec. Banda & Kep. Banda, Maluku Tengah
                </h2>
                <div className="relative h-8 w-32">
                    <Image 
                        src="/Neira Basudara Text2.png" 
                        alt="Neira Basudara"
                        fill
                        className="object-contain object-left" 
                    />
                </div>
            </div>

            <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-start gap-3">
                    <div className="mt-0.5 min-w-[16px]"><MapPin className="h-4 w-4 text-amber-300" /></div>
                    <p className="leading-relaxed text-xs md:text-sm">
                        Kecamatan Banda, Kabupaten Maluku Tengah,<br/>
                        Provinsi Maluku, Indonesia.
                    </p>
                </div>
                {/* Contact Info */}
                <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-amber-300" />
                    <p className="text-xs md:text-sm">Narahubung: +62 815-7803-4989 (Haiba)</p>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-amber-300" />
                    <p className="text-xs md:text-sm">neirabasudara.kknugm@gmail.com</p>
                </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex gap-3 pt-1">
                 <Link href="https://www.instagram.com/neirabasudara" target="_blank" className="p-1.5 bg-white/10 rounded-lg hover:bg-amber-400 hover:text-secondary transition-all duration-300">
                    <Instagram className="h-4 w-4" />
                 </Link>
                 <Link href="https://www.tiktok.com/@neira.basudara" target="_blank" className="p-1.5 bg-white/10 rounded-lg hover:bg-amber-400 hover:text-secondary transition-all duration-300">
                    {/* TikTok Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                 </Link>
            </div>
          </div>

          {/* RIGHT SECTION: Navigation Columns */}
          {/* Pushed down less to match cleaner look */}
          {/* RIGHT SECTION: Navigation Columns */}
          {/* Pushed down less to match cleaner look */}
          <div className="grid grid-cols-2 gap-8 md:gap-16 md:pt-20">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
                <h4 className="font-bold text-base">Eksplorasi</h4>
                <nav className="flex flex-col space-y-1.5 text-sm text-white/80">
                    <Link href="/" className="hover:text-amber-300 transition-colors">Beranda</Link>
                    <Link href="#about" className="hover:text-amber-300 transition-colors">Tentang Kami</Link>
                    <Link href="#location" className="hover:text-amber-300 transition-colors">Lokasi</Link>
                    <Link href="#gallery" className="hover:text-amber-300 transition-colors">Galeri</Link>
                </nav>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
                <h4 className="font-bold text-base">Informasi</h4>
                <nav className="flex flex-col space-y-1.5 text-sm text-white/80">
                    <Link href="#timeline" className="hover:text-amber-300 transition-colors">Timeline</Link>
                    <Link href="#admin" className="hover:text-amber-300 transition-colors">Pendaftaran</Link>
                    <Link href="https://s.id/GuidebookNeiraBasudara2026" target="_blank" className="hover:text-amber-300 transition-colors">Guidebook</Link>
                    <Link href="#faq" className="hover:text-amber-300 transition-colors">FAQ</Link>
                </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex justify-center text-center text-[10px] md:text-xs text-white/50">
            <p>&copy; 2026 KKN-PPM UGM Neira Basudara. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-6 right-6 md:right-10 p-2.5 bg-amber-400 text-secondary rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-20"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
