"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Volume2,
  Sparkles,
  Music,
  Tv,
  Headphones,
} from "lucide-react";

interface BrandUiShowcase3dMockupProps {
  onSelectScreen?: (screenId: string) => void;
}

export default function BrandUiShowcase3dMockup({
  onSelectScreen,
}: BrandUiShowcase3dMockupProps) {
  const handleCardClick = (screenId: string) => {
    if (onSelectScreen) {
      onSelectScreen(screenId);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center [perspective:1200px] overflow-visible select-none relative p-2 sm:p-4">
      {/* Ambient Blue Radial Glow Backdrop matching portfolio's aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(37,99,235,0.14)_0%,transparent_70%)] pointer-events-none" />

      {/* 
        Responsive Scaler Wrapper:
        Scales the 3D isometric stage smoothly across mobile, tablet, and desktop viewports 
        without interfering with the 3D rotation transform, ensuring zero clipping and comfortable fit.
      */}
      <div className="w-full max-w-[780px] flex items-center justify-center origin-center scale-[0.52] xs:scale-[0.60] sm:scale-[0.70] md:scale-[0.78] lg:scale-[0.84] xl:scale-[0.90] transition-transform duration-300">
        {/* 
          3D Isometric Stage:
          Proportionally fitted with balanced column heights (226px each) and calibrated tilt
          to ensure zero clipping, no cutoff of the top navbar or bottom strip, and ample clearance.
        */}
        <div
          className="w-full space-y-2 [transform-style:preserve-3d] transition-transform duration-500 origin-center"
          style={{
            transform: "rotateX(16deg) rotateZ(-8deg) rotateY(3deg)",
          }}
        >
          {/* -----------------------------------------------------------------
              1. TOP FLOATING NAVBAR PILL (fresh-cave/components/Navbar.tsx)
              ----------------------------------------------------------------- */}
          <div
            onClick={() => handleCardClick("fresh-cave-hero")}
            style={{ transform: "translateZ(18px)" }}
            className="mockup-card-layer golden-shimmer-container group rounded-full h-8 w-full bg-[#050404]/95 border border-white/15 px-3.5 sm:px-4 flex items-center justify-between shadow-[0_12px_24px_rgba(0,0,0,0.65)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 relative overflow-hidden z-30"
            title="Fresh Cave Navigation Bar — Click to inspect"
          >
            <div className="flex items-center gap-2">
              <span className="font-black text-xs sm:text-sm uppercase tracking-tight text-[#FBFCFF]">
                FRESH CAVE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C1C13] animate-pulse" />
            </div>

            <div className="hidden xs:flex items-center gap-3 sm:gap-4 text-[9px] font-mono uppercase tracking-wider text-[#FBFCFF]/60">
              <span className="hover:text-white transition-colors">Discover</span>
              <span className="hover:text-white transition-colors">Services</span>
              <span className="hover:text-white transition-colors">Producer Line</span>
              <span className="hover:text-white transition-colors">Artists</span>
              <span className="hover:text-white transition-colors">Pricing</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-[8.5px] font-mono uppercase tracking-wider rounded-full bg-[#FBFCFF] text-[#050404] font-bold shadow-xs group-hover:bg-[#8C1C13] group-hover:text-white transition-colors">
                Submit Music
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              2. MAIN GRID (12 Cols): Balanced 2-Row Modular System
                 Left (7 Cols): Video Hero + Dual DSP Cards
                 Right (5 Cols): Atlas Nova Spotlight + Dual Studio/Rights Cards
                 Both columns calibrated to exactly 226px height for perfect flush alignment.
              ----------------------------------------------------------------- */}
          <div className="grid grid-cols-12 gap-2 [transform-style:preserve-3d]">
            {/* Left Column (7 cols): Hero Card + Dual DSP Cards */}
            <div className="col-span-7 flex flex-col justify-between gap-2 [transform-style:preserve-3d]">
              {/* Video Hero Card (fresh-cave/app/page.tsx Section 1) */}
              <div
                onClick={() => handleCardClick("fresh-cave-hero")}
                style={{ transform: "translateZ(14px)" }}
                className="mockup-card-layer golden-shimmer-container group rounded-xl p-3 bg-[#050404] border border-white/15 shadow-[0_16px_32px_rgba(0,0,0,0.65)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[142px] relative overflow-hidden"
                title="Video Hero Section — Click to inspect"
              >
                {/* Crimson Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8C1C13]/20 rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-white/15 bg-white/5 text-[7.5px] font-mono uppercase tracking-widest text-[#FBFCFF]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C1C13] animate-pulse" />
                      Visual Broadcast • Global Audio Ingest
                    </div>

                    <div className="inline-flex items-center gap-1 text-[7.5px] font-mono text-white/60 bg-white/10 px-1.5 py-0.5 rounded-full border border-white/10">
                      <Volume2 className="w-2.5 h-2.5 text-white animate-pulse" />
                      <span>Sound On</span>
                    </div>
                  </div>

                  <h2 className="font-black text-base sm:text-lg uppercase tracking-tight leading-[0.98] text-[#FBFCFF] mb-1">
                    For artists <br />
                    with <span className="italic font-serif font-normal text-[#8C1C13]">vision.</span>
                  </h2>

                  <p className="text-[8.5px] text-[#FBFCFF]/70 leading-snug font-light line-clamp-2 max-w-[320px]">
                    Direct audio DSP routing, Vevo distribution rails, YouTube OAC verification, and automated copyright administration.
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-2 pt-1 border-t border-white/10 font-mono text-[8px] uppercase tracking-wider">
                  <span className="px-2.5 py-0.5 bg-[#8C1C13] text-[#FBFCFF] font-bold rounded-full shadow-xs flex items-center gap-1 group-hover:bg-white group-hover:text-black transition-colors">
                    Apply For Distribution &rarr;
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 border border-white/20 text-[#FBFCFF]/80 rounded-full">
                    Explore Services
                  </span>
                </div>
              </div>

              {/* Dual DSP Cards Row (DSP Lossless + Vevo Network) */}
              <div className="grid grid-cols-2 gap-2 h-[76px] [transform-style:preserve-3d]">
                {/* DSP Lossless Card */}
                <div
                  onClick={() => handleCardClick("fresh-cave-dsp-pipelines")}
                  style={{ transform: "translateZ(10px)" }}
                  className="mockup-card-layer golden-shimmer-container group rounded-xl p-2 bg-[#0d0d0f] border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  title="DSP Lossless Delivery — Click to inspect"
                >
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[7.5px] font-mono uppercase tracking-wider text-[#FBFCFF]/40 flex items-center gap-1 truncate">
                        <Music className="w-2 h-2 text-[#8C1C13]" /> Audio Ingest
                      </span>
                      <ArrowUpRight className="w-2.5 h-2.5 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors shrink-0" />
                    </div>
                    <h4 className="font-bold text-[10px] uppercase tracking-tight text-white group-hover:text-[#8C1C13] transition-colors truncate">
                      DSP Lossless
                    </h4>
                  </div>
                  <div className="pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[7px]">
                    <span className="text-[#8C1C13] font-bold">150+ Stores</span>
                    <span className="text-[#FBFCFF]/40">24-bit FLAC</span>
                  </div>
                </div>

                {/* Vevo Network Card */}
                <div
                  onClick={() => handleCardClick("fresh-cave-dsp-pipelines")}
                  style={{ transform: "translateZ(10px)" }}
                  className="mockup-card-layer golden-shimmer-container group rounded-xl p-2 bg-[#0d0d0f] border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  title="Vevo Broadcast Network — Click to inspect"
                >
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[7.5px] font-mono uppercase tracking-wider text-[#FBFCFF]/40 flex items-center gap-1 truncate">
                        <Tv className="w-2 h-2 text-[#8C1C13]" /> Visual Rails
                      </span>
                      <ArrowUpRight className="w-2.5 h-2.5 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors shrink-0" />
                    </div>
                    <h4 className="font-bold text-[10px] uppercase tracking-tight text-white group-hover:text-[#8C1C13] transition-colors truncate">
                      Vevo Network
                    </h4>
                  </div>
                  <div className="pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[7px]">
                    <span className="text-[#8C1C13] font-bold">4K ProRes</span>
                    <span className="text-[#FBFCFF]/40">FAST TV</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Atlas Nova Spotlight + Dual Rights/Studio Cards */}
            <div className="col-span-5 flex flex-col justify-between gap-2 [transform-style:preserve-3d]">
              {/* Atlas Nova Featured Artist Spotlight Card */}
              <div
                onClick={() => handleCardClick("fresh-cave-artist-spotlight")}
                style={{ transform: "translateZ(14px)" }}
                className="mockup-card-layer golden-shimmer-container group rounded-xl bg-[#FBFCFF] text-[#050404] border border-neutral-200/90 shadow-[0_18px_36px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 h-[142px] flex overflow-hidden relative"
                title="Featured Artist Spotlight: Atlas Nova — Click to inspect"
              >
                {/* Real Portrait Photo */}
                <div className="relative w-[96px] sm:w-[102px] h-full bg-zinc-900 shrink-0 overflow-hidden">
                  <Image
                    src="/brand-ui/artist-1.png"
                    alt="Atlas Nova"
                    fill
                    className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="110px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-1.5 left-2 right-2 z-10">
                    <span className="text-[6.5px] font-mono text-[#8C1C13] font-bold uppercase tracking-widest block">
                      Spotlight // 01
                    </span>
                    <h4 className="font-bold text-[10.5px] text-white uppercase tracking-tight leading-none truncate">
                      Atlas Nova
                    </h4>
                    <span className="text-[6px] font-mono text-white/70 uppercase">Berlin / London</span>
                  </div>
                </div>

                {/* Telemetry & Metrics */}
                <div className="flex-1 p-2 flex flex-col justify-between text-[#050404]">
                  <div>
                    <div className="flex items-center justify-between text-[7px] font-mono mb-0.5">
                      <span className="text-[#8C1C13] font-bold uppercase tracking-wider">
                        // Atmospheric
                      </span>
                      <span className="text-neutral-400">@atlasnova</span>
                    </div>
                    <h4 className="font-bold text-[9.5px] uppercase tracking-tight text-[#050404] leading-tight truncate">
                      Atlas Nova Catalog
                    </h4>
                    <p className="text-[7px] text-neutral-500 leading-snug line-clamp-2 mt-0.5">
                      Direct ADM BWF Dolby Atmos ingestion across Apple &amp; Amazon tiers.
                    </p>
                  </div>

                  {/* 3 Metrics */}
                  <div className="grid grid-cols-3 gap-0.5 pt-1 border-t border-neutral-200/60 font-mono text-center">
                    <div className="bg-neutral-100/80 rounded py-0.5 px-0.5">
                      <span className="text-[9px] font-bold text-[#050404] block leading-none">840K+</span>
                      <span className="text-[5.5px] uppercase text-neutral-400 block mt-0.5 truncate">Listeners</span>
                    </div>
                    <div className="bg-neutral-100/80 rounded py-0.5 px-0.5">
                      <span className="text-[9px] font-bold text-[#050404] block leading-none">42M+</span>
                      <span className="text-[5.5px] uppercase text-neutral-400 block mt-0.5 truncate">Streams</span>
                    </div>
                    <div className="bg-neutral-100/80 rounded py-0.5 px-0.5">
                      <span className="text-[9px] font-bold text-[#8C1C13] block leading-none">70%</span>
                      <span className="text-[5.5px] uppercase text-neutral-400 block mt-0.5 truncate">Equity</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dual Capability Sub-Cards (70% Master Ownership + Producer Line) */}
              <div className="grid grid-cols-2 gap-2 h-[76px] [transform-style:preserve-3d]">
                {/* 70% Master Ownership */}
                <div
                  onClick={() => handleCardClick("fresh-cave-master-ownership")}
                  style={{ transform: "translateZ(10px)" }}
                  className="mockup-card-layer golden-shimmer-container group rounded-xl p-2 bg-[#050404] border border-white/15 shadow-[0_12px_24px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  title="70% Master Ownership — Click to inspect"
                >
                  <div>
                    <span className="text-[7px] font-mono uppercase tracking-wider text-[#8C1C13] font-bold block mb-0.5 truncate">
                      // Transparency
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm sm:text-base font-bold font-display text-[#8C1C13] leading-none">
                        70%
                      </span>
                      <span className="text-[8.5px] font-bold text-white uppercase tracking-tight truncate">
                        Master
                      </span>
                    </div>
                  </div>
                  <div className="pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[7px]">
                    <span className="text-white/70">Turnaround</span>
                    <span className="text-[#8C1C13] font-bold">48h</span>
                  </div>
                </div>

                {/* Producer Line Card */}
                <div
                  onClick={() => handleCardClick("fresh-cave-producer-directory")}
                  style={{ transform: "translateZ(10px)" }}
                  className="mockup-card-layer golden-shimmer-container group rounded-xl p-2 bg-[#0d0d0f] border border-white/15 shadow-[0_12px_24px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  title="Producer Line Studio Directory — Click to inspect"
                >
                  <div>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[7px] font-mono uppercase tracking-wider text-[#8C1C13] font-bold flex items-center gap-1 truncate">
                        <Headphones className="w-2 h-2 shrink-0" /> Producer
                      </span>
                      <ArrowUpRight className="w-2.5 h-2.5 text-white/40 group-hover:text-[#8C1C13] transition-colors shrink-0" />
                    </div>
                    <h4 className="font-bold text-[9px] uppercase tracking-tight text-white truncate">
                      Axiom Sound
                    </h4>
                  </div>
                  <div className="pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[7px]">
                    <span className="text-[#8C1C13] truncate">Dolby Atmos</span>
                    <span className="text-white/40 truncate">Audition &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              3. BOTTOM CAPABILITIES SUMMARY STRIP
              ----------------------------------------------------------------- */}
          <div
            onClick={() => handleCardClick("fresh-cave-hero")}
            style={{ transform: "translateZ(6px)" }}
            className="mockup-card-layer golden-shimmer-container group rounded-xl px-3.5 py-1.5 bg-[#050404] border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 flex items-center justify-between text-[9px] sm:text-[9.5px] font-mono text-neutral-300 relative overflow-hidden"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 truncate">
              <span className="text-white font-medium">150+ Storefronts</span>
              <span className="text-neutral-600">•</span>
              <span>Vevo 4K Rails</span>
              <span className="text-neutral-600">•</span>
              <span className="text-white font-medium">70% Master Retention</span>
              <span className="text-neutral-600">•</span>
              <span>Content ID Sync</span>
            </div>

            <div className="inline-flex items-center gap-1 text-[#8C1C13] font-bold text-[9px] shrink-0">
              <span>Interactive 3D Stage</span>
              <Sparkles className="w-2.5 h-2.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
