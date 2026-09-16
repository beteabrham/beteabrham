"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface BrandUiPreviewProps {
  onOpenShowcase: (itemId?: string) => void;
}

export default function BrandUiPreview({ onOpenShowcase }: BrandUiPreviewProps) {
  return (
    <div className="w-full select-none flex items-center justify-center [perspective:1200px] overflow-visible py-1 sm:py-2">
      {/* 
        3D ISOMETRIC GATHERED MOCKUP
        - Responsive scaler wrapper cleanly separates scale from 3D rotation
        - Perfectly fits the headline & description column
        - Calibrated 3D isometric angle (rotateX(18deg) rotateZ(-9deg) rotateY(3deg))
        - Uses authentic code, typography, and original photo assets from fresh-cave
        - Completely borderless / free-floating (no outer container)
      */}
      <div className="w-full flex items-center justify-center origin-center scale-[0.88] xs:scale-[0.92] sm:scale-[0.96] md:scale-[0.92] lg:scale-[0.98]">
        <div
          className="w-full space-y-2 [transform-style:preserve-3d] transition-transform duration-500 origin-center"
          style={{
            transform: "rotateX(18deg) rotateZ(-9deg) rotateY(3deg)",
          }}
        >
        {/* 
          1. TOP FLOATING NAVBAR MOCKUP
          Directly recreated from fresh-cave/components/Navbar.tsx
        */}
        <div
          onClick={() => onOpenShowcase("fresh-cave-hero")}
          style={{ transform: "translateZ(14px)" }}
          className="mockup-card-layer golden-shimmer-container group rounded-xl h-8 sm:h-9 w-full bg-[#050404] border border-white/10 px-3 sm:px-4 flex items-center justify-between shadow-[0_12px_24px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 relative overflow-hidden"
          title="Fresh Cave Navigation Bar — Click to inspect"
        >
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <span className="font-black text-xs sm:text-sm uppercase tracking-tight text-[#FBFCFF]">
              FRESH CAVE
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#8C1C13] animate-pulse" />
          </div>

          {/* Directory Links */}
          <div className="hidden xs:flex items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#FBFCFF]/60">
            <span className="hover:text-white transition-colors">Discover</span>
            <span className="hover:text-white transition-colors">Services</span>
            <span className="hover:text-white transition-colors">Producer Line</span>
            <span className="hover:text-white transition-colors">Artists</span>
            <span className="hover:text-white transition-colors">Pricing</span>
          </div>

          {/* Action Button Pill */}
          <span className="px-2.5 py-1 text-[8.5px] sm:text-[9.5px] font-mono uppercase tracking-wider rounded-full bg-[#FBFCFF] text-[#050404] font-bold shadow-xs group-hover:bg-[#8C1C13] group-hover:text-white transition-colors">
            Submit Music
          </span>
        </div>

        {/* 
          2. MAIN GATHERED MOCKUP STAGE
          12-col layout in 3D space with layered elevations
        */}
        <div className="grid grid-cols-12 gap-2.5 [transform-style:preserve-3d]">
          {/* Left Column (7 cols): Hero Section + Dual Capability Cards */}
          <div className="col-span-7 flex flex-col justify-between gap-2.5 [transform-style:preserve-3d]">
            {/* Main Hero Card: "For artists with vision." (fresh-cave/app/page.tsx) */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-hero")}
              style={{ transform: "translateZ(10px)" }}
              className="mockup-card-layer golden-shimmer-container group rounded-xl p-3 sm:p-3.5 bg-[#050404] border border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.65)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[122px] sm:h-[130px] relative overflow-hidden"
              title="Fresh Cave Hero Section — Click to inspect"
            >
              {/* Subtle crimson radial backdrop */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#8C1C13]/15 rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10">
                {/* Pulse Badge */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-white/15 bg-white/5 text-[8px] sm:text-[8.5px] font-mono uppercase tracking-widest text-[#FBFCFF]/90 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1C13] animate-pulse" />
                  Visual Broadcast • Global Audio Ingest
                </div>

                {/* Bold Display Headline with Crimson Serif Italic */}
                <h2 className="font-black text-lg sm:text-xl uppercase tracking-tight leading-[0.98] text-[#FBFCFF]">
                  For artists <br />
                  with <span className="italic font-serif font-normal text-[#8C1C13]">vision.</span>
                </h2>
              </div>

              {/* CTA Button Strip */}
              <div className="relative z-10 flex items-center gap-2 pt-1 border-t border-white/10 font-mono text-[8.5px] uppercase tracking-wider">
                <span className="px-2.5 py-1 bg-[#8C1C13] text-[#FBFCFF] font-bold rounded-full shadow-xs flex items-center gap-1 group-hover:bg-white group-hover:text-black transition-colors">
                  Apply For Distribution &rarr;
                </span>
                <span className="hidden sm:inline-block px-2 py-1 border border-white/20 text-[#FBFCFF]/75 rounded-full">
                  Label Services
                </span>
              </div>
            </div>

            {/* Dual Sub-Cards: DSP Lossless Delivery + 70% Master Ownership */}
            <div className="grid grid-cols-2 gap-2 h-[80px] sm:h-[86px] [transform-style:preserve-3d]">
              {/* Sub-Card 1: DSP Lossless Delivery (fresh-cave/app/page.tsx Section 2) */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
                style={{ transform: "translateZ(6px)" }}
                className="mockup-card-layer golden-shimmer-container group rounded-xl p-2.5 bg-[#0d0d0f] border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                title="DSP Lossless Delivery — Click to inspect"
              >
                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[7.5px] font-mono uppercase tracking-wider text-[#FBFCFF]/40 truncate">
                      Audio Ingest
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors shrink-0" />
                  </div>
                  <h4 className="font-bold text-[11px] uppercase tracking-tight text-white leading-tight group-hover:text-[#8C1C13] transition-colors truncate">
                    DSP Lossless
                  </h4>
                </div>

                <div className="pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[8px]">
                  <span className="text-[#8C1C13] font-bold">150+ Stores</span>
                  <span className="text-[#FBFCFF]/40 uppercase text-[7.5px]">24-bit</span>
                </div>
              </div>

              {/* Sub-Card 2: 70% Master Ownership (fresh-cave/app/page.tsx Section 3) */}
              <div
                onClick={() => onOpenShowcase("fresh-cave-master-ownership")}
                style={{ transform: "translateZ(6px)" }}
                className="mockup-card-layer golden-shimmer-container group rounded-xl p-2.5 bg-[#0d0d0f] border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                title="70% Master Ownership — Click to inspect"
              >
                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[7.5px] font-mono uppercase tracking-wider text-[#8C1C13] font-bold truncate">
                      // Equity
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors shrink-0" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-bold font-display text-[#8C1C13] leading-none">
                      70%
                    </span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-tight truncate">
                      Master
                    </span>
                  </div>
                </div>

                <div className="pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[8px]">
                  <span className="text-[#FBFCFF]/70">Turnaround</span>
                  <span className="text-[#8C1C13] font-bold">48h Ingest</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Atlas Nova Spotlight Card (Spans full height ~210px–224px) */}
          <div className="col-span-5 [transform-style:preserve-3d]">
            <div
              onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
              style={{ transform: "translateZ(12px)" }}
              className="mockup-card-layer golden-shimmer-container group rounded-xl bg-[#FBFCFF] text-[#050404] border border-black/10 shadow-[0_18px_36px_rgba(0,0,0,0.55)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 h-full min-h-[210px] sm:min-h-[224px] flex flex-col justify-between overflow-hidden relative"
              title="Featured Artist Spotlight: Atlas Nova — Click to inspect"
            >
              {/* Top Section: Atlas Nova Real Portrait (/brand-ui/artist-1.png) */}
              <div className="relative w-full h-[115px] sm:h-[125px] bg-zinc-900 shrink-0 overflow-hidden">
                <Image
                  src="/brand-ui/artist-1.png"
                  alt="Atlas Nova"
                  fill
                  className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 40vw, 240px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[7.5px] font-mono text-[#8C1C13] font-bold uppercase tracking-widest block">
                      Spotlight // 01
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-white uppercase tracking-tight leading-none">
                      Atlas Nova
                    </h4>
                  </div>
                  <span className="text-[7px] font-mono text-white/70 uppercase">Berlin / London</span>
                </div>
              </div>

              {/* Bottom Section: Roster Metrics & Telemetry (fresh-cave/app/artists/page.tsx) */}
              <div className="p-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[8px] font-mono mb-1">
                    <span className="text-[#8C1C13] font-bold uppercase tracking-wider">
                      // Roster
                    </span>
                    <span className="text-neutral-400">@atlasnova.core</span>
                  </div>
                  <p className="text-[8.5px] text-neutral-600 leading-snug line-clamp-2">
                    Atmospheric electronic &amp; spatial audio architecture.
                  </p>
                </div>

                {/* 3 Telemetry Metrics Grid */}
                <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-neutral-200/60 font-mono text-center">
                  <div className="bg-neutral-100/80 rounded py-1 px-0.5">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#050404] block leading-none">
                      840K+
                    </span>
                    <span className="text-[6.5px] uppercase text-neutral-400 block mt-0.5 truncate">
                      Listeners
                    </span>
                  </div>
                  <div className="bg-neutral-100/80 rounded py-1 px-0.5">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#050404] block leading-none">
                      42M+
                    </span>
                    <span className="text-[6.5px] uppercase text-neutral-400 block mt-0.5 truncate">
                      Streams
                    </span>
                  </div>
                  <div className="bg-neutral-100/80 rounded py-1 px-0.5">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#8C1C13] block leading-none">
                      70%
                    </span>
                    <span className="text-[6.5px] uppercase text-neutral-400 block mt-0.5 truncate">
                      Equity
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
          3. BOTTOM CAPABILITIES STRIP
          Services & Capabilities container styling with blue glow and 12-screen link
        */}
        <div
          onClick={() => onOpenShowcase()}
          style={{ transform: "translateZ(4px)" }}
          className="mockup-card-layer golden-shimmer-container group rounded-xl px-3 py-1.5 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-between text-[10.5px] font-mono text-neutral-600 dark:text-neutral-300 flex-wrap gap-1.5 relative overflow-hidden"
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
    </div>
  );
}
