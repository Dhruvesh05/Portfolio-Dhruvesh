"use client";

import Image from "next/image";
import Link from "next/link";

const internshipProjects = [
  {
    title: "Ayunext Web Application",
    org: "Ayunext Internship",
    desc: "Developed production-ready features for real-world web applications.",
    link: "/projects/ayunext",
  },
];

const groupProjects = [
  {
    title: "Group Project 1",
    org: "Team Project",
    desc: "Collaborative project with innovative solutions.",
    link: "/projects/group-1",
  },
  {
    title: "Group Project 2",
    org: "Team Project",
    desc: "Full-stack application built with modern technologies.",
    link: "/projects/group-2",
  },
  {
    title: "Group Project 3",
    org: "Team Project",
    desc: "Solved real-world problems with creative approach.",
    link: "/projects/group-3",
  },
  {
    title: "Group Project 4",
    org: "Team Project",
    desc: "Implemented scalable architecture and design patterns.",
    link: "/projects/group-4",
  },
  {
    title: "Group Project 5",
    org: "Team Project",
    desc: "Worked on performance optimization and UX improvements.",
    link: "/projects/group-5",
  },
  {
    title: "Group Project 6",
    org: "Team Project",
    desc: "Developed innovative features with team collaboration.",
    link: "/projects/group-6",
  },
];

const finalYearProject = [
  {
    title: "Final Year Project",
    org: "Computer Engineering Department",
    desc: "Capstone project showcasing technical expertise and research.",
    link: "/projects/final-year",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-12 md:py-20 lg:py-24 px-4 md:px-6 max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
        Projects
      </h2>

      {/* INTERNSHIP PROJECTS */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Internship Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
        {internshipProjects.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="relative h-56 md:h-64 border border-black dark:border-white bg-white dark:bg-black overflow-hidden group"
          >
            <Image src="/profileimage.png" alt={item.org} fill className="object-cover" />

            <div className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-4 md:p-6">
              <div>
                <h4 className="font-bold text-sm md:text-base text-white">{item.title}</h4>
                <p className="text-xs md:text-sm opacity-80 text-white">{item.org}</p>
                <p className="text-xs mt-1 md:mt-2 opacity-70 text-white">{item.desc}</p>
              </div>

              <div className="flex">
                <button className="flex-1 py-1.5 md:py-2 text-[10px] md:text-xs border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">Live</button>
                <button className="flex-1 py-1.5 md:py-2 text-[10px] md:text-xs border border-l-0 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">GitHub</button>
                <button className="flex-1 py-1.5 md:py-2 text-[10px] md:text-xs border border-l-0 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">More</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* GROUP PROJECTS */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8">Group Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
        {groupProjects.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="relative h-56 md:h-64 border border-black dark:border-white bg-white dark:bg-black overflow-hidden group"
          >
            <Image src="/profileimage.png" alt={item.org} fill className="object-cover" />

            <div className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-4 md:p-6">
              <div>
                <h4 className="font-bold text-sm md:text-base text-white">{item.title}</h4>
                <p className="text-xs md:text-sm opacity-80 text-white">{item.org}</p>
                <p className="text-xs mt-1 md:mt-2 opacity-70 text-white">{item.desc}</p>
              </div>

              <div className="flex">
                <button className="flex-1 py-1.5 md:py-2 text-[10px] md:text-xs border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">Live</button>
                <button className="flex-1 py-1.5 md:py-2 text-[10px] md:text-xs border border-l-0 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">GitHub</button>
                <button className="flex-1 py-1.5 md:py-2 text-[10px] md:text-xs border border-l-0 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">More</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* FINAL YEAR PROJECT */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8">Final Year Project</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
        {finalYearProject.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="relative h-56 md:h-64 border border-black dark:border-white bg-white dark:bg-black overflow-hidden group"
          >
            <Image src="/profileimage.png" alt={item.org} fill className="object-cover" />

            <div className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-4 md:p-6">
              <div>
                <h4 className="font-bold text-sm md:text-base text-white">{item.title}</h4>
                <p className="text-xs md:text-sm opacity-80 text-white">{item.org}</p>
                <p className="text-xs mt-1 md:mt-2 opacity-70 text-white">{item.desc}</p>
              </div>

              <div className="flex">
                <button className="flex-1 py-1.5 md:py-2 text-[10px] md:text-xs border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">Live</button>
                <button className="flex-1 py-1.5 md:py-2 text-[10px] md:text-xs border border-l-0 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">GitHub</button>
                <button className="flex-1 py-1.5 md:py-2 text-[10px] md:text-xs border border-l-0 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">More</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
