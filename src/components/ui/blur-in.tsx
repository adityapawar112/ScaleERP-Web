"use client";

import { motion } from "framer-motion";

export const BlurIn = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
