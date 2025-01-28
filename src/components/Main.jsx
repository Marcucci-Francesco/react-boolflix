import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

const Main = () => {

  const { filmData, fetchData } = useGlobalContext()

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <main>
      <div className="container-fm container-fluid my-5">
        <div className="row">
          <ul className="list-group">
            {filmData.map(film =>
              <li className="list-group-item" key={film.id}>
                <h3>{film.title}</h3>
                <h4>{film.original_title}</h4>
                <p>{film.original_language}</p>
                <span>{film.vote_average}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Main