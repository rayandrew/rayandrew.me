import { NextSeo, NextSeoProps } from 'next-seo'

import seo from '@configs/seo'

import { isDev } from '@utils/env'

type SeoProps = Omit<NextSeoProps, 'titleTemplate'> & {
  title: string
  description: string
}

const SEO: React.FC<SeoProps> = (props) => (
  <NextSeo {...props} titleTemplate={seo.titleTemplate} />
)

if (isDev) {
  SEO.displayName = 'SEO'
}

export default SEO
