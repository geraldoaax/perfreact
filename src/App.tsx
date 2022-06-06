import { useState } from "react"

function App() {
  const [search, setSearch] = useState('')

  function handleSearch() {

  }

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit"></button>
      </form>

    </div>
  )
}


export default App
