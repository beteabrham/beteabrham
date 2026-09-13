"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="px-4 py-8 border-t border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#09090b]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400 font-normal">
        {/* Left: Copyright */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}.</span>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">|</span>
          <span className="hidden sm:inline">{personalInfo.location}</span>
        </div>

        {/* Right: Back to top button */}
        <div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
