"use client";

import { useInView } from "@/app/hooks/useInView";
import { ReactNode } from "react";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerGrid({ children, className = "" }: StaggerGridProps) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`stagger-grid ${inView ? "in-view" : ""} ${className}`}>
      {children}
    </div>
  );
}
