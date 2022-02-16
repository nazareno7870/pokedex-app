import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useGetPokemonData from '../../services/useGetPokemonData';
import styles from './styles.module.css'
import Link from 'next/link'
import ButtonShowInfo from '../../components/ButtonType/ButtonShowInfo';

const PokemonCard = ({ name, id, data }) => {
    const pokeRef = useRef()
    const [isVisible, setisVisible] = useState(false);
    const [pokemon,loading] = useGetPokemonData({ id })
    const imgurl = id <= 649 ? pokemon?.sprites?.other.dream_world.front_default : pokemon?.sprites?.other['official-artwork'].front_default
    const [showRight, setshowRight] = useState(false);
    const [showLeft, setshowLeft] = useState(false);
    const [positionCard, setpositionCard] = useState('0px');
    const [touchStart, settouchStart] = useState(0);

    const handleObserv = e => {
        if (e[0].isIntersecting) {
            setisVisible(true)
        } else {
            setisVisible(false)
        }
    }

    useEffect(() => {
        const options = {
            rootMargin: '30px 0px',
            threshold: 1
        }
        const observer = new IntersectionObserver(handleObserv, options);
        observer.observe(pokeRef.current);
    }, [])

    const slideLeft = () => {
        setpositionCard('-240px')
        setshowRight(true)
    }

    const returnLeft = () => {
        setpositionCard('0px')
        setTimeout(() => {
            setshowRight(false)
        }, 700);
    }

    const slideRight = () => {
        setpositionCard('240px')
        setshowLeft(true)
    }

    const returnRight = () => {
        setpositionCard('0px')
        setTimeout(() => {
            setshowLeft(false)
        }, 800);
    }

    const handleStats = () => {
        if (positionCard === '0px') {
            slideLeft()
        } else {
            returnLeft()
        }

    }

    const handleGames = () => {
        if (positionCard === '0px') {
            slideRight()
        } else {
            returnRight()
        }
    }
    const handleSlide = (e) => {
        if (touchStart - e.changedTouches[0].clientX >= 60 && !showLeft) {
            slideLeft()
        } else if (e.changedTouches[0].clientX - touchStart >= 60 && showRight) {
            returnLeft()
        } else if (e.changedTouches[0].clientX - touchStart >= 60 && !showRight) {
            slideRight()
        } else if (touchStart - e.changedTouches[0].clientX >= 60 && showLeft) {
            returnRight()
        }
    }

    return (

        <div className={`${!!pokemon.types && pokemon?.types[0].type?.name} ${styles.bgCard}`}>

            {!!showRight
                && <div className={styles.stats} >
                    <h2 className={styles.location}> BASE STATS</h2>
                    {pokemon?.stats?.map(s => {
                        return (
                            <div key={s.stat.name} className={styles.linestat}>

                                <Image
                                    className={styles.icon}
                                    src={`/stats/${s.stat.name}.png`}
                                    alt={s.stat.name}
                                    width={28}
                                    height={28}
                                />

                                <p className={styles.stat} >
                                    {s.stat.name}: {s.base_stat}
                                </p>

                            </div>
                        )
                    })}
                </div>

            }
            {!!showLeft &&
                <div className={styles.games}>

                    {!!data &&
                        <>
                            <h2 className={styles.location}><Image
                                className={styles.icon}
                                src={`/location.png`}
                                alt={'Stats Icon'}
                                width={26}
                                height={26}
                            /> {data.pokemon_v2_pokemonspecy.pokemon_v2_generation.pokemon_v2_region.name}</h2>
                            <div className={styles.listgames}>


                                {data.pokemon_v2_pokemongameindices.map(m => {

                                    return (<p className={`${styles.btn} ${m.pokemon_v2_version.name}`} key={m.pokemon_v2_version.name}>{m.pokemon_v2_version.name}</p>)
                                }

                                )

                                }
                            </div>
                        </>
                    }

                </div>}


            <div onTouchEnd={handleSlide} onTouchStart={e => settouchStart(e.touches[0].clientX)} ref={pokeRef} className={styles.pokemonCard} style={{ left: positionCard }}>
                <div className={styles.bgimage}>
                    {   !!pokemon?.types &&
                        <Image
                            src={`/bg-${pokemon?.types[0].type?.name}-min.png`}
                            alt={pokemon?.types[0].type?.name}
                            width={350}
                            height={159}
                            layout="responsive"
                        />
                    }

                </div>
                <div className={styles.pokemonid}>
                    <h4 className={styles.pokemon_id_h4}>{pokemon?.id}</h4>
                </div>
                {
                    !!imgurl
                        ? <div className={styles.imagePokemon} style={{ bottom: isVisible ? '70px' : '20px' }} >
                            <Image
                                src={imgurl}
                                alt={name}
                                width={220}
                                height={220}
                            />

                        </div>
                        : <></>

                }


                <div className={styles.type}>
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.buttons}>

                        {pokemon?.types && <ButtonShowInfo id={id} Text={'Show Info'} Type={pokemon?.types[0].type?.name}/>}

                    </div>

                </div>
            </div>

            <div className={styles.iconRight} onClick={handleStats}>
                <Image
                    className={styles.icon}
                    src={`/statsicon.png`}
                    alt={'Stats Icon'}
                    width={32}
                    height={32}
                />
            </div>

            <div className={styles.iconLeft} onClick={handleGames}>
                <Image
                    className={styles.icon}
                    src={`/gameboy.png`}
                    alt={'Stats Icon'}
                    width={32}
                    height={32}
                />
            </div>

        </div>
    );

}

export default PokemonCard;