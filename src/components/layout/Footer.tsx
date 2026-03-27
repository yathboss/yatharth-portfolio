export function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-[color:var(--border-subtle)] bg-[rgba(8,8,8,0.88)] py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
          &copy; {new Date().getFullYear()} Yatharth Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
