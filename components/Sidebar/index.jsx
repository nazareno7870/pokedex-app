import Image from 'next/image';
import Link from 'next/link'
import styles from './styles.module.css'

const SideBar = () => {


    return (
        <>
            <div className={styles.sidebar}>
                <Image className={`${styles.pokeball}`} src='/pokeball.svg' alt="Pokeball Icon" width={60} height={60} />

                <ul className={styles.linksMenu}>
                    <li><Link href='/'><a >Pokedex</a></Link></li>
                    <li><Link href='/types'><a>Types</a></Link></li>
                    <li><Link href='/effectiveness'><a>Advantage / Disadvantage</a></Link></li>
                </ul>
            </div>
            <div className={styles.sideBarContainer}>

            </div>
        </>


    );
}

export default SideBar;