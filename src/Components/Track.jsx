import React from "react";

function Track(props) {
  
    return (
        <>
        <img src={props.track.artworkUrl100} alt="Album Cover"></img>
        <p>{props.track.trackName}</p>
        <p>{props.track.artistName}</p>
        <p>{props.track.collectionName}</p>
        {props.addTrack ?  <button onClick={() => props.addTrack(props.track)}>Add</button> : null}
        {props.removeTrack ? <button onClick={() =>props.removeTrack(props.track)}>Remove</button>: null} 
        </>
    );
}

export default Track;
