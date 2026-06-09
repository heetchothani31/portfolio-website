import { Reveal } from "./Reveal";

const services = [
  {
    n: "01",
    title: "Reels → Carousels",
    desc: "Translating viral videos into the format your audience now saves and re-reads capitalizing on the demand-supply gap which Instagram rewards.",
    hot: true,
  },
  {
    n: "02",
    title: "Multi-platform Content System",
    desc: "A unified system engineered for attention across shortform, longform, and written.",
  },
  {
    n: "03",
    title: "Strategic Account Audit",
    desc: "A forensic read of your content, positioning, and the gap between them.",
  },
  {
    n: "04",
    title: "Content Repurposing System",
    desc: "One narrative, atomised across formats and platforms without losing its weight.",
  },
  {
    n: "05",
    title: "Content Strategy Consulting",
    desc: "Frameworks, narrative direction, and the thinking behind sustained organic growth.",
  },
  {
    n: "06",
    title: "LinkedIn + Personal Brand System",
    desc: "Positioning, voice, and a content engine built around how decision-makers actually read.",
  },
];

export function Systems() {
  return (
    <section id="systems" className="relative py-32 md:py-48 border-t border-border/40">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6">
                Creative Systems — 04
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.03em] text-balance">
                Not services. <em className="italic text-primary font-normal">Systems</em> built to compound.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <Reveal delay={200}>
              <ul className="space-y-2.5 text-[13px] text-muted-foreground">
                <li className="flex items-baseline gap-3">
                  <span className="text-primary/80">→</span> Minimum 3-month engagement
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-primary/80">→</span> Payment upfront before work begins
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-primary/80">→</span> Long-term positioning over short-term virality
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-border/40">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <div className="group grid md:grid-cols-12 gap-6 py-8 md:py-10 border-b border-border/40 transition-colors hover:bg-surface/30 px-2 md:px-4 -mx-2 md:-mx-4 rounded-sm">
                <div className="md:col-span-1 text-[11px] font-mono text-muted-foreground/70 pt-1">
                  {s.n}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl md:text-[1.7rem] tracking-[-0.02em] group-hover:text-primary transition-colors">
                    {s.title}
                    {s.hot && (
                      <span className="ml-3 align-middle text-[9px] uppercase tracking-[0.25em] text-primary border border-primary/40 px-2 py-0.5 rounded-full">
                        Hot
                      </span>
                    )}
                  </h3>
                </div>
                <div className="md:col-span-5 text-muted-foreground text-[15px] leading-relaxed">
                  {s.desc}
                </div>
                <div className="md:col-span-1 text-right text-muted-foreground/60 text-xl pt-1 group-hover:text-primary group-hover:translate-x-1 transition-all">
                  →
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
