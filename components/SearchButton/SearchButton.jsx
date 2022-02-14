import Image from "next/image";
import styles from '../../styles/Home.module.css'

const SearchButton = () => {
    return (
        <Image
        src={`/searchicon.png`}
        alt={'Search'}
        width={28}
        height={28}
        className={styles.searchButton}
    />
    );
}

export default SearchButton;