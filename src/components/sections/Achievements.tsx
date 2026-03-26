"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Achievements() {
  const highlights = [
    "Hackathon Finalist — recognized for building impactful projects under pressure",
    "Multiple production-grade full-stack and AI-driven projects shipped",
    "Real-world systems built in healthcare, agritech, forecasting, and intelligent monitoring",
    "Strong foundation in Data Structures, Algorithms, and backend engineering",
    "Hands-on experience with RAG workflows, forecasting models, and real-time dashboards",
    "Passionate about scalable, meaningful digital products — not just code for code's sake"
  ];

  return (
    <section id="achievements" className="py-24 relative bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent font-mono text-sm uppercase tracking-wider">
               Achievements
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/30 transition-colors"
              >
                <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={20} />
                <p className="text-foreground/80 leading-relaxed text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
