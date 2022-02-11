import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../navbar/index'
import styles from '../../styles/Home.module.css'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Pokedex App</title>
                <meta name="description" content="Pokedex App by Nazareno del Río" />
                <link rel="icon" href="/favicon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
            </Head>
            <div className={styles.topTitle}>
                <Image src='/pokedex.svg' alt='Pokedex Icon' width={64} height={64} />
                <h1 className={styles.title}>Pokedex</h1>
            </div>
            <div className={styles.container}>{children}</div>
            <Navbar />

        </>
    )
}