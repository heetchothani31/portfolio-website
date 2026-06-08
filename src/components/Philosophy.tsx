import { Reveal } from "./Reveal";

const lines = [
  { text: "In a world flooded with content, attention is no longer the challenge.", muted: false },
  { text: "Being remembered is.", muted: false, accent: true },
  { text: "The brands that endure aren't always the loudest.", muted: true },
  { text: "They're the clearest.", muted: false, accent: true },
  { text: "Because people don't remember posts.", muted: true },
  { text: "They remember perspectives.", muted: false },
  { text: "They remember stories.", muted: false },
  { text: "They remember how something made them feel.", muted: false },
  { text: "Views create awareness.", muted: true },
  { text: "Stories create trust.", muted: true },
  { text: "And trust creates growth.", muted: false, accent: true, final: true },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 md:py-48 border-t border-border/40">
      <div className="container-editorial">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-16">
            On Belief — 02
          </div>
        </Reveal>

        <div className="max-w-4xl space-y-5 md:space-y-7">
          {lines.map((line, i) => (
            <Reveal key={i} delay={i * 90} y={20}>
              <p
                className={[
                  "font-serif tracking-[-0.025em] leading-[1.25] text-balance",
                  line.accent
                    ? "text-[clamp(1.9rem,4.5vw,3.6rem)] text-foreground italic"
                    : line.muted
                      ? "text-[clamp(1.3rem,2.6vw,2.2rem)] text-muted-foreground/80"
                      : "text-[clamp(1.5rem,3vw,2.6rem)] text-foreground",
                  line.final ? "text-primary" : "",
                ].join(" ")}
              >
                {line.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
