import "./Game.css"
import { useEffect, useState } from "react";

const Game = ({category, word, score, handleGameOver}) => {
  const letters = word.split("");
  const lowerCasedLetters = letters.map(letter => letter.toLowerCase());

  const [letter, setLetter] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  console.log(lowerCasedLetters);

  const [attempt, setAttempt] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    const lowerCasedLetter = letter.toLowerCase();

    if (guessedLetters.includes(lowerCasedLetter)) {
        return;
    }

    if (lowerCasedLetters.includes(lowerCasedLetter)) {
        setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, lowerCasedLetter]);
        checkWinConditions();
    }
    else {
        setAttempt(attempt-1);
    }
  }

  const checkWinConditions = () => {

  }

  useEffect(() => {
    if (attempt <= 0) {
        handleGameOver();
    } 
  }, [attempt]
  );
  
  return (
    <div>
        <p className="points">
            <span>Points: {score}</span>
        </p>
        <div className="title">
            <h1>Guess the word... </h1>
        </div>
        <h3 className="tip">
            Tip: <span> {category} </span>
        </h3>
        <p>You still have {attempt} attempt(s)</p>
        <div className="wordContainer">
            {lowerCasedLetters.map((letter, i) =>
                guessedLetters.includes(letter) ? 
                (<span className="letter" key={i}>{letter}</span>) :
                (<span className="blankSquare" key={i}></span>)
            )}
        </div>
        <div className="letterContainer">
            <p>Type one word: </p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="letter" maxLength={1} onChange={(e) => setLetter(e.target.value)}/>   
                <button>Play</button> 
            </form>
        </div>
    </div>
  )
}

export default Game