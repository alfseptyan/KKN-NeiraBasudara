import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, Globe } from "lucide-react";

export function CopDefinition() {
  return (
    <section id="cop" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary mb-4">
            Community of Practice (CoP)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pendekatan kami dalam membangun kolaborasi yang berkelanjutan dan berdampak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/50 backdrop-blur hover:bg-background transition-colors border-primary/10">
                <CardHeader>
                    <Users className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Kolaborasi Sosial</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Membangun jejaring sosial yang kuat antara mahasiswa, masyarakat, dan pemangku kepentingan untuk saling belajar dan berbagi pengetahuan.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur hover:bg-background transition-colors border-primary/10">
                <CardHeader>
                    <Leaf className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Ekologi Berkelanjutan</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Menanamkan nilai-nilai keberlanjutan lingkungan dalam setiap aktivitas ekonomi dan pariwisata.
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur hover:bg-background transition-colors border-primary/10">
                <CardHeader>
                    <Globe className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Warisan Budaya</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Melestarikan dan mempromosikan kekayaan sejarah dan budaya Banda Neira sebagai aset global.
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
