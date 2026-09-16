"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Box, Grid3X3, Sparkles } from "lucide-react";

interface BrandUiPreviewProps {
  onOpenShowcase: (itemId?: string) => void;
}

export default function BrandUiPreview({ onOpenShowcase }: BrandUiPreviewProps) {
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d");

  return (
    <div className="w-full select-none space-y-2">
      {/* View Switcher Controls Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[11px] font-mono font-medium text-neutral-600 dark:text-neutral-300">
            Fresh Cave UI/UX Design System
          </span>
        </div>

        {/* 3D Mockup vs Flat Grid Toggle */}
        <div className="flex items-center p-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800">
          <button
            type="button"
            onClick={() => setViewMode("3d")}
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
              viewMode === "3d"
                ? "bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-xs"
                : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
            }`}
          >
            <Box className="w-3 h-3" />
            <span>3D Mockup</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10.5px] font-mono font-medium transition-all duration-200 cursor-pointer ${
              viewMode === "grid"
                ? "bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-xs"
                : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
            }`}
          >
            <Grid3X3 className="w-3 h-3" />
            <span>Flat Grid</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: 3D ISOMETRIC MOCKUP (Replicating exact placements and angle from fresh-cave-dark-mockup.jpg) */}
      {viewMode === "3d" ? (
        <div className="relative w-full h-[350px] sm:h-[390px] md:h-[370px] lg:h-[390px] rounded-2xl overflow-hidden bg-[#0a0c10] border border-neutral-800/80 shadow-2xl flex items-center justify-center">
          {/* Studio Vignette & Atmospheric Glow Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_40%,rgba(30,58,138,0.18)_0%,rgba(10,12,16,0.95)_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(5,7,10,0.85)_100%)] pointer-events-none z-10" />

          {/* Interactive 3D Mockup Viewport */}
          <div className="mockup-3d-viewport w-full h-full flex items-center justify-center overflow-hidden">
            {/* 3D Isometric Stage (Scaled to fit container without clipping) */}
            <div className="mockup-3d-stage relative w-[680px] h-[500px] scale-[0.52] xs:scale-[0.60] sm:scale-[0.70] md:scale-[0.66] lg:scale-[0.74] xl:scale-[0.80] origin-center shrink-0">
              {/* -------------------------------------------------------------
                  1. TOP FLOATING NAVIGATION BAR (Pill shape, upper left)
                  ------------------------------------------------------------- */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-hero")}
                style={{ transform: "translateZ(18px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[30px] top-[15px] w-[350px] h-[34px] rounded-full bg-neutral-950/90 border border-neutral-800 shadow-[0_12px_24px_rgba(0,0,0,0.6)] cursor-pointer overflow-hidden z-30"
                title="Fresh Cave Navigation Bar — Click to inspect"
              >
                <div className="absolute inset-0 scale-[1.08] origin-top">
                  <Image
                    src="/brand-ui/Screenshot 2026-09-16 204227.png"
                    alt="Fresh Cave Navigation"
                    fill
                    className="object-cover object-top"
                    sizes="350px"
                    priority
                  />
                </div>
                {/* Micro Hover Cue */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors z-20 flex items-center justify-end px-3">
                  <span className="text-[9px] font-mono text-white/90 bg-neutral-900/90 px-1.5 py-0.5 rounded-full border border-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                    Navigation Bar
                  </span>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  2. MAIN HERO CARD ("FOR ARTISTS WITH VISION.", center-left)
                  ------------------------------------------------------------- */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-hero")}
                style={{ transform: "translateZ(10px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[45px] top-[62px] w-[370px] h-[200px] rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-[0_16px_36px_rgba(0,0,0,0.7)] cursor-pointer overflow-hidden z-20"
                title="Fresh Cave Hero Section — Click to inspect"
              >
                <div className="absolute inset-0 scale-[1.28] origin-[50%_62%]">
                  <Image
                    src="/brand-ui/Screenshot 2026-09-16 204227.png"
                    alt="For Artists with Vision Hero"
                    fill
                    className="object-cover object-[50%_62%]"
                    sizes="370px"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors z-10" />
                <span className="absolute bottom-2 left-2 z-20 text-[9px] font-mono px-2 py-0.5 rounded-md bg-black/85 text-white/90 border border-neutral-700/80 backdrop-blur-xs opacity-75 group-hover:opacity-100 transition-opacity">
                  Hero Section
                </span>
              </div>

              {/* -------------------------------------------------------------
                  3. DIRECT DSP PIPELINES CARD (Bottom-left)
                  ------------------------------------------------------------- */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
                style={{ transform: "translateZ(8px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[45px] top-[275px] w-[180px] h-[118px] rounded-xl bg-neutral-950 border border-neutral-800 shadow-[0_14px_28px_rgba(0,0,0,0.65)] cursor-pointer overflow-hidden z-20"
                title="Direct DSP Pipelines — Click to inspect"
              >
                <div className="absolute inset-0 scale-[1.9] origin-[11%_78%]">
                  <Image
                    src="/brand-ui/Screenshot 2026-09-16 204257.png"
                    alt="Direct DSP Pipelines"
                    fill
                    className="object-cover object-[11%_78%]"
                    sizes="180px"
                  />
                </div>
                <span className="absolute bottom-1.5 left-1.5 z-20 text-[8px] font-mono px-1.5 py-0.5 rounded bg-black/85 text-white/90 border border-white/10 opacity-75 group-hover:opacity-100 transition-opacity">
                  DSP Pipelines
                </span>
              </div>

              {/* -------------------------------------------------------------
                  4. MASTER OWNERSHIP CARD (Bottom-center-left)
                  ------------------------------------------------------------- */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-master-ownership")}
                style={{ transform: "translateZ(8px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[235px] top-[275px] w-[180px] h-[118px] rounded-xl bg-neutral-950 border border-neutral-800 shadow-[0_14px_28px_rgba(0,0,0,0.65)] cursor-pointer overflow-hidden z-20"
                title="70% Master Ownership — Click to inspect"
              >
                <div className="absolute inset-0 scale-[2.2] origin-[8%_82%]">
                  <Image
                    src="/brand-ui/Screenshot 2026-09-16 204315.png"
                    alt="70% Master Ownership"
                    fill
                    className="object-cover object-[8%_82%]"
                    sizes="180px"
                  />
                </div>
                <span className="absolute bottom-1.5 left-1.5 z-20 text-[8px] font-mono px-1.5 py-0.5 rounded bg-black/85 text-white/90 border border-white/10 opacity-75 group-hover:opacity-100 transition-opacity">
                  70% Master
                </span>
              </div>

              {/* -------------------------------------------------------------
                  5. FLOATING PILL: 100% MONETIZED (Bottom-left floating pill)
                  ------------------------------------------------------------- */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
                style={{ transform: "translateZ(16px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[55px] top-[408px] w-[125px] h-[28px] rounded-full bg-neutral-900/95 border border-neutral-700/80 shadow-[0_10px_20px_rgba(0,0,0,0.6)] cursor-pointer flex items-center gap-1.5 px-2.5 z-30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-mono font-semibold text-white tracking-tight">
                  100% Monetized
                </span>
              </div>

              {/* -------------------------------------------------------------
                  6. UPPER RIGHT FLOATING PILLS & BADGES
                  ------------------------------------------------------------- */}
              {/* Dark 100% Monetized Pill (Top Right) */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
                style={{ transform: "translateZ(18px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[550px] top-[10px] w-[115px] h-[28px] rounded-full bg-neutral-900/95 border border-neutral-700/80 shadow-[0_10px_20px_rgba(0,0,0,0.6)] cursor-pointer flex items-center gap-1.5 px-2.5 z-30"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-[9.5px] font-mono font-semibold text-white">
                  100% Monetized
                </span>
              </div>

              {/* White +150 Storefronts Mini Badge (Top Right) */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
                style={{ transform: "translateZ(15px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[450px] top-[45px] w-[110px] h-[45px] rounded-xl bg-white border border-neutral-200 shadow-[0_12px_24px_rgba(0,0,0,0.4)] cursor-pointer flex flex-col justify-center px-2 z-30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-neutral-900">+150</span>
                  <svg className="w-6 h-3 text-red-500" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 9 L6 5 L11 8 L16 2 L22 6" />
                  </svg>
                </div>
                <span className="text-[7.5px] font-mono text-neutral-500 uppercase">Storefronts</span>
              </div>

              {/* -------------------------------------------------------------
                  7. UPPER RIGHT WHITE CARD ("IMMERSIVE SPATIAL ARCHITECTURE")
                  ------------------------------------------------------------- */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
                style={{ transform: "translateZ(10px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[430px] top-[100px] w-[240px] h-[130px] rounded-2xl bg-white border border-neutral-200/90 shadow-[0_16px_36px_rgba(0,0,0,0.45)] cursor-pointer overflow-hidden z-20"
                title="Immersive Spatial Card — Click to inspect"
              >
                <div className="absolute inset-0 scale-[1.35] origin-[82%_25%]">
                  <Image
                    src="/brand-ui/Screenshot 2026-09-16 204634.png"
                    alt="Immersive Spatial Architecture"
                    fill
                    className="object-cover object-[82%_25%]"
                    sizes="240px"
                  />
                </div>
                <span className="absolute bottom-1.5 left-1.5 z-20 text-[8px] font-mono px-1.5 py-0.5 rounded bg-neutral-900/85 text-white border border-neutral-700 opacity-75 group-hover:opacity-100 transition-opacity">
                  Spatial Audio
                </span>
              </div>

              {/* -------------------------------------------------------------
                  8. CENTER-RIGHT PROMINENT WHITE CARD ("ATLAS NOVA" SPOTLIGHT)
                     (Atlas Nova in sunglasses on left, 840K+ stats on right)
                  ------------------------------------------------------------- */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
                style={{ transform: "translateZ(14px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[350px] top-[245px] w-[320px] h-[180px] rounded-2xl bg-white border border-neutral-200/90 shadow-[0_20px_45px_rgba(0,0,0,0.55)] cursor-pointer overflow-hidden z-25"
                title="Featured Artist Spotlight: Atlas Nova — Click to inspect"
              >
                <div className="absolute inset-0 scale-[1.48] origin-[24%_62%]">
                  <Image
                    src="/brand-ui/Screenshot 2026-09-16 204634.png"
                    alt="Atlas Nova Artist Spotlight"
                    fill
                    className="object-cover object-[24%_62%]"
                    sizes="320px"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors z-10" />
                <span className="absolute bottom-2 left-2 z-20 text-[9px] font-mono px-2 py-0.5 rounded-md bg-neutral-950/90 text-white border border-neutral-700/80 backdrop-blur-xs opacity-80 group-hover:opacity-100 transition-opacity">
                  Atlas Nova Roster • 840K+ Listeners
                </span>
              </div>

              {/* -------------------------------------------------------------
                  9. BOTTOM-RIGHT FLOATING MINI STAT CARDS (With red sparklines)
                  ------------------------------------------------------------- */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
                style={{ transform: "translateZ(16px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[350px] top-[438px] w-[95px] h-[52px] rounded-xl bg-white border border-neutral-200 shadow-[0_12px_24px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col justify-center px-2 z-30"
              >
                <span className="text-[10.5px] font-mono font-bold text-neutral-900">+150</span>
                <span className="text-[7.5px] font-mono text-neutral-500">STORES</span>
                <svg className="w-full h-2.5 text-red-500 mt-0.5" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 8 C 8 2, 14 9, 20 4 C 26 1, 32 7, 39 3" />
                </svg>
              </div>

              <div
                onClick={() => onOpenShowcase("fresh-cave-streaming-analytics")}
                style={{ transform: "translateZ(16px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[460px] top-[438px] w-[95px] h-[52px] rounded-xl bg-white border border-neutral-200 shadow-[0_12px_24px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col justify-center px-2 z-30"
              >
                <span className="text-[10.5px] font-mono font-bold text-neutral-900">3.60K+</span>
                <span className="text-[7.5px] font-mono text-neutral-500">STREAMS</span>
                <svg className="w-full h-2.5 text-red-500 mt-0.5" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 9 C 10 3, 16 8, 22 2 C 28 8, 34 2, 39 4" />
                </svg>
              </div>

              <div
                onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
                style={{ transform: "translateZ(16px)" }}
                className="mockup-card-layer golden-shimmer-container group absolute left-[570px] top-[438px] w-[95px] h-[52px] rounded-xl bg-white border border-neutral-200 shadow-[0_12px_24px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col justify-center px-2 z-30"
              >
                <span className="text-[10.5px] font-mono font-bold text-neutral-900">840K+</span>
                <span className="text-[7.5px] font-mono text-neutral-500">AUDIENCE</span>
                <svg className="w-full h-2.5 text-red-500 mt-0.5" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 7 C 9 1, 15 9, 23 3 C 30 1, 34 6, 39 2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Indicator Badge on Bottom Left */}
          <div className="absolute bottom-2.5 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/75 border border-neutral-800 text-[10px] font-mono text-neutral-400">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span>Interactive 3D Isometric View • Click any card</span>
          </div>
        </div>
      ) : (
        /* VIEW 2: FLAT MULTI-CARD GRID */
        <div className="space-y-2">
          {/* Top Floating Navigation Bar */}
          <div
            onClick={() => onOpenShowcase("fresh-cave-hero")}
            className="golden-shimmer-container group rounded-lg h-7 sm:h-8 w-full relative overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-0.5 transition-all duration-300"
            title="Fresh Cave Navigation Bar"
          >
            <div className="absolute inset-0 scale-[1.03] origin-top">
              <Image
                src="/brand-ui/Screenshot 2026-09-16 204227.png"
                alt="Fresh Cave Navigation Bar"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors z-20 flex items-center justify-end px-2">
              <span className="text-[9px] font-mono text-white/90 bg-black/70 px-1.5 py-0.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Navigation Bar
              </span>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-2">
            {/* Left Column (7 cols): Hero + Dual Cards */}
            <div className="col-span-7 flex flex-col gap-2">
              <div
                onClick={() => onOpenShowcase("fresh-cave-hero")}
                className="golden-shimmer-container group rounded-xl h-28 sm:h-32 w-full relative overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 scale-[1.3] origin-center -translate-y-1">
                  <Image
                    src="/brand-ui/Screenshot 2026-09-16 204227.png"
                    alt="For Artists with Vision Hero"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 60vw, 340px"
                  />
                </div>
                <span className="absolute bottom-1.5 left-1.5 z-20 text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-black/80 text-white/90 border border-white/10 backdrop-blur-xs opacity-80 group-hover:opacity-100 transition-opacity">
                  Hero Section
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 h-18 sm:h-20">
                <div
                  onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
                  className="golden-shimmer-container group rounded-xl h-full w-full relative overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute inset-0 scale-[1.9] origin-[10%_75%]">
                    <Image
                      src="/brand-ui/Screenshot 2026-09-16 204257.png"
                      alt="Direct DSP Pipelines"
                      fill
                      className="object-cover object-[10%_75%]"
                      sizes="170px"
                    />
                  </div>
                  <span className="absolute bottom-1 left-1 z-20 text-[8px] font-mono px-1 py-0.2 rounded-sm bg-black/85 text-white/90 border border-white/10 opacity-75 group-hover:opacity-100 transition-opacity">
                    DSP Pipelines
                  </span>
                </div>

                <div
                  onClick={() => onOpenShowcase("fresh-cave-master-ownership")}
                  className="golden-shimmer-container group rounded-xl h-full w-full relative overflow-hidden bg-white dark:bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute inset-0 scale-[2.2] origin-[8%_80%]">
                    <Image
                      src="/brand-ui/Screenshot 2026-09-16 204315.png"
                      alt="70% Master Ownership"
                      fill
                      className="object-cover object-[8%_80%]"
                      sizes="170px"
                    />
                  </div>
                  <span className="absolute bottom-1 left-1 z-20 text-[8px] font-mono px-1 py-0.2 rounded-sm bg-black/85 text-white/90 border border-white/10 opacity-75 group-hover:opacity-100 transition-opacity">
                    70% Master
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Atlas Nova Card */}
            <div className="col-span-5">
              <div
                onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
                className="golden-shimmer-container group rounded-xl h-full min-h-[190px] sm:min-h-[216px] w-full relative overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xs cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 scale-[1.5] origin-[18%_55%]">
                  <Image
                    src="/brand-ui/Screenshot 2026-09-16 204634.png"
                    alt="Atlas Nova Artist Spotlight"
                    fill
                    className="object-cover object-[18%_55%]"
                    sizes="240px"
                  />
                </div>
                <span className="absolute bottom-1.5 left-1.5 z-20 text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-black/85 text-white/90 border border-white/10 backdrop-blur-xs opacity-80 group-hover:opacity-100 transition-opacity">
                  Atlas Nova Roster
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Capabilities Strip (Services & Capabilities Container + Blue Glow) */}
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
