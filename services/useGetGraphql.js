import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from 'react';



const useGetGraphql = ({ page, limit }) => {
    const offset = page === undefined ? 0 : (page - 1) * limit
    const FILMS_QUERY = gql `
    {
      pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}) {
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

    return (pokemons);
}

export default useGetGraphql;