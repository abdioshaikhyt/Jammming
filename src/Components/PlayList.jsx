import React from "react";
import Track from './Track';


function PlayList(props) {
    return (
       
        <div>
           <label htmlFor="playListName">
           </label>
           <input id="playListName" name="playListName" onChange={(e) =>props.onNameChange(e.target.value)} value={props.playListName}></input>
            <p></p>
         {props.tracks.map(track => (
         <Track
        key={track.trackId}
        track={track}
        removeTrack={props.removeTrack}
         />
            )) }

       </div> 
    );
}

export default PlayList;