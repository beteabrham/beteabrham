"use client";

import React from "react";
import {
  TrendingUp,
  Search,
  Users,
  Radio,
  Maximize2,
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
    <div className="w-full text-white select-none space-y-3">
      {/* 1. Top Minimalist Telemetry Header (Extracted, No Outer Enclosing Container) */}
      <div className="flex items-center justify-between text-xs font-mono pb-1 border-b border-white/10 text-white/50">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="uppercase tracking-widest text-white/90 font-medium">
            Telemetry Engine
          </span>
          <span className="text-white/30">•</span>
          <span className="text-white/60 truncate">ICE — &quot;MESTAWET&quot; EP</span>
        </div>

        <button
          type="button"
          onClick={() => onOpenShowcase()}
          className="inline-flex items-center gap-1.5 text-[11px] text-white/70 hover:text-white transition-colors cursor-pointer group"
          title="Inspect verified source screenshots"
        >
          <span>Source Screenshots</span>
          <span className="text-[10px] px-1 py-0.2 border border-white/20 text-white font-mono">
            6
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* 2. Massive Hero Container (4x Bigger for 7,460 Streams with Integrated Graph Inside) */}
      <div
        onClick={() => onOpenShowcase("growth-engine-streaming-telemetry")}
        className="w-full p-5 sm:p-6 bg-neutral-950 border border-white/15 hover:border-white/40 transition-colors cursor-pointer group rounded-none relative overflow-hidden"
      >
        {/* Top Meta within 7,460 Container */}
        <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-2">
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-wider text-[11px] text-white/50">
              Total Streams
            </span>
            <span className="text-white/20">/</span>
            <span className="text-[10px] text-white/40">Jan 24 – Feb 23 (30 Days)</span>
          </div>

          <div className="inline-flex items-center gap-1 px-2 py-0.5 border border-white/20 text-white text-[10px] font-mono">
            <TrendingUp className="w-3 h-3 text-white" />
            <span>+342% Launch Spike</span>
          </div>
        </div>

        {/* The 4x Massive Number: 7,460 */}
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-5xl sm:text-6xl md:text-7xl font-light font-mono tracking-tighter text-white leading-none">
            7,460
          </span>
          <span className="text-xs sm:text-sm font-mono text-white/40 uppercase tracking-widest">
            Cross-DSP Streams
          </span>
        </div>

        {/* Integrated Graph Directly Inside the 7,460 Container (Pure White Aesthetics) */}
        <div className="w-full pt-2">
          <div className="w-full h-32 sm:h-36 md:h-40 relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 500 120"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Pure White Monochrome Gradient Fill */}
                <linearGradient id="whiteCurveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                  <stop offset="60%" stopColor="#ffffff" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Minimal Subtle Gridlines */}
              <line
                x1="0"
                y1="30"
                x2="500"
                y2="30"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeDasharray="2 2"
              />
              <line
                x1="0"
                y1="70"
                x2="500"
                y2="70"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeDasharray="2 2"
              />
              <line
                x1="0"
                y1="110"
                x2="500"
                y2="110"
                stroke="rgba(255, 255, 255, 0.15)"
              />

              {/* Area Fill Under Curve (Pure White) */}
              <path
                d="M 0 110 L 40 106 L 90 98 L 130 18 L 170 36 L 220 52 L 280 64 L 340 70 L 410 74 L 500 76 L 500 110 Z"
                fill="url(#whiteCurveGradient)"
              />

              {/* Pure White Line Curve */}
              <path
                d="M 0 110 Q 70 104 110 45 T 130 18 T 170 36 Q 230 58 320 68 T 500 76"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              {/* Peak Marker: Pure White Dot and Label */}
              <circle
                cx="130"
                cy="18"
                r="4.5"
                fill="#ffffff"
                stroke="#000000"
                strokeWidth="1.5"
              />
              <text
                x="142"
                y="22"
                fill="#ffffff"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
              >
                1,420 peak/day (Jan 24)
              </text>
            </svg>
          </div>

          {/* Timeline Axis Labels (Pure White Opacities) */}
          <div className="flex justify-between text-[10px] font-mono text-white/40 pt-2 border-t border-white/10">
            <span>Jan 24 (EP Release)</span>
            <span>Feb 01</span>
            <span>Feb 10</span>
            <span>Feb 23 (Current)</span>
          </div>
        </div>

        {/* Subtle Hover Prompt */}
        <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-white/40 pt-2 border-t border-white/5">
          <span>Multi-DSP Launch Spike: Spotify, Apple Music, YouTube &amp; Amazon</span>
          <span className="group-hover:text-white transition-colors flex items-center gap-1">
            <span>Inspect graph source</span>
            <Maximize2 className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* 3. Extracted Satellite Elements in Minimalist Positioning (Pure White, Zero Color) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
        {/* Tile 1: Google SERP & AI Overview */}
        <div
          onClick={() => onOpenShowcase("growth-engine-serp-ai-overview")}
          className="p-3.5 bg-neutral-950 border border-white/15 hover:border-white/40 transition-colors cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-white/50 mb-1.5">
              <span className="uppercase tracking-wider">Organic Search</span>
              <Search className="w-3 h-3 text-white/70" />
            </div>
            <div className="text-2xl font-mono font-light text-white">#1 Rank</div>
            <div className="text-[11px] font-mono text-white/70 mt-0.5">
              Query: &quot;mestawet ice&quot;
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 space-y-1">
            <div className="flex items-center gap-1 text-[10px] font-mono text-white/80">
              <Sparkles className="w-2.5 h-2.5 text-white" />
              <span>Google AI Overview</span>
            </div>
            <div className="text-[10px] text-white/40 font-mono leading-tight">
              Featured rich snippet + Knowledge Graph
            </div>
          </div>
        </div>

        {/* Tile 2: Global Audience & Netherlands Hub */}
        <div
          onClick={() => onOpenShowcase("growth-engine-geo-mapping")}
          className="p-3.5 bg-neutral-950 border border-white/15 hover:border-white/40 transition-colors cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-white/50 mb-1.5">
              <span className="uppercase tracking-wider">Global Listeners</span>
              <Users className="w-3 h-3 text-white/70" />
            </div>
            <div className="text-2xl font-mono font-light text-white">5,035</div>
            <div className="text-[11px] font-mono text-white/70 mt-0.5">
              64.7% Netherlands (3,258)
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 space-y-1">
            <div className="text-[10px] font-mono text-white/80">
              Belgium (539) • US (412) • DE (310)
            </div>
            <div className="text-[10px] text-white/40 font-mono leading-tight">
              International diaspora reach
            </div>
          </div>
        </div>

        {/* Tile 3: Top Track Matrix (Desta) */}
        <div
          onClick={() => onOpenShowcase("growth-engine-track-matrix")}
          className="p-3.5 bg-neutral-950 border border-white/15 hover:border-white/40 transition-colors cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-white/50 mb-1.5">
              <span className="uppercase tracking-wider">Lead Single</span>
              <span className="text-[9px] px-1 border border-white/20 text-white font-mono">
                Track 01
              </span>
            </div>
            <div className="text-2xl font-mono font-light text-white">Desta</div>
            <div className="text-[11px] font-mono text-white/70 mt-0.5">
              3,114 streams (41.7%)
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 space-y-1">
            {/* Minimalist Pure White Progress Bar */}
            <div className="w-full bg-white/15 h-1 overflow-hidden">
              <div className="bg-white h-full w-[41.7%]" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-white/40 pt-0.5">
              <span>Layhon (1,162)</span>
              <span>Sehetet (1,030)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Minimalist Channel Attribution Strip (Pure White, No Color) */}
      <div
        onClick={() => onOpenShowcase("growth-engine-sources-devices")}
        className="px-3.5 py-2.5 bg-neutral-950 border border-white/15 hover:border-white/30 transition-colors cursor-pointer flex items-center justify-between text-[11px] font-mono text-white/60 flex-wrap gap-2 group"
      >
        <div className="flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 text-white" />
          <span className="text-white/80">59% Playlists</span>
          <span className="text-white/30">•</span>
          <span>22% Catalog Album</span>
          <span className="text-white/30">•</span>
          <span className="text-white/80">86% Mobile Listeners</span>
        </div>

        <div className="inline-flex items-center gap-1 text-white group-hover:underline">
          <span>Open 6 Source Screenshots</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
