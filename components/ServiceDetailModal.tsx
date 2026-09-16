"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ServiceItem, servicesData, personalInfo } from "@/lib/data";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowRight,
  Layers,
  Wrench,
  TrendingUp,
  Briefcase,
  Compass,
} from "lucide-react";

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function ServiceDetailModal({
  isOpen,
  onClose,
  initialServiceId,
}: ServiceDetailModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync initial service when modal opens
  useEffect(() => {
    if (isOpen && initialServiceId) {
      const idx = servicesData.findIndex((item) => item.id === initialServiceId);
      if (idx !== -1) {
        setCurrentIndex(idx);
      }
    } else if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, initialServiceId]);

  const activeService: ServiceItem = servicesData[currentIndex] || servicesData[0];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  }, []);

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
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !activeService) return null;

  const handleInquire = () => {
    onClose();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      {/* Blurred Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        aria-hidden="true"
      />

      {/* Horizontal Popup Window - Perfectly fitted, unscrollable container */}
      <div className="relative w-full max-w-5xl bg-neutral-950/95 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 backdrop-blur-2xl ring-1 ring-white/10">
        
        {/* Top Header & Horizontal Service Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 px-4 sm:px-6 py-3 border-b border-neutral-800/80 bg-neutral-900/60 shrink-0">
          {/* Header Identity */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <Briefcase className="w-3.5 h-3.5 text-neutral-200" />
            </div>
            <div className="min-w-0">
              <h2
                id="service-modal-title"
                className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate flex items-center gap-2"
              >
                <span>Capabilities &amp; Detailed Offerings</span>
                <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                  {activeService.number} of {servicesData.length}
                </span>
              </h2>
            </div>
          </div>

          {/* Horizontal Service Switcher Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {servicesData.map((s, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`text-xs px-2.5 sm:px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-neutral-950 font-semibold shadow-xs golden-shimmer-btn"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/70 border border-neutral-800/80"
                  }`}
                >
                  <span className="font-mono text-[10px] mr-1 opacity-70">
                    {s.number}
                  </span>
                  <span>{s.title.split("&")[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-7 h-7 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700/60 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer self-end sm:self-center shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Main Content: Perfectly Balanced, Unscrollable 2-Column Split */}
        <div className="p-4 sm:p-5 md:p-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            
            {/* Left Column (Overview, Metrics, Tools, CTA) - 5 cols */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
              <div className="space-y-2.5">
                {/* Number & Tagline */}
                <div className="flex items-center gap-2.5">
                  <span className="text-xl sm:text-2xl font-mono font-light text-neutral-400 tracking-wider">
                    {activeService.number}
                  </span>
                  <div className="h-3.5 w-px bg-neutral-800" />
                  <span className="text-[11px] font-mono text-amber-400/90 tracking-wide uppercase">
                    Service Detail
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
                  {activeService.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-medium text-neutral-300">
                  {activeService.tagline}
                </p>

                {/* Concise Overview */}
                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                  {activeService.overview || activeService.description}
                </p>
              </div>

              {/* Key Impact Metrics Badges */}
              {activeService.metrics && activeService.metrics.length > 0 && (
                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/70 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span>Impact Focus</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                    {activeService.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-1.5 rounded-lg bg-neutral-950/60 border border-neutral-800/60 flex flex-col justify-center"
                      >
                        <span className="text-[9px] text-neutral-500 font-mono truncate">
                          {m.label}
                        </span>
                        <span className="text-[11px] font-semibold text-neutral-200 truncate mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Environment */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  <Wrench className="w-3 h-3 text-neutral-500" />
                  <span>Tools &amp; Stack</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {(activeService.tools || activeService.skills).slice(0, 5).map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-1">
                <button
                  onClick={handleInquire}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white text-neutral-950 font-medium text-xs hover:scale-[1.01] active:scale-[0.99] transition-transform cursor-pointer golden-shimmer-btn shadow-xs"
                >
                  <span>Inquire for {activeService.title.split("&")[0].trim()}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column (Deliverables & Execution Roadmap) - 7 cols */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5 lg:border-l lg:border-neutral-800/80 lg:pl-6">
              
              {/* Deliverables Section - 2 Column Grid to fit cleanly */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Key Deliverables &amp; Inclusions</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {activeService.deliverables?.slice(0, 4).map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 p-2 rounded-lg bg-neutral-900/50 border border-neutral-800/60"
                    >
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                      </div>
                      <span className="text-xs text-neutral-200 leading-snug font-medium line-clamp-2">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured 3-Step Execution Roadmap */}
              {activeService.process && activeService.process.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    <Compass className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Execution Roadmap</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {activeService.process.map((stepItem, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-2.5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono font-bold text-amber-400/90 px-1 py-0.2 rounded bg-amber-500/10 border border-amber-500/20">
                              {stepItem.step}
                            </span>
                            <span className="text-[9px] font-mono text-neutral-500">
                              Phase {pIdx + 1}
                            </span>
                          </div>
                          <h4 className="text-xs font-semibold text-white mb-1 truncate">
                            {stepItem.title}
                          </h4>
                          <p className="text-[10px] text-neutral-400 leading-relaxed line-clamp-3">
                            {stepItem.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Verification & Trust Note */}
              <div className="p-2.5 rounded-xl bg-neutral-950/70 border border-neutral-800/60 flex items-center justify-between gap-2 text-xs text-neutral-400">
                <span className="font-mono text-[10px] truncate">
                  Delivered by {personalInfo.name} · {personalInfo.role}
                </span>
                <span className="text-[10px] text-neutral-500 shrink-0">
                  {personalInfo.location}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Horizontal Navigation Footer */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-t border-neutral-800/80 bg-neutral-900/60 text-xs text-neutral-400 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-neutral-500">
            <span>Tip: Use</span>
            <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-300 text-[10px]">
              ←
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-300 text-[10px]">
              →
            </kbd>
            <span>keys to switch services horizontally</span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous service"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer text-xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <span className="px-1.5 font-mono text-xs text-neutral-500">
              {currentIndex + 1} / {servicesData.length}
            </span>

            <button
              onClick={handleNext}
              aria-label="Next service"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer text-xs"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
