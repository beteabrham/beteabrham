"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { ExternalLink, Maximize2 } from "lucide-react";
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

const standardProjectImages: Record<string, string> = {
  "growth-engine": "/graphics work/15.png",
  "brand-ui-system": "/graphics work/lele-baltena-brand-suite.jpg",
  "performance-marketing": "/graphics work/10_20240502_215444_0009.png",
};

interface ProjectItemRowProps {
  project: (typeof projectsData)[0];
  index: number;
  onOpenShowcase: (id?: string) => void;
}

function ProjectItemRow({ project, index, onOpenShowcase }: ProjectItemRowProps) {
  const isEven = index % 2 === 0;

  // SPECIAL ROW: Graphic Design & Logo Designs (4-photo grid, no container behind, no curved corners)
  if (project.id === "graphics-design-logos") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center py-10 border-b border-neutral-200/50 dark:border-neutral-800/60 last:border-b-0">
        {/* Images Grid: Direct images, no container holding them, sharp straight corners */}
        <div className={`w-full ${isEven ? "order-1 md:order-1" : "order-1 md:order-2"}`}>
          <div
            onClick={() => onOpenShowcase()}
            className="aspect-[4/3] w-full relative cursor-pointer"
          >
            {/* 4 Edge-to-Edge Filled 1:1 Images Grid (No container, no curved corners) */}
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-2">
              {/* Tile 1: Pattern 33 Logo */}
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenShowcase("pattern-33-dark");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    onOpenShowcase("pattern-33-dark");
                  }
                }}
                aria-label="View Pattern 33 Logo in showcase"
                className="relative w-full h-full overflow-hidden group/tile cursor-pointer"
              >
                <Image
                  src="/graphics%20work/pattern33-1.jpg"
                  alt="Pattern 33 Logo"
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover group-hover/tile:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Tile 2: Lele Baltena Brand Suite */}
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenShowcase("lele-baltena-brand-suite");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    onOpenShowcase("lele-baltena-brand-suite");
                  }
                }}
                aria-label="View Lele Baltena Brand Packaging Suite in showcase"
                className="relative w-full h-full overflow-hidden group/tile cursor-pointer"
              >
                <Image
                  src="/graphics%20work/lele-baltena-brand-suite.jpg"
                  alt="Lele Baltena Brand Packaging Suite"
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover group-hover/tile:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Tile 3: Aye Hiking Tour Ad Campaign */}
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenShowcase("aye-hiking-ziway");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    onOpenShowcase("aye-hiking-ziway");
                  }
                }}
                aria-label="View Aye Hiking Tour Ad Campaign in showcase"
                className="relative w-full h-full overflow-hidden group/tile cursor-pointer"
              >
                <Image
                  src="/graphics%20work/0001-1778030199_20210524_064435_0000%20(2).png"
                  alt="Aye Hiking Tour Ad Campaign"
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover group-hover/tile:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Tile 4: Kaff Leather Oxford Ad */}
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenShowcase("kaff-ad-code23");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    onOpenShowcase("kaff-ad-code23");
                  }
                }}
                aria-label="View Kaff Leather Oxford Ad in showcase"
                className="relative w-full h-full overflow-hidden group/tile cursor-pointer"
              >
                <Image
                  src="/graphics%20work/12_20240502_215445_0011.png"
                  alt="Kaff Leather Oxford Ad"
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover group-hover/tile:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Headline & Description Column: Beside the images, clean neutral text, no blue hover */}
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

            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
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
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-neutral-200/60 dark:border-neutral-800/60">
            <button
              type="button"
              onClick={() => onOpenShowcase()}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer"
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
    );
  }

  // STANDARD ROWS: Direct project image, no container holding it, sharp straight corners
  const projectImgSrc = standardProjectImages[project.id];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center py-10 border-b border-neutral-200/50 dark:border-neutral-800/60 last:border-b-0">
      {/* Project Image: Direct image, no container holding it, sharp straight corners */}
      <div className={`w-full ${isEven ? "order-1 md:order-1" : "order-1 md:order-2"}`}>
        <div className="aspect-[4/3] w-full relative overflow-hidden group/img cursor-pointer">
          {projectImgSrc ? (
            <Image
              src={projectImgSrc}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover group-hover/img:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
              <span className="text-xs font-mono text-neutral-400">{project.title}</span>
            </div>
          )}
        </div>
      </div>

      {/* Headline & Description Column: Beside the image, clean neutral text, no blue hover */}
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

          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
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
        <div className="flex items-center gap-3 pt-4 mt-2 border-t border-neutral-200/60 dark:border-neutral-800/60">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
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
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                All Projects ({projectsData.length})
              </button>
              <button
                onClick={() => setActiveTab("featured")}
                className={`text-xs px-3.5 py-1 rounded-full transition-colors cursor-pointer ${
                  activeTab === "featured"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                Featured
              </button>
            </div>
          </div>
        </div>

        {/* Projects List: Alternating Side-by-Side Layout */}
        <div className="flex flex-col gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectItemRow
              key={project.id}
              project={project}
              index={index}
              onOpenShowcase={handleOpenShowcase}
            />
          ))}
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
