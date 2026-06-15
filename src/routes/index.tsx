import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Results } from "@/components/Results";
import { Systems } from "@/components/Systems";
import { Clients } from "@/components/Clients";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heet Chothani — Creative Strategist & Content Systems" },
      {
        name: "description",
        content:
          "Heet builds narrative-led content systems for founders, creators, and brands. Turning attention into trust, and trust into growth.",
      },
      { property: "og:title", content: "Heet Chothani — Creative Strategist" },
      {
        property: "og:description",
        content:
          "Narrative-led content systems engineered for attention. Millions of views are a byproduct. Growth is the goal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
