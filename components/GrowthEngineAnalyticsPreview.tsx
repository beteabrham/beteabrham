"use client";

import React from "react";
import {
  TrendingUp,
  Search,
  Users,
  Radio,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface GrowthEngineAnalyticsPreviewProps {
  onOpenShowcase: (itemId?: string) => void;
}

export default function GrowthEngineAnalyticsPreview({
  onOpenShowcase,
}: GrowthEngineAnalyticsPreviewProps) {
  return (
    <div className="w-full select-none space-y-2.5">
      {/* 1. Top Minimalist Telemetry Bar */}
      <div className="flex items-center justify-between text-[11px] font-mono pb-1 border-b border-neutral-200/80 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-pulse" />
          <span className="uppercase tracking-widest text-neutral-900 dark:text-white font-medium text-[10px]">
            Telemetry Engine
          </span>
          <span className="text-neutral-400 dark:text-neutral-600">•</span>
          <span className="text-neutral-500 dark:text-neutral-400 truncate text-[10px]">ICE — &quot;MESTAWET&quot; EP</span>
        </div>

        <button
          type="button"
          onClick={() => onOpenShowcase()}
          className="inline-flex items-center gap-1 text-[10px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer group"
          title="Inspect verified source screenshots"
        >
          <span>6 Source Screenshots</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* 2. Hero Stream Container (Matches Services & Capabilities Container + Blue Glow Effect) */}
      <div
        onClick={() => onOpenShowcase("growth-engine-streaming-telemetry")}
        className="golden-shimmer-container group rounded-xl p-3.5 sm:p-4 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-1 active:translate-y-0 cursor-pointer relative overflow-hidden"
      >
        <div className="relative z-10">
          {/* Top Row: Meta & Spike Tag */}
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-1">
            <div className="flex items-center gap-1.5">
              <span className="uppercase tracking-wider text-[10px] text-neutral-500 dark:text-neutral-400">
                Total Streams
              </span>
              <span className="text-neutral-300 dark:text-neutral-600">•</span>
              <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-300">
                Aug 27 – Present
              </span>
            </div>

            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/50 text-[9px] font-mono text-neutral-700 dark:text-neutral-300">
              <TrendingUp className="w-2.5 h-2.5" />
              <span>+342% Launch Spike</span>
            </div>
          </div>

          {/* 7,460 Large Headline Metric */}
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl sm:text-4xl font-light font-mono tracking-tight text-neutral-950 dark:text-white leading-none">
              7,460
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              Cross-DSP Streams
            </span>
          </div>

          {/* Integrated Velocity Curve (Compact & Responsive) */}
          <div className="w-full pt-1">
            <div className="w-full h-18 sm:h-20 relative">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 500 100"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Subtle Gradient Area Fill */}
                  <linearGradient id="streamAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
                    <stop offset="70%" stopColor="currentColor" stopOpacity="0.03" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Subtle Gridlines */}
                <line
                  x1="0"
                  y1="25"
                  x2="500"
                  y2="25"
                  stroke="currentColor"
                  strokeOpacity="0.08"
                  strokeDasharray="2 2"
                />
                <line
                  x1="0"
                  y1="60"
                  x2="500"
                  y2="60"
                  stroke="currentColor"
                  strokeOpacity="0.08"
                  strokeDasharray="2 2"
                />
                <line
                  x1="0"
                  y1="95"
                  x2="500"
                  y2="95"
                  stroke="currentColor"
                  strokeOpacity="0.12"
                />

                {/* Area Fill */}
                <path
                  d="M 0 95 L 35 92 L 80 85 L 120 15 L 160 32 L 210 45 L 270 55 L 340 60 L 410 63 L 500 65 L 500 95 Z"
                  fill="url(#streamAreaGradient)"
                  className="text-neutral-900 dark:text-white"
                />

                {/* Stroke Curve */}
                <path
                  d="M 0 95 Q 60 90 100 40 T 120 15 T 160 32 Q 220 50 310 59 T 500 65"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-neutral-900 dark:text-white"
                />

                {/* Peak Marker Point */}
                <circle
                  cx="120"
                  cy="15"
                  r="3.5"
                  className="fill-neutral-900 dark:fill-white stroke-white dark:stroke-neutral-900"
                  strokeWidth="1.5"
                />
                <text
                  x="132"
                  y="19"
                  fill="currentColor"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                  className="text-neutral-900 dark:text-white"
                >
                  1,420 peak/day (Aug 27)
                </text>
              </svg>
            </div>

            {/* Timeline Axis Labels (Aug 27 – Present) */}
            <div className="flex justify-between text-[9px] font-mono text-neutral-400 dark:text-neutral-500 pt-1 border-t border-neutral-100 dark:border-neutral-800/80">
              <span>Aug 27 (Launch)</span>
              <span>Sep 05</span>
              <span>Sep 12</span>
              <span>Present</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Satellite Metric Cards (Services & Capabilities Container + Blue Glow) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {/* Card 1: Google SERP & AI Overview */}
        <div
          onClick={() => onOpenShowcase("growth-engine-serp-ai-overview")}
          className="golden-shimmer-container group rounded-xl p-2.5 sm:p-3 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-1 active:translate-y-0 cursor-pointer flex flex-col justify-between relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 dark:text-neutral-500 mb-1">
              <span className="uppercase tracking-wider">Search Rank</span>
              <Search className="w-2.5 h-2.5 text-neutral-400 dark:text-neutral-500" />
            </div>
            <div className="text-xl sm:text-2xl font-mono font-light text-neutral-950 dark:text-white leading-none">
              #1 Rank
            </div>
            <div className="text-[10px] font-mono text-neutral-600 dark:text-neutral-300 mt-1 truncate">
              &quot;mestawet ice&quot;
            </div>

            <div className="mt-2 pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-1 text-[9px] font-mono text-neutral-500 dark:text-neutral-400">
              <Sparkles className="w-2.5 h-2.5 text-neutral-600 dark:text-neutral-300 shrink-0" />
              <span className="truncate">AI Overview Synthesis</span>
            </div>
          </div>
        </div>

        {/* Card 2: Global Audience & Netherlands Hub */}
        <div
          onClick={() => onOpenShowcase("growth-engine-geo-mapping")}
          className="golden-shimmer-container group rounded-xl p-2.5 sm:p-3 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-1 active:translate-y-0 cursor-pointer flex flex-col justify-between relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 dark:text-neutral-500 mb-1">
              <span className="uppercase tracking-wider">Listeners</span>
              <Users className="w-2.5 h-2.5 text-neutral-400 dark:text-neutral-500" />
            </div>
            <div className="text-xl sm:text-2xl font-mono font-light text-neutral-950 dark:text-white leading-none">
              5,035
            </div>
            <div className="text-[10px] font-mono text-neutral-600 dark:text-neutral-300 mt-1 truncate">
              64.7% Netherlands
            </div>

            <div className="mt-2 pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80 text-[9px] font-mono text-neutral-400 dark:text-neutral-500 truncate">
              BE (539) • US (412) • DE (310)
            </div>
          </div>
        </div>

        {/* Card 3: Top Track Matrix (Desta) */}
        <div
          onClick={() => onOpenShowcase("growth-engine-track-matrix")}
          className="golden-shimmer-container group rounded-xl p-2.5 sm:p-3 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-1 active:translate-y-0 cursor-pointer flex flex-col justify-between relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 dark:text-neutral-500 mb-1">
              <span className="uppercase tracking-wider">Top Track</span>
              <span className="text-[8px] px-1 py-0.2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/50 text-neutral-700 dark:text-neutral-300 font-mono">
                01
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-mono font-light text-neutral-950 dark:text-white leading-none truncate">
              Desta
            </div>
            <div className="text-[10px] font-mono text-neutral-600 dark:text-neutral-300 mt-1">
              3,114 streams (41.7%)
            </div>

            <div className="mt-2 pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80">
              <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1 rounded-full overflow-hidden">
                <div className="bg-neutral-900 dark:bg-white h-full rounded-full w-[41.7%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Channel Attribution Strip (Services & Capabilities Style + Blue Glow) */}
      <div
        onClick={() => onOpenShowcase("growth-engine-sources-devices")}
        className="golden-shimmer-container group rounded-xl px-3 py-2 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-between text-[10.5px] font-mono text-neutral-600 dark:text-neutral-300 flex-wrap gap-1.5 relative overflow-hidden"
      >
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Radio className="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
            <span className="text-neutral-900 dark:text-white font-medium">59% Playlists</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>22% Catalog</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span className="text-neutral-900 dark:text-white font-medium">86% Mobile</span>
          </div>

          <div className="inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors text-[10px]">
            <span>View Source Screenshots</span>
            <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
