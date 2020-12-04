export interface Education {
  institution: string
  description?: string | string[]
  from: number | string
  to: number | string
}

export type Educations = Education[]
