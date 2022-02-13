import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    const [activePokeball, setactivePokeball] = useState(false);

    const handleMenu = () => {
        setshowMenu(prev => !prev)
        setactivePokeball(true)
        setTimeout(() => {
            setactivePokeball(false)
        }, 500);
    }

    return (
        <>
            <nav className={styles.navbar} style={{ bottom: showMenu ? '0px' : '-200px' }}>
                <Image onClick={handleMenu} className={`${styles.pokeball} ${activePokeball ? styles.active : ''}`} src='/pokeball.svg' alt="Pokeball Icon" width={32} height={32} />
                <ul className={styles.linksMenu}>
                    <li><Link href='/'><a>Pokedex</a></Link></li>
                </ul>
            </nav>
        </>


    );
}

export default Navbar;