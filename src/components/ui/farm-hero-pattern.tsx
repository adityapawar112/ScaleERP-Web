import React from "react";
import { cn } from "@/lib/utils";

interface FarmHeroPatternProps {
  className?: string;
  /**
   * Providing a variant deterministically rotates/flips the SVG so it looks
   * like a completely different map section without the performance cost
   * of rendering new dynamic paths.
   */
  variant?: 'default' | 'flipped-x' | 'flipped-y' | 'rotated';
}

export function FarmHeroPattern({ className, variant = 'default' }: FarmHeroPatternProps) {
  
  const getTransformClass = () => {
    switch (variant) {
      case 'flipped-x': return 'scale-x-[-1]';
      case 'flipped-y': return 'scale-y-[-1]';
      case 'rotated': return 'rotate-180 scale-x-[-1]';
      default: return '';
    }
  };

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.06] dark:opacity-[0.12]", className)}>
      <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 scale-[0.6] md:w-full md:h-full md:scale-100">
        <svg
          className={cn("absolute w-full h-full transition-transform duration-1000", getTransformClass())}
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Tilled Soil Patterns (Hatching at different angles) */}
            <pattern id="till-0" width="8" height="8" patternUnits="userSpaceOnUse">
              <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            </pattern>
            <pattern id="till-45" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            </pattern>
            <pattern id="till-90" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
              <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            </pattern>
            <pattern id="till-135" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
              <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
            </pattern>
          </defs>

        {/* Base Group to inherit Brand Green color for hatches */}
        <g className="text-brand-primary/40">
          
          {/* Field 1 */}
          <path d="M-100,-100 L400,-100 L350,200 L-50,250 Z" fill="var(--pattern-field-1)" fillOpacity="0.25" />
          <path d="M-100,-100 L400,-100 L350,200 L-50,250 Z" fill="url(#till-45)" />

          {/* Field 2 */}
          <path d="M420,-100 L900,-100 L800,300 L370,220 Z" fill="var(--pattern-field-2)" fillOpacity="0.2" />
          <path d="M420,-100 L900,-100 L800,300 L370,220 Z" fill="url(#till-90)" />

          {/* Field 3 */}
          <path d="M920,-100 L1300,-100 L1300,400 L830,320 Z" fill="var(--pattern-field-3)" fillOpacity="0.15" />
          <path d="M920,-100 L1300,-100 L1300,400 L830,320 Z" fill="url(#till-0)" />

          {/* Field 4 */}
          <path d="M-100,270 L340,220 L400,550 L-50,600 Z" fill="var(--pattern-field-1)" fillOpacity="0.2" />
          <path d="M-100,270 L340,220 L400,550 L-50,600 Z" fill="url(#till-135)" />

          {/* Field 5 */}
          <path d="M360,240 L780,320 L700,650 L420,570 Z" fill="var(--pattern-field-3)" fillOpacity="0.25" />
          <path d="M360,240 L780,320 L700,650 L420,570 Z" fill="url(#till-45)" />

          {/* Field 6 */}
          <path d="M800,340 L1300,420 L1300,750 L730,670 Z" fill="var(--pattern-field-2)" fillOpacity="0.18" />
          <path d="M800,340 L1300,420 L1300,750 L730,670 Z" fill="url(#till-90)" />

          {/* Field 7 (Bottom left) */}
          <path d="M-100,620 L390,570 L500,900 L-100,900 Z" fill="var(--pattern-field-3)" fillOpacity="0.2" />
          <path d="M-100,620 L390,570 L500,900 L-100,900 Z" fill="url(#till-0)" />

          {/* Field 8 (Bottom mid) */}
          <path d="M410,590 L680,670 L800,900 L520,900 Z" fill="var(--pattern-field-5)" fillOpacity="0.15" />
          <path d="M410,590 L680,670 L800,900 L520,900 Z" fill="url(#till-135)" />

          {/* Field 9 (Bottom right) */}
          <path d="M710,680 L1300,770 L1300,900 L820,900 Z" fill="var(--pattern-field-1)" fillOpacity="0.22" />
          <path d="M710,680 L1300,770 L1300,900 L820,900 Z" fill="url(#till-45)" />
        </g>

        {/* ScaleERP High-Velocity Data Stream */}
        <path
          d="M -100 800 C 200 800, 300 400, 600 500 C 900 600, 1000 100, 1300 200"
          fill="none"
          stroke="var(--pattern-river-outer)"
          strokeWidth="45"
          strokeLinecap="round"
          className="opacity-75"
        />
        {/* River inner bright highlight */}
        <path
          d="M -100 800 C 200 800, 300 400, 600 500 C 900 600, 1000 100, 1300 200"
          fill="none"
          stroke="var(--pattern-river-mid)"
          strokeWidth="15"
          strokeLinecap="round"
          className="opacity-90 shadow-lg drop-shadow-[0_0_15px_var(--pattern-river-mid)]"
        />
        {/* Central river shine */}
        <path
          d="M -100 800 C 200 800, 300 400, 600 500 C 900 600, 1000 100, 1300 200"
          fill="none"
          stroke="var(--pattern-river-inner)"
          strokeWidth="4"
          strokeLinecap="round"
          className="opacity-100"
        />
      </svg>
      </div>
    </div>
  );
}
