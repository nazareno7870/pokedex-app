import '../styles/globals.css'
import Layout from './../components/Layout/index';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {


    return (
        <ApolloProvider client={client}>
            <Layout>
                < Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp