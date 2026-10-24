export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  principles: { title: string; body: string }[];
  location: string;
  email: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
  images: { main: ProjectImage; sub?: ProjectImage };
  link: string | null;
  linkLabel: string | null;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
}
