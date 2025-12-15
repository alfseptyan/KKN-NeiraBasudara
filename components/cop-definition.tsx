import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, Globe } from "lucide-react";

export function CopDefinition() {
  return (
    <section id="cop" className="py-28 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary mb-8">
            Community of Practice (CoP)
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify md:text-center">
            Community of Practice (CoP) merupakan wadah pembelajaran kolaboratif yang menghimpun individu-individu dengan minat dan kepedulian yang sejalan. Melalui ruang pertemuan dan diskusi yang berlangsung secara berkelanjutan, saling berbagi pengalaman serta merumuskan solusi atas tantangan yang dihadapi secara bersama. Semangat partisipasi dan kesetaraan dalam pertukaran pengetahuan sejalan dengan nilai Kebandaan yang menekankan kebersamaan, solidaritas, dan tanggung jawab kolektif terhadap ruang hidup. Dalam kerangka Neira Basudara, pendekatan CoP menjadi fondasi pengembangan Living Laboratory yang mendorong pembelajaran berbasis praktik, refleksi kolektif, serta keberlanjutan yang berakar pada pengetahuan lokal dan pengalaman bersama.
          </p>
        </div>
      </div>
    </section>
  );
}
