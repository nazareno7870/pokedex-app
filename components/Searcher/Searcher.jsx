import { Input } from "@nextui-org/react";
import SearchButton from "../SearchButton/SearchButton";
import styles from '../../styles/Home.module.css'
import { useState } from "react";
import { useRouter } from 'next/router'

const Searcher = () => {
    const [search, setsearch] = useState('');
    const router = useRouter()

    const handleSearch = e=>{
        if(e.key === 'Enter'){
            router.push(`/search/${search}`)
            setsearch('')
        }
    }

    return (
        <div className={styles.searcher}>
            <Input
                clearable
                contentRightStyling={false}
                placeholder="Search Pokemon"
                contentRight={<SearchButton />}
                onChange={e=>setsearch(e.target.value)}
                onKeyPress={handleSearch}
                value={search}
                aria-label={true}
            />
        </div>
    );
}

export default Searcher;