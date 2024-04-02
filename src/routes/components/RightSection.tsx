import MusicStyleSelectionButtonGroup from "./MusicStyleSelectionButtonGroup";
import RandomBackgroundDots from "./RandomBackgroundDots";
import Preload from "./preload";

import { Match, Switch, createSignal, createEffect, onMount } from 'solid-js'
import { getDatabase, ref } from 'firebase/database'
import { useDatabase, useFirebaseApp } from 'solid-firebase'

function generateColorFromId(id) {
  let hash = 0;
  const salt = 123456789;
  const stringRepresentation = (id * salt).toString();
  for (let i = 0; i < stringRepresentation.length; i++) {
    const char = stringRepresentation.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  const positiveHash = Math.abs(hash);

  const hue = positiveHash % 360;
  const saturation = 60;
  const lightness = 60;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function RightSection() {
  const app = useFirebaseApp()
  const db = getDatabase(app)
  const musics = useDatabase(ref(db, 'musics'))
  const playlists = useDatabase(ref(db, 'playlists'))

  const changeIndex = (newIndex) => {
    localStorage.setItem("index", newIndex);
    window.dispatchEvent(new Event("storage"));
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

  const [color1, setColor1] = createSignal('transparent');
  const [color2, setColor2] = createSignal('transparent');
  const [color3, setColor3] = createSignal('transparent');
  const [color4, setColor4] = createSignal('transparent');
  const [color5, setColor5] = createSignal('transparent');
  const [color6, setColor6] = createSignal('transparent');

  createEffect(() => {
    if (musics.data) {
      setColor1(generateColorFromId(result[0]));
      setColor2(generateColorFromId(result[1]));
      setColor3(generateColorFromId(result[2]));
      setColor4(generateColorFromId(result[3]));
      setColor5(generateColorFromId(result[4]));
      setColor6(generateColorFromId(result[5]));
    }
  });

  onMount(() => {
    Preload('/music-pop.png');
    Preload('/music-rock.png');
    Preload('/music-dance.png');
    Preload('/music-rap.png');
    Preload('/music-jazz.png');
    Preload('/music-classic.png');
    Preload('/playlist-pop.png');
    Preload('/playlist-rock.png');
    Preload('/playlist-dance.png');
    Preload('/playlist-rap.png');
    Preload('/playlist-jazz.png');
    Preload('/playlist-classic.png');
  });
    return (
  <div id="rightSection" class="bg-body-tertiary border rounded-3 px-2" style="background-color: #212529 !important; margin-left: calc(20% + 0.4rem);">
      <div class="album py-3">
    <div class="container-fluid">

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
        <img src="/music.png" class="d-none d-sm-block" style="max-width:1.8vw; max-height:19.4vh; padding:0; margin-left: 0.4vw;" />
        <h2 class="text-white d-block d-sm-none">Music</h2>
          <div class="col-6 col-sm">
            <a onClick={() => changeIndex(result[0])}>
            <div class="card">
              <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
                <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
                <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color1()}, #212529);`}></div>
              </div>
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2" style="height: 13vh;">
                <h6>{musics.data[result[0]].title}</h6>
                <p class="card-text">{musics.data[result[0]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left: -0.45vw;">
            <a onClick={() => changeIndex(result[1])}>
            <div class="card">
              <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
                <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
                <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color2()}, #212529);`}></div>
              </div>
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2" style="height: 13vh;">
                <h6>{musics.data[result[1]].title}</h6>
                <p class="card-text">{musics.data[result[1]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left: -0.45vw;">
            <a onClick={() => changeIndex(result[2])}>
            <div class="card">
              <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
                <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
                <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color3()}, #212529);`}></div>
              </div>
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2" style="height: 13vh;">
                <h6>{musics.data[result[2]].title}</h6>
                <p class="card-text">{musics.data[result[2]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left: -0.45vw;">
            <a onClick={() => changeIndex(result[3])}>
            <div class="card">
              <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
                <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
                <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background:linear-gradient(${color4()}, #212529);`}></div>
              </div>
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2" style="height: 13vh;">
                <h6>{musics.data[result[3]].title}</h6>
                <p class="card-text">{musics.data[result[3]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left: -0.45vw;">
            <a onClick={() => changeIndex(result[4])}>
            <div class="card">
              <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
                <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
                <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color5()}, #212529);`}></div>
              </div>
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2" style="height: 13vh;">
                <h6>{musics.data[result[4]].title}</h6>
                <p class="card-text">{musics.data[result[4]].artist}</p>
              </div>
            </div>
            </a>
          </div>
          <div class="col-6 col-sm" style="margin-left: -0.45vw;">
            <a onClick={() => changeIndex(result[5])}>
            <div class="card">
              <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
                <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
                <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color6()}, #212529);`}></div>
              </div>
              <div class="image-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
                </svg>
              </div>
              <div class="card-body text-white p-2" style="height: 13vh;">
                <h6>{musics.data[result[5]].title}</h6>
                <p class="card-text">{musics.data[result[5]].artist}</p>
              </div>
            </div>
            </a>
          </div>
      </div>
    </Match>
  </Switch>

  <Switch>
    <Match when={playlists.loading}>
      <p>Loading...</p>
    </Match>
    <Match when={playlists.error}>
      <p>An error occurred.</p>
    </Match>
    <Match when={playlists.data && randomize(6, Object.keys(playlists.data).length)}>
      <div id="playlist" class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3">
        <img src="/playlist.png" class="d-none d-sm-block" style="max-width:1.8vw; max-height:31vh; padding:0; margin-left: 0.4vw;" />
        <h2 class="text-white d-block d-sm-none">Playlist</h2>
        <div class="col-6 col-sm">
          <div class="card shadow-sm">
            <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
              <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
              <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color2()}, #212529);`}></div>
            </div>
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2" style="height: 13vh;">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left:-0.45vw;">
          <div class="card shadow-sm">
            <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
              <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
              <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color5()}, #212529);`}></div>
            </div>
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2" style="height: 13vh;">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left:-0.45vw;">
          <div class="card shadow-sm">
            <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
              <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
              <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color1()}, #212529);`}></div>
            </div>            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2" style="height: 13vh;">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left:-0.45vw;">
          <div class="card shadow-sm">
            <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
              <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
              <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color6()}, #212529);`}></div>
            </div>            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2" style="height: 13vh;">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left:-0.45vw;">
          <div class="card shadow-sm">
            <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
              <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
              <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color4()}, #212529);`}></div>
            </div>
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2" style="height: 13vh;">
              <h5>Title</h5>
              <p class="card-text">Artist</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm" style="margin-left: -0.45vw;">
          <div class="card shadow-sm">
            <div class="image-container" style="position: relative; width: 100%; height: 22vh;">
              <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
              <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color3()}, #212529);`}></div>
            </div>
            <div class="image-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1ed660" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
              </svg>
            </div>
            <div class="card-body text-white p-2" style="height: 13vh;">
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