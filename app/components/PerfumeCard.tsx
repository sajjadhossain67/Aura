"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Perfume } from "../data/perfumes";

interface PerfumeCardProps {
  perfume: Perfume;
}

export function PerfumeCard({ perfume }: PerfumeCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow golden-glow">
      <div className="relative aspect-square">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none">
          {perfume.category}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{perfume.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold">৳{perfume.price.toLocaleString()}</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span>{perfume.rating}</span>
          </div>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}