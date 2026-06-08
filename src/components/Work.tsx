import { Reveal } from "./Reveal";

type Work = {
  label: string;
  caption: string;
  href: string;
  thumb: string;
  vertical: boolean;
};

// YouTube auto-thumbnails work via img.youtube.com — no API needed.
const yt = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

const shortform: Work[] = [
  {
    label: "Instagram Reel",
    caption: "Audience-first short — viral hook",
    href: "https://www.instagram.com/reel/DYMBUfZsGxu/",
    thumb: "",
    vertical: true,
  },
  {
    label: "YouTube Short",
    caption: "Retention-engineered 18s short",
    href: "https://www.youtube.com/shorts/ctKQ2jB1Kjo",
    thumb: yt("ctKQ2jB1Kjo"),
    vertical: true,
  },
  {
    label: "YouTube Short",
    caption: "Hook + payoff structure",
    href: "https://www.youtube.com/shorts/2kxahcnhh_8",
    thumb: yt("2kxahcnhh_8"),
    vertical: true,
  },
  {
    label: "YouTube Short",
    caption: "Narrative compression",
    href: "https://www.youtube.com/shorts/K1nEoMOhppg",
    thumb: yt("K1nEoMOhppg"),
    vertical: true,
  },
];

const longform: Work[] = [
  {
    label: "YouTube",
    caption: "Long-form storytelling",
    href: "https://www.youtube.com/watch?v=HlP4D0E3r0I&t=176s",
    thumb: yt("HlP4D0E3r0I"),
    vertical: false,
  },
  {
    label: "YouTube",
    caption: "Cinematic edit direction",
    href: "https://www.youtube.com/watch?v=thwpjRQvvGo&t=10s",
    thumb: yt("thwpjRQvvGo"),
    vertical: false,
  },
  {
    label: "YouTube",
    caption: "Narrative arc design",
    href: "https://www.youtube.com/watch?v=GkuOEyTePiQ&t=144s",
    thumb: yt("GkuOEyTePiQ"),
    vertical: false,
  },
  {
    label: "YouTube",
    caption: "Hook-led pacing system",
    href: "https://www.youtube.com/watch?v=jzrG97acOe8&t=28s",
    thumb: yt("jzrG97acOe8"),
    vertical: false,
  },
  {
    label: "YouTube",
    caption: "Retention-anchored edit",
    href: "https://www.youtube.com/watch?v=YseBq0WxEsI&t=231s",
    thumb: yt("YseBq0WxEsI"),
    vertical: false,
  },
];

function ThumbCard({ work, index }: { work: Work; index: number }) {
  return (
    <Reveal delay={(index % 4) * 80} y={28}>
      <a
        href={work.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div
          className={[
            "relative overflow-hidden rounded-sm bg-surface border border-border/40 transition-all duration-700 hover:border-primary/40",
            work.vertical ? "aspect-[9/16]" : "aspect-video",
          ].join(" ")}
        >
          {work.thumb ? (
            <img
              src={work.thumb}
              alt={work.caption}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
            />
          ) : (
            // Instagram reel — designed cover (no public thumbnail API)
            <div className="absolute inset-0 bg-gradient-to-br from-warm/60 via-surface to-background flex items-center justify-center">
              <div className="text-center px-4">
                <div className="font-serif italic text-3xl text-primary/80">Reel</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Instagram
                </div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-16 h-16 rounded-full bg-primary/95 backdrop-blur flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 ml-1 fill-primary-foreground">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.28em] text-foreground/85 bg-background/40 backdrop-blur px-2.5 py-1 rounded-full border border-border/40">
            {work.label}
          </div>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <p className="text-[14px] text-foreground/90 group-hover:text-primary transition-colors">
            {work.caption}
          </p>
          <span className="text-[11px] text-muted-foreground font-mono shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="relative py-32 md:py-48 border-t border-border/40">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6">
                Selected Narratives — 03
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.03em] text-balance max-w-2xl">
                A curated archive of <em className="italic text-primary font-normal">narratives</em>,
                growth experiments, and creative systems.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={250}>
            <p className="text-sm text-muted-foreground max-w-xs">
              Click any frame to open the original publication.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-8">
            Shortform — Vertical
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {shortform.map((w, i) => (
            <ThumbCard key={w.href} work={w} index={i} />
          ))}
        </div>

        <div className="hairline my-24" />

        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-8">
            Longform — Horizontal
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {longform.map((w, i) => (
            <ThumbCard key={w.href} work={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
