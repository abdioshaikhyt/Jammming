import { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import PlayList from './Components/PlayList';

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistName, setPlaylistName] = useState("New Playlist");


    
  function addTrack(track) {
    // prevent duplicates 
    if (playlist.some(t => t.trackId === track.trackId)) {
      return;
    }

    const newPlaylist = [...playlist, track];
    setPlaylist(newPlaylist);
  }
     function removeTrack(track) {
    const newPlaylist = playlist.filter(
      t => t.trackId !== track.trackId  
    );
    setPlaylist(newPlaylist);
  }

  function handleSearchSubmit(valueFromChild) {
    setSearchTerm(valueFromChild);
    console.log("Parent got search term:", valueFromChild);
    setSearchTerm(valueFromChild);
  }

  function handleNameChange(newName) {
    setPlaylistName(newName);
  }
const cleanTerm = searchTerm.toLowerCase().trim();

    const filteredTracks = fakeResults.results.filter(track => {
      track.trackName.toLowerCase().includes(cleanTerm) ||
      track.artistName.toLowerCase().includes(cleanTerm) ||
      track.collectionName.toLowerCase().includes(cleanTerm)
    });
   return (
    <>
      <SearchBar onSearch={handleSearchSubmit}/>

      <SearchResults
        tracks={filteredTracks}
        addTrack={addTrack}
      />

      <PlayList
        tracks={playlist}
        removeTrack={removeTrack}
        playlistName={playlistName}
        onNameChange={handleNameChange}
      />
    </>
  );
}

// fake data for development
const fakeResults = {
  resultCount: 3,
  results: [
    {
      trackId: 1,
      trackName: "Blinding Lights",
      artistName: "The Weeknd",
      collectionName: "After Hours",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/0b/25/3d0b25f7-9f7f-1f41-f0e6-2e07dcab1bda/20UMGIM03648.rgb.jpg/100x100bb.jpg"
    },
    {
      trackId: 2,
      trackName: "Bad Guy",
      artistName: "Billie Eilish",
      collectionName: "When We All Fall Asleep",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/9c/6b/3b/9c6b3b5f-51c8-0a7f-d5f6-4e5dc9c4b7f7/19UMGIM28105.rgb.jpg/100x100bb.jpg"
    },
    {
      trackId: 3,
      trackName: "Levitating",
      artistName: "Dua Lipa",
      collectionName: "Future Nostalgia",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8a/3c/df/8a3cdf3b-50df-95f7-5e67-7c4f45b47a63/190295203536.jpg/100x100bb.jpg"
    }
  ]
};

export default App;


