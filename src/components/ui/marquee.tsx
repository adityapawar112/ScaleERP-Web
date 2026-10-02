import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
}

export const Marquee = ({
  children,
  speed = 30,
  pauseOnHover = true,
}: MarqueeProps) => {
  return (
    <div className="overflow-hidden flex w-full relative group">
      <div
        className={`flex whitespace-nowrap gap-4 shrink-0 animate-marquee ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex gap-4 shrink-0 items-center">{children}</div>
        <div className="flex gap-4 shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};
