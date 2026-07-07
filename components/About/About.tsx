import Image from "next/image";

export default function AboutSection() {
  const focusCards = [
    {
      title: "Frontend-first mindset",
      description:
        "I shape interfaces that feel clear, responsive, and deliberate across desktop and mobile screens.",
    },
    {
      title: "Full-stack growth",
      description:
        "My work spans React, Next.js, Java, Spring Boot, and REST APIs with an emphasis on practical delivery.",
    },
    {
      title: "Portfolio building",
      description:
        "I like shipping projects that look polished, solve real problems, and show measurable progress.",
    },
  ];

  const journeyPoints = [
    "Started with web development and core CS fundamentals during college.",
    "Moved from small experiments to more structured, production-style builds.",
    "Learned by shipping projects, iterating quickly, and refining UI details.",
  ];

  const interests = [
    "UI/UX exploration",
    "AI-powered tools",
    "Automation",
    "Open-source learning",
    "DSA practice",
    "Portfolio projects",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-neutral-200/70 blur-3xl dark:bg-neutral-800/50" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-black/5 blur-3xl dark:bg-white/5" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-neutral-300/50 blur-3xl dark:bg-neutral-700/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
              <div className="max-w-3xl lg:flex-1">
                <p className="inline-flex items-center rounded-full border border-black/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] opacity-80 backdrop-blur dark:border-white/15 dark:bg-black/70">
                  About Me
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Building elegant web experiences with a practical engineering mindset.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed opacity-70 sm:text-base md:text-lg">
                  I&apos;m a Computer Engineering student who enjoys turning ideas into polished, real-world
                  applications through thoughtful UI, solid architecture, and consistent iteration.
                </p>
              </div>

              <div className="w-full max-w-[220px] self-start lg:mt-2 lg:ml-auto lg:max-w-[240px] xl:max-w-[260px]">
                <div className="group overflow-hidden rounded-[1.75rem] border border-black/15 bg-white/85 shadow-[0_18px_50px_rgba(0,0,0,0.10)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)] dark:border-white/15 dark:bg-black/70">
                  <div className="relative aspect-[4/5] min-h-[200px] max-h-[280px]">
                    <Image
                      src="/profileimage.png"
                      alt="Profile"
                      fill
                      sizes="(max-width: 1024px) 100vw, 260px"
                      className="object-contain object-bottom p-2.5 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/60" />
                  </div>

                  <div className="border-t border-black/10 p-3.5 dark:border-white/10 sm:p-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] opacity-70">
                      Visual focus
                    </p>
                    <p className="mt-2 text-xs leading-relaxed opacity-75 sm:text-sm">
                      Framed to sit beside the intro copy without overpowering the layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {focusCards.map((card) => (
                <div
                  key={card.title}
                  className="group rounded-[1.75rem] border border-black/15 bg-white/85 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.14)] dark:border-white/15 dark:bg-black/70"
                >
                  <p className="text-sm font-bold transition-transform duration-500 group-hover:-translate-y-0.5">{card.title}</p>
                  <p className="mt-3 text-sm leading-relaxed opacity-75">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
              <div className="rounded-[2rem] border border-black/15 bg-white/85 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.10)] backdrop-blur dark:border-white/15 dark:bg-black/70 sm:p-8">
                <h3 className="text-2xl font-black sm:text-3xl">My Journey</h3>
                <div className="mt-6 space-y-4">
                  {journeyPoints.map((point, index) => (
                    <div key={point} className="flex gap-4">
                      <div className="flex flex-col items-center pt-1">
                        <span className="h-3 w-3 rounded-full bg-black dark:bg-white" />
                        {index !== journeyPoints.length - 1 ? (
                          <span className="mt-2 h-full w-px bg-black/20 dark:bg-white/20" />
                        ) : null}
                      </div>
                      <p className="pb-4 text-sm leading-relaxed opacity-75 sm:text-base">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-black/15 bg-gradient-to-br from-white/90 to-neutral-100/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.10)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.16)] dark:border-white/15 dark:from-black/70 dark:to-neutral-900/70">
                  <h3 className="text-2xl font-black">What I Do</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-75">
                    I focus on React.js, modern UI design, Java, Spring Boot, and REST APIs. I like
                    building interfaces that feel easy to use while still being structured enough to scale.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-black/15 bg-white/85 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.10)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(0,0,0,0.16)] dark:border-white/15 dark:bg-black/70">
                  <h3 className="text-2xl font-black">Education</h3>
                  <div className="mt-4 space-y-2 text-sm leading-relaxed opacity-75">
                    <p className="font-semibold opacity-90">
                      K.K. Wagh Institute of Engineering Education and Research, Nashik
                    </p>
                    <p>B.Tech in Computer Engineering (2022 – 2026)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/15 bg-white/85 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.10)] backdrop-blur dark:border-white/15 dark:bg-black/70 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-55">Interests</p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed opacity-75 sm:text-base">
                    Beyond coding, I enjoy building portfolio-ready projects, exploring UI/UX ideas, and
                    experimenting with AI-powered tools and automation while staying sharp with DSA and
                    open-source learning.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-black/15 px-3 py-1.5 text-xs font-medium opacity-80 transition-transform duration-300 hover:-translate-y-0.5 dark:border-white/15"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://drive.google.com/file/d/1a-Q6RMehygXArEbf2a_IwLqzub59akoK/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-black"
              >
                View Resume
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/20 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-xl dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
