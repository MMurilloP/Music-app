import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

const Player = (props) => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  const skipSong = (forward = true) => {
    props.setCurrentSongIndex((prevIndex) => {
      let temp = forward ? prevIndex + 1 : prevIndex - 1;
      if (temp > props.songs.length - 1) {
        temp = 0;
      } else if (temp < 0) {
        temp = props.songs.length - 1;
      }
      return temp;
    });
  };

  return (
    <div className="c-player">
      <audio ref={audioElement} src={props.songs[props.currentSongIndex].src} />
      <button onClick={() => props.setDarkMode(!props.darkMode)}>
        {props.darkMode ? "🌕" : "🌙"}
      </button>
      <h4>Playing Now: </h4>
      <PlayerDetails
        song={props.songs[props.currentSongIndex]}
        nextSong={props.nextSong}
      />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <p>
        <strong>Next up: </strong> {props.songs[props.nextSongIndex].title} by{" "}
        {props.songs[props.nextSongIndex].artist}
      </p>
    </div>
  );
};

export default Player;
