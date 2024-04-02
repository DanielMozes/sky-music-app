import { searchStore } from './store';
import { For, Show } from 'solid-js';

import { Match, Switch } from 'solid-js'
import { getDatabase, ref } from 'firebase/database'
import { useDatabase, useFirebaseApp } from 'solid-firebase'

function SearchResult() {
    const app = useFirebaseApp()
    const db = getDatabase(app)
    const musics = useDatabase(ref(db, 'musics'))
    const playlists = useDatabase(ref(db, 'playlists'))

    return (
        <>
        <h6 class="text-white">Search results for "{searchStore.query}".</h6>
        <h5 class="text-white">Music</h5>
        <div id="music" class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3">
        <For each={musics.data}>{(music, i) =>
            <Show when={music.artist.startsWith(searchStore.query) && searchStore.query != ""}>
            <div class="col-6 col-sm">
            <a>
            <div class="card">
            <img src="/music-1.jpg" class="card-img-top" width="100%" height="140" />
            <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
            </div>
            <div class="card-body text-white p-2">
                <h6>{music.title}</h6>
                <p class="card-text">{music.artist}</p>
            </div>
            </div>
            </a>
        </div>
        </Show>
      }</For>
      </div>
      <h5 class="text-white">Playlist</h5>
      <div id="playlist" class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3">
      <For each={playlists.data}>{(playlist, i) =>
            <Show when={playlist.artist.startsWith(searchStore.query) && searchStore.query != ""}>
            <div class="col-6 col-sm">
            <a>
            <div class="card">
            <img src="/playlist-1.jpg" class="card-img-top" width="100%" height="140" />
            <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
            </div>
            <div class="card-body text-white p-2">
                <h6>{playlist.title}</h6>
                <p class="card-text">{playlist.artist}</p>
            </div>
            </div>
            </a>
        </div>
        </Show>
      }</For>
      </div>
      </>
    );
}

export default SearchResult;