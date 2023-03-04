import React, { useState, useRef } from "react";
import { MdPlayArrow, MdPause } from "react-icons/md";
import { PlayButtonContainer } from "../../styles/TracksStyles";

type AudioPlayerProps = {
  src: string;
};

const AudioPlayer = (props: AudioPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio(props.src));
  const togglePlay = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <PlayButtonContainer onClick={togglePlay}>
      {playing ? (
        <MdPause fill="green" size={50} />
      ) : (
        <MdPlayArrow fill="green" size={50} />
      )}
    </PlayButtonContainer>
  );
};

export default AudioPlayer;
