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
    <section id="projects" className="py-24 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      {projectGroups.map(group => (
        <div key={group.title} className="max-w-6xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-6">
            {group.title}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {group.projects.map(p => (
              <Link
                key={p}
                href={`/projects/project-${p}`}
                className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl p-6 transition"
              >
                <h4 className="text-lg font-semibold mb-2">
                  Project Title {p}
                </h4>

                <p className="text-sm opacity-70 mb-4">
                  Short overview of the project and its objective.
                </p>

                <span className="text-sm opacity-70">
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
