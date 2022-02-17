import { Pagination } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import PokemonCard from '../list/PokemonCard';
import { useRouter } from 'next/router'
import styles from '../list/styles.module.css'
import Spinner from '../../components/Spinner/Spinner';
import useGetPokeomnsByTpe from '../../services/useGetPokemonsByType';
import useGetPokeomnsByTpeTotal from '../../services/useGetPokemonsByTypeTotal';
import Head from 'next/head';

const Type = () => {
    const router = useRouter()
    const { type, page } = router.query
    const limit = 20
    const [loadingtotal, total] = useGetPokeomnsByTpeTotal({ type })
    const [pokemons, loading] = useGetPokeomnsByTpe({ page, limit: limit, type })
    const [pagination, setpagination] = useState(0);
    const handlePage = (page) => {
        router.push(`/type/${type}?page=${page}`)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        setpagination(parseInt(window.document.location.pathname.slice(6)))

    }, [])

    function capitalizeFirstLetter(string) {
        if(string!== undefined){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
      }

    return (
        <>
            <Head>
                <title>{capitalizeFirstLetter(type)} Pokemons | Data Pokemon</title>
            </Head>

            {
                loading
                    ? <Spinner />
                    : <div className={styles.pokedexcontainer}>
                        {pokemons?.map(pok => {
                            return (<PokemonCard
                                name={pok.pokemon_v2_pokemon.name}
                                id={pok.pokemon_v2_pokemon.id}
                                key={pok.pokemon_v2_pokemon.id}
                                data={pok.pokemon_v2_pokemon} />)
                        })}
                    </div>
            }
            {
                !!total
                    ?



                    <Pagination onChange={handlePage} loop color="secondary" total={total / 20} initialPage={parseInt(pagination)} />


                    :


                    <Pagination className='pagination' onChange={handlePage} loop color="secondary" total={total / 20} initialPage={1} />

            }

        </>

    );
}

export default Type;