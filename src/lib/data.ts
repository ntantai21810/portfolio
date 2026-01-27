import { Project, Skill, Experience, SocialLink, NavItem } from "@/types";

export const siteConfig = {
  name: "Tai Nguyen",
  title: "Full Stack Developer",
  description:
    "Passionate developer with a love for creating beautiful and functional web experiences",
  email: "nguyentai21.fit@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  url: "https://portfolio-dun-five-65.vercel.app/",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Redux", level: 85, category: "frontend" },
  { name: "Radix UI", level: 85, category: "frontend" },
  { name: "MUI", level: 80, category: "frontend" },
  { name: "Ant Design", level: 80, category: "frontend" },
  { name: "Framer Motion", level: 80, category: "frontend" },
  { name: "Three.js", level: 70, category: "frontend" },
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "NestJS", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "Kafka", level: 70, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },
  { name: "Prisma", level: 80, category: "backend" },
  // Tools & DevOps
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
  { name: "CI/CD", level: 75, category: "tools" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Full Stack Engineer",
    company: "Cyberlogitec",
    location: "Ho Chi Minh City, Vietnam",
    startDate: "2024",
    endDate: "Present",
    description: [
      "Join a team of developers to migrate a legacy system to a modern tech stack",
      "Work in an Agile environment with a focus on delivering high-quality software",
      "Suggest and implement new features to improve user experience and system performance",
    ],
    type: "work",
  },
  {
    id: "2",
    title: "Front End Developer",
    company: "SENS",
    location: "Ho Chi Minh City, Vietnam",
    startDate: "2022",
    endDate: "2024",
    description: [
      "Join a team of developers to build and maintain web applications for enterprise clients focused on web3",
      "Implemented responsive designs and integrated third-party APIs",
    ],
    type: "work",
  },
  {
    id: "3",
    title: "Software Development Fresher",
    company: "Zalo",
    location: "Ho Chi Minh City, Vietnam",
    startDate: "2022",
    endDate: "2022",
    description: [
      "Build a chat application with high performance and security",
      "Optimize the code structure with clean architecture and SOLID principles",
    ],
    type: "work",
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "ITBee Solution",
    location: "Ho Chi Minh City, Vietnam",
    startDate: "2021",
    endDate: "2022",
    description: [
      "Join a team as intern and then be promoted to full stack developer",
      "Learn and build a web application for enterprise clients",
    ],
    type: "work",
  },
  {
    id: "5",
    title: "Bachelor of Computer Science",
    company: "Ho Chi Minh City University of Science",
    location: "Ho Chi Minh City, Vietnam",
    startDate: "2019",
    endDate: "2023",
    description: [
      "Graduated with honors",
      "Specialized in software engineering and web technologies",
    ],
    type: "education",
  },
];

export const projects: Project[] = [
  {
    id: "3",
    title: "Planning Poker",
    description:
      "A real-time collaborative estimation tool for agile teams to estimate user stories using the Planning Poker technique.",
    longDescription:
      "Built a comprehensive Planning Poker application for agile teams. Features include instant room creation without signup, real-time vote synchronization, role-based interactions (Host, Player, Spectator), Fibonacci estimation deck, issue management, password-protected rooms, session invites, and result export functionality. Supports both dark and light themes.",
    image: "/projects/planning-poker.jpg",
    technologies: ["Next.js", "TypeScript", "WebSocket", "NestJS", "PostgreSQL", "Tailwind"],
    category: "fullstack",
    liveUrl: "https://planning-poker-fe-tau.vercel.app/",
    githubUrl: "https://github.com/ntantai21810/planning-poker",
    featured: true,
  },
  {
    id: "1",
    title: "Watching movies",
    description:
      "A full-featured movie website with movie information and trailers.",
    longDescription:
      "Built a comprehensive movie website featuring movie information and trailers. With the ability to search, filter, and sort movies by genre, release date, and rating. Also with the ability to watch trailers and read reviews.",
    image: "/projects/movies.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    category: "fullstack",
    liveUrl: "https://movies.taidesign.cloud/",
    githubUrl: "https://github.com/movies-demo/frontend",
    featured: true,
  },
  {
    id: "2",
    title: "Food delivery landing page",
    description:
      "A landing page for a food delivery service.",
    longDescription:
      "Developed a landing page for a food delivery service. With responsive design and smooth animations.",
    image: "/projects/food-delivery.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    category: "frontend",
    liveUrl: "https://food-deli.taidesign.cloud/",
    githubUrl: "https://github.com/movies-demo/food-delivery",
    featured: true,
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/ntantai21810", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nguyentai21/", icon: "linkedin" },
  { name: "Twitter", url: "https://x.com/TiNguyn68177148", icon: "twitter" },
  { name: "Email", url: "mailto:nguyentai21.fit@gmail.com", icon: "mail" },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
];
