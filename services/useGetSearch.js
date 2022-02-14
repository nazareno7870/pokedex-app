import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from 'react';



const useGetSearch = ({ search }) => {
    const FILMS_QUERY = gql `
    {
      pokemon_v2_pokemon(where: {name: {_iregex: "${search}"}}) {
        name
        id
        pokemon_v2_pokemonspecy {
          pokemon_v2_generation {
            pokemon_v2_region {
              name
              id
            }
          }
        }
        pokemon_v2_pokemongameindices {
          pokemon_v2_version {
            name
          }
        }
      }
    }
    
    
`;
    const [pokemons, setpokemons] = useState(undefined);
    const { loading, error, data } = useQuery(FILMS_QUERY);

    useEffect(() => {
        if (loading === false) {
            setpokemons(data.pokemon_v2_pokemon)
        }

    }, [loading, data])

    return ([pokemons,loading]);
}

export default useGetSearch;