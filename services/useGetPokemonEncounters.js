import axios from "axios";
import { useEffect, useState } from "react";

const useGetPokemonEncounters = ({ id }) => {
    const [encounters, setencounters] = useState([]);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
            .then(res => {setencounters(res.data)})
            .catch(e => console.log('Error en la consulta'))
    }, [id])

    return (encounters);
}

export default useGetPokemonEncounters;