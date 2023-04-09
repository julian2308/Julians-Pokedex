import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/PokemonPost.css";

const BlogPost = ({ pokemonInfo }) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [pokemonDataFetch, setPokemonDataFetch] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(pokemonInfo);
      setPokemonDataFetch(result.data);
      console.log(result.data, "acaaaaa");
    };

    fetchData();
  }, []);

  return (
    <>
      {pokemonDataFetch ? (
        <div className="container">
          <h2>Pokedex #{pokemonDataFetch.id}</h2>
          <h3>{capitalize(pokemonDataFetch.name)}</h3>
          <img src={pokemonDataFetch.sprites.front_default} alt="" />
        </div>
      ) : null}
    </>
  );
};

export default BlogPost;
