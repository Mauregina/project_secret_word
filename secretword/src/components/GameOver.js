import './GameOver.css';

const GameOver = ({score, word, restart}) => {
  return (
    <div>
        <h1>Game Over!</h1>
        <h2>Correct word: <span>{word}</span></h2>
        <h2>Final Score: <span>{score}</span></h2>
        <button onClick={restart}>Restart</button>
    </div>
  )
}

export default GameOver