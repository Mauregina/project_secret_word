import './GameWin.css';

const GameWin = ({score, keepPlaying}) => {
  return (
    <div>
        <h1>You got it!</h1>
        <h2>Current Score: <span>{score}</span></h2>
        <button onClick={keepPlaying}>Keep playing</button>
    </div>
  )
}

export default GameWin