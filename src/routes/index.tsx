import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Results } from "@/components/Results";
import { Systems } from "@/components/Systems";
import { Clients } from "@/components/Clients";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

const favicon = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">' +
    '<text y="64" x="50" font-size="88" text-anchor="middle" dominant-baseline="middle">📺</text>' +
    "</svg>",
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heet Chothani, Creative Strategist & Content Systems" },
      {
        name: "description",
        content:
          "Heet builds narrative-led content systems for founders, creators, and brands. Turning attention into trust, and trust into growth.",
      },
      {
        property: "og:title",
        content: "Heet Chothani, Creative Strategist",
      },
      {
        property: "og:description",
        content:
          "Narrative-led content systems engineered for attention. Millions of views are a byproduct. Growth is the goal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "icon",
        href: `data:image/svg+xml,${favicon}`,
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain-overlay min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Clients />
      <Work />
      <Systems />
      <Results />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
