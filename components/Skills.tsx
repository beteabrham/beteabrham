"use client";

import React, { useState } from "react";
import { servicesData } from "@/lib/data";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { ArrowUpRight } from "lucide-react";

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  const handleOpenService = (id: string) => {
    setSelectedServiceId(id);
    setIsModalOpen(true);
  };

  return (
    <section
      id="services"
      className="px-4 py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-lg md:text-xl font-normal tracking-tight text-neutral-950 dark:text-neutral-50">
              Services &amp; Capabilities
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Select any capability to open its comprehensive horizontal detail view
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline-block">
            4 Core Offerings
          </span>
        </div>

        {/* 4-Column Grid - Frameless Glowing Containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenService(service.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenService(service.id);
                }
              }}
              aria-label={`View full details for ${service.title}`}
              className="group flex flex-col justify-between rounded-xl p-6 bg-white dark:bg-neutral-900/70 hover:bg-neutral-50 dark:hover:bg-neutral-900/90 transition-all duration-300 min-h-[340px] shadow-xs cursor-pointer hover:-translate-y-1 hover:shadow-lg active:translate-y-0 golden-shimmer-container"
            >
              {/* Top Row: Interactive Detail Pill */}
              <div className="flex items-center justify-end">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {/* Main Text Content */}
              <div className="my-auto pt-5 pb-4">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-white tracking-tight group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-2 mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-4">
                  {service.description}
                </p>
              </div>

              {/* Bottom Skill Tags */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {service.skills.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {service.skills.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-neutral-100/60 dark:bg-neutral-800/40 text-neutral-400">
                      +{service.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dedicated Horizontal Pop-up Detail Modal */}
      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </section>
  );
}
