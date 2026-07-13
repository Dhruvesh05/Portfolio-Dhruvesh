"use client";

import { useState } from "react";
import Image from "next/image";
import PortfolioDetail from "../PortfolioDetail";
import { clubExperience, technicalExperience } from "../portfolioData";

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<(typeof technicalExperience)[number] | null>(null);
  const stats = [
    { label: "Technical entries", value: String(technicalExperience.length) },
    { label: "Clubs & activities", value: String(clubExperience.length) },
    { label: "Live links", value: "Real demos" },
  ];

  const openExperience = (item: (typeof technicalExperience)[number]) => {
    setSelectedExperience(item);
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLElement>, item: (typeof technicalExperience)[number]) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openExperience(item);
    }
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden w-full px-4 py-12 text-black dark:bg-black dark:text-white md:px-6 md:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-neutral-200/70 blur-3xl dark:bg-neutral-800/50" />
        <div className="absolute right-0 top-36 h-80 w-80 rounded-full bg-black/5 blur-3xl dark:bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <p className="text-4xl font-black tracking-tight opacity-80 sm:text-5xl md:text-6xl lg:text-7xl">
            Experience
          </p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Experience built to show impact, not just attendance.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-70 sm:text-base md:text-lg">
                Each project and community role is presented as a focused outcome: practical delivery,
                visible contribution, and a clear story of what you built.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/15 bg-white/85 px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/15 dark:bg-black/70"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] opacity-55">{stat.label}</p>
                  <p className="mt-2 text-sm font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          <div>
            <h3 className="mb-6 text-center text-xl font-bold uppercase tracking-[0.24em] opacity-60 md:mb-8 md:text-2xl">
              Technical
            </h3>

            <div className="grid gap-5">
              {technicalExperience.map((item, i) => (
                <article
                  key={i}
                  role="link"
                  tabIndex={0}
                  onClick={() => openExperience(item)}
                  onKeyDown={(event) => handleCardKeyDown(event, item)}
                  className="group overflow-hidden rounded-4xl border border-black/15 bg-white/90 shadow-[0_16px_50px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)] dark:border-white/15 dark:bg-black/70"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-40 shrink-0 md:h-auto md:w-[32%] lg:w-[28%]">
                      <Image
                        src={item.image}
                        alt={item.org}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 34vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                        Featured
                      </div>
                    </div>

                    <div className="flex-1 p-4 sm:p-5 md:p-6 lg:p-7">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-55">Technical role</p>
                          <h4 className="mt-2 text-lg font-black sm:text-xl lg:text-2xl">{item.title}</h4>
                          <p className="mt-2 text-sm opacity-75 sm:text-base">{item.org}</p>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-50">Clickable detail card</p>
                      </div>

                      {item.features?.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.features.map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full border border-black/15 bg-white px-3 py-1 text-xs font-medium opacity-85 transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/15 dark:bg-black"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex flex-1 min-w-24 items-center justify-center rounded-full border border-black/15 bg-black px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/15 dark:bg-white dark:text-black"
                        >
                          Live
                        </a>
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex flex-1 min-w-24 items-center justify-center rounded-full border border-black/15 bg-white px-4 py-2.5 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-lg dark:border-white/15 dark:bg-black dark:hover:bg-white dark:hover:text-black"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-center text-xl font-bold uppercase tracking-[0.24em] opacity-60 md:mb-8 md:text-2xl">
              Clubs & Activities
            </h3>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {clubExperience.map((item, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-black/15 bg-white/90 shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:border-white/15 dark:bg-black/70"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    {item.image.endsWith(".svg") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.org}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.org}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/15 to-transparent" />
                  </div>
                  <div className="p-3.5 sm:p-4">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] opacity-55">Community</p>
                    <h4 className="mt-2 text-sm font-bold sm:text-[0.95rem]">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed opacity-70">{item.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {selectedExperience ? (
        <PortfolioDetail
          entry={selectedExperience}
          sectionLabel="Experience"
          onClose={() => setSelectedExperience(null)}
        />
      ) : null}
    </section>
  );
}
