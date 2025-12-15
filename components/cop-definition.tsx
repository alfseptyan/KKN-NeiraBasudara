import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, Globe } from "lucide-react";
import Image from "next/image";

export function CopDefinition() {
  return (
    <section id="cop" className="py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 relative">
           {/* Bird Decoration */}
           <div className="absolute -top-12 -right-4 md:-right-20 w-24 h-24 md:w-32 md:h-32 opacity-80 pointer-events-none animate-bounce duration-[3000ms]">
              <Image 
                src="/Asset/asset burung.png" 
                alt="Burung Banda" 
                fill 
                className="object-contain"
              />
           </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary">
            Community of Practice (CoP)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                    src="/GambarCOP.png"
                    alt="Community of Practice Activity"
                    fill
                    className="object-cover"
                />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify">
                <p>
                    Community of Practice (CoP) merupakan wadah pembelajaran kolaboratif yang menghimpun individu-individu dengan minat dan kepedulian yang sejalan. Melalui ruang pertemuan dan diskusi yang berlangsung secara berkelanjutan, saling berbagi pengalaman serta merumuskan solusi atas tantangan yang dihadapi secara bersama.
                </p>
                <p>
                    Semangat partisipasi dan kesetaraan dalam pertukaran pengetahuan sejalan dengan nilai Kebandaan yang menekankan kebersamaan, solidaritas, dan tanggung jawab kolektif terhadap ruang hidup. Dalam kerangka Neira Basudara, pendekatan CoP menjadi fondasi pengembangan Living Laboratory yang mendorong pembelajaran berbasis praktik, refleksi kolektif, serta keberlanjutan yang berakar pada pengetahuan lokal dan pengalaman bersama.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
