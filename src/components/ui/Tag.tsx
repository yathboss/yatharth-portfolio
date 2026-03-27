export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-[var(--surface-raised)] px-3 py-1.5 text-[0.76rem] font-mono text-[var(--foreground-muted)] transition-colors duration-200 hover:border-[rgba(232,75,26,0.3)] hover:text-[var(--foreground)]">
      {children}
    </span>
  );
}
