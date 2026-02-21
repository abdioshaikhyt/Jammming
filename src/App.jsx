import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import PlayList from './Components/PlayList';

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  

    
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
  }

  function handleNameChange(newName) {
    setPlaylistName(newName);
    console.log(newName);
  }
const cleanTerm = searchTerm.toLowerCase().trim();

const filteredTracks = cleanTerm
  ? searchResults.filter(track =>
      track.trackName.toLowerCase().includes(cleanTerm) ||
      track.artistName.toLowerCase().includes(cleanTerm) ||
      (track.collectionName || "").toLowerCase().includes(cleanTerm)
    )
  : searchResults;


  function handleSavePlaylist() {
  if (playlist.length === 0) {
    alert("Your playlist is empty!");
    return;
  }
  const trackIds = playlist.map(track => track.trackId);

  alert(`Playlist "${playlistName}" saved with ${trackIds.length} tracks!`);

  setPlaylist([]);
  setPlaylistName("New Playlist");
}

function isInPlayList(track) {
  const inPlayList = playlist.some(t => t.trackId === track.trackId);
  return inPlayList;
  }
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    if (!searchTerm.trim()) {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }
    const fetchTracks = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch( `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=20`
      );
      if(!response.ok) {
        throw new Error("Network error failed");
        
      }
        const data = await response.json();
        setSearchResults(data.results);
      } catch(err) {
        setError("Something went wrong. Please try again");
      } finally {
        setIsLoading(false);

      }
    }
    fetchTracks();

  }, [searchTerm])

   return (
    <>
      <SearchBar onSearch={handleSearchSubmit}/>

      {searchTerm.length === 0 ? (
       null
     ) : isLoading ? (
      <p>Searching...</p>
     ) : filteredTracks.length === 0 ? (
         <p>No tracks found</p>
     ) : (
      <SearchResults
        tracks={filteredTracks}
        addTrack={addTrack}
        isInPlayList={isInPlayList}
      />
     )}

      <PlayList
        tracks={playlist}
        removeTrack={removeTrack}
        playlistName={playlistName}
        onNameChange={handleNameChange}
         onSave={handleSavePlaylist}
      />
    </>
  );
}




export default App;


