"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Maximize2 } from "lucide-react";

interface BrandUiPreviewProps {
  onOpenShowcase: (itemId?: string) => void;
}

export default function BrandUiPreview({ onOpenShowcase }: BrandUiPreviewProps) {
  return (
    <div className="w-full select-none space-y-2">
      {/* 1. Top Floating Navigation Bar Mockup (Cropped from Hero Screenshot) */}
      <div
        onClick={() => onOpenShowcase("fresh-cave-hero")}
        className="golden-shimmer-container group rounded-lg h-7 sm:h-8 w-full relative overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        title="Click to view full Hero & Navigation screen"
      >
        <div className="absolute inset-0 scale-[1.03] origin-top">
          <Image
            src="/brand-ui/Screenshot%202026-09-16%20204227.png"
            alt="Fresh Cave Navigation Bar"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 560px"
            priority
          />
        </div>

        {/* Hover Cue */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-20 flex items-center justify-end px-2 pointer-events-none">
          <span className="text-[9px] font-mono text-white/90 bg-black/70 px-1.5 py-0.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Navigation Bar
          </span>
        </div>
      </div>

      {/* 2. Main Mockup Stage: Replicating View & Positioning Placements from the Mockup */}
      <div className="grid grid-cols-12 gap-2">
        {/* Left Column (7 cols): Hero Landing Banner + Dual Sub-Cards */}
        <div className="col-span-7 flex flex-col gap-2">
          {/* Main Hero Card: "FOR ARTISTS WITH VISION." */}
          <div
            onClick={() => onOpenShowcase("fresh-cave-hero")}
            className="golden-shimmer-container group rounded-xl h-28 sm:h-32 w-full relative overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            title="Click to view Hero Section"
          >
            <div className="absolute inset-0 scale-[1.3] origin-center -translate-y-1">
              <Image
                src="/brand-ui/Screenshot%202026-09-16%20204227.png"
                alt="For Artists with Vision Hero"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 60vw, 340px"
              />
            </div>

            {/* Subtle Overlay Label */}
            <span className="absolute bottom-1.5 left-1.5 z-20 text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-black/80 text-white/90 border border-white/10 backdrop-blur-xs opacity-80 group-hover:opacity-100 transition-opacity">
              Hero Section
            </span>
          </div>

          {/* Dual Sub-Cards Row: DSP Pipelines + Master Ownership */}
          <div className="grid grid-cols-2 gap-2 h-18 sm:h-20">
            {/* Sub-Card 1: Direct DSP Pipelines */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
              className="golden-shimmer-container group rounded-xl h-full w-full relative overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              title="Click to view Direct DSP Pipelines"
            >
              <div className="absolute inset-0 scale-[1.9] origin-[10%_75%]">
                <Image
                  src="/brand-ui/Screenshot%202026-09-16%20204257.png"
                  alt="Direct DSP Pipelines"
                  fill
                  className="object-cover object-[10%_75%]"
                  sizes="(max-width: 768px) 30vw, 170px"
                />
              </div>

              <span className="absolute bottom-1 left-1 z-20 text-[8px] font-mono px-1 py-0.2 rounded-sm bg-black/85 text-white/90 border border-white/10 backdrop-blur-xs opacity-75 group-hover:opacity-100 transition-opacity truncate max-w-[90%]">
                DSP Pipelines
              </span>
            </div>

            {/* Sub-Card 2: 70% Master Ownership */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-master-ownership")}
              className="golden-shimmer-container group rounded-xl h-full w-full relative overflow-hidden bg-white dark:bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              title="Click to view Master Ownership & Ingestion"
            >
              <div className="absolute inset-0 scale-[2.2] origin-[8%_80%]">
                <Image
                  src="/brand-ui/Screenshot%202026-09-16%20204315.png"
                  alt="70% Master Ownership"
                  fill
                  className="object-cover object-[8%_80%]"
                  sizes="(max-width: 768px) 30vw, 170px"
                />
              </div>

              <span className="absolute bottom-1 left-1 z-20 text-[8px] font-mono px-1 py-0.2 rounded-sm bg-black/85 text-white/90 border border-white/10 backdrop-blur-xs opacity-75 group-hover:opacity-100 transition-opacity truncate max-w-[90%]">
                70% Master
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Atlas Nova Artist Spotlight Card (Spans Full Height) */}
        <div className="col-span-5">
          <div
            onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
            className="golden-shimmer-container group rounded-xl h-full min-h-[190px] sm:min-h-[216px] w-full relative overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            title="Click to view Atlas Nova Artist Spotlight"
          >
            <div className="absolute inset-0 scale-[1.5] origin-[18%_55%]">
              <Image
                src="/brand-ui/Screenshot%202026-09-16%20204634.png"
                alt="Atlas Nova Artist Spotlight"
                fill
                className="object-cover object-[18%_55%]"
                sizes="(max-width: 768px) 40vw, 240px"
              />
            </div>

            {/* Overlay Info */}
            <span className="absolute bottom-1.5 left-1.5 z-20 text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-black/85 text-white/90 border border-white/10 backdrop-blur-xs opacity-80 group-hover:opacity-100 transition-opacity">
              Atlas Nova Roster
            </span>
          </div>
        </div>
      </div>

      {/* 3. Bottom Capabilities Strip (Services & Capabilities Container + Blue Glow) */}
      <div
        onClick={() => onOpenShowcase()}
        className="golden-shimmer-container group rounded-xl px-3 py-1.5 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-between text-[10.5px] font-mono text-neutral-600 dark:text-neutral-300 flex-wrap gap-1.5 relative overflow-hidden"
      >
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-neutral-900 dark:text-white font-medium">150+ DSP Storefronts</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>Vevo 4K Rails</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span className="text-neutral-900 dark:text-white font-medium">70% Master Retention</span>
          </div>

          <div className="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors text-[10px] shrink-0">
            <span>12 Interface Screens</span>
            <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
