import type { LucideIcon } from 'lucide-react';

export interface Highlight {
  value: string;
  label: string;
}

export interface Intro {
  name: string;
  title: string;
  summary: string;
  highlights: Highlight[];
  availability?: string;
  contactEmail: string;
  /** File names inside public/, shown as download buttons when set. */
  cvFile?: string;
  cvShortFile?: string;
  profileImage: string;
  about: {
    lead: string;
    paragraphs: string[];
  };
}

export interface Experience {
  title: string;
  company: string;
  periods: string[];
  /** How many bullets show before the "Show more" toggle. Defaults to all of them. */
  highlightCount?: number;
  responsibilities: string[];
}

export interface Project {
  title: string;
  technologies: string[];
  description: string;
  results?: string;
  /** Only projects that can be shown publicly carry a link. */
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  thesis: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  dates: string;
}

export interface SkillGroup {
  name: string;
  icon: LucideIcon;
  /** Used in production in the past year. */
  core: string[];
  /** Also worked with. */
  more: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface SectionDef {
  id: string;
  label: string;
}
