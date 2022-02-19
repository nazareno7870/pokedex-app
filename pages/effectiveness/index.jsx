import styles from './styles.module.css'
import Button from './../../components/ButtonType/Button';
import Head from 'next/head';
import Image from 'next/image';

const Effectiveness = () => {
    const types = [
        {
            type: 'bug',
            advantage: ['grass', 'psychic', 'dark'],
            disadvantage: ['fire', 'flying', 'rock']
        },
        {
            type: 'dark',
            advantage: ['psychic', 'ghost'],
            disadvantage: ['fighting', 'bug', 'fairy']
        },
        {
            type: 'dragon',
            advantage: ['dragon'],
            disadvantage: ['ice', 'dragon', 'fairy']
        },
        {
            type: 'electric',
            advantage: ['water', 'flying'],
            disadvantage: ['ground']
        },
        {
            type: 'fairy',
            advantage: ['fight', 'dragon', 'dark'],
            disadvantage: ['poison', 'steel']
        },
        {
            type: 'fighting',
            advantage: ['normal', 'ice', 'rock', 'dark', 'steel'],
            disadvantage: ['flying', 'psychic', 'fairy']
        },
        {
            type: 'fire',
            advantage: ['grass', 'ice', 'bug', 'steel'],
            disadvantage: ['water', 'ground', 'rock']
        },
        {
            type: 'flying',
            advantage: ['grass', 'fighting', 'bug'],
            disadvantage: ['electric', 'ice', 'rock']
        },
        {
            type: 'ghost',
            advantage: ['psychic', 'ghost'],
            disadvantage: ['ghost', 'dark']
        },
        {
            type: 'grass',
            advantage: ['water', 'ground', 'rock'],
            disadvantage: ['fire', 'ice', 'poison', 'flying', 'bug']
        },
        {
            type: 'ground',
            advantage: [
                'fire',
                'electric',
                'poison',
                'rock',
                'steel'
            ],
            disadvantage: ['water', 'grass', 'ice']
        },
        {
            type: 'ice',
            advantage: ['grass', 'ground', 'flying', 'dragon'],
            disadvantage: ['fire', 'fighting', 'rock', 'steel']
        },
        {
            type: 'normal',
            advantage: [], disadvantage: ['fighting']
        },
        {
            type: 'poison',
            advantage: ['grass', 'fairy'],
            disadvantage: ['ground', 'psychic']
        },
        {
            type: 'psychic',
            advantage: ['fighting', 'poison'],
            disadvantage: ['bug', 'ghost', 'dark']
        },
        {
            type: 'rock',
            advantage: ['fire', 'ice', 'flying', 'bug'],
            disadvantage: [
                'water',
                'grass',
                'fighting',
                'ground',
                'steel'
            ]
        },
        {
            type: 'steel',
            advantage: ['ice', 'rock', 'fairy'],
            disadvantage: ['fire', 'fighting', 'ground']
        },
        {
            type: 'water',
            advantage: ['fire', 'ground', 'rock'],
            disadvantage: ['electric', 'grass']
        }
    ]


    return (
        <div className={styles.container}>
            <Head>
                <title>Effectiveness | Data Pokemon</title>
            </Head>

            {types.map(type => {
                return (
                    <div className={styles.cardType} key={type.type}>
                        <div className={styles.bgimage}>

                                <Image
                                    src={`/bg-${type.type}-min.png`}
                                    alt={type.type}
                                    width={350}
                                    height={159}
                                    layout="responsive"
                                />

                        </div>

                        <h2 className={styles.typesTitle}><Button Type={type.type} /></h2>

                        <div className={styles.adv}>
                            <h3 className={styles.advh3}>Advantage</h3>
                            <div className={styles.buttons}>
                                {type.advantage.map(type => {
                                    return (<Button key={type} Type={type} />)
                                })}
                            </div>
                        </div>

                        <div className={styles.adv}>
                            <h3 className={styles.advh3}>Disadvantage</h3>
                            <div className={styles.buttons}>
                                {type.disadvantage.map(type => {
                                    return (<Button key={type} Type={type} />)
                                })}
                            </div>
                        </div>

                    </div>
                )
            })}

        </div>
    );

}

export default Effectiveness;


