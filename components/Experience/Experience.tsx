"use client";

import Image from "next/image";
import Link from "next/link";

const technicalExperience = [
  {
    title: "Web Development Intern",
    org: "Ayunext Solutions",
    desc: "Worked on real-world web development tasks during a 2-month internship, contributing to live projects and implementing production-ready features in a professional environment. Gained hands-on industry experience, strengthened problem-solving skills, and delivered meaningful features under real deadlines.",
    link: "/experience/ayunext",
    live: "https://www.ayunexts.com/",
    github: "https://github.com/Dhruvesh05/ayunexts",
    image: "/ayunext.png",
  },
  // {
  //   title: "Frontend Developer",
  //   org: "Shubh Construction - Client Project",
  //   desc: "A professional client-based construction website developed to establish a strong online presence, showcasing services, projects, and contact information with a clean and responsive UI. Helped the client improve digital visibility and credibility while delivering a real-world, production-ready web solution.",
  //   link: "/experience/shubh-constructions",
  //   live: "https://shubh-construction.vercel.app/",
  //   github: "https://github.com/Dhruvesh05/shubh_construction",
  //   image: "/shubh.png",
  // },
  {
    title: "Full Stack Developer",
    org: "UniMail Pro - Department Project",
    desc: "A centralized email management system for university departments, enabling structured email drafting, translation, storage, and export of official communications. Streamlined departmental communication workflows and reduced manual effort in managing and exporting official emails.",
    link: "/experience/departmental-project",
    live: "https://unimail-kkwieer.vercel.app/",
    github: "https://github.com/Hrishikesh-Gavai/UniMail-KKWIEER",
    image: "/deptproj.png",
  },
  {
    title: "Web Team Member",
    org: "CSI-KKWIEER Official Website",
    desc: "An official website for the Computer Society of India (CSI) student chapter at KKWIEER, showcasing events, members, and technical activities. Improved visibility and communication for the student chapter by providing a centralized and professional online presence.",
    link: "/experience/csi-website",
    live: "https://csi-kkwieer.vercel.app",
    github: "https://github.com/Sarthak2477/CSI-KKWIEER",
    image: "/csi.png",
  },
];

const clubExperience = [
  { title: "Core Member", org: "CSI KKWIEER", image: "/csilogo.png" },
  { title: "Active Member", org: "FOSS Club KKWIEER", image: "/foss.png" },
  { title: "Technical Member", org: "MLSC KKWIEER", image: "/mlsc.png" },
  { title: "Event Team Member", org: "INNOV-ERA 2025", image: "/innovera.png" },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
        Experience
      </h2>

      {/* TECHNICAL */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">
        Technical
      </h3>

      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-5">
          {technicalExperience.map((item, i) => {
            const driveLinks = [
              "https://drive.google.com/file/d/1asaEA1YVshXZDlrBucP_aBDqg6VuU82I/view?usp=drive_link",
              "https://drive.google.com/file/d/121fqO1YcF09bQ9BYctM0Z10ILFU0qP7u/view?usp=drive_link",
              "https://drive.google.com/file/d/1xl6RoCfpXemZ2tB7M7Pv9xDFx3CWmzQs/view?usp=drive_link"
            ];
            return (
              <a
                key={i}
                href={driveLinks[i] || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full border border-black dark:border-white bg-white dark:bg-black overflow-hidden block"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-96 lg:w-[28rem] h-56 md:h-64 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.org}
                      fill
                      sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-base md:text-lg">{item.title}</h4>
                      <p className="text-sm opacity-80 mt-1">{item.org}</p>
                      <p className="text-sm opacity-70 mt-2 md:mt-3">{item.desc}</p>
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
                      {driveLinks[i] ? (
                        <a
                          href={driveLinks[i]}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition text-center"
                        >
                          More
                        </a>
                      ) : (
                        <button className="flex-1 min-w-[70px] px-3 sm:px-4 py-2 md:py-2.5 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                          More
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* CLUBS */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8 text-center">
        Clubs & Activities
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto">
        {clubExperience.map((item, i) => (
          <div
            key={i}
            className="flex border border-black dark:border-white h-32 md:h-36 relative group bg-white dark:bg-black text-black dark:text-white"
          >
            <div className="w-32 md:w-40 relative shrink-0">
              {item.image.endsWith(".svg") ? (
                // next/image + SVG can be restricted depending on config; <img> is safe for local public assets.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.image} alt={item.org} className="h-full w-full object-cover" />
              ) : (
                <Image
                  src={item.image}
                  alt={item.org}
                  fill
                  sizes="(min-width: 768px) 96px, 80px"
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-3 md:p-4 flex flex-col justify-center">
              <h4 className="font-semibold text-sm md:text-base text-black dark:text-white">{item.title}</h4>
              <p className="text-xs md:text-sm opacity-70">{item.org}</p>
            </div>

            <div className="absolute inset-0 bg-black/80 dark:bg-black/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              {i === 0 && (
                <a
                  href="https://drive.google.com/file/d/1xl6RoCfpXemZ2tB7M7Pv9xDFx3CWmzQs/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black text-center"
                >
                  Learn More
                </a>
              )}
              {i === 1 && (
                <a
                  href="https://drive.google.com/file/d/1rCuS2ji967hDyEobx6m9PN0aByASNkv5/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black text-center"
                >
                  Learn More
                </a>
              )}
              {i === 2 && (
                <a
                  href="https://drive.google.com/file/d/1langMpVCTEHyhejUYOJTR_5WLoyVgV2E/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black text-center"
                >
                  Learn More
                </a>
              )}
              {i === 3 && (
                <a
                  href="https://drive.google.com/file/d/16i4RtNqO-ej1maoUkpqkCbjY7iDOyIYo/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black text-center"
                >
                  Learn More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
