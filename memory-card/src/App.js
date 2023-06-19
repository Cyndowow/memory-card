import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import {capitalizeFirst, shuffleArray} from "./utils";
import { click } from "@testing-library/user-event/dist/click";


function App() {

  const VILLAGER_AMOUNT = 9;
  const [villagers, setVillagers] = useState([]);
  const [clickedVillagers, setClickedVillagers] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setVillagers(shuffleArray(await fetchVillagers(VILLAGER_AMOUNT)))
    }

    loadCards()
  }, [])

  const fetchVillagers = async (amount) => {
    const villagers = [];

    for (let i = 1; i <= amount; i++) {
      const VillagerURL =`https://acnhapi.com/v1/villagers/${i}`
      const response = await fetch(VillagerURL);
      const villager = response.json();
      const id = villager.id;
      const name = capitalizeFirst(villager.name.name-USen)
      const image = villager.image_uri;
      villagers.push({id, name, image}) 
    }

    return villagers;
  }

  const onCardClick = (e) => {
    const villagerName = e.target.parentNode.lastChild.textContent;
    playRound(villagerName);
    setVillagers(shuffleArray(villagers))
  }

  const playRound = (villagerName) => {
    if(clickedVillagers.includes(villagerName)) {
      resetGame()
    } else {
      const newScore = score + 1;
      if (newScore > bestScore) setBestScore(newScore);
      setScore(newScore);
      setClickedVillagers((prevState) => [...prevState, villagerName]);
    }
  }

  const resetGame = () => {
    setClickedVillagers([]);
    setScore(0);
  }


  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <Wrapper villagers={villagers} onCardClick={onCardClick}/>
    </div>
  );
}

export default App;
