import { Reveal } from "./Reveal";

const clients = [
  { name: "Sohrab Vakharia", href: "https://www.youtube.com/@sohrabvakharia", platform: "YouTube" },
  { name: "Level Up With Hiral", href: "https://www.youtube.com/@levelupwithhiral", platform: "YouTube · Instagram" },
  { name: "Nikhil Arora", href: "https://www.instagram.com/tapyourgrowth/", platform: "Instagram" },
  { name: "Infocious", href: "https://www.youtube.com/@infocious", platform: "YouTube" },
  { name: "Natural Shankh", href: "https://www.youtube.com/@NaturalShankh", platform: "YouTube · Instagram · Web" },
  { name: "Kalari Warriors", href: "https://www.kalariwarriors.com/", platform: "Web · Instagram" },
  { name: "Nard Ranks", href: "https://www.youtube.com/@NardRanks", platform: "YouTube" },
  { name: "Bring Me Memes", href: "https://www.instagram.com/bringme.memes", platform: "Instagram" },
  { name: "B99 Memes", href: "https://www.instagram.com/b99_bybmm", platform: "Instagram" },
];

export function Clients() {
  return (
    <section id="clients" className="relative py-32 md:py-48 border-t border-border/40">
      <div className="container-editorial">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6">
            Brands & Creators — 06
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.03em] text-balance max-w-3xl mb-16">
            Trusted by founders, creators, and brands building <em className="italic text-primary font-normal">durable</em> attention.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40 rounded-sm overflow-hidden">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 80}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-background hover:bg-surface transition-colors duration-500 p-8 md:p-10 h-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 mb-3">
                      {c.platform}
                    </div>
                    <h3 className="font-serif text-2xl md:text-[1.6rem] tracking-[-0.02em] group-hover:text-primary transition-colors">
                      {c.name}
                    </h3>
                  </div>
                  <span className="text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-xl">
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
