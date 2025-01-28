

const Header = () => {
  return (
    <header className="bg-black nunito">
      <div className="container-fm container-fluid d-flex justify-content-between align-items-center py-2">
        <h1 className="text-danger">BOOLFLIX</h1>
        <div className="d-flex">
          <input className="py-2 px-2" type="text" placeholder="Film/Serie tv..." />
          <button className="btn btn-danger py-2">Cerca</button>
        </div>
      </div>
    </header>
  )
}

export default Header