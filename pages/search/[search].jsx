import PokemonCard from '../list/PokemonCard';
import { useRouter } from 'next/router'
import styles from '../list/styles.module.css'
import useGetSearch from '../../services/useGetSearch';
import Spinner from './../../components/Spinner/Spinner';

const PokemonList = () => {
    const router = useRouter()
    const { search } = router.query
    const [ pokemons, loading] = useGetSearch({ search: search })


    return (
        <>
            {loading
                ? <Spinner/>
    : <div className={styles.pokedexcontainer}>
                    {pokemons?.map(pok => {
                        if (pok.id <= 10002) {
                            return (<PokemonCard
                                name={pok.name}
                                id={pok.id}
                                key={pok.name}
                                data={pok} />)
                        } else {
                            return (<></>)
                        }

                    })}
                </div>

            }


        </>

    );
}

export default PokemonList;