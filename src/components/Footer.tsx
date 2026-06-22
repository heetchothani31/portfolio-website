import { Instagram, Linkedin, Mail } from "lucide-react";

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

          <div className="md:col-span-7 flex flex-wrap gap-x-8 gap-y-3 text-[13px] md:justify-end">
            <a
              href="https://www.instagram.com/heetchothani7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]"
            >
              <Instagram className="h-4 w-4" /> Instagram ↗
            </a>
            <a
              href="https://www.linkedin.com/in/heetchothani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn ↗
            </a>
            <a
              href="mailto:heetchothani7@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]"
            >
              <Mail className="h-4 w-4" /> Email ↗
            </a>
          </div>
        </div>

        <div className="hairline mt-12" />

        <div className="mt-6 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/50">
          © {new Date().getFullYear()} Heet Chothani , All rights reserved
        </div>
      </div>
    </footer>
  );
}
