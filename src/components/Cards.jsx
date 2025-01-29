
import { useGlobalContext } from "../context/GlobalContext"
import placeholder from '../../public/placeholder.jpeg'


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

  const posterImg = () => {
    const posterPath = film ? film?.poster_path : serie?.poster_path;

    if (posterPath) {
      return `https://image.tmdb.org/t/p/w342/${posterPath}`
    } else {
      return placeholder
    }
  }

  function overview() {
    const overviewText = film?.overview || serie?.overview

    return overviewText || 'Not available anymore';
  }

  function stars() {
    return getStars(film?.vote_average) || getStars(serie?.vote_average)
  }

  function flagsImg() {
    const language = film ? film?.original_language : serie?.original_language;
    const flagUrl = flags(language) || `https://flagsapi.com/${language.toUpperCase()}/shiny/64.png`;

    if (flags(language)) {
      return flagUrl;
    } else {
      return language.toUpperCase();
    }
  }


  return (
    <>
      <div className="card col-3 my-4 mx-4 bg-black text-white">
        <img className="poster img-fluid" src={posterImg()} />
        <ul className="card-body my-4 overflow-y-auto">
          <div className="card-title mb-2">
            {`Title: ${film?.title || serie?.name}`}
          </div>
          <li className="card-subtitle">{`Original Title: ${film ? (film?.original_title) : (serie?.original_name)}`}</li>
          <li className="card-text">
            {flagsImg().includes("http") ? (<img src={flagsImg()} alt={film?.original_language || serie?.original_language} />) : (<span>{`Language: ${flagsImg()}`}</span>)}
          </li>
          <li className="card-text  text-warning">{stars()}</li>
          <li className="card-text">{`Overview: ${overview()}`}</li>
        </ul>
      </div>
    </>
  )
}

export default Card