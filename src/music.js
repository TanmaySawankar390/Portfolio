import "./App.css";
import ReactAudioPlayer from "react-audio-player";

function Music() {
  return (
    <div className="App">
      <ReactAudioPlayer
        src="https://kappa.vgmsite.com/soundtracks/clash-of-clans-soundtrack/swsiodbogc/01.%20Clash%20of%20Clans%20Intro.mp3"
        type="audio/mpeg"
        preload={true}
        volume={0.3}
        autoPlay={true}
      />
      <ReactAudioPlayer
        src="https://kappa.vgmsite.com/soundtracks/clash-of-clans-soundtrack/ibgifbaigi/06.%20Home%20Music%20Part%203.mp3"
        type="audio/mpeg"
        autoPlay={true}
        preload={true}
        volume={0.3}
        loop
      />
    </div>
);
}

export default Music;