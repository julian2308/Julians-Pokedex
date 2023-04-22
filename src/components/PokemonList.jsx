import { useEffect, useState } from "react";
import axios from "axios";
import PokemonPost from "./PokemonPost";
import "../styles/PokemonList.css";
import {getCatchedPokemons, getUnknownPokemons} from "../firebase"

const PokemonList = () => {
  const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=30";

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonsCounter, setPokemonsCounter] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [catchedPokemons, setCatchedPokemons] = useState([])
  const [unknownPokemons, setUnknownPokemons] = useState([])
  const [isDataAvailable, setIsDataAvailable] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(POKE_API_URL);
      setPokemonList(result.data.results);
      setPokemonsCounter(result.data.count);
      setIsLoading(false)
    };

    fetchData();
    getCatchedPokemons().then((data) => {
      setIsDataAvailable(true)
      setCatchedPokemons(data.map(pokemon => pokemon.id))
    })

    getUnknownPokemons().then((data) => {
      setIsDataAvailable(true)
      setUnknownPokemons(data.map(pokemon => pokemon.id))
    })
    
  }, [isDataAvailable]);


  return (
    isLoading && isDataAvailable ? 
    <>
      <h2>Loading...</h2>
    </> :
    <>
      <p className="pokemonsNumber">Current number of Pokemons registered on the Pokedex {pokemonsCounter}</p>
      <div className="pokemonsContainer">
        {pokemonList?.map((pokemon) => {
          return <PokemonPost pokemonInfo={pokemon} key={pokemon.url} catched={catchedPokemons} unknown={unknownPokemons}/>;
        })}
      </div>
    </>
  );
};

export default PokemonList;
