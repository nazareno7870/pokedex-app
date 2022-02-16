import Link from 'next/link';
import styles from './Button.module.css'

const ButtonShowInfo = ({ Type , Text , id}) => {
        switch (Type) {
            case 'grass':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.grass}`}>{Text}</a></Link>
                )
                break;
            case 'fighting':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.fighting}`}>{Text}</a></Link>
                )
                break;
            case 'flying':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.flying}`}>{Text}</a></Link>
                )
                break;
            case 'poison':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.poison}`}>{Text}</a></Link>
                )
                break;
            case 'ground':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.ground}`}>{Text}</a></Link>
                )
                break;
            case 'rock':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.rock}`}>{Text}</a></Link>
                )
                break;
            case 'bug':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.bug}`}>{Text}</a></Link>
                )
                break;
            case 'ghost':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.ghost}`}>{Text}</a></Link>
                )
                break;
            case 'steel':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.steel}`}>{Text}</a></Link>
                )
                break;
            case 'fire':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.fire}`}>{Text}</a></Link>
                )
                break;
            case 'water':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.water}`}>{Text}</a></Link>
                )
                break;
            case 'electric':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.electric}`}>{Text}</a></Link>
                )
                break;
            case 'psychic':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.psychic}`}>{Text}</a></Link>
                )
                break;
            case 'ice':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.ice}`}>{Text}</a></Link>
                )
                break;
            case 'dragon':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.dragon}`}>{Text}</a></Link>
                )
                break;
            case 'dark':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.dark}`}>{Text}</a></Link>
                )
                break;
            case 'fairy':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.fairy}`}>{Text}</a></Link>
                )
                break;
            case 'unknown':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.unknown}`}>{Text}</a></Link>
                )
                break;
            case 'shadow':
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.shadow}`}>{Text}</a></Link>
                )
                break;
            default:
                return (
                    <Link href={`/pokemon/${id}`}><a className={`${styles.btn} ${styles.normal}`}>{Text}</a></Link>
                );
        }

}

export default ButtonShowInfo;