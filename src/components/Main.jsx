import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import Card from "./Cards"

const Main = () => {

  const { filmData, fetchData, serieTvData } = useGlobalContext()

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <main>
      <div className="container-fm container-fluid my-5">
        {filmData.length > 0 ? <h3 className="my-4 mx-2 text-white">FILM</h3> : <h3 className="text-center text-white py-5">Cerca un Film o una serie tv</h3>}
        <div className="row">
          {filmData.length > 0 && filmData.map((film, i) => <Card key={i} film={film} />)}
        </div>
        {serieTvData.length > 0 && <h3 className="my-4 mx-2 text-white">SERIE TV</h3>}
        <div className="row">
          {serieTvData.length > 0 && serieTvData.map((serie, i) => <Card key={i} serie={serie} />)}
        </div>
      </div>
    </main>
  )
}

export default Main