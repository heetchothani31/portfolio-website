const links = [
  ["#work", "Work"],
  ["#results", "Results"],
  ["#systems", "Systems"],
  ["#clients", "Clients"],
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="container-editorial flex items-center justify-between py-5">
        <a href="#top" className="font-serif text-xl tracking-tight">
          Heet<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="relative hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:heetchothani7@gmail.com"
          className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-primary/90 transition-all"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
