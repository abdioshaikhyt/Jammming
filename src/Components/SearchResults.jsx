import Track from './Track';

function SearchResults(props) {
  return (
       
        <div>
         {props.tracks.map(track => (
         <Track
        key={track.trackId}
        track={track}
        addTrack={props.addTrack} />
            )) }
    
       </div> 
    );
}

export default SearchResults;
