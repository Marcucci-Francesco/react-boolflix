import { createContext, useContext, useState } from "react"
import axios from "axios";

const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {

  const [filmData, setFilmData] = useState([]);
  const [serieTvData, setSerieTvData] = useState([]);
  const [query, setQuery] = useState('');

  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=46e5a19085f4513bade2bbb52a1e3c94&query=${encodeURIComponent(query)}`;
  const apiUrlSeries = `https://api.themoviedb.org/3/search/tv?api_key=46e5a19085f4513bade2bbb52a1e3c94&query=${encodeURIComponent(query)}`;


  const fetchData = () => {
    axios.get(apiUrl)
      .then(res => {
        setFilmData(res.data.results);
      })

    axios.get(apiUrlSeries)
      .then(res => {
        setSerieTvData(res.data.results)
      })
  }

  function flags(language) {
    if (language == 'en') {
      return 'https://flagsapi.com/GB/shiny/64.png'
    }
    if (language == 'ja') {
      return 'https://flagsapi.com/JP/shiny/64.png'
    }
    if (language == 'hi') {
      return 'https://flagsapi.com/IN/shiny/64.png'
    }
  }

  const value = {
    setQuery,
    query,
    filmData,
    fetchData,
    flags,
    serieTvData,
    setSerieTvData
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}


const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };