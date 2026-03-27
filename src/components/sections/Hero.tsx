"use client";

import type { SVGProps } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

const heroLabel = "Full-Stack · AI/ML · Creative Dev";
const stats = ["5 Projects Shipped", "3 Domains", "Open to Work"];

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-.3 6-1.5 6-6.44a5.2 5.2 0 0 0-1.5-3.8 4.7 4.7 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.3 2.5 5.1 2.9 5.1 2.9a4.7 4.7 0 0 0-.1 3.8A5.2 5.2 0 0 0 3.5 10.5c0 4.9 3 6.1 6 6.44a4.8 4.8 0 0 0-1 3.26v4" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yathboss",
    icon: GithubIcon,
  },
  {
    label: "Email",
    href: "mailto:yatharthsinghgreat@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yatharth-singh-3103-yt",
    icon: LinkedinIcon,
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-20 md:px-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-3xl">
          <div className="mb-6 overflow-hidden">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[var(--accent)] sm:text-xs">
              {heroLabel.split("").map((character, index) => (
                <motion.span
                  key={`${character}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.2 + index * 0.018,
                    ease: "easeOut",
                  }}
                >
                  {character === " " ? "\u00A0" : character}
                </motion.span>
              ))}
            </p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
            className="mb-6 max-w-4xl font-[family:var(--font-space-grotesk)] text-6xl font-bold leading-[0.94] tracking-[-0.05em] text-[var(--foreground)] md:text-8xl"
          >
            I Build Systems That Think.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            className="max-w-2xl text-lg leading-8 text-[var(--foreground-muted)] md:text-xl"
          >
            From healthcare infrastructure to AI agent platforms —
            <br className="hidden lg:block" />I engineer products at the
            intersection of logic, design, and real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#projects" variant="primary" className="min-w-[11rem]">
              View Projects
            </Button>
            <Button href="/resume.pdf" variant="ghost" className="min-w-[12rem]">
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {stats.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-[rgba(17,17,17,0.72)] px-4 py-2 text-[0.72rem] font-mono uppercase tracking-[0.24em] text-[var(--foreground-muted)]"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.02, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: "easeOut" }}
          className="mx-auto w-full max-w-[430px]"
        >
          <div className="relative">
            <div className="absolute left-4 top-4 z-20 h-12 w-12 border-l border-t border-[rgba(232,75,26,0.9)]" />
            <div className="absolute bottom-[7.75rem] right-4 z-20 h-12 w-12 border-b border-r border-[rgba(232,75,26,0.9)]" />

            <div className="overflow-hidden rounded-[30px] border border-[rgba(232,75,26,0.4)] bg-[#0d0d0d] shadow-[0_0_60px_rgba(232,75,26,0.15)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/yatharth_pic.jpg"
                  alt="Yatharth Singh"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 78vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/35 via-[#080808]/10 to-transparent" />
              </div>

              <div className="border-t border-[rgba(255,255,255,0.05)] bg-[rgba(8,8,8,0.88)] px-5 py-5 backdrop-blur-sm">
                <div className="grid gap-4">
                  <div className="min-w-0 text-center">
                    <h3 className="font-[family:var(--font-space-grotesk)] text-2xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                      Yatharth Singh
                    </h3>
                    <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.24em] text-[var(--foreground-muted)]">
                      Systems, product, and AI engineering
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <span className="inline-flex min-h-14 min-w-[15.5rem] items-center justify-center gap-2 rounded-full border border-white/10 bg-[rgba(17,17,17,0.82)] px-5 py-2 text-center text-[0.68rem] font-mono uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#49c773]" />
                      <span>Available for Internships</span>
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={item.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(232,75,26,0.28)] bg-[rgba(255,255,255,0.02)] text-[var(--accent)] transition-colors hover:bg-[rgba(232,75,26,0.08)]"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
