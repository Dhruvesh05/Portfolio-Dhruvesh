"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import {
  clientProjects,
  groupProjects,
  internshipProjects,
  projectEntries,
} from "./portfolioData";
import ProjectCard from "./Projects/ProjectCard";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/registry/magicui/dock";

// ─────────────────────────────────────────────────────────────────────────────
// HERO VIDEO BACKGROUND — Lazy loaded, plays only when in view
// ─────────────────────────────────────────────────────────────────────────────
function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play continuously when the hero section is in the viewport
            video.play().catch((err) => console.log("Video autoplay prevented:", err));
          } else {
            // Pause when scrolled out of view to save resources (lazy effect)
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/hero.webm"
      loop
      muted
      playsInline
      preload="metadata"
      // Natural and original colors of the video
      className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PREMIUM TILTED BACKGROUND — used ONLY behind the Featured Projects section.
// Content stays perfectly straight; only these background layers are rotated.
// ─────────────────────────────────────────────────────────────────────────────
function FeaturedProjectsTiltedBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background: "linear-gradient(112deg, #000000 0%, #1a0800 20%, #4a1200 45%, #8b2500 70%, #c94010 85%, #e8621a 100%)",
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL DOCK — shared dock used in both the Hero and Contact sections
// ─────────────────────────────────────────────────────────────────────────────
type IconProps = React.HTMLAttributes<SVGElement>;

const SocialIcons = {
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" fill="currentColor" {...props}>
      <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  leetcode: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  email: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  ),
};

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/Dhruvesh05",
    icon: SocialIcons.github,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dhruvesh-patil-a31917280/",
    icon: SocialIcons.linkedin,
    external: true,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/Dhruvesh_Kashinath_Patil/",
    icon: SocialIcons.leetcode,
    external: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/dhruvesh810220",
    icon: SocialIcons.instagram,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:dhruveshpatil7777@gmail.com",
    icon: SocialIcons.email,
    external: false,
  },
];

function SocialDock() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {SOCIAL_LINKS.map((item) => (
          <DockIcon key={item.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.name}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED PROJECTS CAROUSEL — premium sticky horizontal scroll
// Vertical scroll → horizontal movement via framer-motion spring.
// Mobile (<768px) degrades to a simple vertical list.
// ─────────────────────────────────────────────────────────────────────────────

/** px width of each card at various breakpoints (keep in sync with Tailwind classes below) */
const CARD_W = { sm: 280, md: 320, lg: 340 };
/** gap between cards in px */
const CARD_GAP = 32;

function FeaturedProjectsCarousel() {
  const allFeaturedProjects = [
    ...internshipProjects.map((p) => ({ ...p, _category: "Internship" })),
    ...clientProjects.map((p) => ({ ...p, _category: "Client" })),
    ...groupProjects.map((p) => ({ ...p, _category: "Group" })),
  ];
  const N = allFeaturedProjects.length;

  // Budget container ref — scroll progress is measured from this element
  const budgetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Track scroll state mapping cleanly via framer-motion
  const { scrollYProgress } = useScroll({
    target: budgetRef,
    // Maps progress 0->1 exactly while the element is pinned in viewport
    offset: ["start start", "end end"]
  });

  const [range, setRange] = useState({ minX: 0, maxX: 0 });

  // Update layout calculations on resize/mount
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 768) {
        const vw = window.innerWidth;
        const cardW = vw >= 1024 ? CARD_W.lg : vw >= 768 ? CARD_W.md : CARD_W.sm;
        const maxX = vw / 2 - cardW / 2;
        const minX = vw / 2 - cardW / 2 - (N - 1) * (cardW + CARD_GAP);
        setRange({ minX, maxX });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [N]);

  // Framer Motion transforms the 0->1 scroll directly into pixel mapping instantly
  const rawX = useTransform(scrollYProgress, [0, 1], [range.maxX, range.minX]);

  // Snappier spring configuration to stop "floating" after scroll stops
  const springX = useSpring(rawX, { stiffness: 300, damping: 30, mass: 0.5 });

  // ── depth effect ──────────────────────────────────────────────────────────
  const [centerIdx, setCenterIdx] = useState(0);

  // Efficiently update depth index using Framer Motion's event hook
  useMotionValueEvent(springX, "change", (xVal) => {
    if (window.innerWidth < 768) return;
    const vw = window.innerWidth;
    const cardW = vw >= 1024 ? CARD_W.lg : vw >= 768 ? CARD_W.md : CARD_W.sm;
    const center = vw / 2;
    const idx = allFeaturedProjects.reduce((best, _, i) => {
      const cc = xVal + i * (cardW + CARD_GAP) + cardW / 2;
      const db = Math.abs(xVal + best * (cardW + CARD_GAP) + cardW / 2 - center);
      return Math.abs(cc - center) < db ? i : best;
    }, 0);
    setCenterIdx(idx);
  });

  return (
    <div ref={budgetRef} className="relative w-full h-auto md:h-[400vh]">
      {/* ── DESKTOP STICKY VIEW ── */}
      <div className="hidden md:flex flex-col justify-center sticky top-0 h-screen w-full overflow-hidden pointer-events-none">

        {/* Tilted Gradient Ribbon */}
        <div
          className="absolute top-[5%] bottom-[5%] lg:top-[8%] lg:bottom-[8%] left-0 right-0 pointer-events-none z-0"
          style={{
            transform: "skewY(-3deg)",
            scale: "1.05",
            background: "linear-gradient(112deg, #000000 0%, #1a0800 20%, #4a1200 45%, #8b2500 70%, #c94010 85%, #e8621a 100%)"
          }}
        />

        <div className="pointer-events-auto relative z-10 flex flex-col items-center">
          {/* Header - Centered */}
          <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-12 px-4 md:px-12 w-full max-w-7xl mx-auto">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/60 mb-2">
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Featured Projects
              </h2>
            </div>
          </div>

          {/* Track */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x: springX, willChange: "transform" }}
              className="flex gap-7 lg:gap-8 items-center px-4 md:px-12 w-max"
            >
              {allFeaturedProjects.map((project, i) => {
                const dist = Math.abs(i - centerIdx);
                const scale = dist === 0 ? 1 : dist === 1 ? 0.98 : 0.95;
                const opacity = dist === 0 ? 1 : dist === 1 ? 0.8 : 0.6;
                return (
                  <motion.div
                    key={project.slug}
                    animate={{ scale, opacity }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    // White background classes
                    className="shrink-0 w-[280px] md:w-[320px] lg:w-[340px] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <ProjectCard project={project} index={i} category={project._category} />
                  </motion.div>
                );
              })}
              {/* End CTA Card */}
              <div className="shrink-0 w-40 flex flex-col items-center justify-center gap-4">
                <Link
                  href="/projects"
                  className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/25 transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                  aria-label="View all projects"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] opacity-50 text-white text-center">
                  View All
                </span>
              </div>
            </motion.div>
          </div>

          {/* Button Below Carousel */}
          <div className="flex justify-center mt-8 md:mt-12 w-full px-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
            >
              All Projects
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile: vertical list */}
      <div
        className="md:hidden flex flex-col gap-6 px-4 py-20 relative z-10 w-full overflow-hidden"
        aria-label="Featured project cards"
      >
        {/* Tilted Gradient for Mobile */}
        <div
          className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0"
          style={{
            transform: "skewY(-3deg)",
            scale: "1.05",
            background: "linear-gradient(112deg, #000000 0%, #1a0800 20%, #4a1200 45%, #8b2500 70%, #c94010 85%, #e8621a 100%)"
          }}
        />
        <div className="relative z-10">
          {/* Header - Centered for Mobile */}
          <div className="mb-8 text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/60 mb-2">
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {allFeaturedProjects.map((project, i) => (
              <div
                key={project.slug}
                className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5"
              >
                <ProjectCard project={project} index={i} category={project._category} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
            >
              All Projects →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroNeumorphicWaves() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl md:rounded-3xl"
      aria-hidden="true"
    >
      {/* Base neumorphic surface tint - Transparent */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Blob 1 */}
      <div className="neu-blob neu-blob-1 absolute rounded-[45%] bg-neutral-50 dark:bg-neutral-900 shadow-[20px_20px_60px_#d9d9d9,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#000000,-20px_-20px_60px_#141414] blur-2xl" />

      {/* Blob 2 */}
      <div className="neu-blob neu-blob-2 absolute rounded-[40%] bg-neutral-100 dark:bg-neutral-800 shadow-[25px_25px_70px_#d4d4d4,-25px_-25px_70px_#ffffff] dark:shadow-[25px_25px_70px_#000000,-25px_-25px_70px_#1a1a1a] blur-3xl" />

      {/* Blob 3 */}
      <div className="neu-blob neu-blob-3 absolute rounded-[50%] bg-white dark:bg-neutral-950 shadow-[18px_18px_50px_#e2e2e2,-18px_-18px_50px_#ffffff] dark:shadow-[18px_18px_50px_#000000,-18px_-18px_50px_#101010] blur-2xl" />

      {/* Blob 4 */}
      <div className="neu-blob neu-blob-4 absolute rounded-[42%] bg-neutral-50 dark:bg-neutral-900 shadow-[22px_22px_65px_#d9d9d9,-22px_-22px_65px_#ffffff] dark:shadow-[22px_22px_65px_#000000,-22px_-22px_65px_#161616] blur-3xl" />

      {/* Blob 5 - subtle extra layer for depth */}
      <div className="neu-blob neu-blob-5 absolute rounded-[48%] bg-neutral-100 dark:bg-neutral-800 shadow-[15px_15px_45px_#e0e0e0,-15px_-15px_45px_#ffffff] dark:shadow-[15px_15px_45px_#000000,-15px_-15px_45px_#181818] blur-2xl" />

      <style jsx>{`
        .neu-blob {
          will-change: transform;
        }
        .neu-blob-1 {
          width: 55%;
          height: 55%;
          top: -10%;
          left: -8%;
          animation: waveFloat1 14s ease-in-out infinite;
        }
        .neu-blob-2 {
          width: 45%;
          height: 45%;
          bottom: -12%;
          right: -6%;
          animation: waveFloat2 18s ease-in-out infinite;
        }
        .neu-blob-3 {
          width: 38%;
          height: 38%;
          top: 30%;
          right: 10%;
          animation: waveFloat3 16s ease-in-out infinite;
        }
        .neu-blob-4 {
          width: 42%;
          height: 42%;
          bottom: 5%;
          left: 5%;
          animation: waveFloat4 20s ease-in-out infinite;
        }
        .neu-blob-5 {
          width: 30%;
          height: 30%;
          top: 8%;
          left: 40%;
          animation: waveFloat5 22s ease-in-out infinite;
        }

        @keyframes waveFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(4%, 6%) scale(1.08) rotate(8deg); }
          50% { transform: translate(8%, -3%) scale(0.96) rotate(-5deg); }
          75% { transform: translate(-3%, 4%) scale(1.04) rotate(4deg); }
        }
        @keyframes waveFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(-5%, -4%) scale(1.06) rotate(-6deg); }
          50% { transform: translate(-8%, 5%) scale(0.94) rotate(5deg); }
          75% { transform: translate(3%, -5%) scale(1.05) rotate(-4deg); }
        }
        @keyframes waveFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-6%, 5%) scale(1.1) rotate(10deg); }
          66% { transform: translate(5%, -6%) scale(0.9) rotate(-8deg); }
        }
        @keyframes waveFloat4 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(6%, -5%) scale(0.92) rotate(-7deg); }
          66% { transform: translate(-4%, 6%) scale(1.08) rotate(6deg); }
        }
        @keyframes waveFloat5 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(-7%, 7%) scale(1.12) rotate(12deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .neu-blob {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fullName = "Dhruvesh Patil";
    let timeoutId: ReturnType<typeof globalThis.setTimeout>;
    let isMounted = true;

    const typeText = (index: number, isDeleting: boolean) => {
      if (!isMounted) return;

      const nextText = isDeleting
        ? fullName.slice(0, Math.max(0, index - 1))
        : fullName.slice(0, index + 1);

      setTypedName(nextText);

      const hasFinishedTyping = !isDeleting && nextText.length === fullName.length;
      const hasFinishedDeleting = isDeleting && nextText.length === 0;
      const nextDelay = hasFinishedTyping ? 1400 : 90;
      const nextIndex = hasFinishedTyping
        ? index
        : hasFinishedDeleting
          ? 0
          : isDeleting
            ? index - 1
            : index + 1;
      const nextDeleting = hasFinishedTyping ? true : hasFinishedDeleting ? false : isDeleting;

      timeoutId = globalThis.setTimeout(() => typeText(nextIndex, nextDeleting), nextDelay);
    };

    timeoutId = globalThis.setTimeout(() => typeText(0, false), 350);

    return () => {
      isMounted = false;
      globalThis.clearTimeout(timeoutId);
    };
  }, []);

  // Calculate scale based on scroll (starts at 1, zooms out to 0.5)
  const scale = Math.max(0.9, 1 - scrollY / 1000);
  const portfolioStats = [
    {
      label: "Projects Built",
      value: String(projectEntries.length),
      detail: "Across internships, clients, and group work",
    },
    {
      label: "Technologies",
      value: "20+",
      detail: "Languages, frameworks, and tools across the portfolio",
    },
    {
      label: "GitHub Commits",
      value: "19",
      detail: "Commits tracked in this workspace",
    },
    {
      label: "Lines of Code",
      value: "2,460",
      detail: "Approximate source lines in the repo",
    },
  ];

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white relative">

      {/* ================= HERO ================= */}
      {/* Changed `fixed` back to `relative w-full h-screen` for standard scrolling! */}
      <section className="relative w-full h-screen flex items-center justify-center text-center px-3 sm:px-4 md:px-6 z-0 overflow-hidden pt-16 md:pt-24">

        {/* Neumorphic animated wave background */}
        <HeroNeumorphicWaves />

        {/* Lazy video background - natural colors - it will stick to this hero container natively */}
        <HeroVideo />

        <div
          className="relative z-10 max-w-4xl w-full rounded-xl md:rounded-xl border border-none dark:border-none bg-transparent dark:bg-transparent backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 transition-transform duration-500 shadow-lg"
          style={{ transform: `scale(${scale})` }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 md:mb-6 tracking-tight text-white/80">
            <span className="block text-xs sm:text-sm md:text-base opacity-70 mb-1.5 sm:mb-2 font-normal">Hello, I&apos;m</span>
            <span className="block min-h-[1.2em] whitespace-nowrap">
              <span className="sr-only">Dhruvesh Patil</span>
              <span aria-hidden="true">{typedName || "\u00a0"}</span>
            </span>
          </h1>

          <p className="text-base text-white/80 sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-6 font-semibold">
            Full Stack Developer & Designer
          </p>

          <p className="opacity-100 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-sm sm:text-base md:text-base max-w-2xl mx-auto px-2 sm:px-0 text-white/80">
            B.Tech Computer Engineering student at K.K. Wagh Institute,
            passionate about building modern web applications, VR experiences,
            and exploring emerging technologies.
          </p>

          {/* Social Links — MagicUI Dock */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <SocialDock />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0">
            <Link
              href="/projects"
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-xl sm:rounded-xl sm:rounded-r-none border-1 border-white/20 dark:border-black/20 bg-transparent dark:bg-transparent text-white dark:text-black hover:bg-white/90 hover:text-black transition font-semibold dark:hover:bg-black/90 dark:hover:text-white"
            >
              View My Work →
            </Link>
            <Link
              href="https://drive.google.com/file/d/1a-Q6RMehygXArEbf2a_IwLqzub59akoK/view?usp=drive_link"
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-xl sm:rounded-r-xl sm:rounded-l-none border-1 border-white/20 dark:border-black/20 text-white dark:text-black hover:bg-white/90 dark:hover:bg-black/90 hover:text-black dark:hover:text-white transition font-bold"
            >
              Checkout My Resume
            </Link>
          </div>
        </div>
      </section>

      {/* NO MORE WRAPPERS. Everything sits naturally in the DOM. Normal scroll restored. */}

      {/* ================= ABOUT & EDUCATION ================= */}
      <div id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* About Me Card */}
          <div className="rounded-2xl bg-white dark:bg-neutral-900 p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-black/5 dark:border-white/5">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">About Me</h3>
            <p className="opacity-70 leading-relaxed mb-4 text-sm md:text-base">
              I&apos;m a Computer Engineering student at K.K. Wagh Institute of Engineering Education & Research,
              Nashik, currently pursuing my B.Tech degree (2023-2027). With hands-on experience in full-stack
              development using React, Next.js, Node.js, and database technologies like PostgreSQL and MongoDB,
              I enjoy building scalable web applications and immersive VR experiences.
            </p>
            <p className="opacity-70 leading-relaxed text-sm md:text-base">
              Currently working as a Web Development Intern at Ayunext Solutions and actively contributing
              to technical communities like CSI, FOSS Club, and MLSC. I&apos;m passionate about turning complex
              problems into elegant solutions through clean code and innovative technology.
            </p>
          </div>

          {/* Education Card */}
          <div id="education" className="rounded-2xl bg-white dark:bg-neutral-900 p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-black/5 dark:border-white/5">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Education</h3>

            {/* B.Tech */}
            <div className="mb-5 pb-5 border-b border-black/20 dark:border-white/20">
              <h4 className="text-base md:text-lg font-bold mb-1">Bachelor of Technology in Computer Engineering</h4>
              <p className="text-sm opacity-80 mb-0.5">K.K. Wagh Institute of Engineering Education & Research</p>
              <p className="text-xs opacity-70">2023 - 2027 | Nashik, Maharashtra</p>
            </div>

            {/* 12th */}
            <div className="mb-5 pb-5 border-b border-black/20 dark:border-white/20">
              <h4 className="text-base md:text-lg font-bold mb-1">Higher Secondary (12th) - Science</h4>
              <p className="text-sm opacity-80 mb-0.5">K.D Gavit Secondary and Higher Secondary School</p>
              <p className="text-xs opacity-70">2023 | Grade: 74.67%</p>
            </div>

            {/* 10th */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-1">Secondary School (10th)</h4>
              <p className="text-sm opacity-80 mb-0.5">Jay Ambe International School, Bharuch</p>
              <p className="text-xs opacity-70">Grade: 90%</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/about"
            className="inline-block px-6 py-3  border-1 border-black/25 rounded-xl dark:border-white/25 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Know More About Me →
          </Link>
        </div>
      </div>

      {/* ================= QUICK STATS ================= */}
      <div className="px-4 md:px-6 pb-16 md:pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-0">
          {portfolioStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-none bg-white dark:bg-neutral-900 p-5 md:p-6 shadow-lg transition-transform duration-300 hover:bg-black hover:text-white hover:shadow-2xl dark:hover:bg-white dark:hover:text-black border border-black/5 dark:border-white/5 md:border-y-0 md:first:border-l-0 md:last:border-r-0"
            >
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] opacity-60">
                {stat.label}
              </p>
              <div className="text-3xl md:text-4xl font-black mb-2">
                {stat.value}
              </div>
              <p className="text-sm leading-relaxed opacity-70">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div id="experience" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {/* Ayunext Solutions */}
          <div className="rounded-2xl bg-white dark:bg-neutral-900 p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-black/5 dark:border-white/5">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Company Logo/Image */}
              <div className="flex-shrink-0">
                <div className="w-full md:w-64 h-64 rounded-xl flex items-center justify-center bg-white p-4">
                  <img
                    src="/ayunext.png"
                    alt="Ayunext Solutions"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Experience Details */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Web Development Intern</h3>
                    <p className="text-base md:text-lg opacity-80 mb-1">Ayunext Solutions</p>
                    <p className="text-sm opacity-70">Nashik, Maharashtra</p>
                  </div>
                  <div className="text-sm opacity-70 mt-2 md:mt-0">1st Sept 2025 – 30th Oct 2025</div>
                </div>

                <div className="space-y-2 text-sm md:text-base opacity-70">
                  <p>• Developing and maintaining web applications using modern technologies</p>
                  <p>• Working on full-stack projects with React, Next.js, and Node.js</p>
                  <p>• Collaborating with the team to deliver high-quality software solutions</p>
                  <p>• Implementing responsive designs and optimizing application performance</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs px-3 py-1 border-2 border-black dark:border-white rounded-md">React.js</span>
                  <span className="text-xs px-3 py-1 border-2 border-black dark:border-white rounded-md">Next.js</span>
                  <span className="text-xs px-3 py-1 border-2 border-black dark:border-white rounded-md">Node.js</span>
                  <span className="text-xs px-3 py-1 border-2 border-black dark:border-white rounded-md">Full Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/experience"
            className="inline-block px-6 py-3  border-1 border-black/25 rounded-xl dark:border-white/25 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            View All Experience →
          </Link>
        </div>
      </div>

      {/* ================= SKILLS ================= */}
      <div id="skills" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">Technical Skills</h2>
          <p className="text-center opacity-60 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* Programming Languages */}
            <div className="group rounded-2xl md:rounded-3xl bg-white dark:bg-neutral-900 p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-black/5 dark:border-white/5">
              <h4 className="text-xl md:text-2xl font-bold mb-6 text-center">Programming Languages</h4>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                      alt="C"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">C</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                      alt="C++"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">C++</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">JavaScript</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg"
                      alt="SQL"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">SQL</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="HTML"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">HTML</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      alt="CSS"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">CSS</span>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="group rounded-2xl md:rounded-3xl bg-white dark:bg-neutral-900 p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-black/5 dark:border-white/5">
              <h4 className="text-xl md:text-2xl font-bold mb-6 text-center">Frameworks & Libraries</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React.js"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">React.js</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">Node.js</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                      alt="Express.js"
                      className="w-full h-full object-contain dark:invert"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">Express.js</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                      className="w-full h-full object-contain dark:invert"
                    />
                  </div>
                  <span className="text-xs font-medium text-center opacity-80">Next.js</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/skills"
            className="inline-block px-6 py-3  border-1 border-black/25 rounded-xl dark:border-white/25 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            View All Skills →
          </Link>
        </div>
      </div>

      {/* ================= FEATURED PROJECTS ================= */}
      <div id="projects" className="relative w-full my-24">
        <FeaturedProjectsCarousel />
      </div>

      {/* ================= CONTACT ME ================= */}
      <div id="contact" className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10">Contact Me</h2>

        <div className="rounded-4xl bg-white dark:bg-neutral-900 p-8 md:p-12 hover:shadow-xl transition-all duration-300 border border-black/5 dark:border-white/5">
          {/* Location */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <p className="text-lg md:text-xl font-semibold">Nashik, Maharashtra, India</p>
          </div>

          {/* Social Links — MagicUI Dock */}
          <div className="flex justify-center mb-2">
            <SocialDock />
          </div>

          <div className="text-center mt-8">
            <p className="text-sm md:text-base opacity-70 mb-6">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border-1 border-black rounded-md dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-300 font-semibold"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}