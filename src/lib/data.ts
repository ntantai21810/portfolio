import { Project, Skill, Experience, SocialLink, NavItem } from "@/types";

export const siteConfig = {
  name: "John Doe",
  title: "Full Stack Developer",
  description:
    "A passionate full-stack developer crafting beautiful, performant web experiences with modern technologies.",
  email: "hello@johndoe.dev",
  location: "San Francisco, CA",
  url: "https://johndoe.dev",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Three.js", level: 75, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored team of 5 junior developers",
      "Reduced page load times by 40% through optimization",
    ],
    type: "work",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description: [
      "Built and launched 3 production applications from scratch",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with design team on UI/UX improvements",
    ],
    type: "work",
  },
  {
    id: "3",
    title: "B.S. Computer Science",
    company: "University of California",
    location: "Berkeley, CA",
    startDate: "Aug 2016",
    endDate: "May 2020",
    description: [
      "GPA: 3.8/4.0",
      "Focus on Software Engineering and Machine Learning",
      "Dean's List all semesters",
    ],
    type: "education",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory, payments, and admin dashboard.",
    longDescription:
      "Built a scalable e-commerce solution handling thousands of concurrent users with features like real-time inventory tracking, Stripe integration, and comprehensive admin analytics.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "AI Chat Application",
    description:
      "Real-time chat app with AI-powered responses and sentiment analysis.",
    image: "/projects/chat.jpg",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI", "MongoDB"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio Dashboard",
    description:
      "Investment portfolio tracker with real-time market data and analytics.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    category: "frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Task Management API",
    description:
      "RESTful API for task management with authentication and real-time updates.",
    image: "/projects/api.jpg",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
    category: "backend",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "3D Product Configurator",
    description:
      "Interactive 3D product customization tool for e-commerce.",
    image: "/projects/3d.jpg",
    technologies: ["Three.js", "React", "WebGL", "TypeScript"],
    category: "frontend",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "6",
    title: "DevOps Automation Suite",
    description:
      "Infrastructure automation tools for CI/CD and cloud deployment.",
    image: "/projects/devops.jpg",
    technologies: ["Python", "Docker", "Kubernetes", "Terraform", "AWS"],
    category: "backend",
    githubUrl: "https://github.com",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Email", url: "mailto:hello@johndoe.dev", icon: "mail" },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
];
