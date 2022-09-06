import logo from './logo.svg';
import './App.css';

import ReactPlayer from 'react-player';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=0Ml_lqhkysM');

  const obtenerURL = eventoInput => {   //función que permite obtener la url del input y cambia la const url por lo que el video en pantalla cambia.
    if (eventoInput.target.value.trim()) {
      setUrl(eventoInput.target.value);
    }
    else {
      setUrl('https://www.youtube.com/watch?v=0Ml_lqhkysM');
    }
  }

  return (
    <div className="App">
      <header>
        <img className='logo' src={logo} />
        <h1>Video Player</h1>
        <img className='logo' src={logo} />
      </header>
      <div className='bloc'>
        <h3>Just paste the link of the video or live stream you want to play!</h3>
        <div className='videoPlayer'>
          <ReactPlayer
            className='video'
            url={url}
            playing={false}
            controls={true}
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              },
              facebook: {
                appId: '12345'
              }
            }}
          />
        </div>
        <h3>Supported YouTube, Facebook and Twitch</h3>
      </div>

      <input type="text" placeholder=' URL' className='input' onChange={obtenerURL}></input>
    </div>
  );
}

export default App;