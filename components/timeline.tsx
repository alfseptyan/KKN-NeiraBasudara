import { CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";

const timelineEvents = [
  { date: "16–19 Des 2025", title: "Pendaftaran", status: "done", desc: "Isi formulir dan lengkapi berkas." },
  { date: "20 Des 2025", title: "Pengumuman Hasil Seleksi", status: "done", desc: "Dikirim ke email pendaftar." },
  { date: "22–23 Des 2025", title: "Wawancara", status: "active", desc: "Sesi wawancara & penugasan." },
  { date: "24 Des 2025", title: "Pengumuman Akhir", status: "upcoming", desc: "Pukul 15.00 WIB." },
  { date: "24 Des 2025", title: "Batas Konfirmasi", status: "upcoming", desc: "Konfirmasi ke Narahubung maks. pukul 23.59 WIB." },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 relative">
          {/* Butterfly Decoration */}
          <div className="absolute top-0 right-10 lg:right-[20%] w-16 h-16 lg:w-20 lg:h-20 opacity-60 pointer-events-none rotate-12">
              <Image 
                src="/Asset/asset kupu-kupu.png" 
                alt="Kupu-Kupu" 
                fill 
                className="object-contain"
              />
          </div>
          <div className="relative h-12 lg:h-16 w-40 lg:w-56 mx-auto mb-4">
             <Image
                src="/Judul/Timeline1.png"
                alt="Timeline"
                fill
                className="object-contain"
              />
          </div>
          <p className="text-lg text-muted-foreground">
            Catat tanggal penting rekrutmen kami.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:flex justify-between items-start relative px-4">
            {/* Line connector */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-muted-foreground/20 -z-10 mx-10 rounded-full" />
            
            {timelineEvents.map((event, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 w-60 relative">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center border-4 ${event.status === "done" ? "bg-primary border-primary/20 text-white" : event.status === "active" ? "bg-white border-primary text-primary animate-pulse" : "bg-background border-muted text-muted-foreground"}`}>
                        {event.status === "done" ? <CheckCircle2 className="h-6 w-6" /> : <Clock className="h-6 w-6" />}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-foreground">{event.title}</h3>
                        <p className="font-medium text-primary text-sm">{event.date}</p>
                        <p className="text-sm text-muted-foreground mt-1">{event.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden space-y-8 pl-4 border-l-2 border-primary/20 ml-4 relative">
            {timelineEvents.map((event, idx) => (
                <div key={idx} className="relative pl-6">
                    <div className={`absolute -left-[33px] top-0 h-10 w-10 rounded-full flex items-center justify-center border-4 ${event.status === "done" ? "bg-primary border-primary/20 text-white" : event.status === "active" ? "bg-white border-primary text-primary animate-pulse" : "bg-background border-muted text-muted-foreground"}`}>
                         {event.status === "done" ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-foreground">{event.title}</h3>
                        <p className="font-semibold text-primary">{event.date}</p>
                        <p className="text-sm text-muted-foreground">{event.desc}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
