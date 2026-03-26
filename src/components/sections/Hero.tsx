"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const text = "Full-Stack Developer · Builder · Innovator";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Decorative background terminal-like glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-accent to-accent-cyan shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-white/5 border border-white/10 relative flex items-center justify-center">
              {/* // Replace with your photo at /public/profile.jpg */}
              <Image
                src="/profile.jpg"
                alt="Yatharth Singh"
                fill
                className="object-cover"
                unoptimized
              />
              <span className="text-foreground/30 text-xs font-mono absolute z-[-1]">Photo</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground"
        >
          Yatharth Singh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-8 mb-8"
        >
          <p className="text-lg md:text-2xl font-mono text-accent">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.03, delay: 0.4 + i * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed"
        >
          I build meaningful tech products at the intersection of strong engineering, thoughtful design, and real-world impact. From healthcare platforms to AI systems — I make things that work.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button href="#projects" variant="primary" className="w-full sm:w-auto">
            View Projects
          </Button>
          <Button href="#contact" variant="ghost" className="w-full sm:w-auto">
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
