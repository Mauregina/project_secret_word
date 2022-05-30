import "./Game.css"
import { useEffect, useState, useRef } from "react";

const Game = ({category, word, score, handleGameResult}) => {
  const letters = word.split("");
  const lowerCasedLetters = letters.map(letter => letter.toLowerCase());

  const [letter, setLetter] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempt, setAttempt] = useState(3);

  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const lowerCasedLetter = letter.toLowerCase();

    const cleanInput = () => {
        setLetter("");
        letterInputRef.current.focus();
    }

    if (guessedLetters.includes(lowerCasedLetter)) {
        cleanInput();
        return;
    }

    if (lowerCasedLetters.includes(lowerCasedLetter)) {
        setGuessedLetters((actualGuessedLetters) => [
            ...actualGuessedLetters,
            lowerCasedLetter,
          ]);
          cleanInput();
          return;
    }

    setAttempt(attempt-1);
    cleanInput();
  }

  useEffect(() => {
    if (attempt <= 0) {
        handleGameResult(1);
    } 
  }, [attempt]
  );

  useEffect(() => {
    const uniqueLetters = [...new Set(lowerCasedLetters)];

    if (uniqueLetters.length === guessedLetters.length) {
        document.querySelector('#inputLetter').disabled = true;
        document.querySelector('#btnPlay').disabled = true;
        document.querySelector('#btnPlay').classList.add("disableButton");

        setTimeout( function() {
            handleGameResult(2);
        }, 2000); 
    }
  }, [guessedLetters]
  );
  
  return (
    <div>
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
            <p>Type one letter: </p>
            <form onSubmit={handleSubmit}>
                <input id="inputLetter" type="text" name="letter" maxLength={1} onChange={(e) => setLetter(e.target.value)} value={letter} required ref={letterInputRef}/>   
                <button id="btnPlay">Play</button> 
            </form>
        </div>
        <p className="points">
            <span>Points: {score}</span>
        </p>
    </div>
  )
}

export default Game