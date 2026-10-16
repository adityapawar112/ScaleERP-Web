"use client";

import React from "react";
import Image from "next/image";
import { PlayCircle, Image as ImageIcon } from "lucide-react";

interface MediaMockupProps {
  type: "video" | "image";
  caption?: string;
  className?: string;
  src?: string;
  priority?: boolean;
}

export function MediaMockup({
  type,
  caption,
  className = "",
  src,
  priority = false,
}: MediaMockupProps) {
  const resolvedSrc = src?.startsWith("/assets/") && src.endsWith(".png")
    ? src.replace(/\.png$/, ".webp")
    : src;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 shadow-sm flex flex-col justify-between ${className}`}
    >
      {/* Decorative dots to look like a UI window */}
      <div className="flex items-center space-x-1.5 px-4 pt-3 pb-2 bg-zinc-200/50 dark:bg-zinc-950/40 border-b border-zinc-200 dark:border-zinc-800/80">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
      </div>

      <div className="relative p-2 sm:p-3 flex-1 flex flex-col items-center justify-center">
        {resolvedSrc ? (
          <div className="relative z-0 w-full overflow-hidden rounded-lg aspect-[16/10] flex items-center justify-center bg-zinc-950/20">
            <Image
              src={resolvedSrc}
              alt={caption || "Media Mockup"}
              width={1200}
              height={750}
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center space-y-4 text-zinc-500 dark:text-zinc-400 py-8">
            {type === "video" ? (
              <PlayCircle className="w-12 h-12 text-primary opacity-80 animate-pulse" />
            ) : (
              <ImageIcon className="w-12 h-12 text-primary/80" />
            )}
            {caption && (
              <p className="text-sm font-medium text-center max-w-[80%] text-zinc-600 dark:text-zinc-300">
                {caption}
              </p>
            )}
          </div>
        )}
      </div>

      {caption && resolvedSrc && (
        <div className="w-full bg-zinc-900 border-t border-zinc-800 px-3 py-2 text-xs text-zinc-400 text-center font-medium">
          {caption}
        </div>
      )}
    </div>
  );
}
