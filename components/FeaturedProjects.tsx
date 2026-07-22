"use client";

/**
 * FeaturedProjects — Scroll-pinned horizontal project showcase.
 *
 * SCROLL MECHANIC
 * ───────────────
 * The outer wrapper is given extra height in JS so the browser has real scroll
 * room.  The inner container is sticky: top 0; height 100vh — it pins while the
 * browser scrolls through that extra height.
 *
 * useScroll maps wrapper progress to rawX (0 → -distance pixels).
 * useSpring adds a soft lag so movement feels silky, not mechanical.
 *
 * COLOR SCHEME (INTENTIONALLY INVERTED)
 * ──────────────────────────────────────
 * Light mode → black background, white text (stands out from the rest of page)
 * Dark  mode → white background, black text (same inversion logic)
 */

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import {
  clientProjects,
  groupProjects,
  internshipProjects,
} from "./portfolioData";

// ─── Project data ─────────────────────────────────────────────────────────────
const allProjects = [
  ...internshipProjects.map((p) => ({ ...p, _category: "Internship" })),
  ...clientProjects.map((p) => ({ ...p, _category: "Client" })),
  ...groupProjects.map((p) => ({ ...p, _category: "Group" })),
];

// ─── Main export ──────────────────────────────────────────────────────────────
export default function FeaturedProjects() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!mounted) return null;
  if (isMobile) return <MobileFallback />;
  return <DesktopSection />;
}

// ─── Desktop: sticky scroll-pinned section ────────────────────────────────────
function DesktopSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const distanceRef = useRef(0);

  /**
   * rawX: the "target" horizontal pixel position updated every scroll frame.
   * x:    a spring that chases rawX — gives the soft, velvety smoothness.
   *
   * Spring config:
   *   stiffness 55  — gentle spring constant (lower = slower response)
   *   damping   20  — enough to prevent oscillation
   *   mass      1.4 — heavier mass = more inertia = silkier glide
   */
  const rawX = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 55, damping: 20, mass: 1.4 });

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress [0,1] → rawX [0, -distance]
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const clamped = Math.max(0, Math.min(1, progress));
    rawX.set(-clamped * distanceRef.current);
  });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!wrapper || !track) return;

    const updateSizes = () => {
      const distance = Math.max(0, track.scrollWidth - window.innerWidth);
      distanceRef.current = distance;
      wrapper.style.height = `${distance + window.innerHeight}px`;
    };

    const ro = new ResizeObserver(updateSizes);
    ro.observe(track);
    ro.observe(document.body);
    updateSizes();
    return () => ro.disconnect();
  }, []);

  return (
    // ── OUTER WRAPPER: height drives scroll budget ────────────────────────────
    <div ref={wrapperRef} id="projects" className="relative">

      {/*
        STICKY CONTAINER
        Inverted color scheme: bg-black text-white in light mode,
        bg-white text-black in dark mode — makes this section pop against
        the rest of the page.
      */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black text-white dark:bg-white dark:text-black flex flex-col">

        {/* Navbar spacer */}
        <div className="h-16 md:h-20 flex-shrink-0" />

        {/* ── CENTERED TITLE (static) ──────────────────────────────────────── */}
        <div className="flex-shrink-0 flex flex-col items-center text-center py-5 md:py-7 px-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] opacity-40 mb-2">
            Featured Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
        </div>

        {/* ── TRACK CONTAINER ──────────────────────────────────────────────── */}
        <div className="flex-1 relative overflow-visible">
          <motion.div
            ref={trackRef}
            className="absolute top-0 left-0 h-full flex items-center gap-10 md:gap-14 pl-[42vw] pr-[30vw] will-change-transform"
            style={{ x }}
          >
            {allProjects.map((project, i) => (
              <FeaturedCard
                key={project.slug}
                project={project}
                index={i}
                category={project._category}
              />
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM ROW: View All button + scroll hint ────────────────────── */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3 pb-6 pointer-events-none select-none">
          {/* View All Projects button — pointer-events re-enabled */}
          <div className="pointer-events-auto">
            <Link
              href="/projects"
              className="inline-block px-6 py-2.5 rounded-xl border border-white/25 dark:border-black/25 text-sm font-semibold text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300"
            >
              View All Projects →
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="flex items-center gap-2 opacity-35">
            <svg
              className="h-3.5 w-3.5 animate-bounce-x"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l7 7-7 7" />
            </svg>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em]">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
interface FeaturedCardProps {
  project: {
    slug: string;
    title: string;
    org: string;
    image: string;
    features?: string[];
  };
  index: number;
  category: string;
}

function FeaturedCard({ project, index, category }: FeaturedCardProps) {
  return (
    <Link
      href="/projects"
      className={[
        "group relative flex-shrink-0",
        "w-[78vw] sm:w-[56vw] md:w-[44vw] lg:w-[38vw] xl:w-[32vw]",
        "overflow-hidden rounded-2xl select-none",
        // Inverted: dark card on dark bg (light mode), light card on light bg (dark mode)
        "bg-neutral-800 dark:bg-neutral-100",
        "border border-white/15 dark:border-black/15",
        // Text colours match inverted theme
        "text-white dark:text-black",
        "shadow-md hover:shadow-2xl transition-all duration-500",
      ].join(" ")}
      draggable={false}
    >
      {/* ── Image ───────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* Category badge */}
        <span className="absolute top-4 left-4 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
          {category}
        </span>

        {/* Index watermark */}
        <span className="absolute bottom-3 right-4 text-[2.8rem] font-black text-white/12 leading-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* ── Content row ─────────────────────────────────────────────────── */}
      <div className="flex items-start justify-between gap-3 px-5 py-4">
        <div className="flex-1 min-w-0">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] opacity-50 mb-1">
            {project.org}
          </p>
          <h3 className="text-sm font-bold leading-snug line-clamp-2 sm:text-base">
            {project.title}
          </h3>
        </div>

        {/* Arrow — inverted: white border/text in light, black in dark */}
        <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 dark:border-black/20 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white dark:group-hover:bg-black dark:group-hover:text-white dark:group-hover:border-black mt-0.5">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

// ─── Mobile fallback ──────────────────────────────────────────────────────────
function MobileFallback() {
  return (
    <section id="projects" className="py-16 px-4 bg-black text-white dark:bg-white dark:text-black">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <Link
          href="/projects"
          className="inline-block px-6 py-2.5 rounded-xl border border-white/25 dark:border-black/25 text-sm font-semibold text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300"
        >
          View All Projects →
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        {allProjects.map((project, i) => (
          <FeaturedCard
            key={project.slug}
            project={project}
            index={i}
            category={project._category}
          />
        ))}
      </div>
    </section>
  );
}
