import { BrowserRouter, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [ships, setShips] = useState([]);

  const addShips = () => {
    let url = 'https://swapi.dev/api/starships/'
    axios.get(url)
    .then(response => {
      let starships = response.data.results
      setShips(starships)
      })
  }
  
  return (
    <BrowserRouter>
      <div className="App">
      <Route />
      </div>
    </BrowserRouter>
  );
}

export default App;
