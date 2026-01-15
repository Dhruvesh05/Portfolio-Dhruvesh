"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scale based on scroll (starts at 1, zooms out to 0.5)
  const scale = Math.max(0.9, 1 - scrollY / 1000);

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">

      {/* ================= HERO ================= */}
      <section className="fixed top-16 md:top-20 left-0 right-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center justify-center text-center px-4 bg-white dark:bg-black z-0">
        <div 
          className="max-w-2xl rounded-[20px] md:rounded-[40px] border border-black dark:border-white bg-white dark:bg-black p-6 md:p-10 transition-transform duration-500"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="flex justify-center mb-4 md:mb-6">
            <Image
              src="/profileimage.png"
              alt="Dhruvesh Patil"
              width={120}
              height={120}
              className="rounded-full border-2 border-black dark:border-white md:w-40 md:h-40"
            />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="block text-xs md:text-sm opacity-70 mb-1">Hello, I&apos;m</span>
            Dhruvesh Patil
          </h1>

          <p className="text-base md:text-lg mb-3 md:mb-4">
            Full Stack Developer & Designer
          </p>

          <p className="opacity-70 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            B.Tech Computer Engineering undergraduate passionate about building
            modern web applications, solving problems, and exploring AI & AI
            automations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/projects"
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer to allow scrolling */}
      <div className="h-screen"></div>

      {/* ================= ALL SECTIONS WRAPPER ================= */}
      <section className="relative z-10 bg-white/100 dark:bg-black/80 backdrop-blur-md">
        
        {/* ================= ABOUT ================= */}
        <div id="about" className="py-24 px-6 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <p className="opacity-70 text-center leading-relaxed">
            I&apos;m a computer engineering student with hands-on experience in
            full-stack development using React, Next.js, Node.js, and Java.
            I enjoy turning complex problems into simple, beautiful solutions
            and continuously improving my skills through real-world projects.
          </p>
        </div>

        {/* ================= SKILLS ================= */}
        <div id="skills" className="py-24 px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
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
        </div>

        {/* ================= PROJECTS ================= */}
        <div id="projects" className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

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
        </div>

        {/* ================= ACHIEVEMENTS ================= */}
        <div id="achievements" className="py-24 px-6">
          <h2 className="text-4xl font-bold text-center mb-10">Achievements</h2>
          <ul className="max-w-3xl mx-auto opacity-70 space-y-4 list-disc list-inside">
            <li>Completed multiple internships in web development</li>
            <li>Built and deployed full-stack applications</li>
            <li>Active contributor on GitHub</li>
            <li>Strong problem-solving skills in DSA</li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div id="contact" className="py-24 px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="opacity-70 mb-8">
            Have a project, opportunity, or just want to say hi?
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-block px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            Get In Touch
          </a>
        </div>
      
      </section>
    </main>
  );
}
