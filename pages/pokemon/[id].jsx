import { useRouter } from 'next/router'
import useGetPokemonData from '../../services/useGetPokemonData'
import useGetPokemonEncounters from '../../services/useGetPokemonEncounters'
import { useEffect, useState } from 'react';
import styles from '../list/styles.module.css'
import Image from 'next/image';

const Pokemon = () => {
    const router = useRouter()
    const { id } = router.query
    const [pokemon, loading] = useGetPokemonData({ id })
    const encounters = useGetPokemonEncounters({ id })
    const [filterEncounters, setfilterEncounters] = useState([]);
    const [filterGame, setfilterGame] = useState('');
    const imgurl = id <= 649 ? pokemon?.sprites?.other.dream_world.front_default : pokemon?.sprites?.other['official-artwork'].front_default

    useEffect(() => {
        const filter = encounters.filter(enc => enc.version_details.some(ver => ver.version.name === filterGame))
        setfilterEncounters(filter)
    }, [encounters, filterGame])


    return (
        <>
            {pokemon.name &&
                <>
                    <h1 className={styles.pokemonName}>{pokemon.name}</h1>
                    <Image
                        src={imgurl}
                        alt={pokemon.name}
                        width={220}
                        height={220}
                    />

                    <h3 className={styles.selectGame}>Select Game</h3>
                    <div className={styles.listgames}>


                        {pokemon.game_indices.map(m => {

                            return (<p
                                className={`${styles.btn} ${m.version.name}`}
                                key={m.version.name}
                                onClick={e => setfilterGame(e.target.innerHTML)}
                            >{m.version.name}</p>)
                        }

                        )

                        }
                    </div>
                    <h3 className={styles.selectGame}>Locations</h3>

                    <div className={styles.encounters}>
                        {filterEncounters.length>=1 
                        ?filterEncounters.map(enc=>{
                            return(<p key={enc.location_area.name}>- {enc.location_area.name.replaceAll('-',' ')}</p>)
                        })
                        :<p>Does not exist</p>
                        }
                    </div>

                </>
            }


        </>
    );
}

export default Pokemon;