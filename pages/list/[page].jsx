import { Pagination } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { useRouter } from 'next/router'
import useGetGraphql from './../../services/useGetGraphql';
import styles from './styles.module.css'
import Spinner from '../../components/Spinner/Spinner';
import Head from 'next/head';

const PokemonList = () => {
    const router = useRouter()
    const { page } = router.query
    const limit = 20
    const [pokemons, loading] = useGetGraphql({ page: page, limit: limit })
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
            <Head>
                <title>Pokedex | Data Pokemon</title>
                <meta name="description" content="Data Pokemon is a web page to inform about all the pokemons and their statistics in the saga games. Enjoy it. It's free." />
            </Head>

            {
                loading
                    ? <Spinner />
                    : <div className={styles.pokedexcontainer}>
                        {pokemons?.map(pok => {
                            return (<PokemonCard
                                name={pok.name}
                                id={pok.id}
                                key={pok.id}
                                data={pok} />)
                        })}
                    </div>
            }
            {
                !!page
                    ?



                    <Pagination onChange={handlePage} loop color="secondary" total={pages} initialPage={parseInt(pagination)} />


                    :


                    <Pagination className='pagination' onChange={handlePage} loop color="secondary" total={pages} initialPage={1} />

            }

        </>

    );
}

export default PokemonList;