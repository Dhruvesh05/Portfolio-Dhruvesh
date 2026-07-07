"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { projectEntries } from "./portfolioData";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fullName = "Dhruvesh Patil";
    let timeoutId: ReturnType<typeof window.setTimeout>;
    let isMounted = true;

    const typeText = (index: number, isDeleting: boolean) => {
      if (!isMounted) return;

      const nextText = isDeleting
        ? fullName.slice(0, Math.max(0, index - 1))
        : fullName.slice(0, index + 1);

      setTypedName(nextText);

      const hasFinishedTyping = !isDeleting && nextText.length === fullName.length;
      const hasFinishedDeleting = isDeleting && nextText.length === 0;
      const nextDelay = hasFinishedTyping ? 1400 : 90;
      const nextIndex = hasFinishedTyping
        ? index
        : hasFinishedDeleting
          ? 0
          : isDeleting
            ? index - 1
            : index + 1;
      const nextDeleting = hasFinishedTyping ? true : hasFinishedDeleting ? false : isDeleting;

      timeoutId = window.setTimeout(() => typeText(nextIndex, nextDeleting), nextDelay);
    };

    timeoutId = window.setTimeout(() => typeText(0, false), 350);

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
    };
  }, []);

  // Calculate scale based on scroll (starts at 1, zooms out to 0.5)
  const scale = Math.max(0.9, 1 - scrollY / 1000);
  const portfolioStats = [
    {
      label: "Projects Built",
      value: String(projectEntries.length),
      detail: "Across internships, clients, and group work",
    },
    {
      label: "Technologies",
      value: "20+",
      detail: "Languages, frameworks, and tools across the portfolio",
    },
    {
      label: "GitHub Commits",
      value: "19",
      detail: "Commits tracked in this workspace",
    },
    {
      label: "Lines of Code",
      value: "2,460",
      detail: "Approximate source lines in the repo",
    },
  ];

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">

      {/* ================= HERO ================= */}
      <section className="fixed top-16 md:top-20 left-0 right-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center justify-center text-center px-3 sm:px-4 md:px-6 bg-white dark:bg-black z-0">
        <div 
          className="max-w-4xl w-full rounded-2xl md:rounded-3xl border border-black dark:border-white bg-white dark:bg-black p-6 sm:p-8 md:p-12 lg:p-16 transition-transform duration-500 shadow-lg"
          style={{ transform: `scale(${scale})` }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6 tracking-tight">
            <span className="block text-xs sm:text-sm md:text-base opacity-70 mb-1.5 sm:mb-2 font-normal">Hello, I&apos;m</span>
            <span className="block min-h-[1.2em] whitespace-nowrap">
              <span className="sr-only">Dhruvesh Patil</span>
              <span aria-hidden="true">{typedName || "\u00a0"}</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-6 font-semibold">
            Full Stack Developer & Designer
          </p>

          <p className="opacity-70 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-sm sm:text-base md:text-base max-w-2xl mx-auto px-2 sm:px-0">
            B.Tech Computer Engineering student at K.K. Wagh Institute,
            passionate about building modern web applications, VR experiences,
            and exploring emerging technologies.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <a
              href="https://github.com/Dhruvesh05"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/dhruvesh-patil-a31917280/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="https://leetcode.com/Dhruvesh_Kashinath_Patil/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-[#FFA116] hover:text-white hover:border-[#FFA116] transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="LeetCode"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com/dhruvesh810220"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-linear-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="mailto:dhruveshpatil7777@gmail.com"
              className="group w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] transition-all duration-300 shadow-md hover:shadow-xl"
              aria-label="Gmail"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0">
            <Link
              href="/projects"
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-2xl sm:rounded-2xl sm:rounded-r-none border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-black hover:text-white transition font-semibold"
            >
              View My Work →
            </Link>
            <Link
              href="https://drive.google.com/file/d/1a-Q6RMehygXArEbf2a_IwLqzub59akoK/view?usp=drive_link"
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-2xl sm:rounded-r-2xl sm:rounded-l-none border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition font-semibold"
            >
              Checkout My Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer to allow scrolling */}
      <div className="h-screen"></div>

      {/* ================= ALL SECTIONS WRAPPER ================= */}
      <section className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md">

        {/* ================= ABOUT & EDUCATION ================= */}
        <div id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* About Me Card */}
            <div className="rounded-2xl border-2 border-black dark:border-white p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">About Me</h3>
              <p className="opacity-70 leading-relaxed mb-4 text-sm md:text-base">
                I&apos;m a Computer Engineering student at K.K. Wagh Institute of Engineering Education & Research,
                Nashik, currently pursuing my B.Tech degree (2023-2027). With hands-on experience in full-stack
                development using React, Next.js, Node.js, and database technologies like PostgreSQL and MongoDB,
                I enjoy building scalable web applications and immersive VR experiences.
              </p>
              <p className="opacity-70 leading-relaxed text-sm md:text-base">
                Currently working as a Web Development Intern at Ayunext Solutions and actively contributing
                to technical communities like CSI, FOSS Club, and MLSC. I&apos;m passionate about turning complex
                problems into elegant solutions through clean code and innovative technology.
              </p>
            </div>

            {/* Education Card */}
            <div id="education" className="rounded-2xl border-2 border-black dark:border-white p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Education</h3>
              
              {/* B.Tech */}
              <div className="mb-5 pb-5 border-b border-black/20 dark:border-white/20">
                <h4 className="text-base md:text-lg font-bold mb-1">Bachelor of Technology in Computer Engineering</h4>
                <p className="text-sm opacity-80 mb-0.5">K.K. Wagh Institute of Engineering Education & Research</p>
                <p className="text-xs opacity-70">2023 - 2027 | Nashik, Maharashtra</p>
              </div>

              {/* 12th */}
              <div className="mb-5 pb-5 border-b border-black/20 dark:border-white/20">
                <h4 className="text-base md:text-lg font-bold mb-1">Higher Secondary (12th) - Science</h4>
                <p className="text-sm opacity-80 mb-0.5">K.D Gavit Secondary and Higher Secondary School</p>
                <p className="text-xs opacity-70">2023 | Grade: 74.67%</p>
              </div>

              {/* 10th */}
              <div>
                <h4 className="text-base md:text-lg font-bold mb-1">Secondary School (10th)</h4>
                <p className="text-sm opacity-80 mb-0.5">Jay Ambe International School, Bharuch</p>
                <p className="text-xs opacity-70">Grade: 90%</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/about" 
              className="inline-block px-6 py-3  border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Know More About Me →
            </Link>
          </div>
        </div>

        {/* ================= QUICK STATS ================= */}
        <div className="px-4 md:px-6 pb-16 md:pb-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {portfolioStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border-2 border-black dark:border-white bg-white/90 dark:bg-black/90 p-5 md:p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] opacity-60">
                  {stat.label}
                </p>
                <div className="text-3xl md:text-4xl font-black mb-2">
                  {stat.value}
                </div>
                <p className="text-sm leading-relaxed opacity-70">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div id="experience" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">Experience</h2>
          
          <div className="space-y-8">
            {/* Ayunext Solutions */}
            <div className="rounded-2xl border-2 border-black dark:border-white p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Company Logo/Image */}
                <div className="flex-shrink-0">
                  <div className="w-full md:w-64 h-64 rounded-xl border border-black dark:border-white flex items-center justify-center bg-white p-4">
                    <img 
                      src="/ayunext.png" 
                      alt="Ayunext Solutions" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Web Development Intern</h3>
                      <p className="text-base md:text-lg opacity-80 mb-1">Ayunext Solutions</p>
                      <p className="text-sm opacity-70">Nashik, Maharashtra</p>
                    </div>
                    <div className="text-sm opacity-70 mt-2 md:mt-0">1st Sept 2025 – 30th Oct 2025</div>
                  </div>
                  
                  <div className="space-y-2 text-sm md:text-base opacity-70">
                    <p>• Developing and maintaining web applications using modern technologies</p>
                    <p>• Working on full-stack projects with React, Next.js, and Node.js</p>
                    <p>• Collaborating with the team to deliver high-quality software solutions</p>
                    <p>• Implementing responsive designs and optimizing application performance</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs px-3 py-1 border-2 border-black dark:border-white rounded-md">React.js</span>
                    <span className="text-xs px-3 py-1 border-2 border-black dark:border-white rounded-md">Next.js</span>
                    <span className="text-xs px-3 py-1 border-2 border-black dark:border-white rounded-md">Node.js</span>
                    <span className="text-xs px-3 py-1 border-2 border-black dark:border-white rounded-md">Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/experience" 
              className="inline-block px-6 py-3  border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              View All Experience →
            </Link>
          </div>
        </div>

        {/* ================= SKILLS ================= */}
        <div id="skills" className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">Technical Skills</h2>
            <p className="text-center opacity-60 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm md:text-base">
              Technologies and tools I use to bring ideas to life
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {/* Programming Languages */}
              <div className="group rounded-2xl md:rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-black p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <h4 className="text-xl md:text-2xl font-bold mb-6 text-center">Programming Languages</h4>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-6">
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
                        alt="C"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">C</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" 
                        alt="C++"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">C++</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                        alt="JavaScript"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" 
                        alt="SQL"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">SQL</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                        alt="HTML"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">HTML</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                        alt="CSS"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">CSS</span>
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="group rounded-2xl md:rounded-3xl border-2 border-black dark:border-white bg-white dark:bg-black p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <h4 className="text-xl md:text-2xl font-bold mb-6 text-center">Frameworks & Libraries</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                        alt="React.js"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">React.js</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                        alt="Node.js"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
                        alt="Express.js"
                        className="w-full h-full object-contain dark:invert"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">Express.js</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <img 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                        alt="Next.js"
                        className="w-full h-full object-contain dark:invert"
                      />
                    </div>
                    <span className="text-xs font-medium text-center opacity-80">Next.js</span>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/skills" 
              className="inline-block px-6 py-3  border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              View All Skills →
            </Link>
          </div>
        </div>

        {/* ================= PROJECTS ================= */}
        <div id="projects" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Project 1 */}
            <div className="rounded-2xl border-2 border-black dark:border-white bg-white dark:bg-black overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              {/* Project Image */}
              <div className="w-full h-56 md:h-76 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <img 
                  src="/deptproj.png" 
                  alt="Full-Stack Web Application" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3">UniMail Pro</h3>
                <p className="text-sm md:text-base opacity-70 mb-4 leading-relaxed">
                  A centralized communication platform that bridges the gap between students, faculties, and departments within an educational institution. UniMail Pro streamlines announcements, event notifications, and important updates with role-based access control and real-time messaging.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1.5 border-2 border-black dark:border-white rounded-md font-medium">React.js</span>
                  <span className="text-xs px-3 py-1.5 border-2 border-black dark:border-white rounded-md font-medium">Node.js</span>
                  <span className="text-xs px-3 py-1.5 border-2 border-black dark:border-white rounded-md font-medium">Express.js</span>
                  <span className="text-xs px-3 py-1.5 border-2 border-black dark:border-white rounded-md font-medium">PostgreSQL</span>
                  <span className="text-xs px-3 py-1.5 border-2 border-black dark:border-white rounded-md font-medium">Socket.io</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://unimail-kkwieer.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a 
                    href="https://github.com/Hrishikesh-Gavai/UniMail-KKWIEER" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-2xl border-2 border-black dark:border-white bg-white dark:bg-black overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              {/* Project Image */}
              <div className="w-full h-56 md:h-76 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <img 
                  src="/csi.png" 
                  alt="VR Experience Development" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3">CSI-KKWIEER</h3>
                <p className="text-sm md:text-base opacity-70 mb-4 leading-relaxed">
                  Official website for the Computer Society of India Student Chapter at K.K. Wagh Institute. Features event management, member profiles, and blog system to showcase technical activities and achievements of the student community.
                  It also hosted anaptitude test on its very own portal developed by Technical Team of CSI
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1.5 border-2 border-black dark:border-white rounded-md font-medium">Next.js</span>
                  <span className="text-xs px-3 py-1.5 border-2 border-black dark:border-white rounded-md font-medium">React.js</span>
                  <span className="text-xs px-3 py-1.5 border-2 border-black dark:border-white rounded-md font-medium">Tailwind CSS</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://csi-kkwieer.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-300"
                  >
                    Live Demo
                  </a>
                  <a 
                    href="https://github.com/Sarthak2477/CSI-KKWIEER" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/projects" 
              className="inline-block px-6 py-3  border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              View All Projects →
            </Link>
          </div>
        </div>

        {/* ================= CONTACT ME ================= */}
        <div id="contact" className="py-16 md:py-24 px-4 md:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10">Contact Me</h2>
          
          <div className="rounded-2xl border-2 border-black dark:border-white p-8 md:p-12 hover:shadow-xl transition-all duration-300">
            {/* Location */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
              </svg>
              <p className="text-lg md:text-xl font-semibold">Nashik, Maharashtra, India</p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <a
                href="https://github.com/Dhruvesh05"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="GitHub"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/dhruvesh-patil-a31917280/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href="https://leetcode.com/Dhruvesh_Kashinath_Patil/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-[#FFA116] hover:text-white hover:border-[#FFA116] transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="LeetCode"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com/dhruvesh810220"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="mailto:dhruveshpatil7777@gmail.com"
                className="group w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-black dark:border-white flex items-center justify-center hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="Gmail"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm md:text-base opacity-70 mb-6">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-300 font-semibold"
              >
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        {/* <div id="contact" className="py-16 md:py-24 px-4 md:px-6 text-center">
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
        </div> */}
      
      </section>
    </main>
  );
}
