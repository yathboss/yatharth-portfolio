"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GithubIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-.3 6-1.5 6-6.44a5.2 5.2 0 0 0-1.5-3.8 4.7 4.7 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.3 2.5 5.1 2.9 5.1 2.9a4.7 4.7 0 0 0-.1 3.8A5.2 5.2 0 0 0 3.5 10.5c0 4.9 3 6.1 6 6.44a4.8 4.8 0 0 0-1 3.26v4" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Contact() {
  const contacts = [
    {
      name: "GitHub",
      handle: "github.com/yathboss",
      href: "https://github.com/yathboss",
      icon: GithubIcon
    },
    {
      name: "LinkedIn",
      handle: "in/yatharth-singh-3103-yt",
      href: "https://www.linkedin.com/in/yatharth-singh-3103-yt",
      icon: LinkedinIcon
    },
    {
      name: "Email",
      handle: "yatharthsinghgreat@gmail.com",
      href: "mailto:yatharthsinghgreat@gmail.com",
      icon: Mail
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-wider block mb-4">
             Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Let's Build Something</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
            Open to internships, collaborations, and conversations about interesting problems. Reach out — I respond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col items-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/50 hover:bg-white/[0.04] transition-all"
              >
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-accent/10 group-hover:text-accent transition-colors mb-4 text-foreground/60">
                   <Icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{contact.name}</h3>
                <span className="text-sm font-mono text-foreground/50 group-hover:text-accent/80 transition-colors">
                  {contact.handle}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
