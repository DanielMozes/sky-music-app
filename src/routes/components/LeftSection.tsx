import { createSignal, createEffect } from "solid-js";
import { makeAudio } from "@solid-primitives/audio";
import { createEventListener } from "@solid-primitives/event-listener";

import { IoPlayCircle } from 'solid-icons/io'
import { IoPauseCircle } from 'solid-icons/io'
import { IoPlaySkipBackCircle } from 'solid-icons/io'
import { IoPlaySkipForwardCircle } from 'solid-icons/io'
import { IoLogoSoundcloud } from 'solid-icons/io'
import { RiBusinessCreativeCommonsFill } from 'solid-icons/ri'

import { Match, Switch } from 'solid-js'
import { getDatabase, ref } from 'firebase/database'
import { useDatabase, useFirebaseApp } from 'solid-firebase'

function LeftSection() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    const sw = navigator.serviceWorker;

    if (!sw) {
      alert('Service Worker API not supported');
    } else {
      if (!sw.controller) {
        try {
          sw.register('/sw.js').then(function (registration) {
            console.log('Registration succeeded.', registration);
          });
        } catch (e) {
          alert(e);
        }
      }
    }
  }

  const app = useFirebaseApp()
  const db = getDatabase(app)
  const musics = useDatabase(ref(db))
  let index = 0;
  let quality = 320;

  const getAudioSrc = typeof window !== 'undefined' ? localStorage.getItem('audioSrc') : null;

  const getIndex = typeof window !== 'undefined' ? localStorage.getItem('index') : null;

  const getQuality = typeof window !== 'undefined' ? localStorage.getItem('index') : null;

  const cid = import.meta.env.VITE_CID;

  const [audioSrc, setAudioSrc] = createSignal(
    getAudioSrc || "/s5/blob/" + cid + "?mediaType=audio%2Fogg"
  );

  const changeAudioSrc = (newSrc, newIndex, newQuality) => {
    setAudioSrc(newSrc);
    localStorage.setItem("audioSrc", newSrc);
    localStorage.setItem("index", newIndex);
    localStorage.setItem("quality", newQuality);
    location.reload();
  };

  let audio = makeAudio(audioSrc());

  createEffect(() => {
    const savedAudioSrc = localStorage.getItem("audioSrc");
  
    if (savedAudioSrc && savedAudioSrc !== audioSrc()) {
      setAudioSrc(savedAudioSrc);
      audio = makeAudio(savedAudioSrc);
    }
  });

  const [isPlaying, setIsPlaying] = createSignal(false);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);

  const updateCurrentTime = () => {
    setCurrentTime(audio.currentTime);
  };

  const updateDuration = () => {
    setDuration(audio.duration);
  };

  const playPauseToggle = () => {
    if (isPlaying()) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying());
  };

  const handleSeek = (e) => {
    const seekTime = parseInt(e.target.value);
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  createEventListener(
    audio,
    "timeupdate",
    updateCurrentTime
  );

  createEventListener(
    audio,
    "durationchange",
    updateDuration
  );

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
  
    const formattedHours = hours > 0 ? `${hours}:` : '';
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
    return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
  };

    return (
<div id="leftSection" class="bg-body-tertiary border rounded-3 d-none d-sm-block">
  <div id="musicPlayer" class="card" style="min-height: 100%;">
    <img src="/music-4.jpg" class="card-img-top" width="100%" height="230" />
    <div class="image-overlay">
      {isPlaying() ? <IoPauseCircle onClick={playPauseToggle} /> : <IoPlayCircle onClick={playPauseToggle} />}
    </div>
    <Switch>
      <Match when={musics.loading}>
        <p>Loading...</p>
      </Match>
      <Match when={musics.error}>
        <p>An error occurred.</p>
      </Match>
      <Match when={musics.data}>
        <div class="text-white p-2">
          <h6>{musics.data[index].title}</h6>
          <p class="mb-1">{musics.data[index].artist}</p>
          <div class="row mb-5">
            <div class="col">
              <span class="badge text-bg-primary w-100">{musics.data[index].genre.slice(0, 7)}</span>
            </div>
            <div class="col p-0">
              <span class="badge text-bg-primary w-100">{musics.data[index].type.slice(0, 7)}</span>
            </div>
            <div class="col">
              <span class="badge text-bg-primary w-100">{musics.data[index].mood.slice(0, 7)}</span>
            </div>
          </div>
          <p class="mb-1"><small>"{musics.data[index].title}" by {musics.data[index].artist} is licensed under a <RiBusinessCreativeCommonsFill /> license.</small></p>
          <p><a href={musics.data[index].artist_page}><span class="badge text-bg-secondary soundcloud w-100">Artist page on <IoLogoSoundcloud /></span></a></p>
        </div>
      </Match>
    </Switch>
    <div class="text-white text-center w-100 pb-3 musicPlayerDashboard">
      <input
        class="w-100"
        type="range"
        min="0"
        max={duration()}
        value={currentTime()}
        onInput={handleSeek}
      />
      <div style="float: left; margin-left:10px;">{formatTime(Math.round(currentTime()))}</div>
      <div style="float: right; margin-right:10px">{formatTime(Math.round(duration()))}</div>
      <IoPlaySkipBackCircle />
      {isPlaying() ? <IoPauseCircle onClick={playPauseToggle} /> : <IoPlayCircle onClick={playPauseToggle} />}
      <IoPlaySkipForwardCircle />
    </div>
  </div>
  <div class="dropdown d-none">
    <a href="/profile/" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://avatars.githubusercontent.com/u/147786207?s=400&v=4" alt="" width="32" height="32" class="rounded-circle me-2" />
      <strong>Test user</strong>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
      <li><a class="dropdown-item" href="/settings/">Settings</a></li>
      <li><a class="dropdown-item" href="/profile/">Profile</a></li>
      <li><a class="dropdown-item" href="/my-list/">My list</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="/">Logout</a></li>
    </ul>
  </div>
</div>
    );
}

export default LeftSection;