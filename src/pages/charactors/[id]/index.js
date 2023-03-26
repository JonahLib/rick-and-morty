import { CharactorInfo } from "@/components/charactor_info"

const defaultEndpoint = 'https://rickandmortyapi.com/api/character/'
export async function getServerSideProps({ query }){
    const { id }  = query
    const res = await fetch(`${defaultEndpoint}/${id}`)
    const data = await  res.json()
    return {
        props: {
            data
        }
    }
}

const Charactor = (data) => {
    return(
        <CharactorInfo props = {data}/>
    )
}

export default Charactor