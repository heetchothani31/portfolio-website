import { Reveal } from "./Reveal";

export function ClosingCTA() {
  return (
    <section className="relative py-32 md:py-56 border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] max-w-[110vw] max-h-[110vw] rounded-full bg-primary/[0.07] blur-[160px]" />
      </div>

      <div className="container-editorial relative z-10 text-center">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-10">
            The Final Frame — 07
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h2 className="font-serif text-[clamp(2.8rem,9vw,8rem)] leading-[0.98] tracking-[-0.04em] text-balance max-w-5xl mx-auto">
            Let's build your
            <br />
            <em className="italic text-primary font-normal">content system.</em>
          </h2>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-10 text-muted-foreground max-w-md mx-auto text-balance">
            For founders and creators serious about being remembered, not just viewed.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <a
              href="mailto:heetchothani7@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-9 py-4 text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5"
            >
              heetchothani7@gmail.com
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/70">
              Replies within 48 hours
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
