import {
    Audio,
    AVPlaybackStatus,
    InterruptionModeAndroid,
    InterruptionModeIOS,
  } from "expo-av";
  import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  const PlayerContext = createContext<any | undefined>(undefined);
  
  export const PlayerProvider = ({ children }: PropsWithChildren) => {
    const [currentTrack, setCurrentTrack] = useState<any>(null);
    const [durationMillis, setDurationMillis] = useState<any>(null);
    const [positionMillis, setPositionMillis] = useState<any>(null);
    const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);
    const [progress, setProgress] = useState<any>(null);
    const [currentTime, setCurrentTime] = useState<any>(0);
    const [totalDuration, setTotalDuration] = useState<any>(0);
    const [isPlaying, setIsPlaying] = useState(false);
  
    useEffect(() => {
      handeleSetup();
    }, []);
  
    useEffect(() => {
      if (currentTrack == null) return;
      setCurrentSound(null);
      play();

      console.log(currentTrack)
    }, [currentTrack]);
  
    const handeleSetup = async () => {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        // interruptionModeIOS: InterruptionModeIOS.DuckOthers,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        // interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
        playThroughEarpieceAndroid: false,
      });
    };
  
    const onPlaybackStatusUpdate = async (status: AVPlaybackStatus) => {
  
      if (status.isLoaded && status.isPlaying) {
        setDurationMillis(status.durationMillis);
        setPositionMillis(positionMillis);
        const progress = status.positionMillis / (status?.durationMillis || 1);
        console.log("progresss", progress);
        setProgress(progress);
        setCurrentTime(status.positionMillis);
        setTotalDuration(status.durationMillis);
  
        if (status.didJustFinish === true) {
          setCurrentSound(null);
        }
      }
    };
  
    const play = async () => {
      if (!currentTrack) return;
      const preview_url = currentTrack.uri;
      try {
        if (currentSound != null) {
          await currentSound.stopAsync();
        }
  
        const { sound, status } = await Audio.Sound.createAsync(
          {
            uri: preview_url,
          },
          {
            shouldPlay: true,
            isLooping: false,
            progressUpdateIntervalMillis: 1000
          },
          onPlaybackStatusUpdate,
        );
        onPlaybackStatusUpdate(status);
        setCurrentSound(sound);
        setIsPlaying(status.isLoaded);
        await sound.playAsync();
      } catch (err: any) {
        console.log(err.message);
      }
    };
  
    const playTrack = async () => {
      if (isPlaying) {
        currentSound?.stopAsync();
      }
      await play();
    };
  
    const handlePlayPause = async () => {
      if (currentSound) {
        if (isPlaying) {
          await currentSound.pauseAsync();
        } else {
          await currentSound.playAsync();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    const handleCancel = async () => {
      // if(!currentSound) return
      setCurrentTrack(null);
      await currentSound?.stopAsync();
    };
  
    const handleSliderValue = async (value: number) => {
      if (!currentSound) return;
  
      const positionMillis = value * durationMillis;
      currentSound.setPositionAsync(positionMillis);
    };
  
    return (
      <PlayerContext.Provider
        value={{
          currentTrack,
          setCurrentTrack,
          playTrack,
          handlePlayPause,
          isPlaying,
          progress,
          currentTime,
          totalDuration,
          handleCancel,
          handleSliderValue,
        }}
      >
        {children}
      </PlayerContext.Provider>
    );
  };


  
  export const usePlayerContext = () => useContext(PlayerContext);
  