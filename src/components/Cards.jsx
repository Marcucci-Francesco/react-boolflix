
import { useGlobalContext } from "../context/GlobalContext"


const Card = ({ film, serie }) => {

  const { flags } = useGlobalContext()

  function getStars(vote) {
    const stars = <i className="fa-solid fa-star"></i>;
    const emptyStars = <i className="fa-regular fa-star"></i>;
    const starsVote = Math.ceil(vote / 2);
    const voteRating = [];

    for (let index = 1; index <= 5; index++) {
      if (voteRating.length < starsVote) {
        voteRating.push(stars)
      } else {
        voteRating.push(emptyStars)
      }
    }

    return voteRating
  }

  function flagsImg() {
    return film ? (flags(film?.original_language) || `https://flagsapi.com/${film?.original_language.toUpperCase()}/shiny/64.png`) : (flags(serie?.original_language || `https://flagsapi.com/${serie?.original_language.toUpperCase()}/shiny/64.png`))
  }

  function posterImg() {
    return film ? `https://image.tmdb.org/t/p/w342/${film?.poster_path}` : `https://image.tmdb.org/t/p/w342/${serie?.poster_path}`
  }

  return (
    <>
      <div className="card col-3 my-4 mx-4">
        <div className="mt-2">
          {film?.title || serie?.name}
        </div>
        <ul className="list-group my-4">
          <li className="list-group-item">{film?.original_title || serie?.original_name}</li>
          <li className="list-group-item">
            <img src={flagsImg()} alt={film?.original_language || serie?.original_language} /></li>
          <li className="list-group-item">{getStars(film?.vote_average) || getStars(serie?.vote_average)}</li>
        </ul>
        <img src={posterImg()} />
      </div>
    </>
  )
}

export default Card