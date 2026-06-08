export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-16">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5">
            <div className="font-serif text-2xl tracking-tight">
              Heet Chothani<span className="text-primary">.</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Creative strategist building narrative-led content systems.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-wrap gap-x-8 gap-y-3 text-[13px]">
            <a
              href="https://www.instagram.com/heetchothani7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.linkedin.com/in/heetchothani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:heetchothani7@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]"
            >
              Email ↗
            </a>
          </div>

          <div className="md:col-span-3 md:text-right text-[11px] uppercase tracking-[0.28em] text-muted-foreground/70">
            © {new Date().getFullYear()} — All rights reserved
          </div>
        </div>

        <div className="hairline mt-12" />

        <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-muted-foreground/50">
          <span>Designed with restraint</span>
          <span>Built in 2026</span>
        </div>
      </div>
    </footer>
  );
}
