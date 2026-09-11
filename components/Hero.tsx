"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="px-4 pt-8 md:pt-16 pb-12 md:pb-20">
      <div className="max-w-5xl mx-auto">
        {/* 2-Column Hero Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Split-Tone Editorial Typography */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                {personalInfo.status}
              </span>
            </div>

            {/* Split-Tone Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.1] tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-2.5px]">
              <span className="text-neutral-950 dark:text-neutral-50 font-medium">
                {personalInfo.heroHeadline.part1}
              </span>{" "}
              <span className="text-neutral-400 dark:text-neutral-500 font-light">
                {personalInfo.heroHeadline.part2}
              </span>{" "}
              <span className="text-neutral-950 dark:text-neutral-50 font-medium">
                {personalInfo.heroHeadline.part3}
              </span>
              <span className="text-neutral-400 dark:text-neutral-500 font-light">
                {personalInfo.heroHeadline.part4}
              </span>
            </h1>

            {/* Sub-bio description */}
            <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
              {personalInfo.shortBio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Portrait (Arturo Spatino Signature Feature) */}
          <div className="relative">
            <div className="aspect-[3/4] md:aspect-square relative overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xs group">
              <Image
                src={personalInfo.heroImage || "/bete.png"}
                alt="Bete Abrham portrait"
                fill
                priority
                sizes="(min-width: 1024px) 512px, 100vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-medium">{personalInfo.name}</p>
                  <p className="text-xs text-neutral-300">{personalInfo.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
