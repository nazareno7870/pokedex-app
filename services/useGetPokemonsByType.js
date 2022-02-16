import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from 'react';



const useGetPokeomnsByTpe = ({ page, limit, type }) => {
  const offset = page === undefined ? 0 : (page - 1) * limit


  const POKEMON_QUERY = gql`
    {
        pokemon_v2_type(where: {name: {_eq: ${type}}}) {
          name
          pokemon_v2_pokemontypes(limit: ${limit}, offset: ${offset}) {
            pokemon_v2_pokemon {
              id
              name
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
        }
      }    
`;

  const [pokemons, setpokemons] = useState(undefined);
  const { loading, error, data } = useQuery(POKEMON_QUERY);


  useEffect(() => {

    if (loading === false) {
      setpokemons(data.pokemon_v2_type[0].pokemon_v2_pokemontypes)
    }

  }, [loading, data])
  return ([pokemons, loading]);
}

export default useGetPokeomnsByTpe;
