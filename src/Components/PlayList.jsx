import TrackList from './trackList';

function PlayList(props) {
    return (
       
        <div>
           <label htmlFor="playListName">
           </label>
           <input id="playListName" name="playListName" onChange={(e) =>props.onNameChange(e.target.value)} value={props.playListName}></input>
            <p></p>
        <TrackList
        tracks={props.tracks}
        removeTrack={props.removeTrack}
        isInPlayList={props.isInPlayList}/> 
        <button onClick={props.onSave}>Save Playlist</button>
       </div> 
    );
}

export default PlayList;