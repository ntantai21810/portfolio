export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "tools" | "other";
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  type: "work" | "education";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
