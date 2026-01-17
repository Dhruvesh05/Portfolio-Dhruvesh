"use client";

import Image from "next/image";
import Link from "next/link";

const internshipProjects = [
  {
    title: "Ayunext Web Application",
    org: "Ayunext Internship",
    desc: "Developed production-ready features for real-world web applications.",
    link: "/projects/ayunext",
    image: "/ayunext.png",
  },
];

const groupProjects = [
  {
    title: "Group Project 1",
    org: "Team Project",
    desc: "Collaborative project with innovative solutions.",
    link: "/projects/group-1",
    image: "/csi.png",
  },
  {
    title: "Group Project 2",
    org: "Team Project",
    desc: "Full-stack application built with modern technologies.",
    link: "/projects/group-2",
    image: "/shubh.png",
  },
  {
    title: "Group Project 3",
    org: "Team Project",
    desc: "Solved real-world problems with creative approach.",
    link: "/projects/group-3",
    image: "/foss.png",
  },
  {
    title: "Group Project 4",
    org: "Team Project",
    desc: "Implemented scalable architecture and design patterns.",
    link: "/projects/group-4",
    image: "/mlsc.png",
  },
  {
    title: "Group Project 5",
    org: "Team Project",
    desc: "Worked on performance optimization and UX improvements.",
    link: "/projects/group-5",
    image: "/innovera.png",
  },
  {
    title: "Group Project 6",
    org: "Team Project",
    desc: "Developed innovative features with team collaboration.",
    link: "/projects/group-6",
    image: "/csilogo.png",
  },
];

const finalYearProject = [
  {
    title: "Final Year Project",
    org: "Computer Engineering Department",
    desc: "Capstone project showcasing technical expertise and research.",
    link: "/projects/final-year",
    image: "/deptproj.png",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
        Projects
      </h2>

      {/* INTERNSHIP PROJECTS */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center">Internship Projects</h3>

      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-5">
          {internshipProjects.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="group w-full border border-black dark:border-white bg-white dark:bg-black overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 lg:w-[45%] h-48 md:h-auto shrink-0">
                  <Image
                    src={item.image}
                    alt={item.org}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 p-4 md:p-5 lg:p-6 flex flex-col justify-between md:min-h-[280px]">
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">{item.title}</h4>
                    <p className="text-xs sm:text-sm md:text-base opacity-80 mt-1 md:mt-2">{item.org}</p>
                    <p className="text-xs sm:text-sm md:text-base opacity-70 mt-2 md:mt-3">{item.desc}</p>
                  </div>

                  <div className="mt-4 md:mt-5 flex flex-wrap gap-2">
                    <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      Live
                    </button>
                    <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      GitHub
                    </button>
                    <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      More
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* GROUP PROJECTS */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8 text-center">Group Projects</h3>

      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-5">
          {groupProjects.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="group w-full border border-black dark:border-white bg-white dark:bg-black overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 lg:w-[45%] h-48 md:h-auto shrink-0">
                  <Image
                    src={item.image}
                    alt={item.org}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 p-4 md:p-5 lg:p-6 flex flex-col justify-between md:min-h-[280px]">
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">{item.title}</h4>
                    <p className="text-xs sm:text-sm md:text-base opacity-80 mt-1 md:mt-2">{item.org}</p>
                    <p className="text-xs sm:text-sm md:text-base opacity-70 mt-2 md:mt-3">{item.desc}</p>
                  </div>

                  <div className="mt-4 md:mt-5 flex flex-wrap gap-2">
                    <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      Live
                    </button>
                    <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      GitHub
                    </button>
                    <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      More
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FINAL YEAR PROJECT */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8 text-center">Final Year Project</h3>

      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-5">
          {finalYearProject.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="group w-full border border-black dark:border-white bg-white dark:bg-black overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 lg:w-[45%] h-48 md:h-auto shrink-0">
                  <Image
                    src={item.image}
                    alt={item.org}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 p-4 md:p-5 lg:p-6 flex flex-col justify-between md:min-h-[280px]">
                  <div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">{item.title}</h4>
                    <p className="text-xs sm:text-sm md:text-base opacity-80 mt-1 md:mt-2">{item.org}</p>
                    <p className="text-xs sm:text-sm md:text-base opacity-70 mt-2 md:mt-3">{item.desc}</p>
                  </div>

                  <div className="mt-4 md:mt-5 flex flex-wrap gap-2">
                    <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      Live
                    </button>
                    <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      GitHub
                    </button>
                    <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      More
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
