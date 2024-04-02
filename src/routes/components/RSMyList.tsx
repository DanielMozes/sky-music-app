import MusicStyleSelectionButtonGroup from "./MusicStyleSelectionButtonGroup";
import RandomBackgroundDots from "./RandomBackgroundDots";

import { Match, Switch } from 'solid-js'
import { getDatabase, ref } from 'firebase/database'
import { useDatabase, useFirebaseApp } from 'solid-firebase'

function RightSection() {
  const app = useFirebaseApp()
  const db = getDatabase(app)
  const musics = useDatabase(ref(db, 'musics'))

  const changeAudioSrc = (newSrc, newIndex) => {
    localStorage.setItem("audioSrc", newSrc);
    localStorage.setItem("index", newIndex);
    location.reload();
  };

  let result: number[] = [];
  const randomize = (count, max) => {
    const availableNumbers = Array.from({ length: max }, (_, index) => index);

    for (let i = availableNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableNumbers[i], availableNumbers[j]] = [availableNumbers[j], availableNumbers[i]];
    }

    result.push(...availableNumbers.slice(0, count));
    return true;
  }
    return (
<div id="rightSection" class="bg-body-tertiary border rounded-3" style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);">
      <div class="album py-3">
    <div class="container">

  <RandomBackgroundDots />

  <MusicStyleSelectionButtonGroup />

  <Switch>
    <Match when={musics.loading}>
      <p>Loading...</p>
    </Match>
    <Match when={musics.error}>
      <p>An error occurred.</p>
    </Match>
    <Match when={musics.data && randomize(6, Object.keys(musics.data).length)}>
      <div id="music" class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3 pb-3">
        <img src="/music.png" class="d-none d-sm-block" style="max-width:25px; max-height:125px; padding:0; margin-left: 5px;" />
        <h2 class="text-white d-block d-sm-none">Music</h2>
          <div class="col-6 col-sm">
            <a onClick={() => changeAudioSrc("/s5/blob/" +  musics.data[result[0]][320] + "?mediaType=audio%2Fogg", result[0])}>
            <div class="card">
              <img src="/music-1.jpg" class="card-img-top" width="100%" height="140" />
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2">
                <h6>{musics.data[result[0]].title}</h6>
                <p class="card-text">{musics.data[result[0]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left:-6px;">
            <a onClick={() => changeAudioSrc("/s5/blob/" +  musics.data[result[1]][320] + "?mediaType=audio%2Fogg", result[1])}>
            <div class="card">
              <img src="/music-2.jpg" class="card-img-top" width="100%" height="140" />
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2">
                <h6>{musics.data[result[1]].title}</h6>
                <p class="card-text">{musics.data[result[1]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left:-6px;">
            <a onClick={() => changeAudioSrc("/s5/blob/" +  musics.data[result[2]][320] + "?mediaType=audio%2Fogg", result[2])}>
            <div class="card">
              <img src="/music-3.jpg" class="card-img-top" width="100%" height="140" />
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2">
                <h6>{musics.data[result[2]].title}</h6>
                <p class="card-text">{musics.data[result[2]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left:-6px;">
            <a onClick={() => changeAudioSrc("/s5/blob/" +  musics.data[result[3]][320] + "?mediaType=audio%2Fogg", result[3])}>
            <div class="card">
              <img src="/music-4.jpg" class="card-img-top" width="100%" height="140" />
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2">
                <h6>{musics.data[result[3]].title}</h6>
                <p class="card-text">{musics.data[result[3]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left:-6px;">
            <a onClick={() => changeAudioSrc("/s5/blob/" +  musics.data[result[4]][320] + "?mediaType=audio%2Fogg", result[4])}>
            <div class="card">
              <img src="/music-5.jpg" class="card-img-top" width="100%" height="140" />
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2">
                <h6>{musics.data[result[4]].title}</h6>
                <p class="card-text">{musics.data[result[4]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left:-6px;">
            <a onClick={() => changeAudioSrc("/s5/blob/" +  musics.data[result[5]][320] + "?mediaType=audio%2Fogg", result[5])}>
            <div class="card">
              <img src="/music-6.jpg" class="card-img-top" width="100%" height="140" />
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2">
                <h6>{musics.data[result[5]].title}</h6>
                <p class="card-text">{musics.data[result[5]].artist}</p>
              </div>
            </div>
            </a>
          </div>
      </div>

      <div id="playlist" class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3">
        <img src="/playlist.png" class="d-none d-sm-block" style="max-width:25px; max-height:200px; padding:0; margin-left: 5px;" />
        <h2 class="text-white d-block d-sm-none">Playlist</h2>
        <div class="col-6 col-sm">
          <div class="card shadow-sm">
            <img src="/playlist-1.jpg" class="card-img-top" width="100%" height="140" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-2.jpg" class="card-img-top" width="100%" height="140" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-3.jpg" class="card-img-top" width="100%" height="140" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-4.jpg" class="card-img-top" width="100%" height="140" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-5.jpg" class="card-img-top" width="100%" height="140" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left:-6px;">
          <div class="card shadow-sm">
            <img src="/playlist-6.jpg" class="card-img-top" width="100%" height="140" />
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
      </div>
    </Match>
  </Switch>

    </div>
  </div>
      </div>
    );
}

export default RightSection;