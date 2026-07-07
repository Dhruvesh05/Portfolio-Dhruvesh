export type PortfolioScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type PortfolioEntry = {
  slug: string;
  title: string;
  org: string;
  desc: string;
  image: string;
  live?: string;
  github?: string;
  features?: string[];
  screenshots?: PortfolioScreenshot[];
};

export const internshipProjects: PortfolioEntry[] = [
  {
    slug: "ayunext-solutions",
    title: "Ayunext Solutions (2-Month Internship)",
    org: "Ayunext Solutions",
    desc: "Worked on real-world web development tasks during a 2-month internship, contributing to live projects and implementing production-ready features in a professional environment. Gained hands-on industry experience, strengthened problem-solving skills, and delivered meaningful features under real deadlines.",
    image: "/ayunext.png",
    live: "https://www.ayunexts.com/",
    github: "https://github.com/Dhruvesh05/ayunexts",
    features: ["Production-ready feature work", "Real-world team workflow", "Responsive UI implementation"],
    screenshots: [
      { src: "/ayunext.png", alt: "Ayunext project preview", caption: "Primary project preview" },
    ],
  },
];

export const clientProjects: PortfolioEntry[] = [
  {
    slug: "shubh-construction",
    title: "Full Stack Developer",
    org: "Shubh Construction - Client Project",
    desc: "Shubh Constructions is a full-stack construction management platform built with Next.js, Node.js, Express, Supabase and Cloudinary. It streamlines project tracking, client bookings, and expense management through a centralized digital system with real-time updates, secure APIs, and an intuitive user interface.",
    image: "/shubhcons.png",
    live: "https://shubhcons.in",
    github: "https://github.com/Dhruvesh05/full_stack",
    features: ["Client booking flow", "Expense and project tracking", "Cloudinary and Supabase integration"],
    screenshots: [
      { src: "/shubhcons.png", alt: "Shubh Construction project preview", caption: "Landing page preview" },
    ],
  },
];

export const groupProjects: PortfolioEntry[] = [
  {
    slug: "synthetic-dataset-generator",
    title: "Synthetic Dataset Generator",
    org: "FastAPI + React + CTGAN",
    desc: "Web application for generating privacy-safe synthetic tabular datasets from uploaded CSV files. The backend uses CTGAN from SDV to learn the structure of the source data, generate synthetic rows, and return quality metrics plus downloadable CSV output through a streamlined upload-and-status workflow.",
    image: "/sdg.png",
    github: "https://github.com/Dhruvesh05/Synthetic_Dataset_Generator",
    features: ["CSV upload and processing", "CTGAN-based synthesis", "Quality metrics and download flow"],
    screenshots: [
      { src: "/sdg.png", alt: "Synthetic Dataset Generator project preview", caption: "Main application preview" },
    ],
  },
  {
    slug: "skinlytix",
    title: "Skinlytix: Intelligent skincare recommendation engine powered by machine learning",
    org: "React + Spring Boot",
    desc: "Skinlytix is an AI-powered skincare recommendation system that analyzes cosmetic ingredients using machine learning. It provides personalized product suggestions, identifies similar products and affordable dupes, and visualizes skincare market trends.",
    image: "/skinlytix.png",
    live: "https://skinlytics-lyart.vercel.app/",
    github: "https://github.com/Dhruvesh05/GlowGuide",
    features: ["Ingredient analysis", "AI-powered recommendations", "Trend visualization"],
    screenshots: [
      { src: "/skinlytix.png", alt: "Skinlytix project preview", caption: "Primary project preview" },
    ],
  },
  {
    slug: "csi-kkwieer",
    title: "CSI-KKWIEER (CSI Student Chapter Website)",
    org: "Student Chapter Project",
    desc: "An official website for the Computer Society of India (CSI) student chapter at KKWIEER, showcasing events, members, and technical activities. Improved visibility and communication for the student chapter by providing a centralized and professional online presence.",
    image: "/csi.png",
    live: "https://csi-kkwieer.vercel.app",
    github: "https://github.com/Sarthak2477/CSI-KKWIEER",
    features: ["Event showcase", "Member and activity updates", "Professional public presence"],
    screenshots: [
      { src: "/csi.png", alt: "CSI website preview", caption: "Homepage preview" },
    ],
  },
  {
    slug: "linktrace-3d",
    title: "LinkTrace-3D Flow Visualizer & Bug Explorer",
    org: "Development Tool",
    desc: "A 3D visualization tool that maps file-to-file connections and error flows within a codebase, helping developers understand project structure and debug efficiently. Enhanced code comprehension and debugging by transforming complex dependencies into an interactive visual experience.",
    image: "/linktrace.png",
    live: "https://link-trace-3-d-flow-visualizer-bug.vercel.app/",
    github: "https://github.com/Dhruvesh05/LinkTrace-3D-Flow-Visualizer-Bug-Explorer",
    features: ["3D dependency mapping", "Error flow exploration", "Developer debugging support"],
    screenshots: [
      { src: "/linktrace.png", alt: "LinkTrace project preview", caption: "Visualizer preview" },
    ],
  },
  {
    slug: "unimail-pro",
    title: "UniMail Pro – Department Dispatch Mail System",
    org: "University Project",
    desc: "A centralized email management system for university departments, enabling structured email drafting, translation, storage, and export of official communications. Streamlined departmental communication workflows and reduced manual effort in managing and exporting official emails.",
    image: "/deptproj.png",
    live: "https://unimail-kkwieer.vercel.app/",
    github: "https://github.com/Hrishikesh-Gavai/UniMail-KKWIEER",
    features: ["Email drafting workflow", "Translation and export tools", "Department communication hub"],
    screenshots: [
      { src: "/deptproj.png", alt: "UniMail project preview", caption: "Dashboard preview" },
    ],
  },
  {
    slug: "prochat",
    title: "ProChat : Real-Time Chat Application",
    org: "React + Spring Boot",
    desc: "A full-stack real-time chat application enabling users to connect and exchange messages instantly using a modern React frontend and Spring Boot backend. Demonstrated scalable full-stack architecture and real-time communication, simulating industry-grade chat systems.",
    image: "/prochat.png",
    live: "https://chat-app-frontend-nine-sigma.vercel.app/",
    github: "https://github.com/Dhruvesh05/chat-app-frontend",
    features: ["Instant messaging", "Spring Boot backend", "Real-time chat UI"],
    screenshots: [
      { src: "/prochat.png", alt: "ProChat project preview", caption: "Chat interface preview" },
    ],
  },
];

export const technicalExperience: PortfolioEntry[] = [
  {
    slug: "ayunext-solutions",
    title: "Web Development Intern",
    org: "Ayunext Solutions",
    desc: "Worked on real-world web development tasks during a 2-month internship, contributing to live projects and implementing production-ready features in a professional environment. Gained hands-on industry experience, strengthened problem-solving skills, and delivered meaningful features under real deadlines.",
    image: "/ayunext.png",
    live: "https://www.ayunexts.com/",
    github: "https://github.com/Dhruvesh05/ayunexts",
    features: ["Internship deliverables", "Team-based development", "Production-ready feature work"],
    screenshots: [
      { src: "/ayunext.png", alt: "Ayunext experience preview", caption: "Internship preview" },
    ],
  },
  {
    slug: "shubh-construction",
    title: "Full Stack Developer",
    org: "Shubh Construction - Client Project",
    desc: "Shubh Constructions is a full-stack construction management platform built with Next.js, Node.js, Express, Supabase and Cloudinary. It streamlines project tracking, client bookings, and expense management through a centralized digital system with real-time updates, secure APIs, and an intuitive user interface.",
    image: "/shubhcons.png",
    live: "https://shubhcons.in",
    github: "https://github.com/Dhruvesh05/full_stack",
    features: ["Client-side project ownership", "CRUD and tracking workflows", "Modern web stack"],
    screenshots: [
      { src: "/shubhcons.png", alt: "Shubh Construction experience preview", caption: "Client work preview" },
    ],
  },
  {
    slug: "skinlytix",
    title: "ML + Full Stack Developer",
    org: "Skinlytix",
    desc: "Skinlytix is an AI-powered skincare recommendation system that analyzes cosmetic ingredients using machine learning. It provides personalized product suggestions, identifies similar products and affordable dupes, and visualizes skincare market trends.",
    image: "/skinlytix.png",
    live: "https://skinlytics-lyart.vercel.app/",
    github: "https://github.com/Dhruvesh05/GlowGuide",
    features: ["Machine learning workflows", "Product recommendation logic", "Data-driven UX"],
    screenshots: [
      { src: "/skinlytix.png", alt: "Skinlytix experience preview", caption: "ML project preview" },
    ],
  },
  {
    slug: "csi-website",
    title: "Web Team Member",
    org: "CSI-KKWIEER Official Website",
    desc: "An official website for the Computer Society of India (CSI) student chapter at KKWIEER, showcasing events, members, and technical activities. Improved visibility and communication for the student chapter by providing a centralized and professional online presence.",
    image: "/csi.png",
    live: "https://csi-kkwieer.vercel.app",
    github: "https://github.com/Sarthak2477/CSI-KKWIEER",
    features: ["Student chapter support", "Website maintenance", "Public-facing UI work"],
    screenshots: [
      { src: "/csi.png", alt: "CSI experience preview", caption: "Website preview" },
    ],
  },
  {
    slug: "departmental-project",
    title: "Full Stack Developer",
    org: "UniMail Pro - Department Project",
    desc: "A centralized email management system for university departments, enabling structured email drafting, translation, storage, and export of official communications. Streamlined departmental communication workflows and reduced manual effort in managing and exporting official emails.",
    image: "/deptproj.png",
    live: "https://unimail-kkwieer.vercel.app/",
    github: "https://github.com/Hrishikesh-Gavai/UniMail-KKWIEER",
    features: ["Mail workflow automation", "Department collaboration", "Structured communication"],
    screenshots: [
      { src: "/deptproj.png", alt: "UniMail experience preview", caption: "Department project preview" },
    ],
  },
];

export const clubExperience = [
  { title: "Core Member", org: "CSI KKWIEER", image: "/csilogo.png" },
  { title: "Active Member", org: "FOSS Club KKWIEER", image: "/foss.png" },
  { title: "Technical Member", org: "MLSC KKWIEER", image: "/mlsc.png" },
  { title: "Event Team Member", org: "INNOV-ERA 2025", image: "/innovera.png" },
];

export const projectEntries = [
  ...internshipProjects,
  ...clientProjects,
  ...groupProjects,
];

export const experienceEntries = [...technicalExperience];

export function getProjectBySlug(slug: string) {
  return projectEntries.find((entry) => entry.slug === slug);
}

export function getExperienceBySlug(slug: string) {
  return experienceEntries.find((entry) => entry.slug === slug);
}