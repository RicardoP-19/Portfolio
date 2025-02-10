export interface Project {
  title: string;
  path: string;
  overlay?: string;
  descriptionEn: string;
  descriptionDe: string;
  implementationEn: string;
  implementationDe: string;
  durationEn: string;
  durationDe: string;
  skills: { path: string; name: string }[];
  gitHub: string;
  liveTest: string; 
}