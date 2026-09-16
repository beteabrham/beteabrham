"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse / trackpad)
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    let hasMoved = false;

    const handlePointerMove = (e: PointerEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!hasMoved) {
        hasMoved = true;
        currentPos.current = { x: e.clientX, y: e.clientY };
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      if (hasMoved) {
        setIsVisible(true);
      }
    };

    // Smooth organic trailing animation loop (120fps / 60fps hardware accelerated)
    const animate = () => {
      const ease = 0.15;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-30 transition-opacity duration-700 will-change-transform ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: "680px",
        height: "680px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(59, 130, 246, 0.045) 0%, rgba(37, 99, 235, 0.025) 35%, rgba(30, 58, 138, 0.008) 60%, transparent 80%)",
        filter: "blur(80px)",
      }}
    />
  );
}
