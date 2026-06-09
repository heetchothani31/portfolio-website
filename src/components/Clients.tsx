import { Reveal } from "./Reveal";
import cSohrab from "@/assets/clients/c-sohrab.jpg.asset.json";
import cHiral from "@/assets/clients/c-hiral.jpg.asset.json";
import cNikhil from "@/assets/clients/c-nikhil.jpg.asset.json";
import cInfocious from "@/assets/clients/c-infocious.jpg.asset.json";
import cShankh from "@/assets/clients/c-shankh.jpg.asset.json";
import cKalari from "@/assets/clients/c-kalari.jpg.asset.json";
import cNard from "@/assets/clients/c-nard.jpg.asset.json";
import cBmm from "@/assets/clients/c-bmm.jpg.asset.json";
import cB99 from "@/assets/clients/c-b99.jpg.asset.json";

const clients = [
  { name: "Sohrab Vakharia", href: "https://www.youtube.com/@sohrabvakharia", platform: "YouTube", img: cSohrab.url },
  { name: "Level Up With Hiral", href: "https://www.youtube.com/@levelupwithhiral", platform: "YouTube · Instagram", img: cHiral.url },
  { name: "Nikhil Arora", href: "https://www.instagram.com/tapyourgrowth/", platform: "Instagram", img: cNikhil.url },
  { name: "Infocious", href: "https://www.youtube.com/@infocious", platform: "YouTube", img: cInfocious.url },
  { name: "Natural Shankh", href: "https://www.youtube.com/@NaturalShankh", platform: "YouTube · Instagram · Web", img: cShankh.url },
  { name: "Kalari Warriors", href: "https://www.kalariwarriors.com/", platform: "Web · Instagram", img: cKalari.url },
  { name: "Nard Ranks", href: "https://www.youtube.com/@NardRanks", platform: "YouTube", img: cNard.url },
  { name: "Bring Me Memes", href: "https://www.instagram.com/bringme.memes", platform: "Instagram", img: cBmm.url },
  { name: "B99 Memes", href: "https://www.instagram.com/b99_bybmm", platform: "Instagram", img: cB99.url },
];

export function Clients() {
  return (
    <section id="clients" className="relative py-32 md:py-48 border-t border-border/40">
      <div className="container-editorial">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6">
            Brands & Creators — 05
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
                <div className="flex items-center gap-5">
                  <div className="shrink-0 h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border border-border/60 bg-surface">
                    <img
                      src={c.img}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 mb-2">
                      {c.platform}
                    </div>
                    <h3 className="font-serif text-xl md:text-[1.5rem] tracking-[-0.02em] group-hover:text-primary transition-colors truncate">
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
