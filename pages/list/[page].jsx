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
    const pages = parseInt(1126 / limit) + 1

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
                            return (<PokemonCard name={pok.name} url={pok.url} key={pok.name} />)
                        })}

                        <Pagination onChange={handlePage} loop color="secondary" total={pages} initialPage={parseInt(pagination)} />

                    </>
                    : <>

                        {pokemons.map(pok => {
                            return (<PokemonCard name={pok.name} url={pok.url} key={pok.name} />)
                        })}

                        <Pagination onChange={handlePage} loop color="secondary" total={pages} initialPage={1} />

                    </>}

        </>

    );
}

export default PokemonList;