import Image from "next/image";
import Link from "next/link";

const technicalExperience = [
  {
    title: "Web Development Intern",
    org: "Ayunext Internship",
    desc: "Worked on real-world web applications, collaborated with developers, and delivered production-ready features.",
    link: "/experience/ayunext",
  },
  {
    title: "Frontend Developer",
    org: "Shubh Constructions (Real-World Client)",
    desc: "Built and deployed a professional business website focusing on performance, responsiveness, and UI clarity.",
    link: "/experience/shubh-constructions",
  },
  {
    title: "Departmental Project",
    org: "Computer Engineering Dept.",
    desc: "Designed and developed an academic project involving structured problem-solving and technical documentation.",
    link: "/experience/departmental-project",
  },
  {
    title: "Web Team Member",
    org: "CSI Official Website",
    desc: "Contributed to design and development of the CSI website with focus on accessibility and scalability.",
    link: "/experience/csi-website",
  },
];

const clubExperience = [
  {
    title: "Core Member",
    org: "CSI KKWIEER",
  },
  {
    title: "Active Member",
    org: "FOSS Club KKWIEER",
  },
  {
    title: "Technical Member",
    org: "MLSC KKWIEER",
  },
  {
    title: "Event Planning & Logistics Team Member",
    org: "INNOV-ERA 2025 (National-Level Hackathon)",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-black dark:text-white">
        Experience
      </h2>

      {/* =========================
          TECHNICAL EXPERIENCE
         ========================= */}
      <div className="mb-16 sm:mb-20">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-black dark:text-white">
          Technical Experience
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {technicalExperience.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group rounded-2xl border border-black dark:border-white/10 bg-white dark:bg-[#111111] p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              <Image
                src="/company-placeholder.png"
                alt={item.org}
                width={64}
                height={64}
                className="mb-4 w-12 h-12 sm:w-16 sm:h-16"
              />

              <h4 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                {item.title}
              </h4>

              <p className="text-sm font-medium text-black/70 dark:text-white/60 mt-1">
                {item.org}
              </p>

              <p className="text-sm text-black/80 dark:text-white/70 mt-3 leading-relaxed">
                {item.desc}
              </p>

              <span className="inline-block mt-4 text-sm font-medium text-[#38BDF8] dark:text-[#38BDF8] group-hover:underline">
                View Details →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* =========================
          CLUBS & ACTIVITIES
         ========================= */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-black dark:text-white">
          Clubs & Activities
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {clubExperience.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-black dark:border-white/10 bg-white dark:bg-[#111111] p-4 sm:p-5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
            >
              <h4 className="text-sm sm:text-base font-semibold text-black dark:text-white">
                {item.title}
              </h4>

              <p className="text-xs sm:text-sm text-black/70 dark:text-white/60 mt-1">
                {item.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
