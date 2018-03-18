export interface Author {
  about: {
    fullName: string;
    img: string;
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
  educations: Education[];
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

export interface Education {
  institution: string;
  period: number;
  specialization: string;
  upSkills: string[];
}
