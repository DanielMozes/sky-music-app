import { createContext, useContext, createSignal, createEffect } from 'solid-js';

import { makeAudio } from "@solid-primitives/audio";

interface AudioContextType {
  src: () => string;
  setSrc: (src: string) => void;
  currentTime: () => number;
  duration: () => number;
  play: () => void;
  pause: () => void;
  handleSeek: (e: Event) => void;
}

const AudioContext = createContext<AudioContextType>();

export function AudioProvider(props) {
  const [src, setSrc] = createSignal('');
  const [audio] = createSignal(makeAudio(''));
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);

  const updateCurrentTime = () => setCurrentTime(audio().currentTime);
  const updateDuration = () => setDuration(audio().duration);

  const play = () => audio().play();
  const pause = () => audio().pause();
  
  createEffect(() => {
    audio().src = src();
  });

  createEffect(() => {
    const currentAudio = audio();
    currentAudio.addEventListener('timeupdate', updateCurrentTime);
    currentAudio.addEventListener('durationchange', updateDuration);

    return () => {
      currentAudio.removeEventListener('timeupdate', updateCurrentTime);
      currentAudio.removeEventListener('durationchange', updateDuration);
    };
  });

  const handleSeek = (e) => {
    const seekTime = parseInt(e.target.value, 10);
    audio().currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const store: AudioContextType = {
    src,
    setSrc,
    play,
    pause,
    currentTime,
    duration,
    handleSeek,
  };

  return (
    <AudioContext.Provider value={store}>
      {props.children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}