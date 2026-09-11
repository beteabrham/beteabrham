"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-4 py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {/* Left Sticky Label (Arturo Spatino Design Signature) */}
        <div>
          <div className="md:sticky md:self-start md:top-24 space-y-2">
            <p className="text-lg md:text-xl font-normal tracking-tight text-neutral-950 dark:text-neutral-50">
              Career &amp; Credentials
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
              Professional journey across digital marketing management, creative UI
              design, and verified industry certifications.
            </p>
          </div>
        </div>

        {/* Right Column: Work Experience, Education, and Certifications */}
        <div className="flex flex-col space-y-12">
          {/* Section 1: Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
              <span>Experience</span>
            </div>

            <div className="space-y-8">
              {personalInfo.experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="group relative pl-6 border-l border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold text-neutral-950 dark:text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300 font-medium mb-3">
                    <span className="text-neutral-900 dark:text-neutral-100">{exp.company}</span>
                    <span>·</span>
                    <span className="text-neutral-400">{exp.type}</span>
                    <span>·</span>
                    <span className="text-neutral-400 flex items-center gap-0.5">
                      <MapPin className="w-2.5 h-2.5" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed list-disc list-inside"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Education */}
          <div className="space-y-4 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-neutral-500" />
              <span>Education</span>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {personalInfo.educationDetails.institution}
                </h4>
                <span className="text-xs font-mono text-neutral-500">
                  {personalInfo.educationDetails.period}
                </span>
              </div>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 mt-1 font-medium">
                {personalInfo.educationDetails.degree}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                {personalInfo.educationDetails.field} · {personalInfo.educationDetails.location}
              </p>
            </div>
          </div>

          {/* Section 3: Verified Licenses & Certifications */}
          <div className="space-y-4 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Verified Licenses &amp; Certifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInfo.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-1 font-mono">
                      <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {cert.issuer}
                      </span>
                      <span>Verified</span>
                    </div>
                    <h5 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 leading-snug">
                      {cert.title}
                    </h5>
                    <p className="text-[11px] text-neutral-400 mt-1">{cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-[10px] font-mono text-neutral-500 mt-0.5 truncate">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    {cert.skills.map((skill, skIdx) => (
                      <span
                        key={skIdx}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
