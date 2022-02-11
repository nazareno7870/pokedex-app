
import useGetPokemons from '../../services/useGetPokemons';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
const pokemons = useGetPokemons({page:0})



    return (
        <>
            {pokemons.map(pok=>{
                return(<PokemonCard name={pok.name} url={pok.url} key={pok.name}/>)
            })}
        </>

    );
}

export default PokemonList;