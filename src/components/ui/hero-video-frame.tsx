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
  posterSrc = "/assets/Dashboard.webp",
  videoSrc = "https://www.youtube.com/embed/y1WYCrMw0UY?autoplay=1&mute=1&loop=1&playlist=y1WYCrMw0UY&controls=0&modestbranding=1",
  title = "ScaleERP High-Stress Checkout Demo",
}: HeroVideoFrameProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const resolvedPoster = posterSrc.startsWith("/assets/") && posterSrc.endsWith(".png")
    ? posterSrc.replace(/\.png$/, ".webp")
    : posterSrc;

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
        <div className="relative w-full h-full block">
          {/* High-res workstation dashboard image rendered cleanly at 100% opacity */}
          <Image
            src={resolvedPoster}
            alt={title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-top opacity-100"
          />

          {/* Floating pill badge in the bottom-right corner - leaves KPI cards completely visible */}
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="absolute bottom-4 right-4 z-20 group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/95 text-white border border-emerald-500/50 shadow-xl hover:bg-zinc-950 hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label={`Watch ${title}`}
          >
            <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-zinc-950">
              <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-zinc-100 group-hover:text-emerald-300 transition-colors">
              Watch 60s Live Counter Demo
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </button>
        </div>
      )}
    </div>
  );
}
