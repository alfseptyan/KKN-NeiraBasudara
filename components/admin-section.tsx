import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Send, Download } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

export function AdminSection() {
  return (
    <section id="admin" className="w-full py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="relative h-12 lg:h-16 w-72 lg:w-[28rem] mx-auto mb-4">
             <Image
                src="/Judul/Rekruitmen Terbuka1.png"
                alt="Rekruitmen Terbuka"
                fill
                className="object-contain"
             />
          </div>
          <p className="text-lg text-muted-foreground">
            Akses dokumen dan formulir pendaftaran di sini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Surat Pernyataan */}
            <Card className="group relative overflow-hidden border-orange-200/50 bg-gradient-to-br from-white to-orange-50/50 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
                <div className="absolute -right-6 -top-6 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                    <Image
                        src="/Asset/asset batik.png"
                        alt="Batik Decoration"
                        fill
                        className="object-contain rotate-12"
                    />
                </div>
                <CardHeader className="relative z-10 pb-2">
                    <div className="h-1 w-12 bg-primary/30 rounded-full mb-4" />
                    <CardTitle className="text-xl">Surat Pernyataan</CardTitle>
                    <CardDescription className="text-base">Template surat izin orang tua & komitmen.</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2 pb-6">
                    <p className="text-sm text-muted-foreground">Wajib diunduh, diisi, dan ditandatangani.</p>
                </CardContent>
                <CardFooter className="relative z-10 pt-0">
                    <Button variant="outline" className="w-full gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors" asChild>
                        <Link href="https://docs.google.com/document/d/1jbr8AOPfsdo2gv0-SdJxJRp7l7MuPZZ6/edit?usp=sharing&ouid=115468532041751641455&rtpof=true&sd=true" target="_blank">
                            <Download className="h-4 w-4" /> Unduh Template
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            {/* Guidebook */}
            <Card className="group relative overflow-hidden border-orange-200/50 bg-gradient-to-br from-white to-orange-50/50 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
                <div className="absolute -right-6 -top-6 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                    <Image
                        src="/Asset/asset batik.png"
                        alt="Batik Decoration"
                        fill
                        className="object-contain rotate-12"
                    />
                </div>
                <CardHeader className="relative z-10 pb-2">
                    <div className="h-1 w-12 bg-primary/30 rounded-full mb-4" />
                    <CardTitle className="text-xl">Guidebook</CardTitle>
                    <CardDescription className="text-base">Panduan lengkap pendaftaran KKN.</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2 pb-6">
                    <p className="text-sm text-muted-foreground">Pelajari syarat dan ketentuan selengkapnya.</p>
                </CardContent>
                <CardFooter className="relative z-10 pt-0">
                    <Button variant="outline" className="w-full gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary transition-colors" asChild>
                        <Link href="https://s.id/GuidebookNeiraBasudara2026" target="_blank">
                            <BookOpen className="h-4 w-4" /> Baca Guidebook
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            {/* Form Pendaftaran */}
            <Card className="group relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-orange-100/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ring-1 ring-primary/10">
                <div className="absolute -right-6 -top-6 w-32 h-32 opacity-15 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none">
                     <Image
                        src="/asset batik.png"
                        alt="Batik Decoration"
                        fill
                        className="object-contain rotate-12"
                    />
                </div>
                <CardHeader className="relative z-10 pb-2">
                    <div className="h-1 w-12 bg-primary rounded-full mb-4" />
                    <CardTitle className="text-xl text-primary">Form Pendaftaran</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground/80">Akses Google Form Rekruitmen terbuka</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-2 pb-6">
                    <p className="text-sm text-muted-foreground">Siapkan semua berkas sebelum mengisi.</p>
                </CardContent>
                <CardFooter className="relative z-10 pt-0">
                    <Button className="w-full gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdiA8apmbGaDEnD6EyP9pb_-gn31TrtTog1Rt_YqrCDvr-Y-A/viewform" target="_blank">
                            Daftar Sekarang <Send className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
