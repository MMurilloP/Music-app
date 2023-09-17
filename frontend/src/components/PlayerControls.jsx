import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerControls = (props) => {
  const handleSkipSong = (isForward = true) => {
    props.skipSong(isForward);
  };

  const toggleIsPlaying = () => {
    props.setIsPlaying(!props.isPlaying);
  };

  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => handleSkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="play-btn" onClick={toggleIsPlaying}>
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn" onClick={() => handleSkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default PlayerControls;
