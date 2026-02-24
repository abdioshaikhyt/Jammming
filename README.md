# Jammming

A React web app that lets users search the Spotify API, create custom playlists,
and save them to their Spotify account.


API Note
This project uses Apple’s iTunes Search API as a substitute for the Spotify Web API due to temporary restrictions on new Spotify developer integrations. The application architecture remains API-agnostic and can be extended to OAuth-based providers.

🚀 Future Improvements

The current version focuses on core playlist creation and export functionality. Below are planned enhancements to evolve the project into a more feature-rich application.

🎵 Playlist Management

 Support multiple saved playlists within the app

 Persist saved playlists using localStorage

 Expandable (accordion-style) saved playlist viewer

 Load saved playlist back into the editor

 Delete individual saved playlists

 Rename saved playlists after creation

📊 Playlist Enhancements

 Display total track count

 Display total playlist duration

 Show album artwork preview in saved playlists

 Add drag-and-drop track reordering

 Add “Clear Playlist” button

🔍 Search Improvements

 Debounce search input to reduce API calls

 Implement client-side rate limiting (e.g., 100 requests/min)

 Add search history dropdown

 Add filter by artist / album

💾 Export Features

 Allow export as CSV

 Allow export as TXT

 Bundle multiple playlists into one export file

 Add import playlist from JSON file

🎨 UI / UX Improvements

 Add loading spinner animation

 Improve layout responsiveness (mobile support)

 Add success message animations

 Add hover effects and micro-interactions

 Add dark mode toggle

🧠 Technical Improvements

 Add basic unit tests

 Improve component separation and structure

 Add environment variable configuration

 Add error boundary component
