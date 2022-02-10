import Image from 'next/image';
import Button from '../../components/ButtonType/Button';
import styles from './styles.module.css'

const PokemonList = () => {
    return (
        <div className={styles.pokemonCard}>
            <h3 className={styles.name}>bulbasaur</h3>
            <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'} alt={'Bulbasur'} width={80} height={80} />
            <div className={styles.type}>
               <Button Type={'flying'}/>
            </div>
        </div>
    );
}

export default PokemonList;