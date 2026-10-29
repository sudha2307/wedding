import { useCallback, useEffect, useState } from "react";
import { wedding } from "@/config/wedding";

/**
 * Persistent music controller. The HTMLAudioElement is created once at module
 * scope so playback survives language switches, popups and section changes,
 * and is only cleaned up on full page unload.
 */
let audioEl: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!audioEl) {
    audioEl = new Audio(wedding.music.src);
    audioEl.loop = true;
    audioEl.volume = wedding.music.volume;
    audioEl.preload = "auto";
  }
  return audioEl;
}

export type MusicState = {
  playing: boolean;
  muted: boolean;
  available: boolean;
};

/** Starts playback (e.g. from the Open Invitation button). Safe to call repeatedly. */
export function startBackgroundMusic(): Promise<boolean> {
  const audio = getAudio();
  if (!audio) return Promise.resolve(false);
  return audio
    .play()
    .then(() => true)
    .catch(() => false);
}

export function useBackgroundMusic() {
  const [state, setState] = useState<MusicState>({
    playing: false,
    muted: false,
    available: true,
  });

  useEffect(() => {
    const audio = getAudio();
    if (!audio) return;

    const sync = () =>
      setState({
        playing: !audio.paused,
        muted: audio.muted,
        available: audio.dataset["failed"] !== "true",
      });
    const onError = () => {
      audio.dataset["failed"] = "true";
      setState((s) => ({ ...s, available: false, playing: false }));
    };

    audio.addEventListener("play", sync);
    audio.addEventListener("pause", sync);
    audio.addEventListener("error", onError);
    sync();

    return () => {
      audio.removeEventListener("play", sync);
      audio.removeEventListener("pause", sync);
      audio.removeEventListener("error", onError);
      // Deliberately not paused here: music must persist across UI changes.
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = getAudio();
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => setState((s) => ({ ...s, playing: false, available: false })));
    } else {
      audio.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const audio = getAudio();
    if (!audio) return;
    audio.muted = !audio.muted;
    setState((s) => ({ ...s, muted: audio.muted }));
  }, []);

  return { ...state, togglePlay, toggleMute };
}
