import { useRouter } from 'next/router'
import useGetPokemonData from '../../services/useGetPokemonData'
import useGetPokemonEncounters from '../../services/useGetPokemonEncounters'
import { useEffect, useState } from 'react';
import styles from '../list/styles.module.css'
import Image from 'next/image';
import Head from 'next/head';
import ButtonTypes from './../../components/ButtonType/ButtonTypes';

const Pokemon = () => {
    const router = useRouter()
    const { id } = router.query
    const [pokemon, loading] = useGetPokemonData({ id })
    const encounters = useGetPokemonEncounters({ id })
    const [filterEncounters, setfilterEncounters] = useState([]);
    const [filterMoves, setfilterMoves] = useState([]);
    const [filterGame, setfilterGame] = useState('');
    const imgurl = id <= 649 ? pokemon?.sprites?.other.dream_world.front_default : pokemon?.sprites?.other['official-artwork'].front_default
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const filter = encounters.filter(enc => enc.version_details.some(ver => ver.version.name === filterGame))
        setfilterEncounters(filter)
        const moves = pokemon?.moves?.filter(mov => mov.version_group_details.some(ver => ver.version_group.name.split('-').includes(filterGame) && ver.move_learn_method.name === "level-up"))
        const moves2 = moves?.map(mov => {
            return (mov.version_group_details.map(level => {
                if (level.version_group.name.split('-').includes(filterGame) && level.move_learn_method.name === "level-up") {
                    return ({ name: mov.move.name, level: level.level_learned_at })
                }
            }))
        })
        const moves3 = moves2?.map(fil => fil.filter(f => f?.name !== undefined))
        const moves4 = moves3?.map(mov => mov[0])
        moves4?.sort(((a, b) => a.level - b.level));
        setfilterMoves(moves4)
    }, [encounters, filterGame, pokemon])

    function capitalizeFirstLetter(string) {
        if (string !== undefined) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

    return (

        <>
            <Head>
                <title>{capitalizeFirstLetter(pokemon?.name)} | Statistics | Data Pokemon</title>
            </Head>
            <h1 className={styles.pokemonName}>{pokemon.name}</h1>

            <div className={styles.pokemonContainer}>
                {pokemon.name &&
                    <>

                        <div className={styles.info}>
                            <div className={styles.avatar}>
                                <Image
                                    src={imgurl}
                                    alt={pokemon.name}
                                    width={220}
                                    height={220}
                                />
                            </div>
                        </div>
                        <div className={styles.typePokemon}>
                            <h3 className={styles.selectGame}>Type</h3>
                            <div className={styles.types}>
                                {pokemon?.types?.map(typ => {
                                    return (<ButtonTypes key={typ.type.name} Type={typ.type.name} />)
                                })}
                            </div>
                        </div>
                        <div className={styles.statsSingle} >
                            <h3 className={styles.selectGame}>Base States</h3>
                            {pokemon?.stats?.map(s => {
                                return (
                                    <div key={s.stat.name} className={styles.linestatSingle}>

                                        <Image
                                            src={`/stats/${s.stat.name}.png`}
                                            alt={s.stat.name}
                                            width={28}
                                            height={28}
                                        />

                                        <p className={styles.statSingle} >
                                            {s.stat.name}: {s.base_stat}
                                        </p>

                                    </div>
                                )
                            })}
                        </div>

                        <div className={styles.selectGamePokemon}>
                            <h3 className={styles.selectGame}>Select Game</h3>
                            <div className={styles.listgames}>


                                {pokemon.game_indices.map(m => {

                                    return (<p
                                        className={`${styles.btn} ${styles.btnsingle} ${m.version.name} ${filterGame === m.version.name && styles.btnActive}`}
                                        key={m.version.name}
                                        onClick={e => setfilterGame(e.target.innerHTML)}
                                    >{m.version.name}</p>)
                                }

                                )

                                }
                            </div>
                        </div>

                        <div className={styles.movesPokemon}>
                            <h3 className={styles.selectGame}>Moves</h3>

                            {filterMoves?.length >= 1
                                ? <div className={styles.moves}>
                                    {filterMoves?.map(mov => {
                                        return (<div key={mov.name}>
                                            <h5 className={styles.move} >
                                                {mov.name.replaceAll('-', ' ')}</h5>
                                            <p className={styles.movelevel}>Level: {mov.level}</p>
                                        </div>)
                                    })}
                                </div>
                                : <div className={styles.parCard} onClick={() => setShowModal(true)}>
                                    <p style={{cursor:'pointer'}}>Select Game</p>
                                </div>}
                        </div>

                        <div className={styles.locationsPokemon}>
                            <h3 className={styles.selectGame}>Locations</h3>

                            <div className={styles.encounters}>
                                {filterEncounters.length >= 1
                                    ? filterEncounters.map(enc => {
                                        return (
                                            <div key={enc.location_area.name} className={styles.parCard}>
                                                <h5 className={styles.parlocation}>
                                                    <Image
                                                        src={`/location.png`}
                                                        alt={'Stats Icon'}
                                                        width={16}
                                                        height={16}
                                                    />
                                                    {' ' + enc.location_area.name.replaceAll('-', ' ')}
                                                </h5>
                                                <p className={styles.parmethod}>Method: {enc.version_details[0].encounter_details[0].method.name}</p>
                                            </div>
                                        )
                                    })
                                    : filterGame === ''
                                        ? <div className={styles.parCard} onClick={() => setShowModal(true)}>
                                            <p style={{cursor:'pointer'}}>Select Game</p>
                                        </div>
                                        : <div className={styles.parCard}>
                                            <p>There is no location to find it</p>
                                        </div>
                                }
                            </div>
                        </div>


                        <div className={styles.modalbg} style={{ opacity: showModal ? 1 : 0, visibility: showModal ? 'visible' : 'hidden' }}>
                            <div className={styles.modalCont}>
                                {pokemon.game_indices.map(m => {

                                    return (<p
                                        className={`${styles.btn} ${styles.btnsingle} ${m.version.name} ${filterGame === m.version.name && styles.btnActive}`}
                                        key={m.version.name}
                                        onClick={e => { setfilterGame(e.target.innerHTML); setShowModal(false) }}
                                    >{m.version.name}</p>)
                                }

                                )

                                }
                            </div>
                        </div>
                    </>
                }

            </div>
        </>
    );
}

export default Pokemon;