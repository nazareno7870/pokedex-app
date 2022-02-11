import axios from "axios";
import { useEffect, useState } from "react";

const useGetPokemons = ({ page }) => {
    const [pokemons, setpokemons] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
            .then(res => setpokemons(res.data.results))
            .catch(console.log('Error en la consulta'))
    }, [page])

    return (pokemons);
}

export default useGetPokemons;