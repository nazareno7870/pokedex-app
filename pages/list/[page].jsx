import { Pagination } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { useRouter } from 'next/router'
import useGetGraphql from './../../services/useGetGraphql';

const PokemonList = () => {
    const router = useRouter()
    const { page } = router.query
    const limit = 20
    const pokemons = useGetGraphql({ page: page, limit: limit })
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

                        {pokemons?.map(pok => {
                            return (<PokemonCard
                                name={pok.name}
                                id={pok.id}
                                key={pok.name}
                                data={pok} />)
                        })}

                        <Pagination onChange={handlePage} loop color="secondary" total={pages} initialPage={parseInt(pagination)} />

                    </>
                    : <>

                        {pokemons?.map(pok => {
                            return (<PokemonCard
                                name={pok.name}
                                id={pok.id}
                                key={pok.name}
                                data={pok} />)
                        })}

                        <Pagination className='pagination' onChange={handlePage} loop color="secondary" total={pages} initialPage={1} />

                    </>}

        </>

    );
}

export default PokemonList;