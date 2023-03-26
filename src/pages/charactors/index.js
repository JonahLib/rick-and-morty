import { useState, useEffect } from "react"
import { CharCard } from "@/components/char_card"
import { Header } from "@/components/header"
import Head from "next/head"
import Link from "next/link"
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
  const { info, results: defaultResults }= data
  const [results, setResults] = useState(defaultResults)
  const [page , setPage] = useState({
    ...info,
    current: defaultEndpoint
  })
  const {current} = page

  useEffect(() => {
    if (current === defaultEndpoint)  return

    async function request() {
      const  res = await fetch(current)
      const newData = await res.json()

      setPage(
        {
          current,
          ...newData.info
        }
      )

      if( !newData.info?.prev) {
        setResults(newData.results)
        return
      }

      setResults(prev => {
        return [
          ...prev,
          ...newData.results
        ]
      })
    }
    request()
  },[current])

  const handleLoadMore = () => {
    setPage(prev => {
      return {
        ...prev,
        current: page?.next
      }
    })
  }

  const renderCharactors = results.map(result => <CharCard props ={result}/>)
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
          <button className={styles.loadButton} onClick={handleLoadMore}>LOAD MORE</button>
        </main>
    </div>

  )
}
