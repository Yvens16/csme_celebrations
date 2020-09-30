import React from 'react';
import logo from './csme_logo-removebg.png';
import playButton from './assets/play_button.svg';
import pauseButton from './assets/pause.svg';
import Ahouuu from './songs/Ahouuuuuu_wolf.mp3';
import onTeTord from './songs/on_te_tord.mp3';
import onTeFrappeFort from './songs/on_te_frappe_fort.mp3';
import matuidiCharo from './songs/matuidi_charo.mp3';
import './App.css';

const songsList = [
  {
    name: 'Matuidi charo',
    artist: "Niska",
    track: matuidiCharo
  },
  {
    name: 'Ahouuuuuuu',
    artist: "N'seven",
    track: Ahouuu
  },
  {
    name: 'On te tord',
    artist: "N'seven",
    track: onTeTord
  },
  {
    name: 'On te frappe fort',
    artist: "N'seven",
    track: onTeFrappeFort
  },
];

function App() {
  function play(idx) {
    const audio = document.getElementById(`audio_${idx}`);
    audio.play();
  }
  function pause(idx) {
    const audio = document.getElementById(`audio_${idx}`);
    audio.pause();
    audio.currentTime = 0;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Nos célébrations</h1>
      </header>
      <main className='song_list'>
        {songsList.map((song, id) => (
        <div className="song" key={id}>
          <div className="text">
        <h2>{song.name}</h2>
            <h3>{song.artist}</h3>
          </div>
          <div className="button">
            <button>
              <img src={playButton} onClick={() => play(id)} className='play_button' alt="play_button" />
            </button>
            <button>
              <img src={pauseButton} onClick={() => pause(id)} className='play_button' alt="play_button" />
            </button>
            <audio id={`audio_${id}`} src={song.track}></audio>
          </div>
        </div>
        ))}
      </main>
    </div>
  );
}

export default App;
