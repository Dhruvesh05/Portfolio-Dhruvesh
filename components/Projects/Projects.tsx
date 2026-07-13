"use client";

import { useState } from "react";
import Image from "next/image";
import PortfolioDetail from "../PortfolioDetail";
import {
  clientProjects,
  groupProjects,
  internshipProjects,
} from "../portfolioData";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof internshipProjects)[number] | null>(null);
  const stats = [
    { label: "Internship", value: String(internshipProjects.length) },
    { label: "Client work", value: String(clientProjects.length) },
    { label: "Group builds", value: String(groupProjects.length) },
    { label: "Total showcases", value: String(internshipProjects.length + clientProjects.length + groupProjects.length) },
  ];

  const projectGroups = [
    {
      label: "Internship Projects",
      description: "Work shipped in real-world environments with practical ownership and live demos.",
      items: internshipProjects,
      accent: "from-amber-50 via-white to-white dark:from-amber-950/30 dark:via-black dark:to-black",
    },
    {
      label: "Client-Based Projects",
      description: "Client-facing solutions with polished interfaces and production-minded execution.",
      items: clientProjects,
      accent: "from-sky-50 via-white to-white dark:from-sky-950/30 dark:via-black dark:to-black",
    },
    {
      label: "Group Projects",
      description: "Team-built products that combine collaboration, delivery, and technical depth.",
      items: groupProjects,
      accent: "from-rose-50 via-white to-white dark:from-rose-950/30 dark:via-black dark:to-black",
    },
  ];

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

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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

        <div className="space-y-10 md:space-y-12 lg:space-y-14">
          {projectGroups.map((group) => (
            <section key={group.label} className={`rounded-[2.25rem] border border-black/10 bg-gradient-to-br ${group.accent} p-4 sm:p-6 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] dark:border-white/10`}>
              <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-55">{group.label}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed opacity-70 sm:text-base">{group.description}</p>
                </div>
                <div className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-70 backdrop-blur dark:border-white/10 dark:bg-black/60">
                  {group.items.length} showcase{group.items.length === 1 ? "" : "s"}
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {group.items.map((item, i) => (
                  <article
                    key={i}
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
                      <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/45 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                        Open detail
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 md:p-6">
                      <div className="flex flex-col gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-55">{group.label}</p>
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
                ))}
              </div>
            </section>
          ))}
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
