"use client";

import { ShoppingBag, Star, Crown, Sparkles } from "lucide-react";
import { HeroSection } from "./components/sections/HeroSection";
import { PerfumeSection } from "./components/sections/PerfumeSection";
import { featuredPerfumes } from "./data/perfumes";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <HeroSection />
      
      <PerfumeSection
        title="Deals For You"
        icon={ShoppingBag}
        perfumes={featuredPerfumes.filter(p => p.category === "Deals")}
        className="golden-glow rounded-lg"
      />
      
      <PerfumeSection
        title="Best Selling"
        icon={Star}
        perfumes={featuredPerfumes.filter(p => p.category === "Best Selling")}
        className="bg-card rounded-lg golden-glow"
      />
      
      <PerfumeSection
        title="Premium Segment"
        icon={Crown}
        perfumes={featuredPerfumes.filter(p => p.category === "Premium")}
        className="golden-glow rounded-lg"
      />
      
      <PerfumeSection
        title="All Perfumes"
        icon={Sparkles}
        perfumes={featuredPerfumes}
        className="bg-card rounded-lg golden-glow"
      />
    </main>
  );
}