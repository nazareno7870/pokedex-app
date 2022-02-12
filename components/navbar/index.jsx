import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
            <a><Image className={styles.pokeball} src='/pokeball.svg' alt="Pokeball Icon" width={32} height={32}/></a>
            </Link>
        </nav>
    );
}

export default Navbar;