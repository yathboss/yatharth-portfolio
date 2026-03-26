"use client";

import { motion } from "framer-motion";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  const categories = [
    { title: "Languages", skills: ["C", "C++", "Python", "JavaScript", "Java"] },
    { title: "Frontend", skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "FastAPI"] },
    { title: "Databases", skills: ["MongoDB", "PostgreSQL", "Firebase"] },
    { title: "Tools", skills: ["Git", "GitHub", "Docker", "Elasticsearch", "Kibana", "VS Code"] },
    { title: "Core Concepts", skills: ["DSA", "OOP", "DBMS", "REST APIs", "Problem Solving"] },
    { title: "Domains", skills: ["Full-Stack Development", "AI/ML", "RAG Systems", "Forecasting", "Real-Time Applications"] },
  ];

  return (
    <section id="skills" className="py-24 relative bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent font-mono text-sm uppercase tracking-wider">
               Skills
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">What I Work With</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground/90 font-mono">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
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
