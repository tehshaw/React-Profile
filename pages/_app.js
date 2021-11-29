import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    
  <Layout> 
      <Head>
        <title>Mike Henshaw</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
      </Head>
     <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
