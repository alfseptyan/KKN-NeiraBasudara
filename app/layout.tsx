import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KKN Neira Basudara - Banda Neira",
  description: "Website Resmi KKN-PPM UGM Neira Basudara di Banda Neira, Maluku. Informasi, Edukasi, dan Open Recruitment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-1 w-full flex flex-col items-center">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
