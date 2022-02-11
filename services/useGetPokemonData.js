import axios from "axios";
import { useEffect, useState } from "react";

const useGetPokemonData = ({ url }) => {
    const [pokemons, setpokemons] = useState([]);
    useEffect(() => {
        axios.get(`${url}`)
            .then(res => setpokemons(res.data))
            .catch(console.log('Error en la consulta'))
    }, [url])

    return (pokemons);
}

export default useGetPokemonData;