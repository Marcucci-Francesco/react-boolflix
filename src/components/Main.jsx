import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import Card from "./Cards"
import HomePage from './HomePage';

const Main = () => {

  const { filmData, fetchData, serieTvData } = useGlobalContext()

  useEffect(() => {
    fetchData()
  }, [])

  if (filmData.length === 0 && serieTvData.length === 0) {
    return <HomePage />;
  }


  return (
    <main>
      <div className="container-fm container-fluid my-5">
        {filmData.length > 0 && <h3 className="my-4 mx-2 text-black">FILM</h3>}
        <div className="row">
          {filmData.length > 0 && filmData.map((film, i) => <Card key={i} film={film} />)}
        </div>
        {serieTvData.length > 0 && <h3 className="my-4 mx-2 text-black">SERIE TV</h3>}
        <div className="row">
          {serieTvData.length > 0 && serieTvData.map((serie, i) => <Card key={i} serie={serie} />)}
        </div>
      </div>
    </main>
  )
}

export default Main