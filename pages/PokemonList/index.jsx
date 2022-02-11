
import { Pagination } from '@nextui-org/react';
import { useState } from 'react';
import useGetPokemons from '../../services/useGetPokemons';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
const [page, setpage] = useState(1);
const limit = 20
const pokemons = useGetPokemons({page:page,limit:limit})
const pages = parseInt(1126/limit)+1

const handlePage = (e)=>{
    setpage(e)
    window.scrollTo(0,0)
}

    return (
        <>
            {pokemons.map(pok=>{
                return(<PokemonCard name={pok.name} url={pok.url} key={pok.name}/>)
            })}
            <Pagination onChange={handlePage} loop color="success" total={pages} initialPage={1} />
        </>

    );
}

export default PokemonList;