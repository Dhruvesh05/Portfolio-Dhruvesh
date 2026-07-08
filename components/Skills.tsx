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

  const certifications = [
    { 
      title: "Unity Essentials",
      issuer: "Unity",
      date: "Sep 2025",
      description: "Basics of Unity engine and VR development.",
      link: "https://drive.google.com/file/d/1IqYnbiqyvEtLs3fVyPGlNu8Yy6mf1JQi/view?usp=drive_link"
    },
    { 
      title: "RDBMS PostgreSQL",
      issuer: "Spoken Tutorial, IIT Bombay",
      date: "Jul 2025",
      description: "Core DBMS concepts and SQL using PostgreSQL.",
      link: "https://drive.google.com/file/d/1S4RkXxYQlep8DA-OeS96HQk7nUknMz47/view?usp=drive_link"
    },
  ];

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
                className="rounded-2xl border-2 border-black dark:border-white bg-white dark:bg-black p-6 md:p-8 hover:shadow-2xl transition-all duration-300"
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
                          className={`w-full h-full object-contain ${
                            skill.name === 'Express.js' || skill.name === 'Next.js' || skill.name === 'GitHub' 
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

        {/* Certifications Section */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 md:mb-10 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 border-black dark:border-white bg-white dark:bg-black p-6 md:p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black dark:border-white flex items-center justify-center flex-shrink-0 bg-black text-white dark:bg-white dark:text-black">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-2 13l-3-3 1.41-1.41L10 12.17l5.59-5.59L17 8l-7 7z"/>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg md:text-xl font-bold mb-1">{cert.title}</h4>
                    <p className="text-sm opacity-70">{cert.issuer}</p>
                    <p className="text-xs opacity-60 mt-1">{cert.date}</p>
                    <p className="text-sm opacity-80 mt-2">{cert.description}</p>
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-4 py-2.5 text-sm border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 font-medium"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
