/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const songs = [
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
      img: "./images/destroyer-of-worlds.png",
      src: "./music/destroyer-of-worlds.mp3",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const nextSongIndex = (currentSongIndex + 1) % songs.length;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setCurrentSongIndex((currentSongIndex) => {
      return (currentSongIndex + 1) % songs.length;
    });
  }, []);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
