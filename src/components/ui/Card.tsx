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
      transition={{ duration: 0.24, ease: "easeOut" }}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={`group relative overflow-hidden rounded-[28px] border border-[color:var(--border-subtle)] bg-[var(--surface)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition-[border-color,transform,box-shadow,background-color] hover:-translate-y-1 hover:border-[rgba(232,75,26,0.35)] hover:bg-[var(--surface-raised)] hover:shadow-[0_24px_72px_rgba(232,75,26,0.12)] md:p-7 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[radial-gradient(circle_at_bottom,rgba(232,75,26,0.12),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
