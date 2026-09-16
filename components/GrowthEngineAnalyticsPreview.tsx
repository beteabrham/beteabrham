"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Search,
  Users,
  Radio,
  Smartphone,
  Sparkles,
  Maximize2,
  Globe,
  BarChart2,
  Music,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

interface GrowthEngineAnalyticsPreviewProps {
  onOpenShowcase: (itemId?: string) => void;
}

type TabType = "overview" | "serp" | "tracks" | "audience";

export default function GrowthEngineAnalyticsPreview({
  onOpenShowcase,
}: GrowthEngineAnalyticsPreviewProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  // Track data extracted from source screenshot:
  const trackPerformance = [
    { rank: "01", name: "Desta", streams: 3114, percentage: 41.7, status: "Lead Single" },
    { rank: "02", name: "Layhon", streams: 1162, percentage: 15.6, status: "Focus Track" },
    { rank: "03", name: "Sehetet", streams: 1030, percentage: 13.8, status: "Catalog" },
    { rank: "04", name: "Lanchi", streams: 826, percentage: 11.1, status: "Catalog" },
    { rank: "05", name: "Yene Nat", streams: 686, percentage: 9.2, status: "Catalog" },
    { rank: "06", name: "Yene Mar", streams: 642, percentage: 8.6, status: "Outro" },
  ];

  // Geolocation data extracted from source screenshot:
  const geoBreakdown = [
    { country: "Netherlands", listeners: 3258, share: "64.7%", flag: "🇳🇱" },
    { country: "Belgium", listeners: 539, share: "10.7%", flag: "🇧🇪" },
    { country: "United States", listeners: 412, share: "8.2%", flag: "🇺🇸" },
    { country: "Germany", listeners: 310, share: "6.2%", flag: "🇩🇪" },
    { country: "United Kingdom", listeners: 215, share: "4.3%", flag: "🇬🇧" },
    { country: "Other Markets", listeners: 301, share: "6.0%", flag: "🌍" },
  ];

  return (
    <div className="w-full bg-neutral-950 text-neutral-100 border border-neutral-800 rounded-none shadow-2xl flex flex-col justify-between overflow-hidden select-none">
      {/* 1. Header Bar: Status Indicator, Title & Showcase Trigger */}
      <div className="px-3.5 py-3 border-b border-neutral-800/80 bg-neutral-900/60 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-semibold uppercase">
            TELEMETRY ENGINE
          </span>
          <span className="text-neutral-600 hidden sm:inline">•</span>
          <span className="text-[11px] font-mono text-neutral-400 truncate hidden sm:inline">
            ICE — &quot;MESTAWET&quot; EP
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpenShowcase()}
          className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-mono text-neutral-300 hover:text-white bg-neutral-800/90 hover:bg-neutral-700/90 border border-neutral-700/60 transition-colors cursor-pointer rounded-none"
          title="Inspect verified source screenshots"
        >
          <Maximize2 className="w-3 h-3 text-emerald-400" />
          <span className="hidden xs:inline">Source Showcase</span>
          <span className="text-[10px] px-1 bg-emerald-500/20 text-emerald-300 font-mono">
            6
          </span>
        </button>
      </div>

      {/* 2. Interactive Navigation Tabs */}
      <div className="flex border-b border-neutral-800/80 bg-neutral-950 px-2 pt-1 gap-1 overflow-x-auto scrollbar-none">
        <button
          type="button"
          onClick={() => setActiveTab("overview")}
          className={`px-3 py-2 text-[11px] font-mono transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "overview"
              ? "border-emerald-500 text-white font-medium bg-neutral-900/40"
              : "border-transparent text-neutral-400 hover:text-neutral-200"
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span>Overview</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("serp")}
          className={`px-3 py-2 text-[11px] font-mono transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "serp"
              ? "border-emerald-500 text-white font-medium bg-neutral-900/40"
              : "border-transparent text-neutral-400 hover:text-neutral-200"
          }`}
        >
          <Search className="w-3.5 h-3.5 text-blue-400" />
          <span>Google SERP & AI</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("tracks")}
          className={`px-3 py-2 text-[11px] font-mono transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "tracks"
              ? "border-emerald-500 text-white font-medium bg-neutral-900/40"
              : "border-transparent text-neutral-400 hover:text-neutral-200"
          }`}
        >
          <BarChart2 className="w-3.5 h-3.5 text-violet-400" />
          <span>Track Matrix</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("audience")}
          className={`px-3 py-2 text-[11px] font-mono transition-colors border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            activeTab === "audience"
              ? "border-emerald-500 text-white font-medium bg-neutral-900/40"
              : "border-transparent text-neutral-400 hover:text-neutral-200"
          }`}
        >
          <Globe className="w-3.5 h-3.5 text-amber-400" />
          <span>Audience & Geo</span>
        </button>
      </div>

      {/* 3. Main Dynamic Content Body */}
      <div className="p-3.5 sm:p-4 min-h-[300px] flex flex-col justify-between">
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-3.5 animate-fadeIn">
            {/* KPI Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div
                onClick={() => onOpenShowcase("growth-engine-streaming-telemetry")}
                className="p-2.5 bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                  <span>STREAMS</span>
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                  7,460
                </div>
                <div className="text-[9px] font-mono text-emerald-400 mt-0.5">
                  +342% Launch Spike
                </div>
              </div>

              <div
                onClick={() => onOpenShowcase("growth-engine-geo-mapping")}
                className="p-2.5 bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                  <span>LISTENERS</span>
                  <Users className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                  5,035
                </div>
                <div className="text-[9px] font-mono text-cyan-400 mt-0.5">
                  64.7% Netherlands
                </div>
              </div>

              <div
                onClick={() => onOpenShowcase("growth-engine-serp-ai-overview")}
                className="p-2.5 bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                  <span>GOOGLE SERP</span>
                  <Search className="w-3 h-3 text-blue-400" />
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                  #1 Rank
                </div>
                <div className="text-[9px] font-mono text-blue-400 mt-0.5">
                  + AI Overview
                </div>
              </div>

              <div
                onClick={() => onOpenShowcase("growth-engine-sources-devices")}
                className="p-2.5 bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                  <span>CHANNELS</span>
                  <Radio className="w-3 h-3 text-violet-400" />
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                  59% Playlists
                </div>
                <div className="text-[9px] font-mono text-violet-400 mt-0.5">
                  86% Mobile
                </div>
              </div>
            </div>

            {/* Launch Spike SVG Telemetry Velocity Curve */}
            <div
              onClick={() => onOpenShowcase("growth-engine-streaming-telemetry")}
              className="p-3 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-none inline-block" />
                  30-Day Launch Spike Velocity (Jan 24 – Feb 23)
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  Peak: 1,420 streams/day
                </span>
              </div>

              {/* Dynamic SVG Wave */}
              <div className="w-full h-24 sm:h-28 relative">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 500 120"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#10b981" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="curveStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="25%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines */}
                  <line x1="0" y1="30" x2="500" y2="30" stroke="#262626" strokeDasharray="3 3" />
                  <line x1="0" y1="70" x2="500" y2="70" stroke="#262626" strokeDasharray="3 3" />
                  <line x1="0" y1="110" x2="500" y2="110" stroke="#262626" />

                  {/* Area Fill */}
                  <path
                    d="M 0 110 L 40 106 L 90 98 L 130 18 L 170 36 L 220 52 L 280 64 L 340 70 L 410 74 L 500 76 L 500 110 Z"
                    fill="url(#growthGradient)"
                  />

                  {/* Stroke Curve */}
                  <path
                    d="M 0 110 Q 70 104 110 45 T 130 18 T 170 36 Q 230 58 320 68 T 500 76"
                    fill="none"
                    stroke="url(#curveStroke)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Peak Marker Point */}
                  <circle cx="130" cy="18" r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <text x="140" y="22" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    1,420 (Launch Peak)
                  </text>
                </svg>
              </div>

              <div className="flex justify-between text-[9px] font-mono text-neutral-500 pt-1 border-t border-neutral-800/60">
                <span>Jan 24 (EP Release)</span>
                <span>Feb 01</span>
                <span>Feb 10</span>
                <span>Feb 23 (Current)</span>
              </div>
            </div>

            {/* Quick Summary Pill Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 bg-neutral-900/60 px-3 py-1.5 border border-neutral-800/80">
              <span className="truncate">Lead Single: <strong className="text-white font-medium">Desta</strong> (3,114 streams)</span>
              <span className="hidden sm:inline text-neutral-500">|</span>
              <span className="hidden sm:inline">Hub: <strong className="text-white font-medium">Netherlands</strong> (3,258 listeners)</span>
            </div>
          </div>
        )}

        {/* TAB 2: GOOGLE SERP & AI OVERVIEW */}
        {activeTab === "serp" && (
          <div
            onClick={() => onOpenShowcase("growth-engine-serp-ai-overview")}
            className="space-y-3 cursor-pointer group animate-fadeIn"
          >
            {/* Google Search Simulation Bar */}
            <div className="flex items-center gap-2 p-2 bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
              <Search className="w-3.5 h-3.5 text-neutral-500" />
              <span className="text-neutral-400">google.com/search?q=</span>
              <span className="text-emerald-400 font-semibold">&quot;mestawet ice&quot;</span>
              <span className="ml-auto text-[10px] text-neutral-500">Rank #1 Global</span>
            </div>

            {/* Google AI Overview Box */}
            <div className="p-3 bg-neutral-900/90 border border-blue-500/30 relative">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px] font-semibold text-blue-400 font-mono tracking-wide uppercase">
                  Google AI Overview
                </span>
                <span className="ml-auto text-[9px] font-mono px-1.5 py-0.2 bg-blue-500/20 text-blue-300 border border-blue-500/40">
                  Synthesized Knowledge
                </span>
              </div>
              <p className="text-[11px] text-neutral-300 leading-relaxed">
                ICE&apos;s EP, <strong className="text-white font-medium">Mestawet</strong> (&quot;Mirror&quot; in Amharic), is a 2025 R&amp;B/Soul project released on January 24, 2025, exploring self-reflection, identity, and personal truth.
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {["1. Layhon", "2. Desta", "3. Lanchi", "4. Yene Nat", "5. Sehetet", "6. Yene Mar"].map((track, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono px-1.5 py-0.5 bg-neutral-800 text-neutral-300 border border-neutral-700/60"
                  >
                    {track}
                  </span>
                ))}
              </div>
            </div>

            {/* SERP Rank #1 Rich Snippet */}
            <div className="p-3 bg-neutral-900/60 border border-neutral-800">
              <div className="text-[10px] font-mono text-emerald-400 mb-0.5 truncate">
                https://open.spotify.com › album › Mestawet
              </div>
              <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                <span>Mestawet - EP by Ice | Spotify</span>
                <ExternalLink className="w-3 h-3 text-neutral-500 inline" />
              </div>
              <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                Listen to Mestawet on Spotify. Ice · EP · 2025 · 6 songs. Duration: 18 min 42 sec.
              </p>
            </div>

            <div className="text-right text-[10px] font-mono text-neutral-400 group-hover:text-emerald-400 transition-colors">
              Click to view original Google SERP screenshot →
            </div>
          </div>
        )}

        {/* TAB 3: TRACK PERFORMANCE MATRIX */}
        {activeTab === "tracks" && (
          <div
            onClick={() => onOpenShowcase("growth-engine-track-matrix")}
            className="space-y-2 cursor-pointer group animate-fadeIn"
          >
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pb-1 border-b border-neutral-800">
              <span>Track Title</span>
              <span className="text-right">Streams (% Share)</span>
            </div>

            <div className="space-y-1.5">
              {trackPerformance.map((track) => (
                <div
                  key={track.rank}
                  className="p-2 bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="text-neutral-500 text-[10px]">{track.rank}</span>
                      <strong className="text-white font-medium">{track.name}</strong>
                      <span className="text-[9px] px-1 py-0.2 bg-neutral-800 text-neutral-400">
                        {track.status}
                      </span>
                    </span>
                    <span className="text-emerald-400 font-semibold font-mono">
                      {track.streams.toLocaleString()} <span className="text-neutral-500 font-normal text-[10px]">({track.percentage}%)</span>
                    </span>
                  </div>

                  {/* Horizontal Bar */}
                  <div className="w-full bg-neutral-800 h-1.5 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full transition-all duration-500"
                      style={{ width: `${track.percentage * 2.2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1">
              <span>Total Catalog Streams: <strong className="text-white">7,460</strong></span>
              <span className="text-neutral-400 group-hover:text-emerald-400 transition-colors">
                View matrix screenshot →
              </span>
            </div>
          </div>
        )}

        {/* TAB 4: AUDIENCE & GEO MAPPING */}
        {activeTab === "audience" && (
          <div
            onClick={() => onOpenShowcase("growth-engine-geo-mapping")}
            className="space-y-3 cursor-pointer group animate-fadeIn"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Geolocation List */}
              <div className="p-3 bg-neutral-900/80 border border-neutral-800">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2 border-b border-neutral-800 pb-1">
                  <span className="flex items-center gap-1">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    Top Countries (5,035 Listeners)
                  </span>
                </div>
                <div className="space-y-1.5">
                  {geoBreakdown.map((geo, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[11px] font-mono">
                      <span className="flex items-center gap-1.5 text-neutral-300">
                        <span>{geo.flag}</span>
                        <span>{geo.country}</span>
                      </span>
                      <span className="text-neutral-400">
                        <strong className="text-white font-medium">{geo.listeners.toLocaleString()}</strong> ({geo.share})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demographics & Devices Breakdown */}
              <div className="space-y-3">
                {/* Channels / Source */}
                <div className="p-3 bg-neutral-900/80 border border-neutral-800">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2 border-b border-neutral-800 pb-1">
                    <span className="flex items-center gap-1">
                      <Radio className="w-3 h-3 text-cyan-400" />
                      Stream Sources
                    </span>
                  </div>
                  <div className="space-y-1 text-[11px] font-mono">
                    <div className="flex justify-between">
                      <span className="text-neutral-300">Algorithmic Playlists</span>
                      <span className="text-cyan-400 font-semibold">59% (4,249)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-300">Album Catalog Pages</span>
                      <span className="text-neutral-400">22% (1,641)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-300">Profile / Direct Discovery</span>
                      <span className="text-neutral-400">10% (746)</span>
                    </div>
                  </div>
                </div>

                {/* Device & Age Cohort */}
                <div className="p-3 bg-neutral-900/80 border border-neutral-800">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2 border-b border-neutral-800 pb-1">
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-3 h-3 text-violet-400" />
                      Devices &amp; Age Cohorts
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                    <div>
                      <span className="text-neutral-500 block">DEVICE RATIO</span>
                      <span className="text-white font-semibold">86% Mobile</span>
                      <span className="text-neutral-500 block text-[9px]">11% Desktop</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">CORE COHORT</span>
                      <span className="text-white font-semibold">56% (23–34 yrs)</span>
                      <span className="text-neutral-500 block text-[9px]">63% Male / 30% Fem</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right text-[10px] font-mono text-neutral-400 group-hover:text-emerald-400 transition-colors">
              Click to view source geo heatmap screenshot →
            </div>
          </div>
        )}
      </div>

      {/* 4. Bottom Quick-Action Bar */}
      <div className="px-3.5 py-2.5 border-t border-neutral-800 bg-neutral-900/70 flex items-center justify-between text-[11px] font-mono text-neutral-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          <span>Interactive Telemetry Preview</span>
        </span>

        <button
          type="button"
          onClick={() => onOpenShowcase()}
          className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
        >
          <span>Open 6 Source Screenshots</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
