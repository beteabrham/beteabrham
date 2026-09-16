"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Volume2,
  Sparkles,
  Music,
  Tv,
  Video,
  ShieldCheck,
  Disc,
  Headphones,
  Sliders,
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
    <div className="w-full h-full min-h-[460px] sm:min-h-[520px] flex items-center justify-center [perspective:1400px] overflow-visible py-4 select-none relative">
      {/* Subtle Studio Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(37,99,235,0.14)_0%,transparent_72%)] pointer-events-none" />

      {/* 3D Isometric Stage with Expanded Real UI Elements from fresh-cave */}
      <div
        className="w-full max-w-[960px] space-y-3 [transform-style:preserve-3d] transition-transform duration-700 origin-center scale-[0.70] xs:scale-[0.78] sm:scale-[0.88] md:scale-[0.92] lg:scale-[1]"
        style={{
          transform: "rotateX(24deg) rotateZ(-12deg) rotateY(4deg)",
        }}
      >
        {/* -----------------------------------------------------------------
            1. TOP FLOATING NAVBAR PILL (fresh-cave/components/Navbar.tsx)
            ----------------------------------------------------------------- */}
        <div
          onClick={() => handleCardClick("fresh-cave-hero")}
          style={{ transform: "translateZ(22px)" }}
          className="mockup-card-layer golden-shimmer-container group rounded-full h-10 w-full bg-[#050404]/95 border border-white/15 px-5 flex items-center justify-between shadow-[0_16px_32px_rgba(0,0,0,0.7)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 relative overflow-hidden z-40"
          title="Fresh Cave Navigation Bar — Click to inspect"
        >
          <div className="flex items-center gap-3">
            <span className="font-black text-sm uppercase tracking-tight text-[#FBFCFF]">
              FRESH CAVE
            </span>
            <span className="w-2 h-2 rounded-full bg-[#8C1C13] animate-pulse" />
          </div>

          <div className="flex items-center gap-6 text-[10.5px] font-mono uppercase tracking-widest text-[#FBFCFF]/60">
            <span className="hover:text-white transition-colors">Discover</span>
            <span className="hover:text-white transition-colors">Services</span>
            <span className="hover:text-white transition-colors">Producer Line</span>
            <span className="hover:text-white transition-colors">Artists</span>
            <span className="hover:text-white transition-colors">Pricing</span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="px-3.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full bg-[#FBFCFF] text-[#050404] font-bold shadow-xs group-hover:bg-[#8C1C13] group-hover:text-white transition-colors">
              Submit Music
            </span>
          </div>
        </div>

        {/* -----------------------------------------------------------------
            2. MAIN UPPER ROW: Video Hero Card (Left) + Atlas Nova Spotlight (Right)
            ----------------------------------------------------------------- */}
        <div className="grid grid-cols-12 gap-3 [transform-style:preserve-3d]">
          {/* Main Hero Card (7 cols) - fresh-cave/app/page.tsx Section 1 */}
          <div
            onClick={() => handleCardClick("fresh-cave-hero")}
            style={{ transform: "translateZ(16px)" }}
            className="col-span-7 mockup-card-layer golden-shimmer-container group rounded-2xl p-4 sm:p-5 bg-[#050404] border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.7)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[190px] relative overflow-hidden"
            title="Video Hero Section — Click to inspect"
          >
            {/* Crimson Radial Blur */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#8C1C13]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/15 bg-white/5 text-[9px] font-mono uppercase tracking-widest text-[#FBFCFF]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1C13] animate-pulse" />
                  Visual Broadcast • Global Audio Ingest
                </div>

                <div className="inline-flex items-center gap-1 text-[9px] font-mono text-white/60 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                  <Volume2 className="w-3 h-3 text-white animate-pulse" />
                  <span>Sound On</span>
                </div>
              </div>

              <h2 className="font-black text-2xl sm:text-3xl uppercase tracking-tight leading-[0.96] text-[#FBFCFF] mb-2">
                For artists <br />
                with <span className="italic font-serif font-normal text-[#8C1C13]">vision.</span>
              </h2>

              <p className="text-[10.5px] text-[#FBFCFF]/70 leading-relaxed font-light line-clamp-2 max-w-[420px]">
                Fresh Cave provides direct audio DSP routing, official Vevo distribution rails, YouTube OAC verification, and automated copyright administration.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-2.5 pt-2 border-t border-white/10 font-mono text-[9.5px] uppercase tracking-wider">
              <span className="px-3.5 py-1.5 bg-[#8C1C13] text-[#FBFCFF] font-bold rounded-full shadow-xs flex items-center gap-1.5 group-hover:bg-white group-hover:text-black transition-colors">
                Apply For Distribution &rarr;
              </span>
              <span className="px-3 py-1.5 border border-white/20 text-[#FBFCFF]/80 rounded-full">
                Explore Services
              </span>
            </div>
          </div>

          {/* Atlas Nova Spotlight Card (5 cols) - fresh-cave/app/artists/page.tsx */}
          <div
            onClick={() => handleCardClick("fresh-cave-artist-spotlight")}
            style={{ transform: "translateZ(18px)" }}
            className="col-span-5 mockup-card-layer golden-shimmer-container group rounded-2xl bg-[#FBFCFF] text-[#050404] border border-neutral-200/90 shadow-[0_22px_44px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 h-[190px] flex overflow-hidden relative"
            title="Featured Artist Spotlight: Atlas Nova — Click to inspect"
          >
            {/* Left Photo with Real Portrait */}
            <div className="relative w-[135px] h-full bg-zinc-900 shrink-0 overflow-hidden">
              <Image
                src="/brand-ui/artist-1.png"
                alt="Atlas Nova"
                fill
                className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                sizes="140px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-2 left-2.5 right-2.5 z-10">
                <span className="text-[7.5px] font-mono text-[#8C1C13] font-bold uppercase tracking-widest block">
                  Spotlight // 01
                </span>
                <h4 className="font-bold text-xs text-white uppercase tracking-tight leading-none">
                  Atlas Nova
                </h4>
                <span className="text-[7px] font-mono text-white/70 uppercase">Berlin / London</span>
              </div>
            </div>

            {/* Right Telemetry & Specs */}
            <div className="flex-1 p-3 flex flex-col justify-between text-[#050404]">
              <div>
                <div className="flex items-center justify-between text-[8px] font-mono mb-1">
                  <span className="text-[#8C1C13] font-bold uppercase tracking-wider">
                    // Atmospheric
                  </span>
                  <span className="text-neutral-400">@atlasnova.core</span>
                </div>
                <h4 className="font-bold text-[11px] uppercase tracking-tight text-[#050404] leading-tight">
                  Atlas Nova Catalog
                </h4>
                <p className="text-[8px] text-neutral-500 leading-snug line-clamp-2 mt-0.5">
                  Direct ADM BWF Dolby Atmos ingestion across Apple &amp; Amazon tiers.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-neutral-200/60 font-mono text-center">
                <div className="bg-neutral-100/80 rounded py-1 px-0.5">
                  <span className="text-[11px] font-bold text-[#050404] block leading-none">840K+</span>
                  <span className="text-[6.5px] uppercase text-neutral-400 block mt-0.5 truncate">Listeners</span>
                </div>
                <div className="bg-neutral-100/80 rounded py-1 px-0.5">
                  <span className="text-[11px] font-bold text-[#050404] block leading-none">42M+</span>
                  <span className="text-[6.5px] uppercase text-neutral-400 block mt-0.5 truncate">Streams</span>
                </div>
                <div className="bg-neutral-100/80 rounded py-1 px-0.5">
                  <span className="text-[11px] font-bold text-[#8C1C13] block leading-none">70%</span>
                  <span className="text-[6.5px] uppercase text-neutral-400 block mt-0.5 truncate">Equity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------
            3. MIDDLE ROW: ALL 4 DIRECT DSP CAPABILITY CARDS (fresh-cave/app/page.tsx Section 2)
            ----------------------------------------------------------------- */}
        <div className="grid grid-cols-4 gap-3 [transform-style:preserve-3d]">
          {/* Card 1: DSP Lossless Delivery */}
          <div
            onClick={() => handleCardClick("fresh-cave-dsp-pipelines")}
            style={{ transform: "translateZ(12px)" }}
            className="mockup-card-layer golden-shimmer-container group rounded-xl p-3 bg-[#0d0d0f] border border-white/10 shadow-[0_14px_28px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[96px] overflow-hidden"
            title="DSP Lossless Delivery"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] font-mono uppercase tracking-wider text-[#FBFCFF]/40 flex items-center gap-1">
                  <Music className="w-2.5 h-2.5 text-[#8C1C13]" /> Audio Ingest
                </span>
                <ArrowUpRight className="w-3 h-3 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors shrink-0" />
              </div>
              <h4 className="font-bold text-xs uppercase tracking-tight text-white group-hover:text-[#8C1C13] transition-colors truncate">
                DSP Lossless
              </h4>
            </div>
            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between font-mono text-[8px]">
              <span className="text-[#8C1C13] font-bold">150+ Stores</span>
              <span className="text-[#FBFCFF]/40">24-bit FLAC</span>
            </div>
          </div>

          {/* Card 2: Vevo Broadcast Network */}
          <div
            onClick={() => handleCardClick("fresh-cave-dsp-pipelines")}
            style={{ transform: "translateZ(12px)" }}
            className="mockup-card-layer golden-shimmer-container group rounded-xl p-3 bg-[#0d0d0f] border border-white/10 shadow-[0_14px_28px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[96px] overflow-hidden"
            title="Vevo Broadcast Network"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] font-mono uppercase tracking-wider text-[#FBFCFF]/40 flex items-center gap-1">
                  <Tv className="w-2.5 h-2.5 text-[#8C1C13]" /> Visual Delivery
                </span>
                <ArrowUpRight className="w-3 h-3 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors shrink-0" />
              </div>
              <h4 className="font-bold text-xs uppercase tracking-tight text-white group-hover:text-[#8C1C13] transition-colors truncate">
                Vevo Network
              </h4>
            </div>
            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between font-mono text-[8px]">
              <span className="text-[#8C1C13] font-bold">4K ProRes</span>
              <span className="text-[#FBFCFF]/40">FAST TV Rails</span>
            </div>
          </div>

          {/* Card 3: YouTube OAC Verification */}
          <div
            onClick={() => handleCardClick("fresh-cave-catalog-metadata")}
            style={{ transform: "translateZ(12px)" }}
            className="mockup-card-layer golden-shimmer-container group rounded-xl p-3 bg-[#0d0d0f] border border-white/10 shadow-[0_14px_28px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[96px] overflow-hidden"
            title="YouTube OAC Verification"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] font-mono uppercase tracking-wider text-[#FBFCFF]/40 flex items-center gap-1">
                  <Video className="w-2.5 h-2.5 text-[#8C1C13]" /> Channel Claims
                </span>
                <ArrowUpRight className="w-3 h-3 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors shrink-0" />
              </div>
              <h4 className="font-bold text-xs uppercase tracking-tight text-white group-hover:text-[#8C1C13] transition-colors truncate">
                YouTube OAC
              </h4>
            </div>
            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between font-mono text-[8px]">
              <span className="text-[#8C1C13] font-bold">Verified Note</span>
              <span className="text-[#FBFCFF]/40">Topic Merge</span>
            </div>
          </div>

          {/* Card 4: Content ID & Rights Lock */}
          <div
            onClick={() => handleCardClick("fresh-cave-sync-licensing")}
            style={{ transform: "translateZ(12px)" }}
            className="mockup-card-layer golden-shimmer-container group rounded-xl p-3 bg-[#0d0d0f] border border-white/10 shadow-[0_14px_28px_rgba(0,0,0,0.6)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[96px] overflow-hidden"
            title="Content ID & Rights Lock"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] font-mono uppercase tracking-wider text-[#FBFCFF]/40 flex items-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5 text-[#8C1C13]" /> Rights Lock
                </span>
                <ArrowUpRight className="w-3 h-3 text-[#FBFCFF]/40 group-hover:text-[#8C1C13] transition-colors shrink-0" />
              </div>
              <h4 className="font-bold text-xs uppercase tracking-tight text-white group-hover:text-[#8C1C13] transition-colors truncate">
                Content ID
              </h4>
            </div>
            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between font-mono text-[8px]">
              <span className="text-[#8C1C13] font-bold">100% Monitized</span>
              <span className="text-[#FBFCFF]/40">UGC Protection</span>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------
            4. LOWER ROW: Radical Transparency (70% Master) + Producer Line + Spatial Specs
            ----------------------------------------------------------------- */}
        <div className="grid grid-cols-12 gap-3 [transform-style:preserve-3d]">
          {/* Radical Transparency & 70% Master Ownership (4 cols) */}
          <div
            onClick={() => handleCardClick("fresh-cave-master-ownership")}
            style={{ transform: "translateZ(10px)" }}
            className="col-span-4 mockup-card-layer golden-shimmer-container group rounded-xl p-3.5 bg-[#050404] border border-white/15 shadow-[0_16px_32px_rgba(0,0,0,0.65)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[105px] overflow-hidden"
            title="70% Master Ownership — Click to inspect"
          >
            <div>
              <span className="text-[8px] font-mono uppercase tracking-wider text-[#8C1C13] font-bold block mb-0.5">
                // Radical Transparency
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold font-display text-[#8C1C13] leading-none">
                  70%
                </span>
                <span className="text-[11px] font-bold text-white uppercase tracking-tight">
                  Master Ownership
                </span>
              </div>
              <p className="text-[8.5px] text-[#FBFCFF]/60 leading-snug line-clamp-1 mt-0.5">
                Independent ownership. Enterprise delivery.
              </p>
            </div>
            <div className="pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[8px]">
              <span className="text-white/70">48h Ingest Turnaround</span>
              <span className="text-[#8C1C13] font-bold">Direct Payouts</span>
            </div>
          </div>

          {/* Producer Line & Studio Directory (4 cols) - fresh-cave/app/producers/page.tsx */}
          <div
            onClick={() => handleCardClick("fresh-cave-producer-directory")}
            style={{ transform: "translateZ(10px)" }}
            className="col-span-4 mockup-card-layer golden-shimmer-container group rounded-xl p-3.5 bg-[#0d0d0f] border border-white/15 shadow-[0_16px_32px_rgba(0,0,0,0.65)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[105px] overflow-hidden"
            title="Producer Line Studio Directory — Click to inspect"
          >
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[8px] font-mono uppercase tracking-wider text-[#8C1C13] font-bold flex items-center gap-1">
                  <Headphones className="w-2.5 h-2.5" /> Producer Line
                </span>
                <span className="text-[7.5px] font-mono text-white/40">Studio Index</span>
              </div>
              <h4 className="font-bold text-[11px] uppercase tracking-tight text-white truncate">
                Featured Engineers
              </h4>
              <div className="space-y-0.5 mt-1 text-[8px] font-mono text-white/70">
                <div className="truncate text-white/90">#axiom-sound • Dolby Atmos Mastering</div>
                <div className="truncate text-white/50">#vanguard-beats • Heavy Trap Specialist</div>
              </div>
            </div>
            <div className="pt-1 border-t border-white/10 flex items-center justify-between font-mono text-[8px]">
              <span className="text-[#8C1C13]">Session Booking</span>
              <span className="text-white/40">Stem Audition &rarr;</span>
            </div>
          </div>

          {/* Immersive Spatial Architecture White Card (4 cols) */}
          <div
            onClick={() => handleCardClick("fresh-cave-artist-spotlight")}
            style={{ transform: "translateZ(14px)" }}
            className="col-span-4 mockup-card-layer golden-shimmer-container group rounded-xl p-3 bg-[#FBFCFF] text-[#050404] border border-neutral-200/90 shadow-[0_18px_36px_rgba(0,0,0,0.55)] hover:-translate-y-1 active:translate-y-0 cursor-pointer transition-all duration-300 flex flex-col justify-between h-[105px] overflow-hidden"
            title="Immersive Spatial Card — Click to inspect"
          >
            <div>
              <span className="text-[8px] font-mono uppercase tracking-widest text-[#8C1C13] font-bold block mb-0.5">
                // Spatial Architecture
              </span>
              <h4 className="font-bold text-[10.5px] uppercase tracking-tight leading-snug text-[#050404] line-clamp-1">
                Club-Ready Sub Dynamics
              </h4>
              <div className="space-y-0.5 mt-1 font-mono text-[7.5px] text-[#050404]/80">
                <div className="flex items-center gap-1 truncate">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#8C1C13] shrink-0" />
                  <span>Dolby Atmos ADM BWF Master</span>
                </div>
                <div className="flex items-center gap-1 truncate">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#8C1C13] shrink-0" />
                  <span>Vevo 4K Broadcast Rails</span>
                </div>
              </div>
            </div>
            <div className="pt-1 border-t border-neutral-200 flex items-center justify-between font-mono text-[8px]">
              <span className="text-[#8C1C13] font-bold">+150 Storefronts</span>
              <span className="text-neutral-500">Lossless Master</span>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------
            5. BOTTOM CAPABILITIES SUMMARY STRIP
            ----------------------------------------------------------------- */}
        <div
          onClick={() => handleCardClick("fresh-cave-hero")}
          style={{ transform: "translateZ(6px)" }}
          className="mockup-card-layer golden-shimmer-container group rounded-xl px-4 py-2 bg-[#050404] border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-300 flex items-center justify-between text-[11px] font-mono text-neutral-300 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-white font-medium">150+ Global Storefronts</span>
            <span className="text-neutral-600">•</span>
            <span>Vevo 4K Ingestion</span>
            <span className="text-neutral-600">•</span>
            <span className="text-white font-medium">70% Master Retention</span>
            <span className="text-neutral-600">•</span>
            <span>Content ID Sync</span>
          </div>

          <div className="inline-flex items-center gap-1 text-[#8C1C13] font-bold text-[10.5px] shrink-0">
            <span>Interactive 3D Stage</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
