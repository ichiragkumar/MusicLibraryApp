import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  
    <HeroSection />
  </main>
  );
}
