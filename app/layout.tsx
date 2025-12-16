import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KKN Neira Basudara - Banda Neira",
  description: "Website Resmi KKN-PPM UGM Neira Basudara di Banda Neira, Maluku. Informasi, Edukasi, dan Open Recruitment.",
  icons: {
    icon: "/Logo neira circle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${figtree.className} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-1 w-full flex flex-col items-center">
            {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "G-JT6VGN5M3X"} />
      </body>
    </html>
  );
}
