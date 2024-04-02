import { createSignal, createEffect, onCleanup, onMount } from "solid-js";
import { createEventListener } from "@solid-primitives/event-listener";

import { IoPlayCircle } from 'solid-icons/io'
import { IoPauseCircle } from 'solid-icons/io'
import { IoPlaySkipBackCircle } from 'solid-icons/io'
import { IoPlaySkipForwardCircle } from 'solid-icons/io'
import { IoLogoSoundcloud } from 'solid-icons/io'
import { RiBusinessCreativeCommonsFill } from 'solid-icons/ri'
import { BsBookmarkPlus } from 'solid-icons/bs'
import { AiOutlineLike } from 'solid-icons/ai'
import { AiOutlineDislike } from 'solid-icons/ai'
import { RiSystemShareForwardLine } from 'solid-icons/ri'

import { Match, Switch } from 'solid-js'
import { getDatabase, ref } from 'firebase/database'
import { useDatabase, useFirebaseApp } from 'solid-firebase'

import { Link } from '@solidjs/router';

import { useAudio } from './AudioContext';

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
  const musics = useDatabase(ref(db, 'musics'))

  const { play, pause, setSrc, currentTime, duration, handleSeek } = useAudio();

  const cid = import.meta.env.VITE_CID;

  const initialIndex = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('index') || 0;
    }
    return 0;
  };

  const initialAudioSrc = () => {
    return "/s5/blob/" + cid + "?mediaType=audio%2Fogg";
  };

  const initialQuality = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('quality') || '160';
    }
    return '160';
  };

  const [indexValue, setIndexValue] = createSignal(initialIndex());
  const [audioSrcValue, setAudioSrcValue] = createSignal(initialAudioSrc());
  const [qualityValue, setQualityValue] = createSignal(initialQuality());

  createEffect(() => {
    if (typeof window !== 'undefined' && musics.data) {
      const newAudioSrc = "/s5/blob/" +  musics.data[indexValue()][qualityValue()] + "?mediaType=audio%2Fogg";
      setAudioSrcValue(newAudioSrc);
      setSrc(audioSrcValue());
    }
  });

  const [isPlaying, setIsPlaying] = createSignal(false);

  createEffect(() => {
      if (typeof window === 'undefined') {
          return;
      }

      const handleStorageChange = (event) => {
        setIndexValue(localStorage.getItem('index'));
        setQualityValue(localStorage.getItem('quality'));
        setIsPlaying(true);
        setSrc(audioSrcValue());
        play();
      };

      window.addEventListener('storage', handleStorageChange);

      onCleanup(() => window.removeEventListener('storage', handleStorageChange));
  });

  const playPauseToggle = () => {
    if (isPlaying()) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying());
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
  
    const formattedHours = hours > 0 ? `${hours}:` : '';
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
    return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
  };

  const [leftSectionStyle, setLeftSectionStyle] = createSignal({});

  onMount(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const leftSection = document.getElementById('leftSection');
      if (!footer || !leftSection) return;
  
      const footerRect = footer.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;
      const footerTopRelativeToDocument = scrollTop + footerRect.top;
      const viewportHeight = window.innerHeight;
  
      let topValue = 0;
      if (footerRect.top < viewportHeight) {
        topValue = -(viewportHeight - footerTopRelativeToDocument) + 63;
        setLeftSectionStyle({
          position: 'absolute',
          top: `${topValue}px`,
          width: 'calc(20% - 0.3rem)',
          height: 'calc(99vh - 65px)',
        });
      } else {
        setLeftSectionStyle({
          position: 'fixed',
          top: 'auto',
          width: 'calc(20% - 0.3rem)',
          height: 'calc(99vh - 65px)',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

  const [color, setColor] = createSignal('transparent');
  
  createEffect(() => {
    if (musics.data) {
      setColor(generateColorFromId(indexValue()));
    }
  });
    return (
<div id="leftSection" class="bg-body-tertiary border rounded-3 d-none d-sm-block" style={leftSectionStyle()}>
  <div id="musicPlayer" class="card" style="min-height: 100%;">
    <div class="image-container" style="position: relative; width: 100%; height: 35vh;">
      <img src="/button.jpg" class="card-img-top" width="100%" height="100%" style="filter: grayscale(100%);" />
      <div style={`position: absolute; top: 0; left: 0; width: 100%; height: 100%; mix-blend-mode: multiply; background: linear-gradient(${color()}, #212529);`}></div>
    </div>
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
          <h6>{musics.data[indexValue()].title}</h6>
          <p class="mb-1">{musics.data[indexValue()].artist}</p>
          <div class="row">
            <div class="col">
              <span class="badge text-bg-primary w-100">{musics.data[indexValue()].genre.slice(0, 7)}</span>
            </div>
            <div class="col p-0">
              <span class="badge text-bg-primary w-100">{musics.data[indexValue()].type.slice(0, 7)}</span>
            </div>
            <div class="col">
              <span class="badge text-bg-primary w-100">{musics.data[indexValue()].mood.slice(0, 7)}</span>
            </div>
          </div>
          <div class="p-2 my-3 text-center">
            <div class="row">
              <div class="col"><BsBookmarkPlus /><br /><small>Save</small></div>
              <div class="col"><AiOutlineLike /><span> </span><AiOutlineDislike /><br /><small>Like</small></div>
              <div class="col"><RiSystemShareForwardLine /><br /><small>Share</small></div>
            </div>
          </div>
          <p class="mb-1"><small>"{musics.data[indexValue()].title}" by {musics.data[indexValue()].artist} is licensed under a <RiBusinessCreativeCommonsFill /> license.</small></p>
          <p><Link href={musics.data[indexValue()].artist_page}><span class="badge text-bg-secondary soundcloud w-100">Artist page on <IoLogoSoundcloud /></span></Link></p>
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
</div>
    );
}

export default LeftSection;