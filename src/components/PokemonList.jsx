import { useEffect, useState } from "react";
import axios from "axios";
import PokemonPost from "./PokemonPost";
import "../styles/PokemonList.css";

const PokemonList = () => {
  const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonsCounter, setPokemonsCounter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=600");
      setPokemonList(result.data.results);
      setPokemonsCounter(result.data.count);
    };

    fetchData();
  }, []);

  return (
    <>
      <p>El número actual de Pokemones registrados es de {pokemonsCounter}</p>
      <div className="pokemonsContainer">
        {pokemonList?.map((pokemon) => {
          return <PokemonPost pokemonInfo={pokemon} />;
        })}
      </div>
    </>
  );
};

export default PokemonList;
