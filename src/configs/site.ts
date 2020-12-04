import { name } from './author'

export const lang = 'en'
export const language = 'en-US'
export const altLanguage = 'en_US'

export const githubUrl = 'https://github.com/rayandrew/rayandrew.me'

export const repo = {
  url: githubUrl,
  editUrl: `${githubUrl}/edit/develop`,
  blobUrl: `${githubUrl}/blob/develop`,
}

export const analytics = {
  google: 'G-5EXQEGPMQ0',
}

const site = {
  copyright: `Copyright © ${new Date().getFullYear()} ${name}. All Rights Reserved.`,
  repo,
  lang,
  language,
  altLanguage,
  analytics,
}

export default site
