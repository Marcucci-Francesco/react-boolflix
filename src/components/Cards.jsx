
import { useGlobalContext } from "../context/GlobalContext"


const Card = ({ film, serie }) => {

  const { flags } = useGlobalContext()

  return (
    <>
      <div className="card col-3 my-4 mx-4">
        <div className="mt-2">
          {film?.title || serie?.name}
        </div>
        <ul className="list-group my-4">
          <li className="list-group-item">{film?.original_title || serie?.original_name}</li>
          <li className="list-group-item">
            <img src={(flags(film?.original_language) || `https://flagsapi.com/${film?.original_language.toUpperCase()}/shiny/64.png`) || (flags(serie?.original_language || `https://flagsapi.com/${serie?.original_language.toUpperCase()}/shiny/64.png`))} alt={film?.original_language || serie?.original_language} /></li>
          <li className="list-group-item">{film?.vote_average || serie?.vote_average}</li>
        </ul>
        <img src={film ? `https://image.tmdb.org/t/p/w342/${film?.poster_path}` : `https://image.tmdb.org/t/p/w342/${serie?.poster_path}`} />
      </div>
    </>
  )
}

export default Card