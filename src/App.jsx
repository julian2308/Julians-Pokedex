import PokemonList from "./components/PokemonList";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
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
      </Routes>
    </Router>
  );
}

export default App;
