"use client";

import React from "react";
import { techStackTicker } from "@/lib/data";
import { Check, Sparkles } from "lucide-react";

export default function TechMarquee() {
  // Duplicate array to enable seamless infinite scroll loop
  const duplicatedItems = [...techStackTicker, ...techStackTicker, ...techStackTicker];

  return (
    <section className="py-12 md:py-16 border-t border-neutral-200/80 dark:border-neutral-800 overflow-hidden bg-neutral-50/40 dark:bg-neutral-950/40">
      <div className="max-w-5xl mx-auto px-4 mb-6 flex items-center justify-between">
        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
          Technologies &amp; Engineering Stack
        </p>
        <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500" />
          Production-proven tooling
        </span>
      </div>

      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-4 py-2 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {duplicatedItems.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs md:text-sm font-medium text-neutral-800 dark:text-neutral-200 shadow-2xs hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
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
