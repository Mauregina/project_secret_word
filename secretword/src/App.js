//css
import './App.css';

//data
import {wordsList} from "./data/words"

//react
import {useState} from "react"

//components
import Start from './components/Start';
import Game from './components/Game';
import GameOver from './components/GameOver';
import GameWin from './components/GameWin';

function App() {
  const words = wordsList;

  const [stage, setStage] = useState(1);
  const [category, setCategory] = useState("");
  const [word, setWord] = useState("");
  const [score, setScore] = useState(0);

  const handleStart = () => {
    //pick random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    setCategory(category);

    //pick random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    setWord(word);

    setStage(2);
  }

  const handleGameResult = (status) => {
    if (status===1) {
      setStage(3);
      return;
    } 

    setScore(score+100);
    setStage(4);
  }

  const restart = () => {
    handleStart();
    setScore(0);
  }

  const keepPlaying = () => {
    handleStart();
  }

  return (
    <div className="App">
      {stage===1 && <Start handleStart={handleStart}/>}
      {stage===2 && <Game category={category} word={word} score={score} handleGameResult={handleGameResult}/>}
      {stage===3 && <GameOver score={score} word={word} restart={restart}/>}
      {stage===4 && <GameWin score={score} keepPlaying={keepPlaying}/>}
    </div>
  );
}

export default App;
