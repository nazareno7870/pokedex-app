import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './navbar/index.jsx';
import Image from 'next/image'
import PokemonList from './PokemonList/index';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Pokedex App</title>
        <meta name="description" content="Pokedex App by Nazareno del Río" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={styles.topTitle}>
        <Image src='/pokedex.svg' alt='Pokedex Icon' width={64} height={64} />
        <h1 className={styles.title}>Pokedex</h1>
      </div>
      <PokemonList/>
      <Navbar/>
    </div>
  )
}
