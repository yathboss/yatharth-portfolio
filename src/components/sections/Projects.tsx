"use client";

import type { SVGProps } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ExternalLink } from "lucide-react";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-.3 6-1.5 6-6.44a5.2 5.2 0 0 0-1.5-3.8 4.7 4.7 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.3 2.5 5.1 2.9 5.1 2.9a4.7 4.7 0 0 0-.1 3.8A5.2 5.2 0 0 0 3.5 10.5c0 4.9 3 6.1 6 6.44a4.8 4.8 0 0 0-1 3.26v4" />
  </svg>
);

export function Projects() {
  const projects = [
    {
      title: "PHC Pulse Live",
      description: "A real-time public health center transparency platform displaying live doctor availability, queue status, medicine inventory, and citizen-facing alerts. Built for real-world healthcare accessibility.",
      tags: ["Healthcare", "Real-Time", "Public Service"],
      monogram: "PH",
      github: "https://github.com/yathboss/PHC-PULSE-demo",
      live: "https://phc-pulse-demo.vercel.app",
    },
    {
      title: "AI-Agent-Readiness-Monitor",
      description: "A structured monitoring system that evaluates whether websites are optimized for AI agent tasks — including finding pricing, refund policies, and contact information. Designed for the emerging agent-first web.",
      tags: ["AI Agents", "Observability", "Web Intelligence"],
      monogram: "AI",
      github: "https://github.com/yathboss/AI-Agent-Readiness-Monitor",
    },
    {
      title: "AgentHub",
      description: "A marketplace-style platform where developers publish AI agents and users can discover, explore, and interact with them. Focused on building the infrastructure layer for the AI agent ecosystem.",
      tags: ["Developer Platform", "AI Ecosystem", "Product Thinking"],
      monogram: "AH",
    },
    {
      title: "Risk-Aware Irrigation Lab MVP",
      description: "A browser-based decision-support tool that simulates soil moisture dynamics and models uncertainty scenarios to support smarter, risk-aware irrigation planning.",
      tags: ["Agritech", "Forecasting", "Simulation", "Climate"],
      monogram: "RI",
      github: "https://github.com/yathboss/Risk-Aware-Irrigation-Lab",
    },
    {
      title: "Revenue Vision",
      description: "A sales forecasting and business intelligence project that predicts future revenue trends and surfaces actionable insights for data-driven business decisions.",
      tags: ["Forecasting", "Analytics", "Business Intelligence"],
      monogram: "RV",
      github: "https://github.com/yathboss/revenue-vision",
    },
  ];

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.58,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
            // projects
          </p>
          <h2 className="max-w-3xl font-[family:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-[-0.04em] text-[var(--foreground)] md:text-5xl">
            Systems, Platforms, and Tools I&apos;ve Shipped
          </h2>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={idx === 2 ? "md:col-span-2" : ""}
            >
              <Card className="flex h-full flex-col">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(232,75,26,0.35)] bg-[rgba(232,75,26,0.06)] font-mono text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
                    {project.monogram}
                  </div>
                  <div className="relative z-20 flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="rounded-full border border-white/10 p-2 text-[var(--foreground-muted)] transition-colors hover:border-[rgba(232,75,26,0.3)] hover:text-[var(--accent)]"
                        aria-label={`${project.title} GitHub source`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon width="18" height="18" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="rounded-full border border-white/10 p-2 text-[var(--foreground-muted)] transition-colors hover:border-[rgba(232,75,26,0.3)] hover:text-[var(--accent)]"
                        aria-label={`${project.title} live project`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="mb-3 font-[family:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-base leading-7 text-[var(--foreground-muted)]">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.02)] px-3 py-1.5 text-[0.72rem] font-mono uppercase tracking-[0.18em] text-[var(--foreground-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
