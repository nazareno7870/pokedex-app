import axios from "axios";
import { useEffect, useState } from "react";

const useGetPokemonData = ({ id }) => {
    const [pokemons, setpokemons] = useState([]);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setpokemons(res.data))
            .catch(e => console.log('Error en la consulta'))
    }, [id])

    return (pokemons);
}

export default useGetPokemonData;