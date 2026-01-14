import Link from "next/link";

export default function ProjectsSection() {
  const projectGroups = [
    {
      title: "Internship Projects",
      projects: [1, 2],
    },
    {
      title: "Group Projects",
      projects: [3],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#020617] px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      {projectGroups.map(group => (
        <div key={group.title} className="max-w-6xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            {group.title}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {group.projects.map(p => (
              <Link
                key={p}
                href={`/projects/project-${p}`}
                className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-[#38BDF8]/40 transition"
              >
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Title {p}
                </h4>

                <p className="text-sm text-gray-600 dark:text-[#9CA3AF] mb-4">
                  Short overview of the project and its objective.
                </p>

                <span className="text-[#38BDF8] text-sm">
                  View Case Study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
