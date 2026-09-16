"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GraphicWorkItem, graphicsWorkData } from "@/lib/data";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Tag,
  Palette,
} from "lucide-react";

interface GraphicsShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItemId?: string;
}

type CategoryFilter =
  | "All"
  | "Logo Design"
  | "Ad Campaign"
  | "Digital Marketing"
  | "Packaging & Banner"
  | "Editorial & Print";

const CATEGORIES: CategoryFilter[] = [
  "All",
  "Logo Design",
  "Ad Campaign",
  "Digital Marketing",
  "Packaging & Banner",
  "Editorial & Print",
];

export default function GraphicsShowcaseModal({
  isOpen,
  onClose,
  initialItemId,
}: GraphicsShowcaseModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtered items list based on selected category
  const filteredItems = React.useMemo(() => {
    if (selectedCategory === "All") return graphicsWorkData;
    return graphicsWorkData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Set initial item when opened
  useEffect(() => {
    if (isOpen && initialItemId) {
      const idx = filteredItems.findIndex((item) => item.id === initialItemId);
      if (idx !== -1) {
        setCurrentIndex(idx);
      } else {
        const globalIdx = graphicsWorkData.findIndex((item) => item.id === initialItemId);
        if (globalIdx !== -1) {
          setSelectedCategory("All");
          setCurrentIndex(globalIdx);
        }
      }
    } else if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, initialItemId, filteredItems]);

  // Keep currentIndex in bounds if filter changes
  useEffect(() => {
    if (currentIndex >= filteredItems.length) {
      setCurrentIndex(0);
    }
  }, [filteredItems, currentIndex]);

  const activeItem: GraphicWorkItem | undefined = filteredItems[currentIndex] || filteredItems[0];

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
      aria-labelledby="showcase-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      {/* Heavy Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        aria-hidden="true"
      />

      {/* Main Glassmorphic Modal Window */}
      <div className="relative w-full max-w-5xl max-h-[94vh] bg-neutral-950/95 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 backdrop-blur-2xl ring-1 ring-white/10">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-neutral-800/80 bg-neutral-900/60">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <Palette className="w-3.5 h-3.5 text-neutral-200" />
            </div>
            <div className="min-w-0">
              <h2
                id="showcase-modal-title"
                className="text-sm sm:text-base font-semibold text-white tracking-tight truncate flex items-center gap-2"
              >
                <span>Graphic Design &amp; Logo Showcase</span>
                <span className="text-[11px] font-mono font-normal px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                  {currentIndex + 1} of {filteredItems.length}
                </span>
              </h2>
            </div>
          </div>

          {/* Close button with Esc prompt */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/60 transition-colors focus:outline-hidden focus:ring-2 focus:ring-white/20 cursor-pointer"
              aria-label="Close modal"
            >
              <span className="hidden sm:inline font-mono text-[10px] text-neutral-500 uppercase">
                ESC
              </span>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-1.5 px-4 sm:px-6 py-3 overflow-x-auto border-b border-neutral-800/50 bg-neutral-900/30 text-xs">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1">
            <Layers className="w-3 h-3" /> Filter:
          </span>
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? graphicsWorkData.length
                : graphicsWorkData.filter((i) => i.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${isSelected
                  ? "bg-white text-neutral-950 font-semibold shadow-xs golden-shimmer-btn"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800/70"
                  }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono rounded-full px-1.5 py-0.2 ${isSelected
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-800 text-neutral-400"
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Showcase Canvas */}
        <div className="relative flex-1 min-h-[280px] sm:min-h-[380px] md:min-h-[440px] bg-neutral-950 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Subtle Stage Gradient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

          {/* Active Image Stage with Aspect Ratio Preservation */}
          <div className="relative w-full h-full max-h-[50vh] sm:max-h-[55vh] flex items-center justify-center">
            <div
              className={`relative max-w-full max-h-full transition-all duration-300 flex items-center justify-center rounded-xl overflow-hidden bg-neutral-900/40 shadow-2xl golden-shimmer-container ${activeItem.aspect === "banner"
                ? "w-full max-w-3xl aspect-[16/5] sm:aspect-[18/5]"
                : activeItem.aspect === "landscape"
                  ? "w-full max-w-2xl aspect-[4/3]"
                  : "w-full max-w-md aspect-square"
                }`}
            >
              <Image
                src={encodeURI(activeItem.image)}
                alt={activeItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain p-2 transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 shadow-lg flex items-center justify-center transition-all hover:scale-105 backdrop-blur-md focus:outline-hidden cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 shadow-lg flex items-center justify-center transition-all hover:scale-105 backdrop-blur-md focus:outline-hidden cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Info & Metadata Panel */}
        <div className="px-4 sm:px-6 py-3.5 border-t border-neutral-800/80 bg-neutral-900/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-white tracking-tight">
                  {activeItem.title}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                  {activeItem.client}
                </span>
                {activeItem.year && (
                  <span className="text-[10px] font-mono text-neutral-400">
                    {activeItem.year}
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-400 max-w-3xl leading-relaxed line-clamp-2">
                {activeItem.description}
              </p>
            </div>

            {/* Tags & Action Link */}
            <div className="flex items-center gap-2 flex-wrap shrink-0">
              <div className="flex items-center gap-1 flex-wrap">
                {activeItem.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-neutral-800/80 text-neutral-300 border border-neutral-700/40"
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
                className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-300 hover:text-white px-2.5 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors shrink-0"
              >
                <span>Full Asset</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="px-4 sm:px-6 py-2.5 bg-neutral-950 border-t border-neutral-800/60 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max pb-1">
            {filteredItems.map((item, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative h-12 rounded-md overflow-hidden border transition-all shrink-0 focus:outline-hidden cursor-pointer ${item.aspect === "banner"
                    ? "w-24"
                    : item.aspect === "landscape"
                      ? "w-16"
                      : "w-12"
                    } ${isCurrent
                      ? "border-white ring-2 ring-white/30 shadow-md scale-105"
                      : "border-neutral-800 hover:border-neutral-500 opacity-60 hover:opacity-100"
                    }`}
                  aria-label={`Select ${item.title}`}
                >
                  <Image
                    src={encodeURI(item.image)}
                    alt={item.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                  {isCurrent && (
                    <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
