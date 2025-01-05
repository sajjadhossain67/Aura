"use client";

import { LucideIcon } from "lucide-react";
import { PerfumeCard } from "../PerfumeCard";
import type { Perfume } from "../../data/perfumes";

interface PerfumeSectionProps {
  title: string;
  icon: LucideIcon;
  perfumes: Perfume[];
  className?: string;
}

export function PerfumeSection({ title, icon: Icon, perfumes, className = "" }: PerfumeSectionProps) {
  return (
    <section className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      <div className="flex items-center gap-2 mb-8">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {perfumes.map(perfume => (
          <PerfumeCard key={perfume.id} perfume={perfume} />
        ))}
      </div>
    </section>
  );
}