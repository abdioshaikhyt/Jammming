import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './Components/SearchBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SearchBar />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <SearchResults tracks={fakeResults.results}/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

//used to test functionality and UI 
const fakeResults = {
  resultCount: 3,
  results: [
    {
      trackId: 1,
      trackName: "Blinding Lights",
      artistName: "The Weeknd",
      collectionName: "After Hours"
    },
    {
      trackId: 2,
      trackName: "Bad Guy",
      artistName: "Billie Eilish",
      collectionName: "When We All Fall Asleep"
    },
    {
      trackId: 3,
      trackName: "Levitating",
      artistName: "Dua Lipa",
      collectionName: "Future Nostalgia"
    }
  ]
};

export default App;



