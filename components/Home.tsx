"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 bg-white dark:bg-black">
        <div className="max-w-2xl rounded-[40px] border border-black dark:border-white bg-white dark:bg-black p-10 transition">
          <div className="flex justify-center mb-6">
            <Image
              src="/profileimage.png"
              alt="Dhruvesh Patil"
              width={160}
              height={160}
              className="rounded-full border-2 border-black dark:border-white"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block text-sm opacity-70 mb-1">Hello, I&apos;m</span>
            Dhruvesh Patil
          </h1>

          <p className="text-lg mb-4">
            Full Stack Developer & Designer
          </p>

          <p className="opacity-70 mb-8 leading-relaxed">
            B.Tech Computer Engineering undergraduate passionate about building
            modern web applications, solving problems, and exploring AI & AI
            automations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="opacity-70 text-center leading-relaxed">
          I&apos;m a computer engineering student with hands-on experience in
          full-stack development using React, Next.js, Node.js, and Java.
          I enjoy turning complex problems into simple, beautiful solutions
          and continuously improving my skills through real-world projects.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-24 px-6 bg-white dark:bg-black">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Java",
            "Spring Boot",
            "MongoDB",
            "MySQL",
            "Git & GitHub",
            "AI Tools",
            "UI/UX Design",
          ].map((skill) => (
            <div
              key={skill}
              className="text-center py-3 rounded-xl border border-black dark:border-white bg-white dark:bg-black transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((p) => (
            <div
              key={p}
              className="rounded-2xl border border-black dark:border-white bg-white dark:bg-black p-6 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                Project Title {p}
              </h3>
              <p className="text-sm opacity-70 mb-4">
                Short description of the project, what problem it solves and
                what technologies were used.
              </p>
              <span className="text-sm opacity-70">
                React • Node • MongoDB
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="py-24 px-6 bg-white dark:bg-black">
        <h2 className="text-3xl font-bold text-center mb-10">Achievements</h2>
        <ul className="max-w-3xl mx-auto opacity-70 space-y-4 list-disc list-inside">
          <li>Completed multiple internships in web development</li>
          <li>Built and deployed full-stack applications</li>
          <li>Active contributor on GitHub</li>
          <li>Strong problem-solving skills in DSA</li>
        </ul>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let&apos;s Work Together</h2>
        <p className="opacity-70 mb-8">
          Have a project, opportunity, or just want to say hi?
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}
