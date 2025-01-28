import { createContext, useContext, useState } from "react"
import axios from "axios";

const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {

  const [filmData, setFilmData] = useState([]);
  const [query, setQuery] = useState('');

  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=46e5a19085f4513bade2bbb52a1e3c94&query=${encodeURIComponent(query)}`;


  const fetchData = () => {
    axios.get(apiUrl)
      .then(res => {
        setFilmData(res.data.results);
      })
  }


  return (
    <GlobalContext.Provider value={{ setQuery, query, filmData, fetchData }}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };