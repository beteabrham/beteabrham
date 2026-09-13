"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo, navItems } from "@/lib/data";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Header - Arturo Spatino Style */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09090b]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-xs"
            : "bg-transparent border-b border-neutral-900"
        } px-4 py-3.5 md:py-4`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#hero"
            className="group flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2"
          >
            <span className="text-sm md:text-base font-medium tracking-tight text-neutral-100">
              {personalInfo.brandName}
            </span>
            <span className="text-xs text-neutral-500 font-normal">
              — {personalInfo.location}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav aria-label="Main navigation" className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="h-4 w-px bg-neutral-800" />

            {/* Let's Talk CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 transition-all shadow-xs"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="p-2 rounded-md text-neutral-300 hover:bg-neutral-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-[#09090b] mt-3 pt-3 pb-4 px-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-neutral-300 hover:text-white px-2 py-1.5 rounded-md hover:bg-neutral-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-neutral-800">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-medium py-2 rounded-lg bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
