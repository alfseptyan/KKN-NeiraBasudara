import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-primary">Neira Basudara</h3>
            <p className="text-sm text-muted-foreground">
              Media resmi KKN-PPM UGM di Banda Neira. Menuju pariwisata ekologis
              dan berkelanjutan.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold">Navigasi</h3>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="#about" className="hover:text-primary">Tentang</Link>
              <Link href="#location" className="hover:text-primary">Lokasi</Link>
              <Link href="#timeline" className="hover:text-primary">Timeline</Link>
              <Link href="#admin" className="hover:text-primary">Administrasi</Link>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold">Kontak</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>CP: Haiba (+62 815-7803-4989)</p>
              <Link
                href="https://www.instagram.com/neirabasudara"
                className="flex items-center gap-2 hover:text-primary mt-2"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-4 w-4" />
                @neirabasudara
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} KKN Neira Basudara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
