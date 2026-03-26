export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-foreground/50 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Yatharth Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
