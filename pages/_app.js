import Layout from '../components/layout'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="preload" href="https://siren-production.freetls.fastly.net/static/fonts/franklin/franklin-normal-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
      <link rel="preload" href="https://siren-production.freetls.fastly.net/static/fonts/franklin/franklin-normal-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
