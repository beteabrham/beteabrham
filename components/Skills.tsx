"use client";

import React from "react";
import { servicesData } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="services"
      className="px-4 py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-lg md:text-xl font-normal tracking-tight text-neutral-950 dark:text-neutral-50">
            Services &amp; Capabilities
          </h2>
        </div>

        {/* 4-Column Grid - Arturo Spatino Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 bg-white dark:bg-neutral-900/40 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 min-h-[340px] shadow-xs"
            >
              {/* Top Row: Index */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                  {service.number}
                </span>
              </div>

              {/* Main Text Content */}
              <div className="my-auto pt-6 pb-4">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-2 mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Skill Tags */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {service.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
