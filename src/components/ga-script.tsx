import React from 'react'

import { analytics } from '@configs/site'
import { isDev } from '@utils/env'

const GAScript: React.FC = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${analytics.google}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics.google}');
          `,
      }}
    />
  </>
)

if (isDev) {
  GAScript.displayName = 'GoogleAnalyticScript'
}

export default GAScript
