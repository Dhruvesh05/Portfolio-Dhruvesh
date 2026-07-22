"use client";

import { useState } from "react";
import Image from "next/image";
import PortfolioDetail from "../PortfolioDetail";
import {
  clientProjects,
  groupProjects,
  internshipProjects,
} from "../portfolioData";

type FilterKey = "All" | "Internship" | "ML" | "Client Based" | "Full Stack";

// Tag each project with a filter category
const taggedProjects = [
  ...internshipProjects.map((p) => ({ ...p, _category: "Internship" as FilterKey, _group: "Internship Projects" })),
  ...clientProjects.map((p) => ({ ...p, _category: "Client Based" as FilterKey, _group: "Client-Based Projects" })),
  ...groupProjects.map((p) => {
    // Detect ML projects by org/title keywords
    const isML =
      p.org.toLowerCase().includes("ctgan") ||
      p.org.toLowerCase().includes("machine learning") ||
      p.title.toLowerCase().includes("synthetic") ||
      p.title.toLowerCase().includes("skinlytix") ||
      p.title.toLowerCase().includes("ml");
    return {
      ...p,
      _category: (isML ? "ML" : "Full Stack") as FilterKey,
      _group: "Group Projects",
    };
  }),
];

const FILTERS: FilterKey[] = ["All", "Internship", "ML", "Client Based", "Full Stack"];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof internshipProjects)[number] | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const stats = [
    { label: "Internship", value: String(internshipProjects.length) },
    { label: "Client work", value: String(clientProjects.length) },
    { label: "Group builds", value: String(groupProjects.length) },
    { label: "Total showcases", value: String(internshipProjects.length + clientProjects.length + groupProjects.length) },
  ];

  const visibleProjects =
    activeFilter === "All"
      ? taggedProjects
      : taggedProjects.filter((p) => p._category === activeFilter);

  const openProject = (item: (typeof internshipProjects)[number]) => {
    setSelectedProject(item);
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLElement>, item: (typeof internshipProjects)[number]) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(item);
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden w-full px-4 py-12 text-black dark:bg-black dark:text-white md:px-6 md:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-neutral-200/70 blur-3xl dark:bg-neutral-800/50" />
        <div className="absolute right-0 top-36 h-80 w-80 rounded-full bg-black/5 blur-3xl dark:bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <p className="text-4xl font-black tracking-tight opacity-80 sm:text-5xl md:text-6xl lg:text-7xl">
            Projects
          </p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Projects designed to look sharp and feel worth exploring.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-70 sm:text-base md:text-lg">
                The goal here is presentation and clarity: each card should communicate the value, the stack,
                and the experience at a glance.
              </p>
            </div>

            {/* Stats strip — segmented joined style */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, i) => {
                const total = stats.length;
                // sm: 2-col
                const smCol = i % 2;
                const smRow = Math.floor(i / 2);
                const smTotalRows = Math.ceil(total / 2);
                const isFirstSmInRow = smCol === 0;
                const isLastSmInRow = smCol === 1 || i === total - 1;
                const isFirstSmRow = smRow === 0;
                const isLastSmRow = smRow === smTotalRows - 1;
                // xl: 4-col (single row)
                const isFirstXl = i === 0;
                const isLastXl = i === total - 1;

                return (
                  <div
                    key={stat.label}
                    className={[
                      "border border-black/15 bg-white/85 px-4 py-3 dark:border-white/15 dark:bg-black/70",
                      // Mobile (1-col stacked)
                      i === 0 && "rounded-tl-1xl rounded-tr-1xl",
                      i === total - 1 && "rounded-bl-1xl rounded-br-1xl",
                      i > 0 && "border-t-0",
                      // sm (2-col)
                      isFirstSmRow && "sm:border-t",
                      isFirstSmInRow && "sm:border-l",
                      !isFirstSmInRow && "sm:border-l-0",
                      !isFirstSmRow && "sm:border-t-0",
                      i === 0 && "sm:rounded-tl-2xl",
                      i === 1 && "sm:rounded-tr-2xl",
                      (isLastSmRow && isFirstSmInRow) && "sm:rounded-bl-2xl",
                      (isLastSmRow && isLastSmInRow) && "sm:rounded-br-2xl",
                      i !== 0 && "sm:rounded-tl-none sm:rounded-tr-none",
                      i !== total - 1 && "sm:rounded-bl-none sm:rounded-br-none",
                      // xl (4-col single row)
                      "xl:border-t xl:border-b",
                      isFirstXl && "xl:border-l xl:rounded-tl-2xl xl:rounded-bl-2xl xl:rounded-tr-none xl:rounded-br-none",
                      isLastXl && "xl:rounded-tr-2xl xl:rounded-br-2xl xl:rounded-tl-none xl:rounded-bl-none",
                      !isFirstXl && "xl:border-l-0",
                      !isFirstXl && !isLastXl && "xl:rounded-none",
                    ].filter(Boolean).join(" ")}
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] opacity-55">{stat.label}</p>
                    <p className="mt-2 text-sm font-semibold">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filter pills */}
        <div className="mb-8 flex flex-wrap gap-2 md:mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={[
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5",
                activeFilter === filter
                  ? "border-black bg-black text-white shadow-lg dark:border-white dark:bg-white dark:text-black"
                  : "border-black/15 bg-white/85 text-black opacity-70 hover:opacity-100 hover:shadow-md dark:border-white/15 dark:bg-black/70 dark:text-white",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {visibleProjects.length === 0 ? (
            <p className="col-span-2 py-12 text-center text-sm opacity-50">No projects in this category yet.</p>
          ) : (
            visibleProjects.map((item, i) => (
              <article
                key={item.slug}
                role="link"
                tabIndex={0}
                onClick={() => openProject(item)}
                onKeyDown={(event) => handleCardKeyDown(event, item)}
                className="group overflow-hidden rounded-[1.75rem] border border-black/15 bg-white/90 shadow-[0_16px_50px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)] dark:border-white/15 dark:bg-black/70"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.org}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                      {item._category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-55">{item._group}</p>
                      <h4 className="mt-2 text-lg font-black sm:text-xl">{item.title}</h4>
                      <p className="mt-2 text-sm opacity-75 sm:text-base">{item.org}</p>
                    </div>
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
                    {item.live ? (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex flex-1 min-w-24 items-center justify-center rounded-full border border-black/15 bg-black px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/15 dark:bg-white dark:text-black"
                      >
                        Live Demo
                      </a>
                    ) : null}
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
              </article>
            ))
          )}
        </div>
      </div>

      {selectedProject ? (
        <PortfolioDetail
          entry={selectedProject}
          sectionLabel="Project"
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </section>
  );
}
