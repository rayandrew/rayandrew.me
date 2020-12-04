export interface Project {
  title: string
  description: string
}

export interface Experience {
  institution: string
  link: string
  title: string
  projects?: Project[]
  from: number | string
  to: number | string
}

export type Experiences = Experience[]
