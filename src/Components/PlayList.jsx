import React from "react";
import Track from './Track';


function PlayList(props) {
    return (
       
        <div>
         {props.tracks.map(track => (
         <Track
        key={track.trackId}
        track={track}
        removeTrack={props.removeTrack} />
            )) }

       </div> 
    );
}

export default PlayList;