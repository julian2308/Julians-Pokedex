import PokemonList from "./components/PokemonList";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CaughtPokemonList from "./components/CaughtPokemonList";
import KnownPokemonList from "./components/KnownPokemonList";
import TrainerForm from "./components/TrainerForm";
import "./styles/App.css"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" Component={Home}>
        </Route>
        <Route path="/pokemons" Component={PokemonList}>
        </Route>
        <Route path="/caught" Component={CaughtPokemonList}>
        </Route>
        <Route path="/known" Component={KnownPokemonList}>
        </Route>
        <Route path="/trainer" Component={TrainerForm}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
