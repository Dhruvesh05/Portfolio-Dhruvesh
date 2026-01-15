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
							{/* Profile Image */}
							<div className="flex justify-center md:justify-start">
								<div className="relative">
									<Image
										src="/profileimage.png"
										alt="Profile"
										width={288}
										height={288}
										className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover shadow-2xl"
									/>
								</div>
							</div>

							{/* Description */}
							<div className="space-y-4 sm:space-y-6 text-left">
								<div>
									<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
										Dhruv
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
									<h4 className="font-semibold text-xl sm:text-2xl mb-3">My Journey</h4>
									<p>
										My journey into technology started during my early college years, where I explored web development alongside core computer science fundamentals. Over time, I moved from basic projects to more structured, real-world applications, gaining hands-on experience through academic projects, personal builds, and internship-oriented work. I believe in learning by building and constantly refining my skills through practice and experimentation.
									</p>
								</div>

								<div>
									<h4 className="font-semibold text-xl sm:text-2xl mb-3">What I Do</h4>
									<p>
										I work primarily as a frontend-focused developer with experience in React.js and modern UI design. I&apos;ve also built full-stack applications using Java, Spring Boot, and REST APIs, connecting them with React frontends. I enjoy creating clean, responsive interfaces, structuring scalable codebases, and turning complex ideas into simple, usable solutions.
									</p>
								</div>

								<div>
									<h4 className="font-semibold text-xl sm:text-2xl mb-3">Education</h4>
									<p className="font-medium">K.K. Wagh Institute of Engineering Education and Research, Nashik</p>
									<p className="text-sm opacity-80">B.Tech in Computer Engineering (2022 – 2026)</p>
								</div>

								<div>
									<h4 className="font-semibold text-xl sm:text-2xl mb-3">Interests</h4>
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

