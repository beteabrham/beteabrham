"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import {
  ExternalLink,
  Laptop,
  Palette,
  Maximize2,
  TrendingUp,
  Layout,
  Share2,
} from "lucide-react";
import GraphicsShowcaseModal from "@/components/GraphicsShowcaseModal";

function GithubIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "featured">("all");
  const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);
  const [selectedGraphicId, setSelectedGraphicId] = useState<string | undefined>(undefined);

  const displayedProjects =
    activeTab === "featured"
      ? projectsData.filter((p) => p.featured)
      : projectsData;

  const handleOpenShowcase = (id?: string) => {
    setSelectedGraphicId(id);
    setIsShowcaseOpen(true);
  };

  return (
    <section
      id="work"
      className="px-4 py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header: Arturo Spatino 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10 md:mb-12">
          <p className="md:sticky md:self-start md:top-24 text-lg md:text-xl font-normal tracking-tight text-neutral-950 dark:text-neutral-50">
            Work
          </p>
          <div className="flex flex-col justify-between space-y-3">
            <p className="text-sm sm:text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
              A selection of work across graphic design &amp; logo designs, search engine
              optimization (SEO/SEM), visual identity systems, and UI/UX designs.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`text-xs px-3.5 py-1 rounded-full transition-colors cursor-pointer ${
                  activeTab === "all"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 golden-shimmer-btn shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                All Projects ({projectsData.length})
              </button>
              <button
                onClick={() => setActiveTab("featured")}
                className={`text-xs px-3.5 py-1 rounded-full transition-colors cursor-pointer ${
                  activeTab === "featured"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 golden-shimmer-btn shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                Featured
              </button>
            </div>
          </div>
        </div>

        {/* Projects List: Alternating Side-by-Side Showcase Layout */}
        <div className="flex flex-col gap-8 md:gap-10">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            // SPECIAL CONTAINER: Graphic Design & Logo Designs
            if (project.id === "graphics-design-logos") {
              return (
                <div
                  key={project.id}
                  className="group relative rounded-2xl p-5 sm:p-6 md:p-8 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:shadow-lg golden-shimmer-container"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
                    {/* Visual Preview Container: 4-Quadrant Design Showcase Grid */}
                    <div
                      className={`w-full ${
                        isEven ? "order-1 md:order-1" : "order-1 md:order-2"
                      }`}
                    >
                      <div
                        onClick={() => handleOpenShowcase()}
                        className="aspect-[4/3] rounded-xl bg-neutral-950 border border-neutral-800/80 overflow-hidden relative group-hover:border-neutral-700 transition-colors cursor-pointer shadow-inner"
                      >
                        {/* 4 Edge-to-Edge Filled 1:1 Images Grid */}
                        <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-1 p-1 bg-neutral-950">
                          {/* Tile 1: Pattern 33 Logo (1:1) */}
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenShowcase("pattern-33-dark");
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.stopPropagation();
                                e.preventDefault();
                                handleOpenShowcase("pattern-33-dark");
                              }
                            }}
                            aria-label="View Pattern 33 Logo in showcase"
                            className="relative w-full h-full overflow-hidden rounded-xs bg-neutral-900 group/tile cursor-pointer active:scale-[0.97] transition-transform"
                          >
                            <Image
                              src="/graphics%20work/pattern33-1.jpg"
                              alt="Pattern 33 Logo"
                              fill
                              sizes="(max-width: 768px) 50vw, 320px"
                              className="object-cover group-hover/tile:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/15 group-hover/tile:bg-transparent transition-colors" />
                            <span className="absolute bottom-1.5 left-1.5 text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-xs bg-black/75 text-neutral-200 backdrop-blur-md border border-white/10">
                              Logo
                            </span>
                          </div>

                          {/* Tile 2: Lele Baltena Brand Suite (1:1) */}
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenShowcase("lele-baltena-brand-suite");
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.stopPropagation();
                                e.preventDefault();
                                handleOpenShowcase("lele-baltena-brand-suite");
                              }
                            }}
                            aria-label="View Lele Baltena Brand Packaging Suite in showcase"
                            className="relative w-full h-full overflow-hidden rounded-xs bg-neutral-900 group/tile cursor-pointer active:scale-[0.97] transition-transform"
                          >
                            <Image
                              src="/graphics%20work/lele-baltena-brand-suite.jpg"
                              alt="Lele Baltena Brand Packaging Suite"
                              fill
                              sizes="(max-width: 768px) 50vw, 320px"
                              className="object-cover group-hover/tile:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/15 group-hover/tile:bg-transparent transition-colors" />
                            <span className="absolute bottom-1.5 left-1.5 text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-xs bg-black/75 text-neutral-200 backdrop-blur-md border border-white/10">
                              Branding
                            </span>
                          </div>

                          {/* Tile 3: Aye Hiking Tour Ad Campaign (1:1) */}
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenShowcase("aye-hiking-ziway");
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.stopPropagation();
                                e.preventDefault();
                                handleOpenShowcase("aye-hiking-ziway");
                              }
                            }}
                            aria-label="View Aye Hiking Tour Ad Campaign in showcase"
                            className="relative w-full h-full overflow-hidden rounded-xs bg-neutral-900 group/tile cursor-pointer active:scale-[0.97] transition-transform"
                          >
                            <Image
                              src="/graphics%20work/0001-1778030199_20210524_064435_0000%20(2).png"
                              alt="Aye Hiking Tour Ad Campaign"
                              fill
                              sizes="(max-width: 768px) 50vw, 320px"
                              className="object-cover group-hover/tile:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/15 group-hover/tile:bg-transparent transition-colors" />
                            <span className="absolute bottom-1.5 left-1.5 text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-xs bg-black/75 text-neutral-200 backdrop-blur-md border border-white/10">
                              Ad Campaign
                            </span>
                          </div>

                          {/* Tile 4: Kaff Leather Oxford Ad (1:1) */}
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenShowcase("kaff-ad-code23");
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.stopPropagation();
                                e.preventDefault();
                                handleOpenShowcase("kaff-ad-code23");
                              }
                            }}
                            aria-label="View Kaff Leather Oxford Ad in showcase"
                            className="relative w-full h-full overflow-hidden rounded-xs bg-neutral-900 group/tile cursor-pointer active:scale-[0.97] transition-transform"
                          >
                            <Image
                              src="/graphics%20work/12_20240502_215445_0011.png"
                              alt="Kaff Leather Oxford Ad"
                              fill
                              sizes="(max-width: 768px) 50vw, 320px"
                              className="object-cover group-hover/tile:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/15 group-hover/tile:bg-transparent transition-colors" />
                            <span className="absolute bottom-1.5 left-1.5 text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-xs bg-black/75 text-neutral-200 backdrop-blur-md border border-white/10">
                              Commercial
                            </span>
                          </div>
                        </div>

                        {/* Floating Top Header Badge */}
                        <div className="absolute top-2.5 left-2.5 flex items-center pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-neutral-950/85 text-neutral-200 backdrop-blur-md border border-white/15 shadow-sm">
                            <Palette className="w-3 h-3 text-neutral-300" />
                            <span>Graphic &amp; Logo Designs</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Headline & Description Column */}
                    <div
                      className={`w-full flex flex-col justify-between space-y-4 ${
                        isEven ? "order-2 md:order-2" : "order-2 md:order-1"
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/50">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                          {project.title}
                        </h3>

                        {project.tagline && (
                          <p className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            {project.tagline}
                          </p>
                        )}

                        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Link / Trigger */}
                      <div className="flex items-center justify-between pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                        <button
                          type="button"
                          onClick={() => handleOpenShowcase()}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-4 h-4" />
                          <span>Open Showcase Popup</span>
                        </button>
                        <span className="text-xs font-mono text-neutral-400">
                          12 Images
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // STANDARD PROJECT CONTAINERS (Alternating layout)
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl p-5 sm:p-6 md:p-8 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 shadow-xs hover:shadow-lg golden-shimmer-container"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
                  {/* Project Visual Preview Column */}
                  <div
                    className={`w-full ${
                      isEven ? "order-1 md:order-1" : "order-1 md:order-2"
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/80 overflow-hidden relative p-5 flex flex-col justify-between group-hover:border-neutral-700 transition-colors shadow-inner">
                      {/* Subtle Mockup Header */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 border-b border-neutral-200/50 dark:border-neutral-800 pb-2.5">
                        <span className="truncate max-w-[160px] sm:max-w-[200px]">
                          {project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.app
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] text-neutral-500 uppercase">Live</span>
                        </div>
                      </div>

                      {/* Central Visual Presentation */}
                      <div className="my-auto py-4 text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-xs group-hover:scale-110 transition-transform duration-300 mb-2.5">
                          {project.id === "growth-engine" ? (
                            <TrendingUp className="w-7 h-7 text-neutral-700 dark:text-neutral-300" />
                          ) : project.id === "performance-marketing" ? (
                            <Share2 className="w-7 h-7 text-neutral-700 dark:text-neutral-300" />
                          ) : (
                            <Layout className="w-7 h-7 text-neutral-700 dark:text-neutral-300" />
                          )}
                        </div>
                        <h4 className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-medium">
                          {project.category}
                        </h4>
                      </div>

                      {/* Stack Tags Preview */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm bg-white/80 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 border border-neutral-200/40 dark:border-neutral-700/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Headline & Description Column */}
                  <div
                    className={`w-full flex flex-col justify-between space-y-4 ${
                      isEven ? "order-2 md:order-2" : "order-2 md:order-1"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/50">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                        {project.title}
                      </h3>

                      {project.tagline && (
                        <p className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {project.tagline}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External Action Links */}
                    <div className="flex items-center gap-3 pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-800 hover:text-black dark:text-neutral-200 dark:hover:text-white transition-colors"
                      >
                        <span>View Project Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pop-up Showcase Modal with Blurred Background */}
      <GraphicsShowcaseModal
        isOpen={isShowcaseOpen}
        onClose={() => {
          setIsShowcaseOpen(false);
          setSelectedGraphicId(undefined);
        }}
        initialItemId={selectedGraphicId}
      />
    </section>
  );
}
