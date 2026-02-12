import React from "react";


function TrackList(props) {
   return (
      <ul>
         {props.tracks.map(track => (
            <li key={track.trackId}>
               <Track
                  track={track}
                  addTrack={props.addTrack}
                  removeTrack={props.removeTrack}
               />
            </li>
         ))}
      </ul>
   )
}

export default TrackList;
