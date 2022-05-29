import './Start.css';

const Start = ({handleStart}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Click on the button bellow to start the game</p>
        <button onClick={handleStart}>Start</button>
    </div>
  )
}

export default Start