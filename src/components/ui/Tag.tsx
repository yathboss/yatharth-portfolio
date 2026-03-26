export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
      {children}
    </span>
  );
}
