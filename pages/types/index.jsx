import styles from './styles.module.css'
import ButtonTypes from './../../components/ButtonType/ButtonTypes';
import Head from 'next/head';

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
        "steel",
        "water"
    ]

    return (
        <>
            <Head>
                <title>Types | Data Pokemon</title>
            </Head>

            <h2 className={styles.typesTitle}>Types</h2>
            <div className={styles.types}>
                {types.map(type => {
                    return (<ButtonTypes key={type} Type={type} />)
                })}
            </div>
        </>
    );

}

export default Types;


