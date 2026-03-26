"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = "", delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 transition-colors hover:border-accent/40 hover:bg-white/[0.04] group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:from-accent/5 group-hover:to-transparent group-hover:opacity-100 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
