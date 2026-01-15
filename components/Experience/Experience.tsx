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
      className="py-24 px-6 max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-6xl font-bold text-center mb-16">
        Experience
      </h2>

      {/* TECHNICAL */}
      <h3 className="text-4xl font-bold mb-8">Technical</h3>

      <div className="grid grid-cols-2 max-w-4xl mx-auto">
        {technicalExperience.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="relative h-64 border border-black dark:border-white bg-white dark:bg-black overflow-hidden group"
          >
            <Image src="/profileimage.png" alt={item.org} fill className="object-cover" />

            <div className="absolute inset-0 bg-black/70 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-6">
              <div>
                <h4 className="font-bold text-black dark:text-white">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.org}</p>
                  <p className="text-xs mt-2 opacity-70">{item.desc}</p>
              </div>

              <div className="flex">
                <button className="flex-1 py-2 text-xs border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">Live</button>
                <button className="flex-1 py-2 text-xs border border-l-0 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">GitHub</button>
                <button className="flex-1 py-2 text-xs border border-l-0 border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">More</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CLUBS */}
      <h3 className="text-4xl font-bold mt-20 mb-8">Clubs & Activities</h3>

      <div className="grid grid-cols-2 max-w-4xl mx-auto">
        {clubExperience.map((item, i) => (
          <div key={i} className="flex border border-black dark:border-white h-32 relative group bg-white dark:bg-black text-black dark:text-white">
            <div className="w-32 relative">
              <Image src="/profileimage.png" alt={item.org} fill />
            </div>
            <div className="p-4 flex flex-col justify-center">
              <h4 className="font-semibold text-black dark:text-white">{item.title}</h4>
              <p className="text-sm opacity-70">{item.org}</p>
            </div>

            <div className="absolute inset-0 bg-black/80 dark:bg-black/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <button className="px-6 py-2 border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
