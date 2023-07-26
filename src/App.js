
import './App.css';
import gameArr from './data/game-list'
import { useState, useEffect } from 'react';

function App() {

  
  const [collectedGameArr, setCollectedGameArr] = useState([])
  
  useEffect(() => {
    localStorage.getItem("collectedGameArr") ? setCollectedGameArr(JSON.parse(localStorage.getItem("collectedGameArr"))) : setCollectedGameArr([])
  },[])

  // TODO: When game is clicked, add it to the collectedGameArr
  const addGameToCollection = (id) => {
    console.log('Add Firing')
    const newGameCollectionArr = [...collectedGameArr, id];
    setCollectedGameArr(newGameCollectionArr);
    localStorage.setItem("collectedGameArr", JSON.stringify(newGameCollectionArr));
  }

  function removeGameFromCollection(id) {
    console.log('Remove firing')
    const newRemGameCollectionArr = collectedGameArr.filter((game) => game.id !== id);
    setCollectedGameArr(newRemGameCollectionArr);
    localStorage.setItem("collectedGameArr", JSON.stringify(newRemGameCollectionArr));
  }

  const handleGameClick = (id) => {
    if(collectedGameArr.includes(id)) {
      removeGameFromCollection(id);
    } else {
      addGameToCollection(id);
    }
  }

  function sortGames(a,b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  // setCollectedGameArr([1,2,3,4,5])
  return (
    <div className="App">
      <h1>Get the Set</h1>
      <h2>{gameArr.filter(game => collectedGameArr.includes(game.id)).length} Games Collected</h2>
      <h2>That's {Math.floor((gameArr.filter(game => collectedGameArr.includes(game.id)).length/gameArr.length)*100)}% of the set!</h2>
      <h2>{gameArr.filter(game => !collectedGameArr.includes(game.id)).length} Games Remaining!</h2>
      <div className="card-container">
      {
      gameArr.sort(sortGames).map((game) => {
        return (
        <div className={collectedGameArr.includes(game.id)?"collected card":"card"} onClick={() => handleGameClick(game.id)}>
          <p>{game.title}</p>
        </div>
      )
      })
      }
      </div>
    </div>
  );
}

export default App;
