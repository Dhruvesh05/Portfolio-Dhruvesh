"use client";

import Image from "next/image";
import Link from "next/link";

const internshipProjects = [
  {
    title: "Ayunext Solutions (2-Month Internship)",
    org: "Ayunext Solutions",
    desc: "Worked on real-world web development tasks during a 2-month internship, contributing to live projects and implementing production-ready features in a professional environment. Gained hands-on industry experience, strengthened problem-solving skills, and delivered meaningful features under real deadlines.",
    link: "/projects/ayunext",
    live: "https://www.ayunexts.com/",
    github: "https://github.com/Dhruvesh05/ayunexts",
    image: "/ayunext.png",
  },
];

// https://drive.google.com/drive/folders/1IT2JkdOorLKzmR26lQA-CrwHvbiNDhtn?usp=sharing

const clientProjects = [
  {
    title: "Full Stack Developer",
    org: "Shubh Construction - Client Project",
    desc: "Shubh Constructions is a full-stack construction management platform built with Next.js, Node.js, Express, Supabase and Cloudinary. It streamlines project tracking, client bookings, and expense management through a centralized digital system with real-time updates, secure APIs, and an intuitive user interface.",
    link: "/projects/shubh-constructions",
    live: "https://shubhcons.in",
    github: "https://github.com/Dhruvesh05/full_stack",
    image: "/shubhcons.png",
  },
];

const groupProjects = [

  {
    title: "Skinlytix: Intelligent skincare recommendation engine powered by machine learning",
    org: "React + Spring Boot",
    desc: "Skinlytix is an AI-powered skincare recommendation system that analyzes cosmetic ingredients using machine learning. It provides personalized product suggestions, identifies similar products and affordable dupes, and visualizes skincare market trends.",
    link: "/projects/skinlytix",
    live: "https://skinlytics-lyart.vercel.app/",
    github: "https://github.com/Dhruvesh05/GlowGuide",
    image: "/skinlytix.png",
  },

  {
    title: "CSI-KKWIEER (CSI Student Chapter Website)",
    org: "Student Chapter Project",
    desc: "An official website for the Computer Society of India (CSI) student chapter at KKWIEER, showcasing events, members, and technical activities. Improved visibility and communication for the student chapter by providing a centralized and professional online presence.",
    link: "/projects/csi-kkwieer",
    live: "https://csi-kkwieer.vercel.app",
    github: "https://github.com/Sarthak2477/CSI-KKWIEER",
    image: "/csi.png",
  },


  {
    title: "LinkTrace-3D Flow Visualizer & Bug Explorer",
    org: "Development Tool",
    desc: "A 3D visualization tool that maps file-to-file connections and error flows within a codebase, helping developers understand project structure and debug efficiently. Enhanced code comprehension and debugging by transforming complex dependencies into an interactive visual experience.",
    link: "/projects/linktrace-3d",
    live: "https://link-trace-3-d-flow-visualizer-bug.vercel.app/",
    github: "https://github.com/Dhruvesh05/LinkTrace-3D-Flow-Visualizer-Bug-Explorer",
    image: "/linktrace.png",
  },
  {
    title: "UniMail Pro – Department Dispatch Mail System",
    org: "University Project",
    desc: "A centralized email management system for university departments, enabling structured email drafting, translation, storage, and export of official communications. Streamlined departmental communication workflows and reduced manual effort in managing and exporting official emails.",
    link: "/projects/unimail-pro",
    live: "https://unimail-kkwieer.vercel.app/",
    github: "https://github.com/Hrishikesh-Gavai/UniMail-KKWIEER",
    image: "/deptproj.png",
  },
  {
    title: "ProChat : Real-Time Chat Application",
    org: "React + Spring Boot",
    desc: "A full-stack real-time chat application enabling users to connect and exchange messages instantly using a modern React frontend and Spring Boot backend. Demonstrated scalable full-stack architecture and real-time communication, simulating industry-grade chat systems.",
    link: "/projects/realtime-chat",
    live: "https://chat-app-frontend-nine-sigma.vercel.app/",
    github: "https://github.com/Dhruvesh05/chat-app-frontend",
    image: "/prochat.png",
  },
  
];


const finalYearProject = [
  {
    title: "Final Year Project",
    org: "Best Project Award - KKWIEER  ",
    desc: "Coming Soon....",
    link: "/projects/final-year",
    image: "/comingsoon.png",
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
            <a
              key={i}
              href="https://drive.google.com/drive/folders/1U28Kx7YRQnaYQUEWe_wi3IJCHWY20h8F?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full border border-black dark:border-white bg-white dark:bg-black overflow-hidden block"
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
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-center"
                    >
                      Live
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-center"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1asaEA1YVshXZDlrBucP_aBDqg6VuU82I/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition text-center"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CLIENT-BASED PROJECTS */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8 text-center">Client-Based Projects</h3>

      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-5">
          {clientProjects.map((item, i) => (
            <a
              key={i}
              href="https://drive.google.com/drive/folders/1IT2JkdOorLKzmR26lQA-CrwHvbiNDhtn?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full border border-black dark:border-white bg-white dark:bg-black overflow-hidden block"
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
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-center"
                    >
                      Live
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-center"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://drive.google.com/drive/folders/1IT2JkdOorLKzmR26lQA-CrwHvbiNDhtn?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition text-center"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* GROUP PROJECTS */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8 text-center">Group Projects</h3>

      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-5">
          {groupProjects.map((item, i) => {
            // Drive links for each project in order
            const driveLinks = [
              "https://drive.google.com/file/d/16L8s5aQzqNnUyBIOcuh3aYDPbzyCYBA7/view?usp=sharing",
              "https://drive.google.com/file/d/1xl6RoCfpXemZ2tB7M7Pv9xDFx3CWmzQs/view?usp=sharing", // CSI
              "https://drive.google.com/file/d/1oHb3vJVvSNjnEC3Zc9hCSN47yQU8NT-8/view?usp=sharing", // LinkTrace-3D
              "https://drive.google.com/file/d/121fqO1YcF09bQ9BYctM0Z10ILFU0qP7u/view?usp=sharing", // UniMail Pro
              "https://drive.google.com/file/d/1bPIBa0fBWZjrDqF6JpsuaGkv0dcC2bIX/view?usp=sharing", // Chat App
            ];
            return (
              <a
                key={i}
                href={driveLinks[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full border border-black dark:border-white bg-white dark:bg-black overflow-hidden block"
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
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-center"
                      >
                        Live
                      </a>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-center"
                      >
                        GitHub
                      </a>
                      <a
                        href={driveLinks[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition text-center"
                      >
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
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
