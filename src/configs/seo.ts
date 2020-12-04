import author from './author'
import { altLanguage } from './site'

export const title = `${author.name}`
// export const titleTemplate = `%s - ${author.name}`
export const description = `${author.name} - Computer Science Researcher`
export const siteUrl = `https://${author.domain}`

export const keywords =
  'Computer Science, CS, Researcher, System, Computer Systems, Distributed Systems, Storage Systems, Machine Learning, ML, Operating System, OS, Chicago, GIK Lab, ITB, Emmerich'

export const twitter = {
  handle: '@rayandrew_os',
  site: '@rayandrew_os',
  cardType: 'summary_large_image',
}

export const openGraph = {
  type: 'website',
  locale: altLanguage,
  url: `https://${author.domain}`,
  title: `${author.name}`,
  description: `${author.name} - Computer Science Researcher`,
  site_name: `${author.name} - Computer Science Researcher`,
  images: [
    {
      url: '/ray.png',
      width: 1240,
      height: 480,
      alt: `${author.name} - Computer Science Researcher`,
    },
    {
      url: '/ray.png',
      width: 1012,
      height: 506,
      alt: `${author.name} - Computer Science Researcher`,
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
