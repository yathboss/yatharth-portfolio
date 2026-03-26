"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent font-mono text-sm uppercase tracking-wider">
               About
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Who I Am</h2>
          
          <div className="relative pl-6 md:pl-8">
            {/* Left border decorative accent */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent to-transparent opacity-50" />
            
            <p className="mb-6 text-lg text-foreground/80 leading-relaxed font-light">
              Yatharth is a Full-Stack Developer and Computer Science student who builds meaningful tech products. His interests span web development, AI/ML, and solving real-world problems through smart, user-focused applications.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              He thrives at the intersection of strong logic, clean interfaces, and practical impact — always exploring new tools, improving his craft, and building solutions that go beyond just code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
