import PokemonList from "./components/PokemonList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CaughtPokemonList from "./components/CaughtPokemonList";
import KnownPokemonList from "./components/KnownPokemonList";
import TrainerForm from "./components/TrainerForm";
import "./styles/App.css";
import PokemonContext from "./context/PokemonContext";
import { useEffect, useState } from "react";

import axios from "axios";
function App() {


  const [pokemones, setPokemones] = useState(null);

  const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=30";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(POKE_API_URL);
      result ? setPokemones(result.data.results) : null
      
    };

    fetchData()
  }, []);

  return (
    <PokemonContext.Provider value={pokemones}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/pokemons" Component={PokemonList}></Route>
          <Route path="/caught" Component={CaughtPokemonList}></Route>
          <Route path="/known" Component={KnownPokemonList}></Route>
          <Route path="/trainer" Component={TrainerForm}></Route>
        </Routes>
      </Router>
    </PokemonContext.Provider>
  );
}

export default App;
