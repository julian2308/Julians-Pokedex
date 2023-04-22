import {Link} from "react-router-dom";
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="pokemons">Pokemons</Link>
      <Link to="caught">Caught Pokemons</Link>
      <Link to="known">Known Pokemons</Link>
      <Link to="trainer">Trainers</Link>
    </nav>
  );
};

export default NavBar;
