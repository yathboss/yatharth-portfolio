"use client";

import { motion } from "framer-motion";
import { Tag } from "@/components/ui/Tag";

export function About() {
  const focusAreas = [
    "Full-Stack",
    "AI/ML",
    "RAG Systems",
    "Real-Time Apps",
    "Product Thinking",
  ];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
              // about
            </p>
            <h2 className="font-[family:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-[-0.04em] text-[var(--foreground)] md:text-5xl">
              Building at the Edge of What&apos;s Possible
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-[var(--foreground-muted)] md:text-[1.05rem]">
              I&apos;m a CS student who ships real products. I&apos;ve built
              healthcare platforms, AI monitoring systems, and agent
              marketplaces — each one designed to solve a problem that actually
              matters. I think in systems. I build with precision. I care about
              the last 10%.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {focusAreas.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
