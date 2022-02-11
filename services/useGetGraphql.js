import { useQuery, gql } from "@apollo/client";



const useGetGraphql = ({ id }) => {
    const FILMS_QUERY = gql `
{
    pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
      name
      is_default
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
    const { data } = useQuery(FILMS_QUERY);

    return (data);
}

export default useGetGraphql;