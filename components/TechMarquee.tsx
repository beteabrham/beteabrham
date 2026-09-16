"use client";

import React from "react";
import { techStackTicker } from "@/lib/data";
import { Check } from "lucide-react";

export default function TechMarquee() {
  // Duplicate array to enable seamless infinite scroll loop
  const duplicatedItems = [...techStackTicker, ...techStackTicker, ...techStackTicker];

  return (
    <section className="py-10 md:py-12 border-t border-neutral-200/80 dark:border-neutral-800 overflow-hidden bg-neutral-50/40 dark:bg-neutral-950/40">
      <div className="max-w-5xl mx-auto px-4 mb-4">
        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
          Core Capabilities &amp; Marketing Tech Stack
        </p>
      </div>

      <div className="marquee-mask overflow-hidden py-2">
        <div className="animate-marquee flex w-max items-center gap-4 py-8 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {duplicatedItems.map((tech, index) => (
            <div
              key={index}
              className="relative hover:z-10 flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs md:text-sm font-medium text-neutral-800 dark:text-neutral-200 shadow-2xs hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 golden-shimmer-container"
            >
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
