"use client";

import React from "react";
import {
  ArrowUpRight,
  Disc,
  Radio,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface BrandUiPreviewProps {
  onOpenShowcase: (itemId?: string) => void;
}

export default function BrandUiPreview({ onOpenShowcase }: BrandUiPreviewProps) {
  return (
    <div className="w-full select-none space-y-2.5">
      {/* 1. Main Hero Web Mockup Container (Services & Capabilities Style + Blue Glow) */}
      <div
        onClick={() => onOpenShowcase("fresh-cave-hero")}
        className="golden-shimmer-container group rounded-xl p-3.5 sm:p-4 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-1 active:translate-y-0 cursor-pointer relative overflow-hidden"
      >
        <div className="relative z-10">
          {/* Top Browser Bar Simulation */}
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-500 pb-2 mb-2 border-b border-neutral-100 dark:border-neutral-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/70" />
              <span className="w-2 h-2 rounded-full bg-amber-500/70" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
              <span className="ml-1 text-[10px] text-neutral-400 dark:text-neutral-500 truncate">
                freshcave.audio // platform
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                DSP NODE
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium">
                SUBMIT MUSIC
              </span>
            </div>
          </div>

          {/* Eyebrow Tag from Screenshot */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500" />
            <span className="text-[9px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
              Visual Broadcast • Global Audio Ingest
            </span>
          </div>

          {/* Big Bold Headline from Screenshot (Crimson Accent on "VISION.") */}
          <h4 className="text-xl sm:text-2xl md:text-[26px] font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight mb-1.5">
            FOR ARTISTS WITH{" "}
            <span className="italic font-serif font-normal text-red-600 dark:text-red-500">
              VISION.
            </span>
          </h4>

          {/* Subtitle from Screenshot */}
          <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-snug line-clamp-2 mb-3 max-w-lg">
            Direct audio DSP routing, official Vevo visual distribution rails, YouTube OAC
            verification, and automated copyright administration.
          </p>

          {/* Action Buttons Mockup */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white text-[10px] font-medium shadow-xs transition-colors"
            >
              <span>APPLY FOR DISTRIBUTION</span>
              <span className="text-[11px]">→</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-neutral-200/80 dark:border-neutral-700/70 text-neutral-600 dark:text-neutral-300 text-[10px] font-mono hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <span>EXPLORE SERVICES</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Three Satellite Feature Cards (Curved Corners + Blue Glow Effect) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {/* Card 1: Direct DSP Pipelines */}
        <div
          onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
          className="golden-shimmer-container group rounded-xl p-2.5 sm:p-3 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-1 active:translate-y-0 cursor-pointer flex flex-col justify-between relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between text-[9px] font-mono text-red-600 dark:text-red-500 mb-1">
              <span className="uppercase tracking-wider">// DIRECT DSP NODE</span>
              <Disc className="w-2.5 h-2.5 text-neutral-400 dark:text-neutral-500" />
            </div>
            <div className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white leading-tight">
              Lossless DSP
            </div>
            <div className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 mt-1 truncate">
              Spotify, Apple, Vevo, OAC
            </div>

            <div className="mt-2 pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80 text-[9px] font-mono text-neutral-500 dark:text-neutral-400 truncate">
              150+ Storefronts • 24-bit
            </div>
          </div>
        </div>

        {/* Card 2: Master Ownership (70%) */}
        <div
          onClick={() => onOpenShowcase("fresh-cave-master-ownership")}
          className="golden-shimmer-container group rounded-xl p-2.5 sm:p-3 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-1 active:translate-y-0 cursor-pointer flex flex-col justify-between relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between text-[9px] font-mono text-red-600 dark:text-red-500 mb-1">
              <span className="uppercase tracking-wider">// TRANSPARENCY</span>
              <span className="text-[8px] px-1 py-0.2 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 font-mono">
                EQUITY
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-mono font-light text-neutral-950 dark:text-white leading-none">
              70% Master
            </div>
            <div className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 mt-1 truncate">
              Independent Ownership
            </div>

            <div className="mt-2 pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80 text-[9px] font-mono text-neutral-500 dark:text-neutral-400 truncate">
              48h Turnaround • Direct
            </div>
          </div>
        </div>

        {/* Card 3: Featured Artist Roster (Atlas Nova) */}
        <div
          onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
          className="golden-shimmer-container group rounded-xl p-2.5 sm:p-3 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-1 active:translate-y-0 cursor-pointer flex flex-col justify-between relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between text-[9px] font-mono text-red-600 dark:text-red-500 mb-1">
              <span className="uppercase tracking-wider">// ARTIST ROSTER</span>
              <Sparkles className="w-2.5 h-2.5 text-neutral-400 dark:text-neutral-500" />
            </div>
            <div className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white leading-tight truncate">
              Atlas Nova
            </div>
            <div className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 mt-1 truncate">
              840K+ Monthly Listeners
            </div>

            <div className="mt-2 pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80 text-[9px] font-mono text-neutral-500 dark:text-neutral-400 truncate">
              42M+ Catalog Streams
            </div>
          </div>
        </div>
      </div>

      {/* 3. Capabilities Footer Strip (Services & Capabilities Style + Blue Glow) */}
      <div
        onClick={() => onOpenShowcase()}
        className="golden-shimmer-container group rounded-xl px-3 py-2 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-between text-[10.5px] font-mono text-neutral-600 dark:text-neutral-300 flex-wrap gap-1.5 relative overflow-hidden"
      >
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Radio className="w-3 h-3 text-red-600 dark:text-red-500" />
            <span className="text-neutral-900 dark:text-white font-medium">Vevo 4K Rails</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>Producer Line</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span className="text-neutral-900 dark:text-white font-medium">Royalty Engine</span>
          </div>

          <div className="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors text-[10px]">
            <span>12 Interface Screens</span>
            <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
