"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { ArrowUpRight, CheckCircle2, FileText } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        {/* Left Sticky Label (Arturo Spatino Signature Pattern) */}
        <div>
          <p className="md:sticky md:self-start md:top-24 text-lg md:text-xl font-normal tracking-tight text-neutral-950 dark:text-neutral-50">
            Info
          </p>
        </div>

        {/* Right Narrative & Stats */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            {personalInfo.aboutNarrative.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Pillars / Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Performance-first architecture",
              "Accessible (a11y) & WCAG ready",
              "Maintainable, modular codebases",
              "Pixel-precision UI design systems",
            ].map((pillar, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>

          {/* Key Metrics / Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
            {personalInfo.stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-white font-mono">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200 mt-1">
                  {stat.label}
                </span>
                {stat.description && (
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 leading-tight">
                    {stat.description}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Resume & CTA Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 dark:text-white underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              <span>Work with me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
