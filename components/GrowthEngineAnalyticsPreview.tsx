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
    <div className="w-full text-white select-none space-y-2.5">
      {/* 1. Top Minimalist Telemetry Bar */}
      <div className="flex items-center justify-between text-[11px] font-mono pb-1 border-b border-white/10 text-white/50">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="uppercase tracking-widest text-white/90 font-medium text-[10px]">
            Telemetry Engine
          </span>
          <span className="text-white/30">•</span>
          <span className="text-white/60 truncate text-[10px]">ICE — &quot;MESTAWET&quot; EP</span>
        </div>

        <button
          type="button"
          onClick={() => onOpenShowcase()}
          className="inline-flex items-center gap-1 text-[10px] text-white/70 hover:text-white transition-colors cursor-pointer group"
          title="Inspect verified source screenshots"
        >
          <span>6 Source Screenshots</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* 2. Compact Stream Container (Curve Corners + Hover Glow Effect, Fitted to Column Height) */}
      <div
        onClick={() => onOpenShowcase("growth-engine-streaming-telemetry")}
        className="w-full p-3.5 sm:p-4 bg-neutral-950/90 rounded-2xl border border-white/15 hover:border-white/45 hover:shadow-[0_0_30px_rgba(255,255,255,0.13)] transition-all duration-300 cursor-pointer group relative overflow-hidden"
      >
        {/* Top Row inside Stream Container */}
        <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-1">
          <div className="flex items-center gap-1.5">
            <span className="uppercase tracking-wider text-[10px] text-white/50">
              Total Streams
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[10px] text-white/50 font-medium">Aug 27 – Present</span>
          </div>

          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/20 text-white text-[9px] font-mono">
            <TrendingUp className="w-2.5 h-2.5 text-white" />
            <span>+342% Launch Spike</span>
          </div>
        </div>

        {/* Big Number: 7,460 Streams */}
        <div className="flex items-baseline gap-2 mb-1.5">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-light font-mono tracking-tight text-white leading-none">
            7,460
          </span>
          <span className="text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider">
            Cross-DSP Streams
          </span>
        </div>

        {/* Integrated Graph inside Stream Container (Pure White, Curved, Compact Height) */}
        <div className="w-full pt-1">
          <div className="w-full h-20 sm:h-24 relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 500 100"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Pure White Monochrome Gradient Fill */}
                <linearGradient id="whiteCurveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                  <stop offset="70%" stopColor="#ffffff" stopOpacity="0.03" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Minimal Subtle Gridlines */}
              <line
                x1="0"
                y1="25"
                x2="500"
                y2="25"
                stroke="rgba(255, 255, 255, 0.07)"
                strokeDasharray="2 2"
              />
              <line
                x1="0"
                y1="60"
                x2="500"
                y2="60"
                stroke="rgba(255, 255, 255, 0.07)"
                strokeDasharray="2 2"
              />
              <line
                x1="0"
                y1="95"
                x2="500"
                y2="95"
                stroke="rgba(255, 255, 255, 0.12)"
              />

              {/* Area Fill Under Curve (Pure White) */}
              <path
                d="M 0 95 L 35 92 L 80 85 L 120 15 L 160 32 L 210 45 L 270 55 L 340 60 L 410 63 L 500 65 L 500 95 Z"
                fill="url(#whiteCurveGradient)"
              />

              {/* Pure White Line Curve */}
              <path
                d="M 0 95 Q 60 90 100 40 T 120 15 T 160 32 Q 220 50 310 59 T 500 65"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Peak Marker: Dot & Label */}
              <circle
                cx="120"
                cy="15"
                r="3.5"
                fill="#ffffff"
                stroke="#000000"
                strokeWidth="1.5"
              />
              <text
                x="132"
                y="19"
                fill="#ffffff"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                1,420 peak/day (Aug 27)
              </text>
            </svg>
          </div>

          {/* Timeline Axis Labels (Aug 27 - Present) */}
          <div className="flex justify-between text-[9px] font-mono text-white/40 pt-1 border-t border-white/10">
            <span>Aug 27 (Launch)</span>
            <span>Sep 05</span>
            <span>Sep 12</span>
            <span>Present</span>
          </div>
        </div>
      </div>

      {/* 3. Satellite Analytics Cards (Curved Corners + Hover Glow Effect) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {/* Card 1: Google SERP & AI Overview */}
        <div
          onClick={() => onOpenShowcase("growth-engine-serp-ai-overview")}
          className="p-2.5 sm:p-3 bg-neutral-950/90 rounded-xl border border-white/15 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.10)] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 mb-1">
              <span className="uppercase tracking-wider">Search Rank</span>
              <Search className="w-2.5 h-2.5 text-white/70" />
            </div>
            <div className="text-xl sm:text-2xl font-mono font-light text-white leading-none">
              #1 Rank
            </div>
            <div className="text-[10px] font-mono text-white/70 mt-1 truncate">
              &quot;mestawet ice&quot;
            </div>
          </div>

          <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center gap-1 text-[9px] font-mono text-white/70">
            <Sparkles className="w-2.5 h-2.5 text-white shrink-0" />
            <span className="truncate">AI Overview Synthesis</span>
          </div>
        </div>

        {/* Card 2: Global Audience & Netherlands Hub */}
        <div
          onClick={() => onOpenShowcase("growth-engine-geo-mapping")}
          className="p-2.5 sm:p-3 bg-neutral-950/90 rounded-xl border border-white/15 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.10)] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 mb-1">
              <span className="uppercase tracking-wider">Listeners</span>
              <Users className="w-2.5 h-2.5 text-white/70" />
            </div>
            <div className="text-xl sm:text-2xl font-mono font-light text-white leading-none">
              5,035
            </div>
            <div className="text-[10px] font-mono text-white/70 mt-1 truncate">
              64.7% Netherlands
            </div>
          </div>

          <div className="mt-2 pt-1.5 border-t border-white/10 text-[9px] font-mono text-white/60 truncate">
            BE (539) • US (412) • DE (310)
          </div>
        </div>

        {/* Card 3: Top Track Matrix (Desta) */}
        <div
          onClick={() => onOpenShowcase("growth-engine-track-matrix")}
          className="p-2.5 sm:p-3 bg-neutral-950/90 rounded-xl border border-white/15 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.10)] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[9px] font-mono text-white/50 mb-1">
              <span className="uppercase tracking-wider">Top Track</span>
              <span className="text-[8px] px-1 py-0.2 rounded-full border border-white/20 text-white font-mono">
                01
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-mono font-light text-white leading-none truncate">
              Desta
            </div>
            <div className="text-[10px] font-mono text-white/70 mt-1">
              3,114 streams (41.7%)
            </div>
          </div>

          <div className="mt-2 pt-1.5 border-t border-white/10">
            {/* Minimalist Rounded White Progress Bar */}
            <div className="w-full bg-white/15 h-1 rounded-full overflow-hidden">
              <div className="bg-white h-full rounded-full w-[41.7%]" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Minimalist Channel Strip (Curved Corners + Hover Glow Effect) */}
      <div
        onClick={() => onOpenShowcase("growth-engine-sources-devices")}
        className="px-3 py-2 bg-neutral-950/90 rounded-xl border border-white/15 hover:border-white/35 hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer flex items-center justify-between text-[10.5px] font-mono text-white/60 flex-wrap gap-1.5 group"
      >
        <div className="flex items-center gap-2">
          <Radio className="w-3 h-3 text-white" />
          <span className="text-white/80">59% Playlists</span>
          <span className="text-white/30">•</span>
          <span>22% Catalog</span>
          <span className="text-white/30">•</span>
          <span className="text-white/80">86% Mobile</span>
        </div>

        <div className="inline-flex items-center gap-1 text-white group-hover:underline text-[10px]">
          <span>View Source Screenshots</span>
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
