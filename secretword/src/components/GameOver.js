import './GameOver.css';

const GameOver = ({score, restart}) => {
  return (
    <div>
        <h1>Game Over!</h1>
        <h2>Score: <span>{score}</span></h2>
        <button onClick={restart}>Restart</button>
    </div>
  )
}

export default GameOver