"use client";

import type { SVGProps } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-.3 6-1.5 6-6.44a5.2 5.2 0 0 0-1.5-3.8 4.7 4.7 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.3 2.5 5.1 2.9 5.1 2.9a4.7 4.7 0 0 0-.1 3.8A5.2 5.2 0 0 0 3.5 10.5c0 4.9 3 6.1 6 6.44a4.8 4.8 0 0 0-1 3.26v4" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <section id="contact" className="relative py-28 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
            // contact
          </span>
          <h2 className="font-[family:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.04em] text-[var(--foreground)] md:text-5xl">
            Let&apos;s Build Something Real.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
            Open to internships, collaborations, and hard problems. I respond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith("http");

            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                className="group flex flex-col items-start rounded-[28px] border border-[color:var(--border-subtle)] bg-[var(--surface)] p-8 text-left shadow-[0_18px_48px_rgba(0,0,0,0.2)] transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-[rgba(232,75,26,0.35)] hover:shadow-[0_22px_64px_rgba(232,75,26,0.12)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(255,255,255,0.03)] text-[var(--foreground-muted)] transition-colors group-hover:bg-[rgba(232,75,26,0.1)] group-hover:text-[var(--accent)]">
                  <Icon size={28} />
                </div>
                <h3 className="mb-2 font-[family:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  {contact.name}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--foreground-muted)] transition-colors group-hover:text-[var(--accent)]">
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
