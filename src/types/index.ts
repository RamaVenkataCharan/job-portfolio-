export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'ai-ml' | 'web-dev' | 'tools' | 'healthcare';
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  inDevelopment?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  icon: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { name: string; percentage: number; color: string }[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}
