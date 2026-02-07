function SearchResults(props) {
  return (
    <div>
      <ul>
        {props.tracks.map(track => (
          <li key={track.trackId}>
            <p>{track.trackName}</p>
            <p>{track.artistName}</p>
            <p>{track.collectionName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
