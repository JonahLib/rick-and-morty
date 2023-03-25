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


export default function Home( data) {
  console.log(data)
  return (
    <h1>hello world</h1>
  )
}
