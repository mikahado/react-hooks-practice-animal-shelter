import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const handleChangeType = (type) => {
    setFilters(type)
  }

  const handlePetsClick = () => {
    fetch("http://localhost:3001/pets")
    .then(resp => resp.json())
    .then(data => setPets(data))

    const filteredPet = pets.filter(p => p.type === filters)

  }

//paused here! 

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType}onFindPetsClick={handlePetsClick}  />
          </div>
          <div className="twelve wide column">
            <PetBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
