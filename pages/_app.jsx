import '../styles/globals.css'
import Layout from './../components/Layout/index';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Head from 'next/head';
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
      const handleRouteChange = (url) => {
        ga.pageview(url)
      }
      //When the component is mounted, subscribe to router changes
      //and log those page views
      router.events.on('routeChangeComplete', handleRouteChange)
  
      // If the component is unmounted, unsubscribe
      // from the event with the `off` method
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events])

    return (<>
        <Head>
            <title>Data Pokemon</title>
            <meta name="description" content="Data Pokemon is a web page to inform about all the pokemons and their statistics in the saga games. Enjoy it. It's free." />
            <link rel="icon" href="/favicon.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <ApolloProvider client={client}>
            <Layout>
                < Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    </>
    )
}

export default MyApp