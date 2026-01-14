export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#020617] px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Skills & Certifications
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "React / Next.js",
              "JavaScript / TypeScript",
              "Node.js",
              "Java / Spring Boot",
              "MongoDB / MySQL",
              "REST APIs",
              "Git & GitHub",
              "AI Tools & Automation",
            ].map(skill => (
              <div
                key={skill}
                className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-gray-900 dark:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Certifications</h3>
          <ul className="space-y-4 text-gray-600 dark:text-[#9CA3AF]">
            <li>✔ Full Stack Web Development – Internship</li>
            <li>✔ Java Programming Certification</li>
            <li>✔ AI & Automation Tools Training</li>
            <li>✔ Project-Based Internship Completion</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
