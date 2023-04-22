import { useEffect, useState } from "react";
import { getCatchedPokemons, getUnknownPokemons } from "../firebase";
import PokemonPost from "./PokemonPost";

const CaughtPokemonsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [catchedPokemons, setCatchedPokemons] = useState([]);
  const [unknownPokemons, setUnknownPokemons] = useState([]);
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  useEffect(() => {
    const removeDuplicatesAndSortById = (array) => {
      const uniqueArray = array.filter((item, index) => {
        const firstIndex = array.findIndex((obj) => obj.id === item.id);
        return index === firstIndex;
      });
      return uniqueArray.sort((a, b) => a.id - b.id);
    };

    getCatchedPokemons().then((data) => {
      setIsDataAvailable(true);
      setPokemonList(removeDuplicatesAndSortById(data));

      setIsLoading(false);
      setCatchedPokemons(data.map((pokemon) => pokemon.id));
    });

    getUnknownPokemons().then((data) => {
      setIsDataAvailable(true);
      setUnknownPokemons(data.map((pokemon) => pokemon.id));
    });


  }, [isDataAvailable]);

  return isLoading && isDataAvailable ? (
    <>
      <h2>Loading...</h2>
    </>
  ) : (
    <>
      <p className="pokemonsNumber">
        Current number of Pokemons registered on the Pokedex
      </p>
      <div className="pokemonsContainer">
        {pokemonList?.map((pokemon) => {
          return (
            <PokemonPost
              pokemonInfo={{
                name: pokemon.name,
                url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`,
              }}
              key={pokemon.url}
              catched={catchedPokemons}
              unknown={unknownPokemons}
            />
          );
        })}
      </div>
    </>
  );
};

export default CaughtPokemonsList;
