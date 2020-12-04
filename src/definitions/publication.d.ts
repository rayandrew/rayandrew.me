export type PublicationStatus = 'ready' | 'in preparation' | 'published'

export interface Publication {
  title: string
  year?: number
  status: PublicationStatus
  authors: string[]
  link?: string
}

export type Publications = Publication[]
