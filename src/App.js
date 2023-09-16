/* eslint-disable no-unused-vars */
import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Baby Hello",
      artist: "Rauw Alejandro & Bizarrap",
      img: "./images/baby-hello.png",
      src: "./music/baby-hello.mp3",
    },
    {
      id: 2,
      title: "Destroyer of worlds",
      artist: "Aaron Hibell",
      img: ".images/destroyer-of-worlds.png",
      src: ".music/destroyer-of-worlds.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </div>
  );
}

export default App;
