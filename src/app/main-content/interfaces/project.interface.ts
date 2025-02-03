export interface Project {
  title: string;
  path: string;
  overlay?: string;
  description: string;
  implementation: string;
  duration: string;
  skills: { path: string; name: string }[];
  gitHub: string;
  liveServer?: string; 
}