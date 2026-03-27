"use client";

import { motion } from "framer-motion";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  const categories = [
    { title: "Languages", skills: ["C", "C++", "Python", "JavaScript", "Java"] },
    { title: "Frontend", skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "FastAPI"] },
    { title: "Databases", skills: ["MongoDB", "PostgreSQL", "Firebase"] },
    { title: "Tools", skills: ["Git", "GitHub", "Docker", "Elasticsearch", "Kibana"] },
    { title: "Core Concepts", skills: ["DSA", "OOP", "DBMS", "REST APIs", "Problem Solving"] },
    { title: "Domains", skills: ["Full-Stack", "AI/ML", "RAG Systems", "Forecasting", "Real-Time Applications"] },
  ];

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="relative bg-[rgba(255,255,255,0.01)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
            // skills
          </p>
          <h2 className="max-w-3xl font-[family:var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-[-0.04em] text-[var(--foreground)] md:text-5xl">
            Capabilities Across Product and Infrastructure
          </h2>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {categories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="rounded-[28px] border border-[color:var(--border-subtle)] bg-[var(--surface)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <h3 className="font-[family:var(--font-space-grotesk)] text-xl font-semibold text-[var(--foreground)]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
