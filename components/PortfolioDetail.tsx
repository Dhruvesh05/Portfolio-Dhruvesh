"use client";

import Image from "next/image";
import type { PortfolioEntry } from "./portfolioData";

type PortfolioDetailProps = {
  entry: PortfolioEntry;
  sectionLabel: string;
  onClose: () => void;
};

export default function PortfolioDetail({ entry, sectionLabel, onClose }: PortfolioDetailProps) {
  const screenshots = entry.screenshots ?? [];
  const features = entry.features ?? [];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-start justify-center sm:items-center">
        <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/95 text-black shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl dark:border-white/10 dark:bg-[#070b14]/96 dark:text-white dark:shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <span className="text-xl leading-none">×</span>
          </button>

          <div className="grid max-h-[calc(100vh-1.5rem)] overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex max-h-[calc(100vh-1.5rem)] flex-col border-b border-black/10 p-5 sm:p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10 dark:border-white/10">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-black/65 dark:text-white/70">
                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-medium text-blue-700 dark:border-blue-400/30 dark:text-blue-200">
                  {sectionLabel}
                </span>
                <span>{entry.org}</span>
              </div>

              <div className="mt-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black dark:text-white">
                  {entry.title}
                </h1>
                <p className="mt-3 text-sm sm:text-base text-black/60 dark:text-white/60">
                  {entry.org}
                </p>
              </div>

              <div className="mt-7 flex-1 overflow-y-auto pr-1">
                <p className="max-w-2xl text-sm sm:text-base leading-7 text-black/80 dark:text-white/80">
                  {entry.desc}
                </p>

                <div className="mt-7 rounded-2xl border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-white/5">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700/90 dark:text-blue-200/90">
                    Overview
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-black/70 dark:text-white/70">
                    This preview opens inside the same page. Replace the placeholder copy and screenshots later when your final project assets are ready.
                  </p>
                </div>

                <div className="mt-7">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700/90 dark:text-blue-200/90">
                    Features
                  </h2>
                  <div className="mt-4 space-y-3">
                    {features.map((feature) => (
                      <div key={feature} className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/80 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {entry.live ? (
                    <a
                      href={entry.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-500/15 dark:border-blue-300/30 dark:bg-blue-500/15 dark:text-blue-100 dark:hover:bg-blue-400/20"
                    >
                      Live Site
                    </a>
                  ) : null}
                  {entry.github ? (
                    <a
                      href={entry.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-black hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>

                <div className="mt-8">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700/90 dark:text-blue-200/90">
                    Screenshots
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {screenshots.map((shot) => (
                      <figure
                        key={`${shot.src}-${shot.alt}`}
                        className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 38vw"
                            className="object-cover"
                          />
                        </div>
                        {shot.caption ? (
                          <figcaption className="p-3 text-xs text-black/65 dark:text-white/65">
                            {shot.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[260px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 dark:from-blue-500/10 dark:to-cyan-400/10" />
              <div className="relative flex h-full items-center justify-center p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="w-full overflow-hidden rounded-[1.25rem] border border-black/10 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-black/30 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                  <div className="relative aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[4/3]">
                    <Image
                      src={entry.image}
                      alt={entry.org}
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}