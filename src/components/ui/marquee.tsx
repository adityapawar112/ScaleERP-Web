"use client";

import { motion } from "framer-motion";
import React from "react";

export const Marquee = ({ children, speed = 30 }: { children: React.ReactNode; speed?: number }) => {
  return (
    <div className="overflow-hidden flex w-full relative group">
      <motion.div
        className="flex whitespace-nowrap gap-4 shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};
