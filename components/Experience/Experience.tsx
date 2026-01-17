"use client";

import Image from "next/image";
import Link from "next/link";

const technicalExperience = [
  {
    title: "Web Development Intern",
    org: "Ayunext Internship",
    desc: "Worked on real-world web applications and delivered production-ready features.",
    link: "/experience/ayunext",
    image: "/ayunext.png",
  },
  {
    title: "Frontend Developer",
    org: "Shubh Constructions",
    desc: "Built and deployed a professional business website.",
    link: "/experience/shubh-constructions",
    image: "/shubh.png",
  },
  {
    title: "Departmental Project",
    org: "Computer Engineering Dept.",
    desc: "Academic project with structured problem-solving.",
    link: "/experience/departmental-project",
    image: "/deptproj.png",
  },
  {
    title: "Web Team Member",
    org: "CSI Official Website",
    desc: "Worked on accessibility and scalability.",
    link: "/experience/csi-website",
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
          {technicalExperience.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="group w-full border border-black dark:border-white bg-white dark:bg-black overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-64 lg:w-72 h-44 md:h-48 shrink-0">
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

                  <div className="mt-4 md:mt-5">
                    <span className="inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm border border-black dark:border-white bg-white dark:bg-black group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      View details
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CLUBS */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8 text-center">
        Clubs & Activities
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-3xl mx-auto">
        {clubExperience.map((item, i) => (
          <div
            key={i}
            className="flex border border-black dark:border-white h-24 md:h-28 relative group bg-white dark:bg-black text-black dark:text-white"
          >
            <div className="w-20 md:w-24 relative shrink-0">
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
              <button className="px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
