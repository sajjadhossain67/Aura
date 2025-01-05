"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1600&auto=format&fit=crop&q=80')",
          filter: "brightness(0.7)"
        }}
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-4 golden-glow">Aura</h1>
        <p className="text-xl mb-8">Discover Your Signature Scent</p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground golden-glow"
        >
          Explore Collection
        </Button>
      </div>
    </section>
  );
}