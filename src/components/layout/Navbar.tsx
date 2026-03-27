"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about", section: "about" },
  { name: "Skills", href: "#skills", section: "skills" },
  { name: "Projects", href: "#projects", section: "projects" },
  { name: "Achievements", href: "#achievements", section: "achievements" },
  { name: "Contact", href: "#contact", section: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.section);
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-[color:var(--border-subtle)] bg-[rgba(8,8,8,0.8)] py-4 shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#"
          className="font-mono text-lg font-medium tracking-[0.08em] text-white transition-colors hover:text-[var(--accent)] md:text-xl"
        >
          Yatharth Singh
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative font-mono text-[0.72rem] uppercase tracking-[0.3em] transition-colors ${
                activeSection === link.section
                  ? "text-white"
                  : "text-[var(--foreground-muted)] hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.section && (
                <motion.div
                  layoutId="active-nav"
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute -bottom-1.5 left-0 right-0 h-px rounded-full bg-[var(--accent)]"
                />
              )}
            </a>
          ))}
        </nav>

        <button
          className="rounded-full border border-white/10 bg-[rgba(17,17,17,0.75)] p-2 text-[var(--foreground-muted)] transition-colors hover:border-[rgba(232,75,26,0.3)] hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="overflow-hidden border-b border-[color:var(--border-subtle)] bg-[rgba(8,8,8,0.95)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-white/5 pb-2 font-mono text-sm uppercase tracking-[0.24em] transition-colors ${
                    activeSection === link.section
                      ? "text-[var(--accent)]"
                      : "text-[var(--foreground-muted)] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
