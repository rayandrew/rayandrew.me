export type PatentStatus = 'pending' | 'accepted'

export interface Patent {
  title: string
  year?: number
  status: PatentStatus
  authors: string[]
}

export type Patents = Patent[]
