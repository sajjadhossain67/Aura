"use client";

import { Star } from "lucide-react";

export function Logo() {
  return (
    <div className="relative inline-flex items-center">
      <Star 
        className="h-8 w-8 text-primary fill-primary animate-pulse"
        strokeWidth={1.5}
      />
      <div className="absolute inset-0 blur-sm bg-primary/30 rounded-full animate-pulse" />
      <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
        Aura
      </span>
    </div>
  );
}