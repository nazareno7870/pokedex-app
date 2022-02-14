import { useRouter } from 'next/router'

const Pokemon = () => {
    const router = useRouter()
    const { id } = router.query
    
    return (
        <></>
    );
}

export default Pokemon;