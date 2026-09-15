"use client";

import React, { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Copy, Check } from "lucide-react";

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function SocialIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "github":
      return <GithubIcon className={className} />;
    case "email":
      return <MailIcon className={className} />;
    default:
      return <MailIcon className={className} />;
  }
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="px-4 pt-16 md:pt-24 pb-16 border-t border-neutral-200/80 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/30"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Editorial Headline */}
        <div className="space-y-4">
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Initiate Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.08] tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-2.5px] text-neutral-900 dark:text-white max-w-2xl">
            Connect, collaborate, <br className="hidden sm:inline" />
            <span className="text-neutral-400 dark:text-neutral-500">or just say hello.</span>
          </h2>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white underline underline-offset-8 transition-colors"
            >
              {personalInfo.email}
            </a>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors cursor-pointer shadow-2xs golden-shimmer-btn"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2-Column Details: Social Links & Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <h3 className="text-base font-semibold text-neutral-900 dark:text-white tracking-tight mb-2">
              Social Profiles &amp; Network
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
              Feel free to connect or follow my work across platforms.
            </p>

            {/* Dedicated Brand Icons Row */}
            <div className="flex items-center gap-4 sm:gap-5 pt-1">
              {personalInfo.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="group relative flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-110 transition-all duration-200 shadow-2xs golden-shimmer-container">
                    <SocialIcon
                      name={social.name}
                      className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-6">
            {/* Availability & Location Card */}
            <div className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xs space-y-4 golden-shimmer-container">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-900 dark:text-white">
                  Current Availability
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Open to work
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Available for remote freelance engagements, digital marketing strategy,
                UI/UX design systems, and brand growth campaigns.
              </p>
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Location: {personalInfo.location}</span>
                <span>Timezone: {personalInfo.timezone}</span>
              </div>
            </div>

            {/* Direct Inquiries Note */}
            <div className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/60 shadow-2xs golden-shimmer-container">
              <h4 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-1">
                Direct Inquiries
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Looking to discuss a project or have questions? Email me directly at{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-neutral-900 dark:text-white underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  {personalInfo.email}
                </a>{" "}
                and I will respond promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
