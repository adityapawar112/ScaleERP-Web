import React from "react";
import { cn } from "@/lib/utils";

interface ProductPatternProps {
  className?: string;
}

export function ProductPattern({ className }: ProductPatternProps) {
  // Using an external static SVG file dramatically reduces the JavaScript bundle size
  // across all 12 product and use-case pages, while preserving CSS mask coloring.
  const svgDataUri = "url('/patterns/product-pattern.svg')";

  return (
    <div 
      className={cn(
        "absolute inset-0 z-0 pointer-events-none opacity-[0.25] dark:opacity-[0.15] bg-terracotta transition-opacity duration-500", 
        className
      )}
      style={{
        maskImage: svgDataUri,
        WebkitMaskImage: svgDataUri,
      }}
    />
  );
}
