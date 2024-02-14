import { useState } from 'react'
import './App.css'

const phrases = [
  "No?",
  "Are you sure, Vanshii?",
  "Really Sureee Vanshiiii???",
  "Aisseeee matt karr yaaaar",
  "OYYYEEEEEEEE!",
  "Maiii tainnuu naal baat ni karna haiga sii",
  "Abb tuu aisaa karegiii meree satthhh??? 🥺",
  "You know this will  completely shatter me from the inside...",
  "Mere ko chodhh ke kahann hii jayegii merii pyaari vanshiiii 😏👨🏽‍🤝‍👩🏻"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  
  function handleYesClick() {
    setYesPressed(true)
  }
  function handleNoClick() {
    setNoCount(noCount+1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
          <div className='text'>{`
              A year and a half of ride, in the beginning it was just fine,
              Then came along you, bright and cheerful as sunshine.
              life was beautiful again, in my heart I knew this was a sign.
              after all the ups and downs, I'm glad to finally call you mine❤️

              You're the best thing to have happened to me, Vanshika <3
            `}
          </div>
        </>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
          <div className='text'>Will you be my valentine's Vanshika? 🌹</div>
          <div className='both-Button'>
            <button className='yesButton'
            style={{ fontSize: yesButtonSize , backgroundColor:'rgb(248, 229, 89)'}}
              onClick={handleYesClick}
            >
              Yes 🙈
            </button>
            <button
              className='NoButton'
              style={{ }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
