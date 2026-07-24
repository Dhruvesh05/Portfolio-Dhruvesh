"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  clientProjects,
  groupProjects,
  internshipProjects,
} from "../portfolioData";
import ProjectCard from "./ProjectCard";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

// ─── Merge all projects with category label ───────────────────────────────────
const allProjects = [
  ...internshipProjects.map((p) => ({ ...p, _category: "Internship" })),
  ...clientProjects.map((p) => ({ ...p, _category: "Client" })),
  ...groupProjects.map((p) => ({ ...p, _category: "Group" })),
];

// ─── Main section ─────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!mounted) return null; // Avoid SSR/hydration mismatch

  if (isMobile) return <MobileFallback />;

  return <DesktopSection />;
}

// ─── Desktop: sticky horizontal scroll section ────────────────────────────────
function DesktopSection() {
  const { wrapperRef, trackRef, x } = useHorizontalScroll();

  return (
    /**
     * OUTER WRAPPER
     * Height is set dynamically in useHorizontalScroll to:
     * horizontalScrollDistance + window.innerHeight
     * This gives the browser real scroll room while the inner sticky
     * container stays pinned at 100vh.
     */
    <div ref={wrapperRef} className="relative w-full" aria-label="Projects section">

      {/* STICKY CONTAINER — pinned to viewport while user scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden bg-transparent">

        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="relative z-10 flex items-center justify-between px-8 pt-10 pb-6 md:px-14 md:pt-14">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] opacity-50 mb-2">
              Featured Work
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2.5 rounded-full border border-black/20 dark:border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
          >
            All Projects
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* ── Horizontal track ───────────────────────────────────────── */}
        <div className="relative z-10 flex items-center h-[calc(100vh-130px)] bg-transparent">
          {/* Left padding spacer */}
          <div className="flex-shrink-0 w-8 md:w-14" />

          {/* The translating track */}
          <motion.div
            ref={trackRef}
            className="flex gap-5 md:gap-6 lg:gap-7 items-center will-change-transform"
            style={{ x }}
            aria-label="Project cards"
          >
            {allProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                category={project._category}
              />
            ))}

            {/* End CTA */}
            <div className="flex-shrink-0 w-40 flex flex-col items-center justify-center gap-4">
              <Link
                href="/projects"
                className="group flex h-16 w-16 items-center justify-center rounded-full border border-black/20 dark:border-white/20 transition-all duration-300 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
                aria-label="View all projects"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] opacity-50 text-center">
                View All
              </span>
            </div>

            {/* Right padding spacer */}
            <div className="flex-shrink-0 w-8 md:w-14" />
          </motion.div>
        </div>

        {/* ── Scroll hint ─────────────────────────────────────────────── */}
        <ScrollHint />

        {/* ── Edge fades ─────────────────────────────────────────────── */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-8 bg-gradient-to-r from-transparent to-transparent md:w-14" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-8 bg-gradient-to-l from-transparent to-transparent md:w-14" />
      </div>
    </div>
  );
}

// ─── Scroll hint pill ─────────────────────────────────────────────────────────
function ScrollHint() {
  return (
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/40 backdrop-blur-sm px-4 py-2 pointer-events-none select-none">
      <svg
        className="h-3.5 w-3.5 opacity-60 animate-bounce-x"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l7 7-7 7" />
      </svg>
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] opacity-60">
        Scroll to explore
      </span>
    </div>
  );
}

// ─── Mobile fallback — plain vertical list ────────────────────────────────────
function MobileFallback() {
  return (
    <section className="px-4 py-16 bg-transparent dark:bg-transparent">
      <div className="mb-10">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] opacity-50 mb-2">
          Featured Work
        </p>
        <h2 className="text-4xl font-black tracking-tight">Projects</h2>
      </div>
      <div className="flex flex-col gap-6">
        {allProjects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            category={project._category}
          />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 border border-white hover:bg-white hover:text-black transition text-sm font-semibold rounded-xl"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}