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
  "Oops! You have no other choice my girll!"
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
          <div className='text'>A year and a half of struggle, it wasn't easy but it's fine. {"\n"}
          After all the ups and downs, I'm glad I can finally call you mine❤️ </div>
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
