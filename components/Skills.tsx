export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Certifications</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
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
                className="bg-white dark:bg-black border border-black dark:border-white rounded-xl py-3 px-4 text-sm text-black dark:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Certifications</h3>
          <ul className="space-y-4 text-black dark:text-white">
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
