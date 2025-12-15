import { CheckCircle2, Clock } from "lucide-react";

const timelineEvents = [
  { date: "16–19 Des 2025", title: "Pendaftaran", status: "done", desc: "Isi formulir dan lengkapi berkas." },
  { date: "20 Des 2025", title: "Pengumuman Berkas", status: "upcoming", desc: "Seleksi administrasi." },
  { date: "22–23 Des 2025", title: "Wawancara", status: "upcoming", desc: "Sesi wawancara & penugasan." },
  { date: "24 Des 2025", title: "Pengumuman Akhir", status: "upcoming", desc: "Pukul 15.00 WIB." },
  { date: "24 Des 2025", title: "Kontrak", status: "upcoming", desc: "Batas 23.59 WIB." },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary mb-4">
            Timeline OPREC
          </h2>
          <p className="text-lg text-muted-foreground">
            Catat tanggal penting rekrutmen kami.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:flex justify-between items-start relative px-4">
            {/* Line connector */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-muted-foreground/20 -z-10 mx-10 rounded-full" />
            
            {timelineEvents.map((event, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 w-48 relative">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center border-4 ${idx === 0 ? "bg-primary border-primary/20 text-white" : "bg-background border-muted text-muted-foreground"}`}>
                        {idx === 0 ? <CheckCircle2 className="h-6 w-6" /> : <Clock className="h-6 w-6" />}
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
        <div className="md:hidden space-y-8 pl-4 border-l-2 border-primary/20 ml-4 relative">
            {timelineEvents.map((event, idx) => (
                <div key={idx} className="relative pl-6">
                    <div className={`absolute -left-[33px] top-0 h-10 w-10 rounded-full flex items-center justify-center border-4 ${idx === 0 ? "bg-primary border-primary/20 text-white" : "bg-background border-muted text-muted-foreground"}`}>
                         {idx === 0 ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
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
