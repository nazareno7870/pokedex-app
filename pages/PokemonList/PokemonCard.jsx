import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/ButtonType/Button';
import useGetPokemonData from '../../services/useGetPokemonData';
import styles from './styles.module.css'

const PokemonCard = ({ name, url }) => {
    const pokeRef = useRef()
    const [isVisible, setisVisible] = useState(false);
    const pokemon = useGetPokemonData({ url })

    const handleObserv = e => {
        if (e[0].isIntersecting) {
            setisVisible(true)
        } else {
            setisVisible(false)
        }
    }

    useEffect(() => {
        const options = {
            rootMargin: '30px 0px', // like css property
            threshold: 1
        }
        const observer = new IntersectionObserver(handleObserv, options);
        observer.observe(pokeRef.current);
    }, [])
console.log()
    return (
        <div ref={pokeRef} className={styles.pokemonCard} style={{backgroundImage:!!pokemon?.types ? `url('/bg-${pokemon?.types[0].type?.name}.png')` : "url('/bg.png')"}}>
            {
                !!pokemon?.sprites
                    ? <div className={styles.imagePokemon} style={{ bottom: isVisible ? '70px' : '20px' }} >
                        <Image src={pokemon?.sprites?.other.dream_world.front_default} alt={name} width={180} height={180} />

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
                        :<></>
                }

                </div>

            </div>
        </div>
    );
}

export default PokemonCard;