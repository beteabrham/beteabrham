"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface BrandUiPreviewProps {
  onOpenShowcase: (itemId?: string) => void;
}

export default function BrandUiPreview({ onOpenShowcase }: BrandUiPreviewProps) {
  return (
    <div className="w-full select-none flex flex-col justify-center items-center">
      {/* 
        3D ISOMETRIC MOCKUP (Free-Floating, No Outer Container Box)
        Recreated directly from the Fresh Cave codebase (C:\Users\user\Downloads\web\fresh-cave)
        Using authentic markup, colors (#050404, #FBFCFF, #8C1C13), typography, and original photo assets.
      */}
      <div className="relative w-full h-[350px] sm:h-[390px] md:h-[370px] lg:h-[400px] flex items-center justify-center overflow-visible">
        {/* Subtle Ambient Radial Lighting (Atmospheric glow behind the 3D floating cards) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(37,99,235,0.09)_0%,transparent_70%)] pointer-events-none" />

        {/* 3D Isometric Viewport */}
        <div className="mockup-3d-viewport w-full h-full flex items-center justify-center overflow-visible">
          {/* 3D Isometric Stage (Scaled responsively to align with right column) */}
          <div className="mockup-3d-stage relative w-[670px] h-[495px] scale-[0.52] xs:scale-[0.60] sm:scale-[0.70] md:scale-[0.67] lg:scale-[0.76] xl:scale-[0.82] origin-center shrink-0">
            {/* -------------------------------------------------------------
                1. TOP FLOATING NAVIGATION BAR (Pill shape, upper left)
                Direct from fresh-cave/components/Navbar.tsx
                ------------------------------------------------------------- */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-hero")}
              style={{ transform: "translateZ(18px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[25px] top-[10px] w-[350px] h-[34px] rounded-full bg-[#050404]/95 border border-white/15 backdrop-blur-md shadow-[0_14px_28px_rgba(0,0,0,0.65)] cursor-pointer flex items-center justify-between px-3.5 z-30"
              title="Fresh Cave Navigation Bar — Click to inspect"
            >
              <span className="font-bold text-xs uppercase tracking-tight text-[#FBFCFF]">
                FRESH CAVE
              </span>
              <div className="hidden xs:flex items-center gap-2.5 text-[9px] font-mono uppercase tracking-wider text-[#FBFCFF]/60">
                <span className="hover:text-white transition-colors">Discover</span>
                <span className="hover:text-white transition-colors">Services</span>
                <span className="hover:text-white transition-colors">Artists</span>
                <span className="hover:text-white transition-colors">Pricing</span>
              </div>
              <span className="px-2.5 py-0.5 text-[8.5px] font-mono uppercase tracking-wider rounded-full bg-[#FBFCFF] text-[#050404] font-bold shadow-xs group-hover:bg-[#8C1C13] group-hover:text-white transition-colors">
                Submit Music
              </span>
            </div>

            {/* -------------------------------------------------------------
                2. MAIN HERO CARD ("FOR ARTISTS WITH VISION.", center-left)
                Direct from fresh-cave/app/page.tsx (Section 1: Video Hero)
                ------------------------------------------------------------- */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-hero")}
              style={{ transform: "translateZ(10px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[35px] top-[56px] w-[370px] h-[210px] rounded-2xl bg-[#050404] border border-white/15 p-5 shadow-[0_18px_38px_rgba(0,0,0,0.7)] cursor-pointer flex flex-col justify-between overflow-hidden z-20"
              title="Fresh Cave Hero Section — Click to inspect"
            >
              {/* Subtle crimson aura in corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8C1C13]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Visual Broadcast Tag */}
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-white/15 bg-white/5 text-[8.5px] font-mono uppercase tracking-widest text-[#FBFCFF]/90 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1C13] animate-pulse" />
                  Visual Broadcast • Global Audio Ingest
                </div>

                {/* Bold Headline */}
                <h2 className="font-black text-2xl uppercase tracking-tight leading-[0.98] text-[#FBFCFF] mb-2">
                  For artists <br />
                  with <span className="italic font-serif font-normal text-[#8C1C13]">vision.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-[10px] text-[#FBFCFF]/70 leading-relaxed font-light line-clamp-2 max-w-[320px]">
                  Fresh Cave provides direct audio DSP routing, official Vevo distribution rails, YouTube OAC verification, and automated copyright administration.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 flex items-center gap-2 pt-2 border-t border-white/10 font-mono text-[9px] uppercase tracking-wider">
                <span className="px-3 py-1.5 bg-[#8C1C13] text-[#FBFCFF] font-bold rounded-full shadow-xs flex items-center gap-1 group-hover:bg-white group-hover:text-black transition-colors">
                  Apply For Distribution &rarr;
                </span>
                <span className="px-2.5 py-1.5 border border-white/20 text-[#FBFCFF]/80 rounded-full">
                  Explore Services
                </span>
              </div>
            </div>

            {/* -------------------------------------------------------------
                3. DIRECT DSP PIPELINES CARD (Bottom-left)
                Direct from fresh-cave/app/page.tsx (Section 2: Capabilities)
                ------------------------------------------------------------- */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
              style={{ transform: "translateZ(8px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[35px] top-[278px] w-[180px] h-[122px] rounded-xl bg-[#0d0d0f] border border-white/15 p-3.5 shadow-[0_14px_28px_rgba(0,0,0,0.65)] cursor-pointer flex flex-col justify-between overflow-hidden z-20"
              title="DSP Lossless Delivery — Click to inspect"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[8px] font-mono uppercase tracking-wider text-[#FBFCFF]/40">
                    Audio Ingestion
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors" />
                </div>
                <h4 className="font-bold text-xs uppercase tracking-tight text-white mb-1 group-hover:text-[#8C1C13] transition-colors">
                  DSP Lossless Delivery
                </h4>
                <p className="text-[9px] text-[#FBFCFF]/60 font-light leading-snug line-clamp-2">
                  Direct 24-bit Hi-Res &amp; Dolby Atmos catalog routing.
                </p>
              </div>

              <div className="pt-1.5 border-t border-white/10 flex items-center justify-between font-mono">
                <span className="text-[9px] text-[#8C1C13] font-bold">150+ Storefronts</span>
                <span className="text-[8px] uppercase text-[#FBFCFF]/40">Details &rarr;</span>
              </div>
            </div>

            {/* -------------------------------------------------------------
                4. MASTER OWNERSHIP CARD (Bottom-center-left)
                Direct from fresh-cave/app/page.tsx (Section 3: White Transition)
                ------------------------------------------------------------- */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-master-ownership")}
              style={{ transform: "translateZ(8px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[225px] top-[278px] w-[180px] h-[122px] rounded-xl bg-[#0d0d0f] border border-white/15 p-3.5 shadow-[0_14px_28px_rgba(0,0,0,0.65)] cursor-pointer flex flex-col justify-between overflow-hidden z-20"
              title="70% Master Ownership — Click to inspect"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[8px] font-mono uppercase tracking-wider text-[#8C1C13] font-bold">
                    // Radical Transparency
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors" />
                </div>
                <div className="flex items-baseline gap-1.5 mb-0.5">
                  <span className="text-2xl font-bold font-display text-[#8C1C13] leading-none">
                    70%
                  </span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-tight">
                    Master Ownership
                  </span>
                </div>
                <p className="text-[8.5px] text-[#FBFCFF]/60 font-light leading-snug line-clamp-2">
                  Retain 70% of master copyright equity before royalty division.
                </p>
              </div>

              <div className="pt-1.5 border-t border-white/10 flex items-center justify-between font-mono text-[8px]">
                <span className="text-[#FBFCFF]/80">Enterprise Delivery</span>
                <span className="text-[#8C1C13] font-bold">48h Ingest</span>
              </div>
            </div>

            {/* -------------------------------------------------------------
                5. FLOATING PILL: 100% MONETIZED (Bottom-left)
                ------------------------------------------------------------- */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
              style={{ transform: "translateZ(16px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[45px] top-[414px] w-[125px] h-[28px] rounded-full bg-[#050404]/95 border border-white/15 shadow-[0_10px_20px_rgba(0,0,0,0.6)] cursor-pointer flex items-center gap-1.5 px-3 z-30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C1C13] animate-pulse" />
              <span className="text-[9.5px] font-mono font-semibold text-white tracking-tight">
                100% Monetized
              </span>
            </div>

            {/* -------------------------------------------------------------
                6. UPPER RIGHT FLOATING PILL & BADGE
                ------------------------------------------------------------- */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
              style={{ transform: "translateZ(18px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[540px] top-[8px] w-[115px] h-[28px] rounded-full bg-[#050404]/95 border border-white/15 shadow-[0_10px_20px_rgba(0,0,0,0.6)] cursor-pointer flex items-center gap-1.5 px-3 z-30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C1C13]" />
              <span className="text-[9px] font-mono font-semibold text-white tracking-tight">
                100% Monetized
              </span>
            </div>

            <div
              onClick={() => onOpenShowcase("fresh-cave-dsp-pipelines")}
              style={{ transform: "translateZ(15px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[440px] top-[40px] w-[115px] h-[46px] rounded-xl bg-[#FBFCFF] border border-neutral-200/90 shadow-[0_12px_24px_rgba(0,0,0,0.4)] cursor-pointer flex flex-col justify-center px-3 z-30"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black text-[#050404]">+150</span>
                <svg className="w-6 h-3 text-[#8C1C13]" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 9 L6 5 L11 8 L16 2 L22 6" />
                </svg>
              </div>
              <span className="text-[7.5px] font-mono text-neutral-500 uppercase tracking-wider">Storefronts</span>
            </div>

            {/* -------------------------------------------------------------
                7. UPPER RIGHT WHITE CARD ("IMMERSIVE SPATIAL ARCHITECTURE")
                Direct from fresh-cave/app/artists/page.tsx
                ------------------------------------------------------------- */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
              style={{ transform: "translateZ(10px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[420px] top-[98px] w-[240px] h-[136px] rounded-2xl bg-[#FBFCFF] border border-neutral-200/90 p-3.5 shadow-[0_16px_36px_rgba(0,0,0,0.45)] cursor-pointer flex flex-col justify-between overflow-hidden z-20 text-[#050404]"
              title="Immersive Spatial Card — Click to inspect"
            >
              <div>
                <span className="text-[8px] font-mono uppercase tracking-widest text-[#8C1C13] font-bold block mb-1">
                  // Atmospheric Electronic
                </span>
                <h3 className="font-bold text-xs uppercase tracking-tight text-[#050404] leading-snug line-clamp-2 mb-2">
                  Immersive spatial architecture meets club-ready sub dynamics.
                </h3>
              </div>

              <div className="space-y-1 font-mono text-[8px] text-[#050404]/75 border-t border-black/5 pt-1.5">
                <div className="flex items-center gap-1 truncate">
                  <span className="text-[#8C1C13] font-bold">✓</span>
                  <span>Dolby Atmos ADM Master</span>
                </div>
                <div className="flex items-center gap-1 truncate">
                  <span className="text-[#8C1C13] font-bold">✓</span>
                  <span>ArtistNameVEVO 4K Visual Ingest</span>
                </div>
                <div className="flex items-center gap-1 truncate">
                  <span className="text-[#8C1C13] font-bold">✓</span>
                  <span>Enterprise YouTube Content ID</span>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
                8. PROMINENT CENTER-RIGHT ATLAS NOVA SPOTLIGHT CARD
                Direct from fresh-cave/app/artists/page.tsx
                Featuring real photo asset /brand-ui/artist-1.png & telemetry
                ------------------------------------------------------------- */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
              style={{ transform: "translateZ(14px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[340px] top-[248px] w-[320px] h-[178px] rounded-2xl bg-[#FBFCFF] border border-neutral-200/90 shadow-[0_20px_45px_rgba(0,0,0,0.55)] cursor-pointer overflow-hidden z-25 flex"
              title="Featured Artist Spotlight: Atlas Nova — Click to inspect"
            >
              {/* Left Side: Real Atlas Nova portrait */}
              <div className="relative w-[130px] h-full bg-zinc-900 shrink-0 overflow-hidden">
                <Image
                  src="/brand-ui/artist-1.png"
                  alt="Atlas Nova"
                  fill
                  className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="130px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 z-10">
                  <span className="text-[7.5px] font-mono text-[#8C1C13] font-bold uppercase tracking-widest block">
                    Spotlight // 01
                  </span>
                  <h4 className="font-bold text-xs text-white uppercase tracking-tight leading-none">
                    Atlas Nova
                  </h4>
                  <span className="text-[7px] font-mono text-white/70 uppercase">Berlin / London</span>
                </div>
              </div>

              {/* Right Side: Roster Metrics & Telemetry */}
              <div className="flex-1 p-3 flex flex-col justify-between text-[#050404]">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-mono uppercase tracking-wider text-[#8C1C13] font-bold">
                      // Roster
                    </span>
                    <span className="text-[7.5px] font-mono text-neutral-400">@atlasnova.core</span>
                  </div>
                  <h4 className="font-bold text-[11px] uppercase tracking-tight text-[#050404] leading-tight">
                    Featured Artist Roster
                  </h4>
                  <p className="text-[8px] text-neutral-500 leading-snug line-clamp-2 mt-0.5">
                    Multichannel spatial audio and club records distributed via Fresh Cave.
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-neutral-100 font-mono text-center">
                  <div className="bg-neutral-50 rounded p-1">
                    <span className="text-[11px] font-bold text-[#050404] block leading-none">840K+</span>
                    <span className="text-[6.5px] uppercase text-neutral-400 block mt-0.5 truncate">Listeners</span>
                  </div>
                  <div className="bg-neutral-50 rounded p-1">
                    <span className="text-[11px] font-bold text-[#050404] block leading-none">42M+</span>
                    <span className="text-[6.5px] uppercase text-neutral-400 block mt-0.5 truncate">Streams</span>
                  </div>
                  <div className="bg-neutral-50 rounded p-1">
                    <span className="text-[11px] font-bold text-[#8C1C13] block leading-none">70%</span>
                    <span className="text-[6.5px] uppercase text-neutral-400 block mt-0.5 truncate">Equity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
                9. BOTTOM-RIGHT FLOATING MINI STAT CARDS (With red sparklines)
                ------------------------------------------------------------- */}
            <div
              onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
              style={{ transform: "translateZ(16px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[340px] top-[436px] w-[98px] h-[52px] rounded-xl bg-[#FBFCFF] border border-neutral-200/90 shadow-[0_12px_24px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col justify-center px-2.5 z-30"
            >
              <span className="text-[11px] font-mono font-bold text-[#050404] leading-none">+150</span>
              <span className="text-[7px] font-mono text-neutral-500 uppercase">Stores</span>
              <svg className="w-full h-2.5 text-[#8C1C13] mt-0.5" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 8 C 8 2, 14 9, 20 4 C 26 1, 32 7, 39 3" />
              </svg>
            </div>

            <div
              onClick={() => onOpenShowcase("fresh-cave-streaming-analytics")}
              style={{ transform: "translateZ(16px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[450px] top-[436px] w-[98px] h-[52px] rounded-xl bg-[#FBFCFF] border border-neutral-200/90 shadow-[0_12px_24px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col justify-center px-2.5 z-30"
            >
              <span className="text-[11px] font-mono font-bold text-[#050404] leading-none">3.60K+</span>
              <span className="text-[7px] font-mono text-neutral-500 uppercase">Streams</span>
              <svg className="w-full h-2.5 text-[#8C1C13] mt-0.5" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 9 C 10 3, 16 8, 22 2 C 28 8, 34 2, 39 4" />
              </svg>
            </div>

            <div
              onClick={() => onOpenShowcase("fresh-cave-artist-spotlight")}
              style={{ transform: "translateZ(16px)" }}
              className="mockup-card-layer golden-shimmer-container group absolute left-[562px] top-[436px] w-[98px] h-[52px] rounded-xl bg-[#FBFCFF] border border-neutral-200/90 shadow-[0_12px_24px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col justify-center px-2.5 z-30"
            >
              <span className="text-[11px] font-mono font-bold text-[#050404] leading-none">840K+</span>
              <span className="text-[7px] font-mono text-neutral-500 uppercase">Audience</span>
              <svg className="w-full h-2.5 text-[#8C1C13] mt-0.5" viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 7 C 9 1, 15 9, 23 3 C 30 1, 34 6, 39 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
