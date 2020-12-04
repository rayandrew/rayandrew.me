import type { OpenGraph } from 'next-seo/lib/types'

import author from './author'
import { altLanguage } from './site'

export const title = author.name
export const siteName = `${author.name} - ${author.title}`
// export const titleTemplate = `%s - ${author.name}`
export const description = `Check how ${author.name} (Computer Science Researcher) build scalable and distributed systems`
export const siteUrl = `https://${author.domain}`

export const keywords =
  'Computer Science, CS, Researcher, CS Researcher, System, Cloud, Computer Systems, Distributed Systems, Storage Systems, Machine Learning, ML, Operating System, OS, Chicago, GIK Lab, ITB, Institut Teknologi Bandung, Emmerich'

export const twitter = {
  handle: '@rayandrew_os',
  site: '@rayandrew_os',
  cardType: 'summary',
}

export const openGraph: OpenGraph = {
  type: 'website',
  locale: altLanguage,
  url: siteUrl,
  title,
  description,
  site_name: siteName,
  images: [
    {
      url: `https://${author.domain}/ray.png`,
      width: 389,
      height: 467,
      alt: author.name,
    },
    {
      url: `https://${author.domain}/logo.png`,
      width: 512,
      height: 512,
      alt: `Logo of ${author.name}`,
    },
  ],
}

const seo = {
  title,
  // titleTemplate,
  keywords,
  description,
  siteUrl,
  twitter,
  openGraph,
}

export default seo
