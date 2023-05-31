import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


const NavBar = () => {

  const { user } = useAuth0();


  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="pokemons">Pokemons</Link>
      <Link to="caught">Caught Pokemons</Link>
      <Link to="known">Known Pokemons</Link>
      <Link to="trainer">Trainers</Link>
      {user ? (
        <>
          <LogoutButton />
          <p>Bienvenido {user.given_name}</p>
        </>
      ) : (
        <LoginButton />
      )}
    </nav>
  );
};

export default NavBar;
