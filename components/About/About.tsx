import Image from "next/image";

export default function AboutSection() {
	return (
		<section className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="mb-12 sm:mb-16 md:mb-20">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
						About Me
					</h2>
				</div>

				{/* Profile Section */}
				<div className="mb-16 sm:mb-20 md:mb-24">
					<div className="border border-black dark:border-white p-6 sm:p-8 md:p-10 hover:opacity-95 transition-all duration-300 bg-white dark:bg-black">
						<div className="grid grid-cols-1 md:grid-cols-[300px,1fr] lg:grid-cols-[350px,1fr] gap-6 sm:gap-8 md:gap-12 items-start">
							{/* Profile Image & Buttons */}
							<div className="flex flex-col items-center md:items-start gap-4">
								<div className="relative">
									<Image
										src="/profileimage.png"
										alt="Profile"
										width={288}
										height={288}
										className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover shadow-2xl rounded-xl"
									/>
								</div>
								
								{/* Social & Resume Buttons */}
								<div className="flex flex-wrap gap-2 justify-center md:justify-start w-full">
									<a
										href="https://github.com/Dhruvesh05/"
										target="_blank"
										rel="noopener noreferrer"
										className="w-9 h-9 flex items-center justify-center border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-full"
										aria-label="GitHub"
									>
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
									</a>
									
									<a
										href="https://linkedin.com/in/dhruvesh-patil-a31917280/"
										target="_blank"
										rel="noopener noreferrer"
										className="w-9 h-9 flex items-center justify-center border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-full"
										aria-label="LinkedIn"
									>
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
										</svg>
									</a>
									
									<a
										href="mailto:dhruveshpatil7777@example.com"
										className="w-9 h-9 flex items-center justify-center border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-full"
										aria-label="Email"
									>
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
										</svg>
									</a>
									
									<a
										href="https://drive.google.com/file/d/1a-Q6RMehygXArEbf2a_IwLqzub59akoK/view?usp=drive_link"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-md font-medium"
									>
										<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
										</svg>
										Resume
									</a>
								</div>
							</div>

							{/* Description */}
							<div className="space-y-4 sm:space-y-6 text-left">
								<div>
									<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
										Dhruvesh Patil
									</h3>
									<p className="text-black dark:text-white opacity-70 text-base sm:text-lg font-medium">
										Computer Engineering Student
									</p>
								</div>
								<div className="space-y-6 text-black dark:text-white opacity-70 leading-relaxed text-sm sm:text-base">
								<p>
									Hello, I&apos;m <span className="font-semibold">Dhruvesh Patil</span>
								</p>
								<p>
									I&apos;m a Computer Engineering student with a strong interest in web development and building real-world, user-focused applications using modern technologies.
								</p>

								<div>
									<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
										My Journey
									</h3>
									<p>
										My journey into technology started during my early college years, where I explored web development alongside core computer science fundamentals. Over time, I moved from basic projects to more structured, real-world applications, gaining hands-on experience through academic projects, personal builds, and internship-oriented work. I believe in learning by building and constantly refining my skills through practice and experimentation.
									</p>
								</div>

								<div>
									<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
										What I do
									</h3>
									<p>
										I work primarily as a frontend-focused developer with experience in React.js and modern UI design. I&apos;ve also built full-stack applications using Java, Spring Boot, and REST APIs, connecting them with React frontends. I enjoy creating clean, responsive interfaces, structuring scalable codebases, and turning complex ideas into simple, usable solutions.
									</p>
								</div>

								<div>
									<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
										Education
									</h3>
									<p className="font-medium">K.K. Wagh Institute of Engineering Education and Research, Nashik</p>
									<p className="text-sm opacity-80">B.Tech in Computer Engineering (2022 – 2026)</p>
								</div>

								<div>
									<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
										Interests
									</h3>
									<p>
										Beyond coding, I enjoy building portfolio-ready projects, experimenting with new UI/UX ideas, and exploring emerging technologies like AI-powered tools and automation. I actively work on improving my problem-solving skills through DSA practice and stay updated with industry trends by reading tech blogs and exploring open-source projects.
									</p>
								</div>

									<p className="italic">
										I&apos;m currently preparing for internships and open to opportunities where I can learn, contribute, and grow as a software developer.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

