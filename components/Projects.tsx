"use client";

import React, { useState } from "react";
import { projectsData, explorationsData } from "@/lib/data";
import { ExternalLink, Sparkles, Laptop } from "lucide-react";

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

  const displayedProjects =
    activeTab === "featured"
      ? projectsData.filter((p) => p.featured)
      : projectsData;

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
              A selection of work across digital marketing campaigns, search
              engine optimization (SEO/SEM), visual identity systems, and UI/UX designs.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${activeTab === "all"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                  }`}
              >
                All Projects ({projectsData.length})
              </button>
              <button
                onClick={() => setActiveTab("featured")}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${activeTab === "featured"
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                  }`}
              >
                Featured
              </button>
            </div>
          </div>
        </div>

        {/* Selected Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between border border-neutral-200/90 dark:border-neutral-800 rounded-xl p-4 bg-white dark:bg-neutral-900/40 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-xs"
            >
              {/* Project Visual Preview Container */}
              <div className="aspect-[4/3] rounded-lg bg-neutral-100 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/80 overflow-hidden relative mb-4 p-4 flex flex-col justify-between group-hover:shadow-xs transition-shadow">
                {/* Subtle Mockup Header */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 border-b border-neutral-200/50 dark:border-neutral-800 pb-2">
                  <span className="truncate max-w-[140px]">{project.title.toLowerCase()}.app</span>
                </div>

                {/* Central Visual Presentation */}
                <div className="my-auto py-3 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-xs group-hover:scale-110 transition-transform duration-300 mb-2">
                    <Laptop className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <h4 className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {project.category}
                  </h4>
                </div>

                {/* Stack Tags */}
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

              {/* Title & Metadata */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {project.category.split(" ")[0]}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-3 pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-neutral-800 hover:text-black dark:text-neutral-200 dark:hover:text-white transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3 h-3" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Explorations Card: 4-Grid Laboratory (Exact Arturo Spatino Feature) */}
          <div className="border border-neutral-200/90 dark:border-neutral-800 rounded-xl p-4 bg-white dark:bg-neutral-900/40 flex flex-col justify-between shadow-xs">
            {/* 4 Mini Buttons Grid */}
            <div className="aspect-[4/3] rounded-lg bg-neutral-100 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/80 p-2 grid grid-cols-2 gap-2 mb-4">
              {explorationsData.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-2.5 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-pointer group/tile"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-400">0{idx + 1}</span>
                    <Sparkles className="w-2.5 h-2.5 text-neutral-400 group-hover/tile:text-amber-500 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-neutral-800 dark:text-neutral-200 truncate">
                      {exp.title}
                    </p>
                    <p className="text-[9px] text-neutral-400">{exp.type}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Explorations Label & Description */}
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white tracking-tight">
                  Explorations &amp; Lab
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                  Creative studies in visual ad design, social media marketing,
                  UI prototypes, and search engine optimization experiments.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                <span className="text-xs font-medium text-neutral-400">
                  Continuously updated with new case studies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
