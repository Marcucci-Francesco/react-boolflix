import { useGlobalContext } from "../context/GlobalContext"

const Header = () => {

  const { query, setQuery, fetchData } = useGlobalContext();
  const handlerQuery = (e) => {
    e.preventDefault()
    fetchData()
  }

  return (
    <header className="bg-black nunito d-flex">
      <div className="container-fm container-fluid d-flex justify-content-between align-items-center py-2">
        <h1 className="text-danger">BOOLFLIX</h1>
        <div className="d-flex">
          <input
            className="py-2 px-2"
            type="text"
            placeholder="Film/Serie tv..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-danger py-2" onClick={handlerQuery}>Cerca</button>

        </div>
      </div>
    </header>
  )
}

export default Header