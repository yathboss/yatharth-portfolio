"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-medium tracking-[0.02em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(232,75,26,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";
  const variants = {
    primary:
      "border-transparent bg-[var(--accent)] text-white shadow-[0_0_20px_rgba(232,75,26,0.4)] hover:bg-[#f45d2f] hover:shadow-[0_0_28px_rgba(232,75,26,0.45)]",
    ghost:
      "border-white/10 bg-transparent text-[var(--foreground)] hover:border-[rgba(232,75,26,0.32)] hover:bg-[rgba(232,75,26,0.08)] hover:text-white",
  };

  const buttonClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className={buttonClassName}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className={buttonClassName}
    >
      {children}
    </motion.button>
  );
}
