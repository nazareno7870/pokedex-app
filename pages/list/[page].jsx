import { Pagination } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import useGetPokemons from '../../services/useGetPokemons';
import PokemonCard from './PokemonCard';
import { useRouter } from 'next/router'

const PokemonList = () => {
    const router = useRouter()
    const { page } = router.query
    const limit = 20
    const pokemons = useGetPokemons({ page: page, limit: limit })
    const [pagination, setpagination] = useState(page);
    const pages = 45

    const handlePage = (page) => {
        router.push(`/list/${page}`)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        setpagination(parseInt(window.document.location.pathname.slice(6)))

    }, [])

    return (
        <>
            {
                !!page
                    ? <>

                        {pokemons.map(pok => {
                            return (<PokemonCard
                                name={pok.name}
                                url={pok.url}
                                id={pok.url.split('https://pokeapi.co/api/v2/pokemon/')[1].slice(0, -1)}
                                key={pok.name} />)
                        })}

                        <Pagination onChange={handlePage} loop color="secondary" total={pages} initialPage={parseInt(pagination)} />

                    </>
                    : <>

                        {pokemons.map(pok => {
                            return (<PokemonCard
                                name={pok.name}
                                url={pok.url}
                                id={pok.url.split('https://pokeapi.co/api/v2/pokemon/')[1].slice(0, -1)}
                                key={pok.name} />)
                        })}

                        <Pagination className='pagination' onChange={handlePage} loop color="secondary" total={pages} initialPage={1} />

                    </>}

        </>

    );
}

export default PokemonList;