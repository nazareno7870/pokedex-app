import styles from './styles.module.css'
import ButtonTypes from './../../components/ButtonType/ButtonTypes';

const Types = () => {
    const types = [
        "bug",
        "dark",
        "dragon",
        "electric",
        "fairy",
        "fighting",
        "fire",
        "flying",
        "ghost",
        "grass",
        "ground",
        "ice",
        "normal",
        "poison",
        "psychic",
        "rock",
        "shadow",
        "steel",
        "unknown",
        "water"
    ]

    return (
        <>
            <h2 className={styles.typesTitle}>Types</h2>
            <div className={styles.types}>
                { types.map(type=>{
                    return(<ButtonTypes key={type} Type={type}/>)
                }) }
            </div>
        </>
    );

}

export default Types;