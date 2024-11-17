import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import logo from './assets/images/sacramento-kings-2.svg';

function App() {

  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchTerm === '') {
      fetch('src/data.json')
        .then(res => res.json())
        .then(data => setPlayers(data));
    }
    else {
      setPlayers(players.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    }

  }, [searchTerm]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <div className="title">
        <img src={logo} className="logo" alt="logo" />
      <h1>Sacramento Kings 2024/2025 Roster</h1>
      </div>
      
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        placeholder="Search player..."
        ref={inputRef}
      />

      <div className="cards-container">
        {players.map((player) => {
          return (
            <Card
              key={player.id}
              name={player.name}
              jerseyNumber={player.jerseyNumber}
              position={player.position}
              age={player.age}
              country={player.country}
              image={player.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App