import axios from "axios";
import { useEffect, useState } from "react";

const useGetPokemons = ({ page, limit }) => {
    const [pokemons, setpokemons] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${(page-1)*limit}`)
            .then(res => setpokemons(res.data.results))
            .catch(e => console.log('Error en la consulta'))
    }, [page, limit])

    return (pokemons);
}

export default useGetPokemons;