import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3";
  y?: number;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  y = 24,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        opacity: visible ? 1 : 0,
        transition: `transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </Tag>
  );
}
