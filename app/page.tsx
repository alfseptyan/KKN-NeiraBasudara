import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CopDefinition } from "@/components/cop-definition";
import { MapSection } from "@/components/map-section";
import { Timeline } from "@/components/timeline";
import { AdminSection } from "@/components/admin-section";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MapSection />
      <CopDefinition />
      <Timeline />
      <AdminSection />
      <Gallery />
    </>
  );
}
