import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/ButtonType/Button';
import styles from './styles.module.css'

const PokemonCard = () => {
    const pokemon = useRef()
    const [isVisible, setisVisible] = useState(false);

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
        observer.observe(pokemon.current);
    }, [])

    return (
        <div ref={pokemon} className={styles.pokemonCard}>

            <div className={styles.imagePokemon} style={{ bottom: isVisible ? '70px' : '20px' }} >
                <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'} alt={'Bulbasur'} width={180} height={180} />

            </div>
            <div className={styles.type}>
                <h3 className={styles.name}>bulbasaur</h3>
                <div className={styles.buttons}>
                    <Button Type={'grass'} />
                    <Button Type={'poison'} />
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;