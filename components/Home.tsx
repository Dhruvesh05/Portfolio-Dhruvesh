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
      <section className="fixed top-16 md:top-20 left-0 right-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center justify-center text-center px-3 sm:px-4 md:px-6 bg-white dark:bg-black z-0">
        <div 
          className="max-w-4xl w-full rounded-2xl md:rounded-3xl border border-black dark:border-white bg-white dark:bg-black p-6 sm:p-8 md:p-12 lg:p-16 transition-transform duration-500 shadow-lg"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <Image
              src="/profileimage.png"
              alt="Dhruvesh Patil"
              width={120}
              height={120}
              className="rounded-full border-2 border-black dark:border-white w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 md:mb-6 tracking-tight">
            <span className="block text-xs sm:text-sm md:text-base lg:text-lg opacity-70 mb-1.5 sm:mb-2 font-normal">Hello, I&apos;m</span>
            Dhruvesh Patil
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 md:mb-6 font-semibold">
            Full Stack Developer & Designer
          </p>

          <p className="opacity-70 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-2 sm:px-0">
            B.Tech Computer Engineering student at K.K. Wagh Institute,
            passionate about building modern web applications, VR experiences,
            and exploring emerging technologies.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 lg:gap-6 mb-8 md:mb-10">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 md:border-[3px] border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 md:border-[3px] border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="https://leetcode.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 md:border-[3px] border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="LeetCode"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 md:border-[3px] border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="mailto:your.email@gmail.com"
              className="group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 md:border-[3px] border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="Gmail"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0">
            <Link
              href="/projects"
              className="px-6 md:px-8 lg:px-10 py-3 md:py-4 text-sm md:text-base lg:text-lg rounded-full sm:rounded-l-full sm:rounded-r-none border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition font-semibold"
            >
              View My Work 
            </Link>
            <Link
              href="/contact"
              className="px-6 md:px-8 lg:px-10 py-3 md:py-4 text-sm md:text-base lg:text-lg rounded-full sm:rounded-r-full sm:rounded-l-none border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition font-semibold"
            >
              Checkout My Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer to allow scrolling */}
      <div className="h-screen"></div>

      {/* ================= ALL SECTIONS WRAPPER ================= */}
      <section className="relative z-10 bg-white/100 dark:bg-black/80 backdrop-blur-md">
        
        {/* ================= ABOUT ================= */}
        <div id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center">About Me</h2>
          <p className="opacity-70 text-center leading-relaxed mb-4 text-sm md:text-base">
            I&apos;m a Computer Engineering student at K.K. Wagh Institute of Engineering Education & Research,
            Nashik, currently pursuing my B.Tech degree (2023-2027). With hands-on experience in full-stack
            development using React, Next.js, Node.js, and database technologies like PostgreSQL and MongoDB,
            I enjoy building scalable web applications and immersive VR experiences.
          </p>
          <p className="opacity-70 text-center leading-relaxed text-sm md:text-base">
            Currently working as a Web Development Intern at Ayunext Solutions and actively contributing
            to technical communities like CSI, FOSS Club, and MLSC. I&apos;m passionate about turning complex
            problems into elegant solutions through clean code and innovative technology.
          </p>
        </div>

        {/* ================= EDUCATION ================= */}
        <div id="education" className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10">Education</h2>
          <div className="rounded-2xl border border-black dark:border-white p-4 md:p-6 lg:p-8 hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Bachelor of Technology in Computer Engineering</h3>
                <p className="text-base md:text-lg opacity-80">K.K. Wagh Institute of Engineering Education & Research</p>
                <p className="text-xs md:text-sm opacity-70 mt-1">Nashik, Maharashtra</p>
              </div>
              <div className="text-sm opacity-70 mt-2 md:mt-0">Aug 2023 – May 2027</div>
            </div>
            <div className="mt-4">
              <p className="font-semibold mb-2">Relevant Coursework:</p>
              <p className="opacity-70 text-sm">
                Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Web Technologies
              </p>
            </div>
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        <div id="skills" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">Technical Skills</h2>
            <p className="text-center opacity-60 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm md:text-base">
              Technologies and tools I use to bring ideas to life
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {/* Programming Languages */}
              <div className="group rounded-2xl md:rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-black p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                    <span className="text-white dark:text-black text-lg md:text-xl font-bold">{'</>'}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Programming Languages</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["C", "C++", "JavaScript", "SQL", "HTML", "CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 text-sm font-medium rounded-full border-2 border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="group rounded-2xl md:rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-black p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                    <span className="text-white dark:text-black text-lg md:text-xl font-bold">⚛</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Frameworks & Libraries</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "Node.js", "Express.js", "Next.js"].map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 text-sm font-medium rounded-full border-2 border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="group rounded-2xl md:rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-black p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                    <span className="text-white dark:text-black text-lg md:text-xl font-bold">⚡</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["PostgreSQL", "MySQL", "MongoDB"].map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 text-sm font-medium rounded-full border-2 border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developer Tools */}
              <div className="group rounded-2xl md:rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-black p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                    <span className="text-white dark:text-black text-lg md:text-xl font-bold">🛠</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Tools & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Git", "GitHub", "VS Code", "Postman", "Unity", "VR Development", "RESTful APIs"].map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 text-sm font-medium rounded-full border-2 border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROJECTS ================= */}
        <div id="projects" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-black dark:border-white bg-white dark:bg-black p-6 transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-3">Full-Stack Web Application</h3>
              <p className="text-sm opacity-70 mb-4">
                Built end-to-end web application with user authentication, CRUD operations, and database integration.
                Implemented RESTful API architecture with secure JWT authentication. Optimized database queries
                resulting in 40% faster page load times.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-3 py-1 border border-current">React.js</span>
                <span className="text-xs px-3 py-1 border border-current">Node.js</span>
                <span className="text-xs px-3 py-1 border border-current">Express.js</span>
                <span className="text-xs px-3 py-1 border border-current">PostgreSQL</span>
              </div>
            </div>

            <div className="rounded-2xl border border-black dark:border-white bg-white dark:bg-black p-6 transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-3">VR Experience Development</h3>
              <p className="text-sm opacity-70 mb-4">
                Developed immersive VR application showcasing interactive 3D environments and user interactions.
                Implemented physics-based mechanics and optimized performance for VR headsets using Unity and C#.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs px-3 py-1 border border-current">Unity</span>
                <span className="text-xs px-3 py-1 border border-current">C#</span>
                <span className="text-xs px-3 py-1 border border-current">Virtual Reality</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/projects" 
              className="inline-block px-6 py-3 rounded-full border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              View All Projects
            </Link>
          </div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <div id="certifications" className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black dark:border-white p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold">RDBMS PostgreSQL</h3>
            </div>
            <div className="rounded-2xl border border-black dark:border-white p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold">Unity Essentials</h3>
            </div>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div id="contact" className="py-16 md:py-24 px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Let&apos;s Work Together</h2>
          <p className="opacity-70 mb-6 md:mb-8 text-sm md:text-base">
            Have a project, opportunity, or just want to say hi?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            Get In Touch
          </Link>
        </div>
      
      </section>
    </main>
  );
}
