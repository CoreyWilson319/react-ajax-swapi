import { BrowserRouter, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Starships from './components/Starships'
import StarshipsDetails from './components/StarshipsDetails'
import './App.css';

function App() {

  const [ships, setShips] = useState([]);

  const addShips = () => {
    let url = 'https://swapi.dev/api/starships/'
    axios.get(url)
    .then(response => {
      setShips(response.data.results)
      }).catch((err) => console.log(err))
  }

  useEffect(() => {
    addShips()
  }, [])
  
  return (
    <BrowserRouter>
      <div className="App">
      <Route exact path="/"
            render={() => {return <Starships starships={ships}/>}}
      />
      <Route path="/starship"
            render={({location}) => {
              return <StarshipsDetails location={location} />
            }}
      />
      </div>
    </BrowserRouter>
  );
}

export default App;
