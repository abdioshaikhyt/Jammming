import React from "react";

function Track(props) {
  
    return (
        <>
        <img src={props.track.artworkUrl100} alt="Album Cover"></img>
        <p>{props.track.trackName}</p>
        <p>{props.track.artistName}</p>
        <p>{props.track.collectionName}</p>
    <button onClick={() => addTrack(props.addTrack)}>Add</button> <button onClick={() =>removeTrack(props.removeTrack)}>Remove</button>
        </>
    );
}

export default Track;
