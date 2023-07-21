import logo from './logo.svg';
import './App.css';
import gameArr from './data/game-list'
import { useState } from 'react';

function App() {

  const [collectedGameArr, setCollectedGameArr] = useState([])

  // TODO: When game is clicked, add it to the collectedGameArr
  const addGameToCollection = (id) => {
    const newGameCollectionArr = [...collectedGameArr, id];
    setCollectedGameArr(newGameCollectionArr)
  }

  // setCollectedGameArr([1,2,3,4,5])
  return (
    <div className="App">
      <h1>Get the Set</h1>
      <h2>{gameArr.filter(game => !collectedGameArr.includes(game.id)).length} Games Remaining!</h2>
      <div className="card-container">
      {
      gameArr.map((game) => {
        return (
        <div className="card" onClick={() => addGameToCollection(game.id)}>
          <p>{game.title}</p>
          <p>{game.id}</p>
        </div>
      )
      })
      }
      </div>
    </div>
  );
}

export default App;
