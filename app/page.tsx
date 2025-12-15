"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CopDefinition } from "@/components/cop-definition";
import { MapSection } from "@/components/map-section";
import { Timeline } from "@/components/timeline";
import { AdminSection } from "@/components/admin-section";
import { Gallery } from "@/components/gallery";
import { Preloader } from "@/components/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Safety timeout in case video loads too slow
  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 4000); // Max wait time 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={loading} />
      <Hero onReady={() => setLoading(false)} />
      <About />
      <MapSection />
      <CopDefinition />
      <Timeline />
      <AdminSection />
      <Gallery />
    </>
  );
}
