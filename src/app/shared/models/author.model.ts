export interface Author {
  about: {
    fullName: string;
    phone: string;
    email: string;
    git: string
  };
  skills: {
    hard: string[];
    soft: string[];
    tools: string[];
    software: string[];
    languages: string[];
  };
  experiences: Experience[];
  educations: Educations[];
}

export interface Experience {
  customer: string;
  project: string[];
  teamSize: string;
  projectRole: string;
  tasksPerformed: string[];
  environment: string[];
  period: string;
}

export interface Educations {
  institution: string;
  period: number;
  specialization: string;
  upSkills: string[];
}
