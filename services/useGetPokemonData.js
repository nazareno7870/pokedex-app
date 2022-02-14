import axios from "axios";
import { useEffect, useState } from "react";

const useGetPokemonData = ({ id }) => {
    const [pokemon, setpokemons] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {setpokemons(res.data);setloading(false)})
            .catch(e => console.log('Error en la consulta'))
    }, [id])

    return ([pokemon,loading]);
}

export default useGetPokemonData;