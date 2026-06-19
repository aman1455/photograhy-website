"use client";

import { useInView } from "@/app/hooks/useInView";
import { ReactNode } from "react";

type AnimationType = "fade-in-up" | "fade-in" | "scale-in";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
}

const animationMap: Record<AnimationType, string> = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-in-up",
}: RevealProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`${className} ${inView ? animationMap[animation] : "opacity-0"}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
