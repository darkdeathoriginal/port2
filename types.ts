export enum Page {
  HOME = 'HOME',
  PROJECTS = 'PROJECTS',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
}

export interface Stat {
  label: string;
  value: number;
  max: number;
  icon: string; 
}
