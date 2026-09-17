"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GrowthEngineScreenshotItem, growthEngineScreenshotsData } from "@/lib/data";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Tag,
  TrendingUp,
} from "lucide-react";

interface GrowthEngineShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItemId?: string;
}

type CategoryFilter =
  | "All"
  | "Search & AI Overview"
  | "Streaming Telemetry"
  | "Audience & Geo"
  | "Demographics & Sources";

const CATEGORIES: CategoryFilter[] = [
  "All",
  "Search & AI Overview",
  "Streaming Telemetry",
  "Audience & Geo",
  "Demographics & Sources",
];

export default function GrowthEngineShowcaseModal({
  isOpen,
  onClose,
  initialItemId,
}: GrowthEngineShowcaseModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtered items list based on selected category
  const filteredItems = React.useMemo(() => {
    if (selectedCategory === "All") return growthEngineScreenshotsData;
    return growthEngineScreenshotsData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Set initial item only when modal opens or initialItemId changes upon opening
  useEffect(() => {
    if (!isOpen) return;

    if (initialItemId) {
      const globalIdx = growthEngineScreenshotsData.findIndex((item) => item.id === initialItemId);
      if (globalIdx !== -1) {
        setSelectedCategory("All");
        setCurrentIndex(globalIdx);
      } else {
        setSelectedCategory("All");
        setCurrentIndex(0);
      }
    } else {
      setSelectedCategory("All");
      setCurrentIndex(0);
    }
  }, [isOpen, initialItemId]);

  // Keep currentIndex in bounds if filter changes
  useEffect(() => {
    if (filteredItems.length > 0 && currentIndex >= filteredItems.length) {
      setCurrentIndex(0);
    }
  }, [filteredItems.length, currentIndex]);

  const activeItem: GrowthEngineScreenshotItem | undefined =
    filteredItems[currentIndex] || filteredItems[0];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  }, [filteredItems.length]);

  // Keyboard navigation & Esc to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock background body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !activeItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="growth-engine-showcase-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      {/* Blurred Translucent Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xl transition-opacity"
        aria-hidden="true"
      />

      {/* Main Showcase Viewport Wrapper (Transparent, no container box, responsive height fit) */}
      <div className="relative w-full max-w-6xl h-[92vh] max-h-[860px] min-h-[480px] bg-transparent border-none shadow-none ring-0 flex flex-col z-10">
        {/* Top Header Bar (Transparent, only texts and close button) */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 bg-transparent border-none shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <TrendingUp className="w-4 h-4 text-neutral-300 shrink-0" />
            <div className="min-w-0">
              <h2
                id="growth-engine-showcase-title"
                className="text-sm sm:text-base font-semibold text-white tracking-tight truncate flex items-center gap-2"
              >
                <span>Search &amp; Digital Growth Engine Showcase</span>
                <span className="text-[11px] font-mono font-normal text-neutral-300">
                  ({currentIndex + 1} of {filteredItems.length})
                </span>
              </h2>
            </div>
          </div>

          {/* Close button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors focus:outline-hidden cursor-pointer backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters Bar (Transparent, only buttons and label) */}
        <div className="flex items-center gap-1.5 px-3 sm:px-6 py-2 overflow-x-auto bg-transparent border-none text-xs shrink-0 no-scrollbar">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1">
            <Layers className="w-3 h-3 text-neutral-400" /> Filter:
          </span>
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? growthEngineScreenshotsData.length
                : growthEngineScreenshotsData.filter((i) => i.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-white text-neutral-950 font-semibold shadow-xs"
                    : "text-neutral-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono rounded-full px-1.5 py-0.2 ${
                    isSelected
                      ? "bg-neutral-900 text-white"
                      : "bg-white/15 text-neutral-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Split: Left (Image Canvas & Metadata) + Right (Mini Images List) */}
        <div className="relative flex-1 min-h-0 flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 items-stretch px-3 sm:px-6 py-1 sm:py-2 overflow-hidden">
          {/* Left Column: Image Canvas & Info Panel */}
          <div className="flex-1 flex flex-col min-h-0 min-w-0 justify-between gap-2">
            {/* Showcase Canvas (Completely transparent, flexible container holding the image) */}
            <div className="relative flex-1 min-h-0 w-full bg-transparent flex items-center justify-center p-1 sm:p-2 overflow-hidden">
              {/* Active Image Stage: DIRECT IMAGE, PERFECT NATURAL FIT SIZE */}
              <div className="relative w-full h-full flex items-center justify-center min-h-0">
                <Image
                  src={encodeURI(activeItem.image)}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 920px"
                  className="object-contain transition-transform duration-300"
                  priority
                />
              </div>

              {/* Previous Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 shadow-lg flex items-center justify-center transition-all hover:scale-105 backdrop-blur-md focus:outline-hidden cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 shadow-lg flex items-center justify-center transition-all hover:scale-105 backdrop-blur-md focus:outline-hidden cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Info & Metadata Panel (Transparent, only texts and buttons) */}
            <div className="pt-2 pb-1 bg-transparent border-none shrink-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-white tracking-tight truncate max-w-xs sm:max-w-md">
                      {activeItem.title}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-300 shrink-0">
                      {activeItem.client}
                    </span>
                    {activeItem.year && (
                      <span className="text-[11px] font-mono text-neutral-400 shrink-0">
                        &bull; {activeItem.year}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-300 max-w-3xl leading-relaxed line-clamp-1 sm:line-clamp-2">
                    {activeItem.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="flex items-center gap-2 flex-wrap shrink-0">
                  <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
                    {activeItem.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-white/10 text-neutral-300 border border-white/15"
                      >
                        <Tag className="w-2.5 h-2.5 text-neutral-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={encodeURI(activeItem.image)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-white px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/15 transition-colors shrink-0 backdrop-blur-sm"
                  >
                    <span>Full Asset</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Mini Images List (Responsive horizontal bar on mobile, vertical sidebar on desktop) */}
          <div className="w-full md:w-20 lg:w-24 shrink-0 flex flex-row md:flex-col gap-3 sm:gap-4 overflow-x-auto md:overflow-y-auto overflow-y-hidden md:overflow-x-hidden py-2 px-1 md:pr-2 md:pl-1 h-14 sm:h-16 md:h-full [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
            {filteredItems.map((item, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  ref={(el) => {
                    if (isCurrent && el) {
                      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                    }
                  }}
                  className={`group relative w-12 h-12 sm:w-14 sm:h-14 md:w-full md:aspect-square transition-all duration-200 shrink-0 focus:outline-hidden cursor-pointer flex items-center justify-center bg-transparent border-0 ring-0 shadow-none ${
                    isCurrent
                      ? "opacity-100 scale-105"
                      : "opacity-40 hover:opacity-80"
                  }`}
                  aria-label={`Select ${item.title}`}
                >
                  <Image
                    src={encodeURI(item.image)}
                    alt={item.title}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
