"use client";

import Image from "next/image";
import Link from "next/link";

const technicalExperience = [
  {
    title: "Web Development Intern",
    org: "Ayunext Internship",
    desc: "Worked on real-world web applications and delivered production-ready features.",
    link: "/experience/ayunext",
  },
  {
    title: "Frontend Developer",
    org: "Shubh Constructions",
    desc: "Built and deployed a professional business website.",
    link: "/experience/shubh-constructions",
  },
  {
    title: "Departmental Project",
    org: "Computer Engineering Dept.",
    desc: "Academic project with structured problem-solving.",
    link: "/experience/departmental-project",
  },
  {
    title: "Web Team Member",
    org: "CSI Official Website",
    desc: "Worked on accessibility and scalability.",
    link: "/experience/csi-website",
  },
];

const clubExperience = [
  { title: "Core Member", org: "CSI KKWIEER" },
  { title: "Active Member", org: "FOSS Club KKWIEER" },
  { title: "Technical Member", org: "MLSC KKWIEER" },
  { title: "Event Team Member", org: "INNOV-ERA 2025" },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 md:py-20 lg:py-24 px-4 md:px-6 max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
        Experience
      </h2>

      {/* TECHNICAL */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Technical</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto">
        {technicalExperience.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="relative h-56 md:h-64 border border-black dark:border-white bg-white dark:bg-black overflow-hidden group"
          >
            <Image src="/profileimage.png" alt={item.org} fill className="object-cover" />

            <div className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-4 md:p-6">
              <div>
                <h4 className="font-bold text-sm md:text-base text-black dark:text-white">{item.title}</h4>
                  <p className="text-xs md:text-sm opacity-80">{item.org}</p>
                  <p className="text-xs mt-1 md:mt-2 opacity-70">{item.desc}</p>
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

      {/* CLUBS */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8">Clubs & Activities</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto">
        {clubExperience.map((item, i) => (
          <div key={i} className="flex border border-black dark:border-white h-28 md:h-32 relative group bg-white dark:bg-black text-black dark:text-white">
            <div className="w-24 md:w-32 relative flex-shrink-0">
              <Image src="/profileimage.png" alt={item.org} fill className="object-cover" />
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
