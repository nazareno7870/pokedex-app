import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/ButtonType/Button';
import useGetPokemonData from '../../services/useGetPokemonData';
import styles from './styles.module.css'

const PokemonCard = ({ name, url }) => {
    const pokeRef = useRef()
    const [isVisible, setisVisible] = useState(false);
    const pokemon = useGetPokemonData({ url })
    const imgurl = !!pokemon?.sprites?.other?.dream_world.front_default ? pokemon?.sprites?.other.dream_world.front_default : pokemon?.sprites?.other['official-artwork'].front_default

    const handleObserv = e => {
        if (e[0].isIntersecting) {
            setisVisible(true)
        } else {
            setisVisible(false)
        }
    }

    useEffect(() => {
        const options = {
            rootMargin: '30px 0px',
            threshold: 1
        }
        const observer = new IntersectionObserver(handleObserv, options);
        observer.observe(pokeRef.current);
    }, [])

    return (
        <div ref={pokeRef} className={styles.pokemonCard} style={{ backgroundImage: !!pokemon?.types ? `url('/bg-${pokemon?.types[0].type?.name}.png')` : "url('/bg.png')" }}>
            <div className={styles.pokemonid}>
                <h4 className={styles.pokemon_id_h4}>{pokemon?.id}</h4>
            </div>
            {
                !!imgurl
                    ? <div className={styles.imagePokemon} style={{ bottom: isVisible ? '70px' : '20px' }} >
                        <Image
                            src={imgurl}
                            alt={name}
                            width={180}
                            height={180} />

                    </div>
                    : <></>

            }


            <div className={styles.type}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.buttons}>
                    {!!pokemon?.types
                        ? pokemon.types.map(typ => {

                            return (<Button key={typ.type.name} Type={typ.type.name} />)
                        })
                        : <></>
                    }

                </div>

            </div>
        </div>
    );
}

export default PokemonCard;