import Head from 'next/head'
import type { AppProps } from 'next/app'

import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import GoogleFonts from 'next-google-fonts'

import ColorModeProvider from '@providers/color-mode'

import '../styles/global.css'
import '../styles/custom.css'

import Layout from '@components/layout'
import Nav from '@components/nav'

import author from '@configs/author'
import seo from '@configs/seo'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link href="/manifest.json" rel="manifest" />
        <meta name="keywords" content={seo.keywords} />

        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="format-detection" content="telephone=no" />

        {/* <!-- Android  --> */}
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href="/icons/android-icon-36x36.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/icons/android-icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/icons/android-icon-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/icons/android-icon-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />

        {/* <!-- iOS --> */}
        <meta name="apple-mobile-web-app-title" content={author.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          href="/icons/apple-icon-precomposed.png"
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
        />

        {/* <!-- Safari --> */}
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#000000"
        />

        {/* <!-- Windows  --> */}
        <meta name="msapplication-navbutton-color" content="black" />
        <meta name="msapplication-TileColor" content="black" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* <!-- Pinned Sites  --> */}
        <meta name="application-name" content={author.name} />
        <meta name="msapplication-tooltip" content="Tooltip Text" />
        <meta name="msapplication-starturl" content="/" />

        {/* <!-- Tap highlighting  --> */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* <!-- UC Mobile Browser  --> */}
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />

        {/* <!-- Disable night mode for this page  --> */}
        <meta name="nightmode" content="enable" />

        {/* <!-- Layout mode --> */}
        <meta name="layoutmode" content="fitscreen" />

        {/* <!-- imagemode - show image even in text only mode  --> */}
        <meta name="imagemode" content="force" />

        {/* <!-- Orientation  --> */}
        <meta name="screen-orientation" content="portrait" />
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inter:wght@200;500&display=swap" />
      <DefaultSeo {...seo} />
      <SocialProfileJsonLd
        type="Person"
        name={author.name}
        url={seo.siteUrl}
        sameAs={author.socials}
      />
      <ColorModeProvider useSystemColorMode>
        <Nav />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </>
  )
}

export default App
