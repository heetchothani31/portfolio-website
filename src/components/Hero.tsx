import { Reveal } from "./Reveal";
import heroSilhouette from "@/assets/hero-silhouette.png";

export function Hero() {
  return (
    <>
      {/* Selling frame — first thing visitor sees (varunmp4.com style) */}
      <section id="top" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] max-w-[90vw] max-h-[90vw] rounded-full bg-primary/[0.06] blur-[140px]" />
        </div>

        <div className="container-editorial relative z-10 text-center">
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-surface/60 backdrop-blur px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-10">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Available for select projects
            </div>
          </Reveal>

          <Reveal delay={250}>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.02] tracking-[-0.035em] text-balance max-w-5xl mx-auto">
              Turning attention into <em className="italic text-primary font-normal">trust,</em>
              <br />
              and trust into <em className="italic font-normal">growth.</em>
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-balance">
              Millions of views are a byproduct. Growth is the goal.
            </p>
          </Reveal>

          <Reveal delay={700}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5"
              >
                View Selected Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:heetchothani7@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 backdrop-blur px-7 py-3.5 text-sm hover:bg-surface transition-all"
              >
                Book a call
              </a>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          Scroll
        </div>
      </section>

      {/* Identity hero — Heet + silhouette */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal>
                <div className="text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6">
                  Heet Chothani — Creative Strategist
                </div>
              </Reveal>
              <Reveal delay={150}>
                <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-balance">
                  Systems and operations
                  <br />
                  <em className="italic font-normal text-primary">engineered for attention.</em>
                </h2>
              </Reveal>
              <Reveal delay={350}>
                <div className="mt-10 space-y-5 text-muted-foreground text-[15px] leading-[1.75] max-w-md">
                  <p>Most content disappears instantly.</p>
                  <p className="text-foreground/90">The right content makes people stay.</p>
                  <p>
                    I build narrative-led content systems for founders, creators, and brands that
                    want to be remembered, not just viewed.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={550}>
                <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 max-w-sm text-[13px]">
                  {[
                    ["#1", "LinkedIn + Personal Brand"],
                    ["#2", "Content Repurposing"],
                    ["#3", "Multi-platform Content"],
                    ["#4", "Strategic Audit"],
                    ["#5", "Strategy Consulting"],
                  ].map(([n, label]) => (
                    <div key={n} className="flex items-baseline gap-2">
                      <span className="text-primary/80 font-mono text-[11px]">{n}</span>
                      <span className="text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 relative">
              <Reveal delay={200} y={40}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface">
                  <img
                    src={heroSilhouette}
                    alt="Heet — creative strategist silhouette"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 transition-all duration-[1600ms] hover:scale-[1.02] hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-primary/10 pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.28em] text-foreground/70">
                    <span>Portrait — 001</span>
                    <span>Heet / 2026</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
