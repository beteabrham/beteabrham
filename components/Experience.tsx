"use client";

import React from "react";
import { personalInfo } from "@/lib/data";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

const getBrandConfig = (issuer: string) => {
  const norm = issuer.toLowerCase();
  if (norm.includes("udemy")) {
    return {
      hoverBorder: "hover:border-[#a435f0]/60 dark:hover:border-[#a435f0]/70",
      hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(164,53,240,0.35)]",
      hoverGradient:
        "bg-[linear-gradient(135deg,rgba(164,53,240,0.18)_0%,rgba(86,36,208,0.22)_50%,rgba(164,53,240,0.14)_100%)] dark:bg-[linear-gradient(135deg,rgba(164,53,240,0.26)_0%,rgba(86,36,208,0.28)_50%,rgba(164,53,240,0.18)_100%)]",
      topAccent: "bg-gradient-to-r from-[#a435f0] via-purple-500 to-[#5624d0]",
      issuerColor: "group-hover:text-[#a435f0] dark:group-hover:text-[#c084fc]",
      verifiedColor: "group-hover:text-[#a435f0] dark:group-hover:text-[#c084fc]",
      skillTagHover:
        "group-hover:bg-[#a435f0]/15 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-hover:border-[#a435f0]/30",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M12 0L2 6v7.5C2 19.3 6.3 24 12 24s10-4.7 10-10.5V6L12 0zm0 17.5c-3.1 0-5.5-2.4-5.5-5.5V8.5h2.5V12c0 1.7 1.3 3 3 3s3-1.3 3-3V8.5h2.5V12c0 3.1-2.4 5.5-5.5 5.5z" />
        </svg>
      ),
    };
  }

  if (norm.includes("google")) {
    return {
      hoverBorder: "hover:border-[#4285F4]/60 dark:hover:border-[#4285F4]/70",
      hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(66,133,244,0.3),0_0_20px_rgba(234,67,53,0.15)]",
      hoverGradient:
        "bg-[linear-gradient(135deg,rgba(66,133,244,0.18)_0%,rgba(234,67,53,0.15)_35%,rgba(251,188,5,0.15)_68%,rgba(52,168,83,0.18)_100%)] dark:bg-[linear-gradient(135deg,rgba(66,133,244,0.26)_0%,rgba(234,67,53,0.22)_35%,rgba(251,188,5,0.20)_68%,rgba(52,168,83,0.26)_100%)]",
      topAccent: "bg-[linear-gradient(to_right,#4285F4_25%,#EA4335_25%_50%,#FBBC05_50%_75%,#34A853_75%)]",
      issuerColor: "group-hover:text-[#4285F4] dark:group-hover:text-[#60a5fa]",
      verifiedColor: "group-hover:text-[#4285F4] dark:group-hover:text-[#60a5fa]",
      skillTagHover:
        "group-hover:bg-[#4285F4]/15 group-hover:text-blue-700 dark:group-hover:text-blue-300 group-hover:border-[#4285F4]/30",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" />
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
        </svg>
      ),
    };
  }

  if (norm.includes("hp")) {
    return {
      hoverBorder: "hover:border-[#0096D6]/60 dark:hover:border-[#0096D6]/70",
      hoverShadow: "hover:shadow-[0_12px_28px_-6px_rgba(0,150,214,0.35)]",
      hoverGradient:
        "bg-[linear-gradient(135deg,rgba(0,150,214,0.18)_0%,rgba(0,125,184,0.22)_50%,rgba(0,150,214,0.14)_100%)] dark:bg-[linear-gradient(135deg,rgba(0,150,214,0.26)_0%,rgba(0,125,184,0.28)_50%,rgba(0,150,214,0.18)_100%)]",
      topAccent: "bg-gradient-to-r from-[#0096D6] via-sky-500 to-[#007DB8]",
      issuerColor: "group-hover:text-[#0096D6] dark:group-hover:text-[#38bdf8]",
      verifiedColor: "group-hover:text-[#0096D6] dark:group-hover:text-[#38bdf8]",
      skillTagHover:
        "group-hover:bg-[#0096D6]/15 group-hover:text-sky-700 dark:group-hover:text-sky-300 group-hover:border-[#0096D6]/30",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#0096D6" />
          <path fill="#ffffff" d="M9.8 17.5l2.4-7.8h1.6l-2.4 7.8H9.8zm3.8-1.5l1.9-6.3h1.6l-1.9 6.3h-1.6zm-5.4 0l1.9-6.3h1.6L9.8 16H8.2z" />
        </svg>
      ),
    };
  }

  return {
    hoverBorder: "hover:border-neutral-300 dark:hover:border-neutral-700",
    hoverShadow: "hover:shadow-md",
    hoverGradient: "bg-neutral-50/70 dark:bg-neutral-900/90",
    topAccent: "bg-neutral-400",
    issuerColor: "group-hover:text-black dark:group-hover:text-white",
    verifiedColor: "group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
    skillTagHover: "group-hover:bg-neutral-200/70 dark:group-hover:bg-neutral-800/80",
    icon: null,
  };
};

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

            {/* Experience list with timeline connecting both roles under the sub-headlines */}
            <div className="relative pl-7">
              <div>
                {personalInfo.experiences.map((exp, idx) => (
                  <div key={idx} className="group">
                    {/* Header: Headline & Sub-headline */}
                    <div className="relative mb-2">
                      {/* Connecting Line segment in Experience 2 (runs through headline & sub-headline down to Dot 2) */}
                      {idx === 1 && (
                        <div className="absolute -left-7 top-0 bottom-0 w-4 flex justify-center pointer-events-none">
                          <span className="w-0.5 h-full bg-neutral-200 dark:bg-neutral-800 rounded-b-full transition-colors" />
                        </div>
                      )}

                      {/* Headline: Role & Period */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                        <h3 className="text-base font-semibold text-neutral-950 dark:text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Sub-headline: Company, Type, Location */}
                      <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300 font-medium">
                        <span className="text-neutral-900 dark:text-neutral-100">{exp.company}</span>
                        <span>·</span>
                        <span className="text-neutral-400">{exp.type}</span>
                        <span>·</span>
                        <span className="text-neutral-400 flex items-center gap-0.5">
                          <MapPin className="w-2.5 h-2.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Content under the sub-headline (holds Dot and connects to next experience) */}
                    <div className={`relative pt-1 ${idx === 0 ? "pb-8 md:pb-10" : ""}`}>
                      {/* Timeline Dot & Connecting Line */}
                      <div className="absolute -left-7 top-0 bottom-0 w-4 flex flex-col items-center pointer-events-none">
                        {/* Dot container under the sub-headline with separate hover indicator animation */}
                        <div className="relative flex items-center justify-center h-4 mt-0.5">
                          {/* Animated radar ripple on hover */}
                          <span className="absolute w-4 h-4 rounded-full bg-neutral-900/20 dark:bg-white/30 scale-0 group-hover:scale-125 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          {/* Concentric focus halo ring on hover */}
                          <span className="absolute w-3.5 h-3.5 rounded-full border border-neutral-400 dark:border-neutral-500 scale-0 group-hover:scale-100 transition-all duration-300" />
                          {/* Core indicator dot */}
                          <span className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-neutral-950 dark:group-hover:bg-white group-hover:scale-125 transition-all duration-300 shrink-0 shadow-xs" />
                        </div>

                        {/* Connecting line below Dot 1 (only on Experience 1, spans through the gap) */}
                        {idx === 0 && (
                          <span className="w-0.5 flex-1 bg-neutral-200 dark:bg-neutral-800 rounded-t-full mt-2 transition-colors" />
                        )}
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
                  </div>
                ))}
              </div>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {personalInfo.certifications.map((cert, cIdx) => {
                const brand = getBrandConfig(cert.issuer);
                return (
                  <a
                    key={cIdx}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.title} issued by ${cert.issuer} (opens in a new tab)`}
                    className={`group relative p-4 rounded-xl bg-white dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between shadow-2xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 cursor-pointer text-left block overflow-hidden golden-shimmer-container ${brand.hoverBorder} ${brand.hoverShadow}`}
                  >
                    {/* Top Accent Strip (Animated on hover) */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 ${brand.topAccent}`}
                    />

                    {/* Brand Hover Gradient Layer (Smoothly transitions container color on hover) */}
                    <div
                      className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 ${brand.hoverGradient}`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5 font-mono">
                        <div className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-neutral-100 transition-colors">
                          {brand.icon}
                          <span className={`transition-colors ${brand.issuerColor}`}>
                            {cert.issuer}
                          </span>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400 transition-colors ${brand.verifiedColor}`}
                        >
                          <span>Verified</span>
                          <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                      <h5 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white leading-snug transition-colors">
                        {cert.title}
                      </h5>
                      <p className="text-[11px] text-neutral-400 mt-1">{cert.date}</p>
                      {cert.credentialId && (
                        <p className="text-[10px] font-mono text-neutral-500 mt-0.5 truncate">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-1 mt-3 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                      {cert.skills.map((skill, skIdx) => (
                        <span
                          key={skIdx}
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-500 transition-all duration-200 border border-transparent ${brand.skillTagHover}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
