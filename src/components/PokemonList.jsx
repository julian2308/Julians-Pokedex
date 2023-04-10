import { useEffect, useState } from "react";
import axios from "axios";
import PokemonPost from "./PokemonPost";
import "../styles/PokemonList.css";

const PokemonList = () => {
  const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=40";

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonsCounter, setPokemonsCounter] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(POKE_API_URL);
      setPokemonList(result.data.results);
      setPokemonsCounter(result.data.count);
      setIsLoading(false)
    };

    fetchData();
  }, []);

  console.log();
  

  return (
    isLoading ? 
    <>
      <h2>Loading...</h2>
    </> :
    <>
      <p className="pokemonsNumber">Current number of Pokemons registered on the Pokedex {pokemonsCounter}</p>
      <div className="pokemonsContainer">
        {pokemonList?.map((pokemon) => {
          return <PokemonPost pokemonInfo={pokemon} />;
        })}
      </div>
    </>
  );
};

export default PokemonList;
