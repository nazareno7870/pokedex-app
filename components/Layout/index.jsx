import Image from 'next/image'
import Navbar from '../navbar/index'
import styles from '../../styles/Home.module.css'
import Searcher from '../Searcher/Searcher'
import Link from 'next/link'
import SideBar from '../Sidebar'

export default function Layout({ children }) {
    return (
        <main className={styles.main}>
            <SideBar />
            <div className={styles.container}>
                <div className={styles.topTitle}>
                    <Link href='/'><a ><Image src='/pokedex.svg' alt='Pokedex Icon' width={64} height={64} /></a></Link>
                    <Link href='/'><a className={styles.title}>Pokedex</a></Link>
                </div>

                <Searcher />
                {children}</div>
            <Navbar />

        </main>
    )
}