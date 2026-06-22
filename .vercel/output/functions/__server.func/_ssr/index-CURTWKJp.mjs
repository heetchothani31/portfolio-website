import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { I as Instagram, L as Linkedin, M as Mail } from "../_libs/lucide-react.mjs";
const links = [
  ["#clients", "Clients"],
  ["#work", "Work"],
  ["#systems", "Systems"],
  ["#results", "Results"]
];
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial flex items-center justify-between py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "font-serif text-xl tracking-tight", children: [
      "Heet",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.18em] text-muted-foreground", children: links.map(([href, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        className: "relative hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
        children: label
      },
      href
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "mailto:heetchothani7@gmail.com",
        className: "group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-primary/90 transition-all",
        children: "Let's Talk"
      }
    )
  ] }) });
}
function useReveal(options) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  y = 24
}) {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref,
      className,
      style: {
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        opacity: visible ? 1 : 0,
        transition: `transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "transform, opacity"
      },
      children
    }
  );
}
function CountUp({ to, suffix = "", prefix = "", duration = 1800, className }) {
  const ref = reactExports.useRef(null);
  const [value, setValue] = reactExports.useState(0);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
              setValue(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className, children: [
    prefix,
    value,
    suffix
  ] });
}
const heroCreative = "/assets/hero-creative-Cb0LEvoH.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "top",
        className: "relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] max-w-[90vw] max-h-[90vw] rounded-full bg-primary/[0.06] blur-[140px]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial relative z-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-surface/60 backdrop-blur px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" })
              ] }),
              "Available for projects"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.02] tracking-[-0.035em] text-balance max-w-5xl mx-auto", children: [
              "Turning attention into ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-primary font-normal", children: "trust," }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "and trust into ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "growth." })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 500, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-balance", children: "Millions of views are a byproduct. Growth is the goal." }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 700, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "mailto:heetchothani7@gmail.com",
                className: "inline-flex items-center gap-2 rounded-full bg-primary text-black px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5",
                children: "Book a call"
              }
            ) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 900, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto", children: [
              { to: 3, suffix: "M+", label: "Views generated" },
              { to: 10, suffix: "+", label: "Clients served" }
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "group relative rounded-sm border border-border/50 bg-surface/40 backdrop-blur px-8 py-10 text-left stat-glow hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(255,109,41,0.12)] transition-all duration-700",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CountUp,
                    {
                      to: s.to,
                      suffix: s.suffix,
                      className: "font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-0.04em] text-foreground group-hover:text-primary transition-colors inline-block tabular-nums"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground", children: s.label })
                ]
              },
              s.label
            )) }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 md:py-40 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-editorial", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 order-2 lg:order-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6", children: "Heet Chothani, Creative Strategist" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-balance", children: [
          "Systems and operations",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal text-primary", children: "engineered for attention." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 350, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-5 text-muted-foreground text-[15px] leading-[1.75] max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most content disappears instantly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90", children: "The right content makes people stay." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I build narrative-led content systems for founders, creators, and brands that want to be remembered, not just viewed." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 550, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 gap-x-6 gap-y-4 max-w-sm text-[13px]", children: [
          ["#1", "Reels → Carousels"],
          ["#2", "Multi-platform Content"],
          ["#3", "Strategic Account Audit"],
          ["#4", "Content Repurposing"],
          ["#5", "Strategy Consulting"],
          ["#6", "LinkedIn + Personal Brand"]
        ].map(([n, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/80 font-mono text-[11px]", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
          label === "Reels → Carousels" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-primary border border-primary/50 bg-primary/10 px-1.5 py-0.5 rounded-sm leading-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1 w-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1 w-1 rounded-full bg-primary" })
            ] }),
            "Hot"
          ] })
        ] }, n)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 order-1 lg:order-2 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden rounded-sm bg-surface", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: heroCreative,
            alt: "Heet, Creative Strategist",
            className: "w-full h-full object-cover transition-all duration-[1600ms] hover:scale-[1.02]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.28em] text-foreground/70", children: "Heet" })
      ] }) }) })
    ] }) }) })
  ] });
}
const reelVidyut = "/assets/reel-vidyut-DiJgjn1O.jpg";
const yt = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const shortform = [
  {
    label: "Instagram Reel",
    caption: "what happens when vidyut jammwal drop-tests a real SHANKH?",
    href: "https://www.instagram.com/reel/DYMBUfZsGxu/",
    thumb: reelVidyut,
    vertical: true
  },
  {
    label: "YouTube Short",
    caption: "adah sharma singing shiv tandav stotram!",
    href: "https://www.youtube.com/shorts/ctKQ2jB1Kjo",
    thumb: yt("ctKQ2jB1Kjo"),
    vertical: true
  },
  {
    label: "YouTube Short",
    caption: "Rajnikanth's Secret Voice Actor Revealed!",
    href: "https://www.youtube.com/shorts/2kxahcnhh_8",
    thumb: yt("2kxahcnhh_8"),
    vertical: true
  },
  {
    label: "YouTube Short",
    caption: "adah sharma singing shiv tandav stotram pt.2!",
    href: "https://www.youtube.com/shorts/K1nEoMOhppg",
    thumb: yt("K1nEoMOhppg"),
    vertical: true
  }
];
const longform = [
  {
    label: "YouTube",
    caption: "The Experiment That Shocked Scientists | Double Slit Experiment",
    href: "https://www.youtube.com/watch?v=YseBq0WxEsI&t=231s",
    thumb: yt("YseBq0WxEsI"),
    vertical: false
  },
  {
    label: "YouTube",
    caption: "Zerodha's SECRET to HUGE Success Without Funding",
    href: "https://www.youtube.com/watch?v=jzrG97acOe8&t=28s",
    thumb: yt("jzrG97acOe8"),
    vertical: false
  },
  {
    label: "YouTube",
    caption: "How did boAt build a 12,000 crore tech empire with ₹999 earphones?",
    href: "https://www.youtube.com/watch?v=GkuOEyTePiQ&t=144s",
    thumb: yt("GkuOEyTePiQ"),
    vertical: false
  },
  {
    label: "YouTube",
    caption: "The Truth About Gold: Why the Rich Are Hoarding It Again",
    href: "https://www.youtube.com/watch?v=thwpjRQvvGo&t=10s",
    thumb: yt("thwpjRQvvGo"),
    vertical: false
  },
  {
    label: "YouTube",
    caption: "Why Every Country is Running For Lithium (The New Oil?)",
    href: "https://www.youtube.com/watch?v=HlP4D0E3r0I&t=176s",
    thumb: yt("HlP4D0E3r0I"),
    vertical: false
  }
];
function ThumbCard({ work, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: index % 4 * 80, y: 28, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: work.href, target: "_blank", rel: "noopener noreferrer", className: "group block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: [
          "relative overflow-hidden rounded-sm bg-surface border border-border/40 transition-all duration-700 hover:border-primary/40",
          work.vertical ? "aspect-[9/16]" : "aspect-video"
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: work.thumb,
              alt: work.caption,
              loading: "lazy",
              className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/95 backdrop-blur flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 ml-1 fill-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 5v14l11-7z" }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 text-[10px] uppercase tracking-[0.28em] text-foreground/85 bg-background/40 backdrop-blur px-2.5 py-1 rounded-full border border-border/40", children: work.label })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-foreground/90 group-hover:text-primary transition-colors", children: work.caption }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground font-mono shrink-0", children: String(index + 1).padStart(2, "0") })
    ] })
  ] }) });
}
function Work() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "relative py-32 md:py-48 border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6", children: "Selected Narratives , 03" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.03em] text-balance max-w-2xl", children: [
          "A curated archive of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-primary font-normal", children: "narratives" }),
          ", growth experiments, and creative systems."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: "Click any frame to open the original publication." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-8", children: "Shortform Content" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: [...shortform].reverse().map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbCard, { work: w, index: i }, w.href)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline my-24" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-8", children: "Longform Content" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: longform.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbCard, { work: w, index: i }, w.href)) })
  ] }) });
}
const channelAnalytics = "/assets/result-channel-analytics-XStLyslD.png";
const twoMviews = "/assets/result-2m-views-9q6sKmsB.png";
const retention = "/assets/result-retention-CbqAzf5F.png";
const engagedViews = "/assets/result-engaged-views-CHhBVJoX.png";
const reelRetention = "/assets/result-reel-retention-DcE30JAt.png";
const viewsChart = "/assets/result-views-chart-B4m1Vu2B.png";
const fiveMreach = "/assets/result-5m-reach-BKRDvIEm.png";
const reachBreakdown = "/assets/result-reach-breakdown-BIl16y_9.png";
const engagement = "/assets/result-engagement-D_NRy2tF.png";
const cases = [
  {
    image: channelAnalytics,
    caption: "Generated 2M+ views and 520+ new subscribers on an inactive channel.",
    side: "left"
  },
  {
    image: twoMviews,
    caption: "Strategic storytelling that scaled from one upload to nearly 2 million views.",
    side: "right"
  },
  {
    image: retention,
    caption: "60%+ audience retention at the end of an 18-second short with AVD of 96%.",
    side: "left",
    crop: true
  },
  {
    image: engagedViews,
    caption: "Nearly one million engaged views generated through audience-first content.",
    side: "right",
    crop: true
  },
  {
    image: reelRetention,
    caption: "Converted attention into measurable growth: 1M views and 4,419 watch hours.",
    side: "left",
    crop: true
  },
  {
    image: viewsChart,
    caption: "Mastered the hook by understanding the audience psychology.",
    side: "right",
    crop: true
  },
  {
    image: fiveMreach,
    caption: "Nearly 5M accounts reached through audience-first content.",
    side: "left",
    crop: true
  },
  {
    image: reachBreakdown,
    caption: "Creating impact and reach through shortform content.",
    side: "right",
    crop: true
  },
  {
    image: engagement,
    caption: "1.2 million+ interactions on a single piece of content.",
    side: "left",
    crop: true
  }
];
function Results() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "results", className: "relative py-32 md:py-48 border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-24 md:mb-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6", children: "Results & Case Studies , 05" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.03em] text-balance max-w-3xl", children: [
        "Numbers, in their ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-primary font-normal", children: "proper" }),
        " context."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-muted-foreground text-[15px] leading-relaxed", children: "Each frame is one insight pulled from real channels, real campaigns, real audiences. Story first, dashboard second." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-32 md:space-y-44", children: cases.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: [
          "grid md:grid-cols-12 gap-8 md:gap-16 items-center",
          c.side === "right" ? "md:[&>*:first-child]:order-2" : ""
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative rounded-sm overflow-hidden bg-surface border border-border/40 p-4 md:p-6 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full mx-auto max-h-[70vh] overflow-hidden rounded-sm flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: c.image,
                alt: c.caption,
                loading: "lazy",
                className: "w-auto max-w-full max-h-[70vh] object-cover object-center rounded-sm transition-transform duration-[1600ms] group-hover:scale-[1.01]",
                style: {
                  objectPosition: "center 50%",
                  clipPath: c.crop ? "inset(5% 0 4% 0)" : void 0
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 font-mono z-10", children: [
              "Case / ",
              String(i + 1).padStart(2, "0")
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.2] tracking-[-0.02em] text-balance", children: c.caption }) }) })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-32 md:mt-48 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif italic text-[clamp(2rem,5vw,4rem)] tracking-[-0.02em] text-primary/90", children: "And this is just the tip of the iceberg." }) }) })
  ] }) });
}
const services = [
  {
    n: "01",
    title: "Reels → Carousels",
    desc: "Translating viral videos into the format your audience now saves and re-reads capitalizing on the demand-supply gap which Instagram rewards.",
    hot: true
  },
  {
    n: "02",
    title: "Multi-platform Content System",
    desc: "A unified system engineered for attention across shortform, longform, and written."
  },
  {
    n: "03",
    title: "Strategic Account Audit",
    desc: "A forensic read of your content, positioning, and the gap between them."
  },
  {
    n: "04",
    title: "Content Repurposing System",
    desc: "One narrative, atomised across formats and platforms without losing its weight."
  },
  {
    n: "05",
    title: "Content Strategy Consulting",
    desc: "Frameworks, narrative direction, and the thinking behind sustained organic growth."
  },
  {
    n: "06",
    title: "LinkedIn + Personal Brand System",
    desc: "Positioning, voice, and a content engine built around how decision-makers actually read."
  }
];
function Systems() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "systems", className: "relative py-32 md:py-48 border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 mb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6", children: "Creative Systems , 04" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.03em] text-balance", children: [
          "Not services. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-primary font-normal", children: "Systems" }),
          " built to compound."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 lg:col-start-7 self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-[13px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/80", children: "→" }),
          " Minimum 3-month engagement"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/80", children: "→" }),
          " Payment upfront before work begins"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/80", children: "→" }),
          " Long-term positioning over short-term virality"
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group grid md:grid-cols-12 gap-6 py-8 md:py-10 border-b border-border/40 transition-colors hover:bg-surface/30 px-2 md:px-4 -mx-2 md:-mx-4 rounded-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 text-[11px] font-mono text-muted-foreground/70 pt-1", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-serif text-2xl md:text-[1.7rem] tracking-[-0.02em] group-hover:text-primary transition-colors", children: [
        s.title,
        s.hot && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 align-middle text-[9px] uppercase tracking-[0.25em] text-primary border border-primary/40 px-2 py-0.5 rounded-full", children: "Hot" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5 text-muted-foreground text-[15px] leading-relaxed", children: s.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1 text-right text-muted-foreground/60 text-xl pt-1 group-hover:text-primary group-hover:translate-x-1 transition-all", children: "→" })
    ] }) }, s.n)) })
  ] }) });
}
const cSohrab = "/assets/c-sohrab-8QOWrU7e.jpg";
const cHiral = "/assets/c-hiral-DdAUuIue.jpg";
const cNikhil = "/assets/c-nikhil-CBA_Oa4x.jpg";
const cInfocious = "/assets/c-infocious-DCSDFqTb.jpg";
const cShankh = "/assets/c-shankh-DpSsaj0Z.jpg";
const cKalari = "/assets/c-kalari-CnRK2eWP.jpg";
const cNard = "/assets/c-nard-CqalHkbB.jpg";
const cBmm = "/assets/c-bmm-DAH0c3NI.jpg";
const cB99 = "/assets/c-b99-D1NhgGOg.jpg";
const clients = [
  {
    name: "Sohrab Vakharia",
    href: "https://www.youtube.com/@sohrabvakharia",
    platform: "YouTube",
    img: cSohrab
  },
  {
    name: "Level Up With Hiral",
    href: "https://www.youtube.com/@levelupwithhiral",
    platform: "YouTube · Instagram",
    img: cHiral
  },
  {
    name: "Nikhil Arora",
    href: "https://www.instagram.com/tapyourgrowth/",
    platform: "Instagram",
    img: cNikhil
  },
  {
    name: "Infocious",
    href: "https://www.youtube.com/@infocious",
    platform: "YouTube",
    img: cInfocious
  },
  {
    name: "Natural Shankh",
    href: "https://www.youtube.com/@NaturalShankh",
    platform: "YouTube · Instagram · Web",
    img: cShankh
  },
  {
    name: "Kalari Warriors",
    href: "https://www.kalariwarriors.com/",
    platform: "Web · Instagram",
    img: cKalari
  },
  {
    name: "Nard Ranks",
    href: "https://www.youtube.com/@NardRanks",
    platform: "YouTube",
    img: cNard
  },
  {
    name: "Bring Me Memes",
    href: "https://www.instagram.com/bringme.memes",
    platform: "Instagram",
    img: cBmm
  },
  {
    name: "B99 Memes",
    href: "https://www.instagram.com/b99_bybmm",
    platform: "Instagram",
    img: cB99
  }
];
function Clients() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "clients", className: "relative py-32 md:py-48 border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-6", children: "Brands & Creators , 02" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.03em] text-balance max-w-3xl mb-16", children: [
      "Trusted by founders, creators, and brands building",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-primary font-normal", children: "durable" }),
      " attention."
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40 rounded-sm overflow-hidden", children: clients.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: c.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group relative block bg-background hover:bg-surface transition-colors duration-500 p-8 md:p-10 h-full",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden border border-border/60 bg-surface flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: c.img,
              alt: `${c.name} logo`,
              loading: "lazy",
              className: `w-full h-full ${c.name === "Natural Shankh" ? "object-contain p-1 bg-white" : "object-cover"} transition-transform duration-700 group-hover:scale-[1.06]`
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 mb-2", children: c.platform }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl md:text-[1.5rem] tracking-[-0.02em] group-hover:text-primary transition-colors truncate", children: c.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-xl", children: "↗" })
        ] })
      }
    ) }, c.name)) })
  ] }) });
}
function ClosingCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-32 md:py-56 border-t border-border/40 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] max-w-[110vw] max-h-[110vw] rounded-full bg-primary/[0.07] blur-[160px]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial relative z-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.32em] text-primary/80 mb-10", children: "The Final Frame , 06" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-serif text-[clamp(2.8rem,9vw,8rem)] leading-[0.98] tracking-[-0.04em] text-balance max-w-5xl mx-auto", children: [
        "Let's build your",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-primary font-normal", children: "content system." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-muted-foreground max-w-md mx-auto text-balance", children: "For founders and creators serious about being remembered, not just viewed." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 600, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:heetchothani7@gmail.com",
            className: "group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-9 py-4 text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5",
            children: [
              "heetchothani7@gmail.com",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.28em] text-muted-foreground/70", children: "Replies within 48 hours" })
      ] }) })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border/40 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-editorial", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-10 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-2xl tracking-tight", children: [
          "Heet Chothani",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-xs", children: "Creative strategist building narrative-led content systems." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 flex flex-wrap gap-x-8 gap-y-3 text-[13px] md:justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.instagram.com/heetchothani7/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }),
              " Instagram ↗"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/heetchothani/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
              " LinkedIn ↗"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:heetchothani7@gmail.com",
            className: "inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.22em]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
              " Email ↗"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline mt-12" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/50", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Heet Chothani , All rights reserved"
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "grain-overlay min-h-screen bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clients, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Work, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Systems, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Results, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ClosingCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
