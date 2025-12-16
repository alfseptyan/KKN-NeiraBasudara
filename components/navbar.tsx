"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";


const navItems = [
  { name: "Home", href: "/" },
  { name: "Tentang", href: "#about" },
  { name: "Lokasi", href: "#location" },
  { name: "Timeline", href: "#timeline" },
  { name: "Galeri", href: "#gallery" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      
      // Update scrolled state
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Default to home if at top
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic Styles
  const navbarClasses = isScrolled 
    ? "bg-white/80 backdrop-blur-md shadow-md border-transparent text-secondary" 
    : "bg-transparent border-transparent text-white";

  const navItemClasses = (itemHref: string) => {
    const isActive = activeSection === itemHref;
    if (isScrolled) {
        return isActive ? "text-primary font-semibold" : "text-secondary hover:text-primary";
    }
    return isActive ? "text-primary font-semibold" : "text-white/90 hover:text-primary";
  };
  
  const logoFilter = isScrolled ? "invert(1)" : ""; // Invert white logo to black on white bg

  return (
    <header className={`fixed top-2 lg:top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto w-[92%] lg:w-[95%] max-w-7xl rounded-full ${navbarClasses}`}>
      <div className="w-full flex h-14 lg:h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image 
                    src="/Logo neira circle.png" 
                    alt="Logo Neira Basudara"
                    fill
                    className="object-contain"
                />
            </div>
            <div className="relative h-10 w-48 -ml-1" style={{ filter: isScrolled ? "invert(1) brightness(0.2)" : "" }}>
                <Image 
                    src="/Neira Basudara Text2.png" 
                    alt="Neira Basudara"
                    fill
                    className="object-contain object-left"
                />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium transition-colors tracking-wide relative group ${navItemClasses(item.href)}`}
              onClick={() => setActiveSection(item.href)}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                activeSection === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 shadow-lg shadow-primary/20" 
            size="sm" 
            asChild
          >
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdiA8apmbGaDEnD6EyP9pb_-gn31TrtTog1Rt_YqrCDvr-Y-A/viewform" target="_blank">Daftar Sekarang</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
            <Button 
                variant="ghost" 
                size="icon" 
                className={isScrolled ? "text-secondary hover:bg-secondary/10" : "text-white hover:bg-white/10"}
                onClick={() => setIsOpen(true)}
            >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
            </Button>

            {/* Custom Centered Modal Menu - Portalled to body to escape z-index traps */}
            {isOpen && mounted && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-sm rounded-[2rem] shadow-2xl p-6 relative animate-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="relative flex items-center justify-center mb-8">
                             <div className="flex items-center gap-0">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                    <Image 
                                        src="/Logo neira circle.png" 
                                        alt="Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="relative h-10 w-44 ml-1">
                                    <Image 
                                        src="/Neira Basudara Text2.png" 
                                        alt="Neira Basudara"
                                        fill
                                        className="object-contain brightness-0"
                                    />
                                </div>
                            </div>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </Button>
                        </div>

                        {/* Links */}
                        <nav className="flex flex-col space-y-2 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block w-full py-3 text-lg font-medium text-secondary hover:text-primary hover:bg-orange-50 rounded-xl transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="mt-8">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full py-6 text-lg shadow-lg shadow-orange-200" asChild>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdiA8apmbGaDEnD6EyP9pb_-gn31TrtTog1Rt_YqrCDvr-Y-A/viewform" target="_blank" onClick={() => setIsOpen(false)}>
                                    Daftar Sekarang
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
      </div>
    </header>
  );
}
