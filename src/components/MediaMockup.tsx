"use client";

import React from "react";
import { PlayCircle, Image as ImageIcon } from "lucide-react";

interface MediaMockupProps {
  type: "video" | "image";
  caption?: string;
  className?: string;
  src?: string;
}

export function MediaMockup({ type, caption, className = "", src }: MediaMockupProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 shadow-sm flex flex-col items-center justify-center p-6 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-zinc-200/50 dark:to-zinc-800/20 pointer-events-none" />
      
      {src ? (
        <div className="relative z-0 w-full mt-6">
          <img src={src} alt={caption || "Media Mockup"} className="w-full h-auto object-contain rounded-lg" />
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center space-y-4 text-zinc-500 dark:text-zinc-400 mt-4">
          {type === "video" ? (
            <PlayCircle className="w-12 h-12 text-primary opacity-80 animate-pulse" />
          ) : (
            <ImageIcon className="w-12 h-12 text-primary/80" />
          )}
        </div>
      )}
      
      <div className="relative z-10 flex flex-col items-center space-y-4 text-zinc-500 dark:text-zinc-400 mt-auto">
        
        {caption && !src && (
          <p className="text-sm font-medium text-center max-w-[80%] text-zinc-600 dark:text-zinc-300">
            {caption}
          </p>
        )}
      </div>

      {caption && src && (
        <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md p-2 z-20">
          <p className="text-xs font-medium text-center text-zinc-200">
            {caption}
          </p>
        </div>
      )}
      {/* Decorative dots to look like a UI window */}
      <div className="absolute top-3 left-3 flex space-x-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
      </div>
    </div>
  );
}
