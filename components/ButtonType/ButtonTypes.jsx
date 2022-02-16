import styles from './Button.module.css'
import Link from 'next/link';

const ButtonTypes = ({ Type }) => {

    switch (Type) {
        case 'grass':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.grass}`}>{Type}</a></Link>
            )
            break;
        case 'fighting':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.fighting}`}>{Type}</a></Link>
            )
            break;
        case 'flying':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.flying}`}>{Type}</a></Link>
            )
            break;
        case 'poison':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.poison}`}>{Type}</a></Link>
            )
            break;
        case 'ground':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.ground}`}>{Type}</a></Link>
            )
            break;
        case 'rock':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.rock}`}>{Type}</a></Link>
            )
            break;
        case 'bug':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.bug}`}>{Type}</a></Link>
            )
            break;
        case 'ghost':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.ghost}`}>{Type}</a></Link>
            )
            break;
        case 'steel':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.steel}`}>{Type}</a></Link>
            )
            break;
        case 'fire':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.fire}`}>{Type}</a></Link>
            )
            break;
        case 'water':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.water}`}>{Type}</a></Link>
            )
            break;
        case 'electric':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.electric}`}>{Type}</a></Link>
            )
            break;
        case 'psychic':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.psychic}`}>{Type}</a></Link>
            )
            break;
        case 'ice':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.ice}`}>{Type}</a></Link>
            )
            break;
        case 'dragon':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.dragon}`}>{Type}</a></Link>
            )
            break;
        case 'dark':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.dark}`}>{Type}</a></Link>
            )
            break;
        case 'fairy':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.fairy}`}>{Type}</a></Link>
            )
            break;
        case 'unknown':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.unknown}`}>{Type}</a></Link>
            )
            break;
        case 'shadow':
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.shadow}`}>{Type}</a></Link>
            )
            break;
        default:
            return (
                <Link href={`/type/${Type}`}><a className={`${styles.btn} ${styles.normal}`}>{Type}</a></Link>
            );
    }

}

export default ButtonTypes;