import Link from "next/link";
import { PortfolioEntry } from "../portfolioData";

interface ProjectCardProps {
  project: PortfolioEntry;
  index: number;
  category: string;
}

export default function ProjectCard({ project, index, category }: ProjectCardProps) {
  return (
    <Link
      href="/projects"
      className="group relative flex-shrink-0 w-[260px] sm:w-[270px] md:w-[280px] lg:w-[300px] xl:w-[300px] overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition-shadow duration-500 select-none"
      draggable={false}
      aria-label={`View project: ${project.title}`}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04]"
          draggable={false}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

        {/* Category pill */}
        <span className="absolute top-4 left-4 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
          {category}
        </span>

        {/* Index number */}
        <span className="absolute bottom-4 right-4 text-[2.5rem] font-black text-white/20 leading-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex items-start justify-between gap-4 px-6 py-5">
        <div className="flex-1 min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] opacity-50 mb-1.5">
            {project.org}
          </p>
          <h3 className="text-base font-black leading-snug line-clamp-2 sm:text-lg">
            {project.title}
          </h3>
          {project.features && project.features.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.features.slice(0, 3).map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-black/10 dark:border-white/10 px-2.5 py-0.5 text-[0.6rem] font-medium opacity-70"
                >
                  {f}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Arrow circle */}
        <span className="mt-1 flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-black/15 dark:border-white/15 transition-all duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:border-white dark:group-hover:text-black">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
