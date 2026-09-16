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

  // Set initial item only when modal opens or initialItemId changes upon opening
  useEffect(() => {
    if (!isOpen) return;

    if (initialItemId) {
      const globalIdx = graphicsWorkData.findIndex((item) => item.id === initialItemId);
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
      {/* Blurred Translucent Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xl transition-opacity"
        aria-hidden="true"
      />

      {/* Main Showcase Viewport Wrapper (Transparent, no container box) */}
      <div className="relative w-full max-w-5xl max-h-[95vh] bg-transparent border-none shadow-none ring-0 flex flex-col z-10">
        {/* Top Header Bar (Transparent, only texts and close button) */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 bg-transparent border-none shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <Palette className="w-4 h-4 text-neutral-300 shrink-0" />
            <div className="min-w-0">
              <h2
                id="showcase-modal-title"
                className="text-sm sm:text-base font-semibold text-white tracking-tight truncate flex items-center gap-2"
              >
                <span>Graphic Design &amp; Logo Showcase</span>
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
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-neutral-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors focus:outline-hidden cursor-pointer backdrop-blur-sm"
              aria-label="Close modal"
            >
              <span className="hidden sm:inline font-mono text-[10px] text-neutral-400 uppercase">
                ESC
              </span>
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
                ? graphicsWorkData.length
                : graphicsWorkData.filter((i) => i.category === cat).length;
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

        {/* Showcase Canvas (Completely transparent, NO container holding the image) */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] bg-transparent flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          {/* Active Image Stage: DIRECT IMAGE, NO CONTAINER, NO BACKGROUND, NO BORDER, NO SHADOW */}
          <div className="relative w-full h-full flex items-center justify-center min-h-0">
            <div
              className="relative transition-all duration-300 flex items-center justify-center"
              style={{
                width:
                  activeItem.aspect === "banner"
                    ? "min(100%, 860px)"
                    : activeItem.aspect === "landscape"
                      ? "min(100%, 680px)"
                      : "min(100%, min(52vh, 460px))",
                height:
                  activeItem.aspect === "banner"
                    ? "min(26vh, 200px)"
                    : activeItem.aspect === "landscape"
                      ? "min(50vh, 440px)"
                      : "min(52vh, 460px)",
                aspectRatio:
                  activeItem.aspect === "banner"
                    ? "16 / 5"
                    : activeItem.aspect === "landscape"
                      ? "4 / 3"
                      : "1 / 1",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            >
              <Image
                src={encodeURI(activeItem.image)}
                alt={activeItem.title}
                fill
                sizes="(max-width: 768px) 95vw, 860px"
                className="object-contain transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-lg flex items-center justify-center transition-all hover:scale-105 backdrop-blur-md focus:outline-hidden cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-lg flex items-center justify-center transition-all hover:scale-105 backdrop-blur-md focus:outline-hidden cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Info & Metadata Panel (Transparent, only texts and buttons) */}
        <div className="px-3 sm:px-6 py-2 bg-transparent border-none shrink-0">
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

        {/* Thumbnail Selector Strip (Transparent, only thumbnails and button outlines) */}
        <div className="px-3 sm:px-6 py-2 bg-transparent border-none overflow-x-auto shrink-0 no-scrollbar">
          <div className="flex items-center gap-2 min-w-max pb-0.5">
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
                  className={`group relative h-10 sm:h-11 overflow-hidden transition-all shrink-0 focus:outline-hidden cursor-pointer ${
                    item.aspect === "banner"
                      ? "w-20 sm:w-22"
                      : item.aspect === "landscape"
                        ? "w-14 sm:w-16"
                        : "w-10 sm:w-11"
                  } ${
                    isCurrent
                      ? "ring-2 ring-white scale-105 opacity-100"
                      : "opacity-40 hover:opacity-100"
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
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
