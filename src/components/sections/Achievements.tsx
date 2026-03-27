"use client";

import { motion } from "framer-motion";

export function Achievements() {
  const categories = [
    {
      title: "What I've Shipped",
      items: [
        "Production-grade full-stack and AI systems",
        "Real-world platforms in healthcare, agritech, forecasting, and intelligent monitoring",
        "AI agent infrastructure (AgentHub, Readiness Monitor)",
      ],
    },
    {
      title: "How I Work",
      items: [
        "Hackathon Finalist — impact under pressure",
        "Strong DSA and backend engineering foundation",
        "Hands-on with RAG workflows, forecasting models, and real-time dashboards",
      ],
    },
  ];

  return (
    <section id="achievements" className="relative bg-[rgba(255,255,255,0.01)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
            // recognition
          </p>
          <h2 className="max-w-3xl font-[family:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-[-0.04em] text-[var(--foreground)] md:text-5xl">
            Recognition &amp; Impact
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {categories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="rounded-[28px] border border-[color:var(--border-subtle)] bg-[rgba(17,17,17,0.76)] p-6"
              >
                <h3 className="mb-6 font-[family:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="border-l border-[rgba(232,75,26,0.45)] pl-4"
                    >
                      <p className="text-sm leading-7 text-[var(--foreground-muted)] md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
