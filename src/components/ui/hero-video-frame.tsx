"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface HeroVideoFrameProps {
  posterSrc?: string;
  videoSrc?: string;
  title?: string;
}

export function HeroVideoFrame({
  posterSrc = "/assets/Dashboard.png",
  videoSrc = "https://www.youtube.com/embed/y1WYCrMw0UY?autoplay=1&mute=1&loop=1&playlist=y1WYCrMw0UY&controls=0&modestbranding=1",
  title = "ScaleERP High-Stress Checkout Demo",
}: HeroVideoFrameProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden rounded-b-xl">
      {isPlaying ? (
        <iframe
          className="w-full h-full border-0 object-cover pointer-events-auto bg-black"
          src={videoSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group relative w-full h-full block focus:outline-none focus:ring-2 focus:ring-brand-primary"
          aria-label={`Play ${title}`}
        >
          {/* High-res optimized poster image */}
          <Image
            src={posterSrc}
            alt={title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] opacity-90"
          />

          {/* Vignette / Backdrop overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:bg-black/30 transition-colors" />

          {/* Animated Centered Play Trigger */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-brand-primary/90 text-brand-dark shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-active:scale-95">
              <span className="absolute -inset-2 rounded-full bg-brand-primary/30 animate-ping opacity-75 pointer-events-none" />
              <Play className="w-8 h-8 fill-current translate-x-0.5" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-white tracking-wide shadow-md">
              <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
              <span>Watch 60s POS Counter Stress Test</span>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
