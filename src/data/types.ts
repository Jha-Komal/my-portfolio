export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
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

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}
