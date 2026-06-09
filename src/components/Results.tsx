import { Reveal } from "./Reveal";
import channelAnalytics from "@/assets/result-channel-analytics.png";
import twoMviews from "@/assets/result-2m-views.png";
import retention from "@/assets/result-retention.png";
import engagedViews from "@/assets/result-engaged-views.png";
import reelRetention from "@/assets/result-reel-retention.png";
import viewsChart from "@/assets/result-views-chart.png";
import fiveMreach from "@/assets/result-5m-reach.png";
import reachBreakdown from "@/assets/result-reach-breakdown.png";
import engagement from "@/assets/result-engagement.png";

type Case = {
  image: string;
  caption: string;
  side: "left" | "right";
  crop?: boolean; // crop mobile status bar + nav chrome
};

const cases: Case[] = [
  {
    image: channelAnalytics,
    caption: "Generated 2M+ views and 520+ new subscribers on an inactive channel.",
    side: "left",
  },
  {
    image: twoMviews,
    caption: "Strategic storytelling that scaled from one upload to nearly 2 million views.",
    side: "right",
  },
  {
    image: retention,
    caption: "60%+ audience retention at the end of an 18-second short with AVD of 96%.",
    side: "left",
    crop: true,
  },
  {
    image: engagedViews,
    caption: "Nearly one million engaged views generated through audience-first content.",
    side: "right",
    crop: true,
  },
  {
    image: reelRetention,
    caption: "Converted attention into measurable growth: 1M views and 4,419 watch hours.",
    side: "left",
    crop: true,
  },
  {
    image: viewsChart,
    caption: "Mastered the hook by understanding the audience psychology.",
    side: "right",
    crop: true,
  },
  {
    image: fiveMreach,
    caption: "Nearly 5M accounts reached through audience-first content.",
    side: "left",
    crop: true,
  },
  {
    image: reachBreakdown,
    caption: "Creating impact and reach through shortform content.",
    side: "right",
    crop: true,
  },
  {
    image: engagement,
    caption: "1.2 million+ interactions on a single piece of content.",
    side: "left",
    crop: true,
  },
];

export function Results() {
  return (
    <section id="results" className="relative py-32 md:py-48 border-t border-border/40">
      <div className="container-editorial">
        <div className="mb-24 md:mb-32">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6">
              Results & Case Studies — 02
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.03em] text-balance max-w-3xl">
              Numbers, in their <em className="italic text-primary font-normal">proper</em> context.
            </h2>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-6 max-w-xl text-muted-foreground text-[15px] leading-relaxed">
              Each frame is one insight pulled from real channels, real campaigns, real
              audiences. Story first, dashboard second.
            </p>
          </Reveal>
        </div>

        <div className="space-y-32 md:space-y-44">
          {cases.map((c, i) => (
            <div
              key={i}
              className={[
                "grid md:grid-cols-12 gap-8 md:gap-16 items-center",
                c.side === "right" ? "md:[&>*:first-child]:order-2" : "",
              ].join(" ")}
            >
              <div className="md:col-span-7">
                <Reveal y={40}>
                  <figure className="relative rounded-sm overflow-hidden bg-surface border border-border/40 p-4 md:p-6 group">
                    <div className="relative w-full mx-auto max-h-[70vh] overflow-hidden rounded-sm flex items-center justify-center">
                      <img
                        src={c.image}
                        alt={c.caption}
                        loading="lazy"
                        className="w-auto max-w-full max-h-[70vh] object-cover object-center rounded-sm transition-transform duration-[1600ms] group-hover:scale-[1.01]"
                        style={{
                          objectPosition: "center 50%",
                          clipPath: c.crop ? "inset(5% 0 4% 0)" : undefined,
                        }}
                      />
                    </div>
                    <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 font-mono z-10">
                      Case / {String(i + 1).padStart(2, "0")}
                    </div>
                  </figure>
                </Reveal>
              </div>
              <div className="md:col-span-5">
                <Reveal delay={200}>
                  <p className="font-serif text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.2] tracking-[-0.02em] text-balance">
                    {c.caption}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-32 md:mt-48 text-center">
            <p className="font-serif italic text-[clamp(2rem,5vw,4rem)] tracking-[-0.02em] text-primary/90">
              And this is just the tip of the iceberg.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
