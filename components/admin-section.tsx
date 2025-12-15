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

export function AdminSection() {
  return (
    <section id="admin" className="py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
            Kebutuhan Administrasi
          </h2>
          <p className="text-lg text-muted-foreground">
            Akses dokumen dan formulir pendaftaran di sini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-primary/20 bg-background">
                <CardHeader>
                    <FileText className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Surat Pernyataan</CardTitle>
                    <CardDescription>Template surat izin orang tua & komitmen.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">Wajib diunduh, diisi, dan ditandatangani.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full gap-2" asChild>
                        <Link href="https://docs.google.com/document/d/1jbr8AOPfsdo2gv0-SdJxJRp7l7MuPZZ6/edit?usp=sharing&ouid=115468532041751641455&rtpof=true&sd=true" target="_blank">
                            <Download className="h-4 w-4" /> Unduh Template
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary/20 bg-background">
                <CardHeader>
                    <BookOpen className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Guidebook OPREC</CardTitle>
                    <CardDescription>Panduan lengkap pendaftaran KKN.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">Pelajari syarat dan ketentuan selengkapnya.</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full gap-2" asChild>
                        <Link href="/docs/guidebook.pdf" target="_blank">
                            <BookOpen className="h-4 w-4" /> Baca Guidebook
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary/20 bg-primary/5">
                <CardHeader>
                    <Send className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Form Pendaftaran</CardTitle>
                    <CardDescription>Akses Google Form OPREC.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">Siapkan semua berkas sebelum mengisi.</p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full gap-2" asChild>
                        <Link href="https://forms.google.com/example" target="_blank">
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
