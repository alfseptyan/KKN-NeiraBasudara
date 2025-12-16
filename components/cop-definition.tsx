import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, Globe } from "lucide-react";
import Image from "next/image";

export function CopDefinition() {
  return (
    <section id="cop" className="w-full py-20 relative overflow-hidden" style={{ backgroundColor: '#7CBCBB' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image 
            src="/Asset/asset batik.png" 
            alt="Pattern" 
            fill 
            className="object-cover"
          />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Dashed Border Container Frame */}
        <div className="absolute inset-0 border-4 border-dashed border-white/50 rounded-[3rem] pointer-events-none -z-10 m-4 md:m-0" />

        {/* Section Header - Centered */}
        <div className="flex justify-center mb-10 md:mb-14">
            <div className="inline-block px-8 py-3 bg-white rounded-full border-2 border-dashed border-[#F4C5A2] shadow-sm transform hover:scale-105 transition-transform duration-300">
                <div className="relative h-12 md:h-16 w-72 md:w-[32rem]">
                    <Image
                        src="/Judul/Community of Practice (CoP).png"
                        alt="Community of Practice (CoP)"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
             
             {/* Left Column: Image */}
             <div className="relative">
                 {/* Bird Decoration - Floating */}
                 <div className="absolute -top-12 -right-4 z-20 w-24 h-24 md:w-32 md:h-32 pointer-events-none animate-bounce duration-[3000ms]">
                    <Image 
                        src="/Asset/asset burung.png" 
                        alt="Burung Banda" 
                        fill 
                        className="object-contain"
                    />
                 </div>
                 
                 <div className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-dashed border-[#F4C5A2]/50 bg-white transform hover:rotate-1 transition-transform duration-500">
                    <Image
                        src="/GambarCOP.png"
                        alt="Community of Practice Activity"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            
            {/* Right Column: Content Cards */}
            <div className="space-y-8">

                {/* Content Card 1 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-[#3B9698] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                         <div className="w-16 h-16 relative">
                            <Image src="/Asset/asset batik.png" alt="icon" fill className="object-contain" />
                         </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#3B9698] mb-3 uppercase tracking-wide">Definisi</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                        Community of Practice (CoP) merupakan wadah pembelajaran kolaboratif yang menghimpun individu-individu dengan minat dan kepedulian yang sejalan. Melalui ruang pertemuan dan diskusi yang berlangsung secara berkelanjutan, saling berbagi pengalaman serta merumuskan solusi atas tantangan yang dihadapi secara bersama.
                    </p>
                </div>

                {/* Content Card 2 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-[#F4C5A2] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                     <div className="absolute top-0 right-0 p-4 opacity-10">
                         <div className="w-16 h-16 relative">
                            <Image src="/Asset/asset batik.png" alt="icon" fill className="object-contain" />
                         </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#F4C5A2] mb-3 uppercase tracking-wide">Nilai Utama</h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                        Semangat partisipasi dan kesetaraan dalam pertukaran pengetahuan sejalan dengan nilai Kebandaan yang menekankan kebersamaan, solidaritas, dan tanggung jawab kolektif terhadap ruang hidup. Pendekatan CoP menjadi fondasi pengembangan Living Laboratory yang mendorong pembelajaran berbasis praktik.
                    </p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}
