import styles from './Button.module.css'
const Button = ({ Type }) => {

    switch (Type) {
        case 'grass':
            return (
                <button className={`${styles.btn} ${styles.grass}`}>Grass</button>
            )
            break;
        case 'fighting':
            return (
                <button className={`${styles.btn} ${styles.fighting}`}>Fighting</button>
            )
            break;
        case 'flying':
            return (
                <button className={`${styles.btn} ${styles.flying}`}>Flying</button>
            )
            break;
        case 'poison':
            return (
                <button className={`${styles.btn} ${styles.poison}`}>Poison</button>
            )
            break;
        case 'ground':
            return (
                <button className={`${styles.btn} ${styles.ground}`}>Ground</button>
            )
            break;
        case 'rock':
            return (
                <button className={`${styles.btn} ${styles.rock}`}>Rock</button>
            )
            break;
        case 'bug':
            return (
                <button className={`${styles.btn} ${styles.bug}`}>Bug</button>
            )
            break;
        case 'ghost':
            return (
                <button className={`${styles.btn} ${styles.ghost}`}>Ghost</button>
            )
            break;
        case 'steel':
            return (
                <button className={`${styles.btn} ${styles.steel}`}>Steel</button>
            )
            break;
        case 'fire':
            return (
                <button className={`${styles.btn} ${styles.fire}`}>Fire</button>
            )
            break;
        case 'water':
            return (
                <button className={`${styles.btn} ${styles.water}`}>Water</button>
            )
            break;
        case 'electric':
            return (
                <button className={`${styles.btn} ${styles.electric}`}>Electric</button>
            )
            break;
        case 'psychic':
            return (
                <button className={`${styles.btn} ${styles.psychic}`}>Psychic</button>
            )
            break;
        case 'ice':
            return (
                <button className={`${styles.btn} ${styles.ice}`}>Ice</button>
            )
            break;
        case 'dragon':
            return (
                <button className={`${styles.btn} ${styles.dragon}`}>Dragon</button>
            )
            break;
        case 'dark':
            return (
                <button className={`${styles.btn} ${styles.dark}`}>Dark</button>
            )
            break;
        case 'fairy':
            return (
                <button className={`${styles.btn} ${styles.fairy}`}>Fairy</button>
            )
            break;
        case 'unknown':
            return (
                <button className={`${styles.btn} ${styles.unknown}`}>Unknown</button>
            )
            break;
        case 'shadow':
            return (
                <button className={`${styles.btn} ${styles.shadow}`}>Shadow</button>
            )
            break;
        default:
            return (
                <button className={`${styles.btn} ${styles.normal}`}>Normal</button>
            );
    }

}

export default Button;