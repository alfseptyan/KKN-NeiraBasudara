"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Tentang", href: "#about" },
  { name: "Lokasi", href: "#location" },
  { name: "Timeline", href: "#timeline" },
  { name: "Galeri", href: "#gallery" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
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
    <header className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto w-[95%] max-w-7xl rounded-full ${navbarClasses}`}>
      <div className="w-full flex h-16 items-center justify-between px-6 md:px-8">
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
            <div className="relative h-8 w-40 ml-2" style={{ filter: isScrolled ? "invert(1) brightness(0.2)" : "" }}>
                <Image 
                    src="/Neira Basudara Text.png" 
                    alt="Neira Basudara"
                    fill
                    className="object-contain"
                />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-secondary hover:bg-secondary/10" : "text-white hover:bg-white/10"}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-secondary">
              <SheetHeader>
                <SheetTitle className="text-left font-bold text-primary text-xl">
                  Neira Basudara
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-secondary hover:text-primary transition-colors border-b border-gray-100 pb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full" size="lg" asChild>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdiA8apmbGaDEnD6EyP9pb_-gn31TrtTog1Rt_YqrCDvr-Y-A/viewform" target="_blank" onClick={() => setIsOpen(false)}>
                    Daftar Sekarang
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
