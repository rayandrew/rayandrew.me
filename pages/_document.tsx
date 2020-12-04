import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

import ColorModeScript from '@components/color-mode-script'
import GAScript from '@components/ga-script'

import { lang } from '@configs/site'

import { isProd } from '@utils/env'

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <ColorModeScript initialColorMode="system" />
          <Main />
          <NextScript />
          {isProd && <GAScript />}
        </body>
      </Html>
    )
  }
}

export default Document
