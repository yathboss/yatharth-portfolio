"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Activity, Search, Blocks, CloudRain, TrendingUp, ExternalLink } from "lucide-react";

// Inline Github icon since lucide-react removed brand icons in v0.400+
const GithubIcon = (props: any) => (
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
      icon: Activity,
      color: "text-rose-400",
      link: "https://phc-pulse-demo.vercel.app",
      github: "https://github.com/yathboss/PHC-PULSE-demo"
    },
    {
      title: "AI-Agent-Readiness-Monitor",
      description: "A structured monitoring system that evaluates whether websites are optimized for AI agent tasks — including finding pricing, refund policies, and contact information. Designed for the emerging agent-first web.",
      tags: ["AI Agents", "Observability", "Web Intelligence"],
      icon: Search,
      color: "text-blue-400",
      link: "https://github.com/yathboss/AI-Agent-Readiness-Monitor",
      github: "https://github.com/yathboss/AI-Agent-Readiness-Monitor"
    },
    {
      title: "AgentHub",
      description: "A marketplace-style platform where developers publish AI agents and users can discover, explore, and interact with them. Focused on building the infrastructure layer for the AI agent ecosystem.",
      tags: ["Developer Platform", "AI Ecosystem", "Product Thinking"],
      icon: Blocks,
      color: "text-purple-400",
      link: "#",
      github: "#"
    },
    {
      title: "Risk-Aware Irrigation Lab MVP",
      description: "A browser-based decision-support tool that simulates soil moisture dynamics and models uncertainty scenarios to support smarter, risk-aware irrigation planning.",
      tags: ["Agritech", "Forecasting", "Simulation", "Climate"],
      icon: CloudRain,
      color: "text-emerald-400",
      link: "https://github.com/yathboss/Risk-Aware-Irrigation-Lab",
      github: "https://github.com/yathboss/Risk-Aware-Irrigation-Lab"
    },
    {
      title: "Revenue Vision",
      description: "A sales forecasting and business intelligence project that predicts future revenue trends and surfaces actionable insights for data-driven business decisions.",
      tags: ["Forecasting", "Analytics", "Business Intelligence"],
      icon: TrendingUp,
      color: "text-amber-400",
      link: "https://github.com/yathboss/revenue-vision",
      github: "https://github.com/yathboss/revenue-vision"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent font-mono text-sm uppercase tracking-wider">
               Projects
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Things I've Built</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} delay={idx * 0.1} className={idx === 2 ? "md:col-span-2" : "flex flex-col h-full"}>
                 <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 bg-white/5 border border-white/5 rounded-2xl ${project.color} group-hover:bg-white/[0.08] transition-colors`}>
                      <Icon size={28} />
                    </div>
                    <div className="flex gap-2 relative z-20">
                       <a href={project.github} className="text-foreground/40 hover:text-foreground transition-colors p-2" aria-label="Github source" target="_blank" rel="noopener noreferrer">
                         <GithubIcon width="20" height="20" />
                       </a>
                       <a href={project.link} className="text-foreground/40 hover:text-accent transition-colors p-2" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                         <ExternalLink size={20} />
                       </a>
                    </div>
                 </div>
                 <div className="flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                   <p className="text-foreground/70 mb-8 leading-relaxed text-base flex-grow">
                     {project.description}
                   </p>
                   <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                     {project.tags.map(tag => (
                       <span key={tag} className="text-xs font-mono text-foreground/50 bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-md tracking-wide">
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
