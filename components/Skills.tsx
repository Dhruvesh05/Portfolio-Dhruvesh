"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
      ]
    },
  ];

  // Added `image` fields. Place these images in your `public` folder!
  const certifications = [
    {
      title: "Unity Essentials",
      issuer: "Unity",
      date: "Sep 2025",
      description: "Basics of Unity engine and VR development.",
      link: "https://drive.google.com/file/d/1IqYnbiqyvEtLs3fVyPGlNu8Yy6mf1JQi/view?usp=drive_link",
      image: "/unity-cert.jpg"
    },
    {
      title: "RDBMS PostgreSQL",
      issuer: "Spoken Tutorial, IIT Bombay",
      date: "Jul 2025",
      description: "Core DBMS concepts and SQL using PostgreSQL.",
      link: "https://drive.google.com/file/d/1S4RkXxYQlep8DA-OeS96HQk7nUknMz47/view?usp=drive_link",
      image: "/postgres-cert.jpg"
    },
  ];

  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black tracking-tight text-center mb-3 sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl">Skills & Certifications</h2>
        <p className="text-center opacity-60 mb-12 md:mb-16 max-w-2xl mx-auto text-sm md:text-base">
          Technologies I work with and achievements I&apos;ve earned
        </p>

        {/* Skills Section */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 md:mb-10 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="rounded-2xl border-1 border-black/15 dark:border-white/15 bg-white dark:bg-black p-6 md:p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="text-xl md:text-2xl font-bold mb-6 text-center">{category.category}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center gap-2 group"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className={`w-full h-full object-contain ${skill.name === 'Express.js' || skill.name === 'Next.js' || skill.name === 'GitHub'
                            ? 'dark:invert'
                            : ''
                            }`}
                        />
                      </div>
                      <span className="text-xs font-medium text-center opacity-80">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section (LinkedIn Style) */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 md:mb-10 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="group flex flex-row items-start gap-4 rounded-2xl border-1 border-black/15 dark:border-white/15 bg-white dark:bg-black p-5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 hover:shadow-xl transition-all duration-300"
              >
                {/* Thumbnail Image Container */}
                <div className="w-24 h-16 md:w-32 md:h-20 flex-shrink-0 bg-neutral-100 dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-md overflow-hidden relative">
                  <img
                    src={cert.image}
                    alt={`${cert.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    // Optional: Fallback icon if image is missing
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='gray'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Details Container */}
                <div className="flex flex-col flex-grow">
                  <h4 className="text-base md:text-lg font-bold leading-tight group-hover:underline decoration-2 underline-offset-2">{cert.title}</h4>
                  <p className="text-sm opacity-80 mt-1">{cert.issuer}</p>
                  <p className="text-xs opacity-60 mt-0.5">Issued {cert.date}</p>

                  {/* View Button */}
                  <button className="mt-3 self-start px-4 py-1.5 text-xs md:text-sm font-semibold border-1 border-black/15 dark:border-white/15 rounded-lg hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
                    Show credential
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup (Framer Motion) */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
              className="bg-white dark:bg-neutral-950 w-full max-w-4xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-black/10 dark:border-white/10">
                <div>
                  <h3 className="text-lg md:text-xl font-bold">{selectedCert.title}</h3>
                  <p className="text-sm opacity-70">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body / Image */}
              <div className="relative w-full bg-neutral-100 dark:bg-neutral-900 p-4 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-md shadow-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const msg = document.createElement('p');
                      msg.className = "text-sm opacity-50";
                      msg.innerText = "Please add the certificate image to the public folder.";
                      parent.appendChild(msg);
                    }
                  }}
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 flex justify-end border-t border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-lg text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                  Open Original PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}