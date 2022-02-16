import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from 'react';



const useGetPokeomnsByTpeTotal = ({ type }) => {
    const TYPE_QUERY = gql `
    {
        pokemon_v2_type(where: {name: {_eq: ${type}}}) {
          name
          pokemon_v2_pokemontypes {
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


    const [total, settotal] = useState(undefined);
    const { loading, error, data } = useQuery(TYPE_QUERY);


    useEffect(() => {


      if (loading === false) {
        settotal(data.pokemon_v2_type[0].pokemon_v2_pokemontypes.length)
    }


    }, [loading, data])
    return ([loading,total]);
}

export default useGetPokeomnsByTpeTotal;
