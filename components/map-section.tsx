"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

// Dynamically import MapContainer and TileLayer to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// Fix for default marker icon in Next.js
const iconUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png";

const desaLocations = [
  { name: "Desa Nusantara", lat: -4.524, lng: 129.904, desc: "Pusat aktivitas dan pelabuhan." },
  { name: "Desa Dwi Warna", lat: -4.528, lng: 129.901, desc: "Kawasan bersejarah dan wisata." },
  { name: "Desa Kampung Baru", lat: -4.521, lng: 129.908, desc: "Pemukiman padat penduduk." },
  { name: "Desa Merdeka", lat: -4.530, lng: 129.910, desc: "Area pesisir dengan potensi laut." },
];

export function MapSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Fix Icon Issue
        (async function init() {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const L = (await import("leaflet")).default;
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            
            L.Icon.Default.mergeOptions({
                iconUrl: iconUrl,
                iconRetinaUrl: iconRetinaUrl,
                shadowUrl: shadowUrl,
            });
        })();
    }, []);

    if (!isMounted) {
        return <div className="h-[500px] w-full bg-muted animate-pulse flex items-center justify-center">Loading Maps...</div>;
    }

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary">
            Lokasi KKN
          </h2>
          <p className="text-muted-foreground max-w-[800px] text-lg">
            Jelajahi sebaran lokasi KKN di Kepulauan Banda Neira.
          </p>
        </div>

        <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg border border-border z-0 relative">
          <MapContainer
            center={[-4.524, 129.904]}
            zoom={14}
            scrollWheelZoom={false}
            className="h-full w-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {desaLocations.map((desa, idx) => (
                <Marker key={idx} position={[desa.lat, desa.lng]}>
                    <Popup>
                        <strong className="text-primary">{desa.name}</strong>
                        <br />
                        {desa.desc}
                    </Popup>
                </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
