import { CharCard } from "@/components/char_card"
import { Header } from "@/components/header"
import Head from "next/head"
import styles from "./styles.module.css"


const defaultEndpoint = 'https://rickandmortyapi.com/api/character/'

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = res.json()
  return {
    props: (
      data
    )
  }
}


export default function Home(data) {
  const charactors = data.results
  const renderCharactors = charactors.map(charactor => <CharCard props ={charactor}/>)
  return (
    <div>
      <Head>
        <title>Rick and Morty wikipedia</title>
      </Head>
      <main className={styles.page}>
        <Header/>
        <ul className={styles.charactorList}>
          {renderCharactors}
        </ul>
      </main>
    </div>

  )
}
