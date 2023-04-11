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
    };

    fetchData();
  }, []);



  return (
    <>
      {pokemonDataFetch ? (
        <div className="container">
          <img src={pokemonDataFetch.sprites.front_default} alt="" />
          <div className="nameAndNumber">
            <h3>{capitalize(pokemonDataFetch.name)}</h3>
            <h3>{pokemonDataFetch.id}</h3>
          </div>
          <div className="pokemonInfo">
            <div className="keyInfo">
              <h4>Type</h4>
              <h4 style={{ marginTop: "29px" }}>Ability</h4>
            </div>
            <div className="valueInfo">
              <div className="typesContainer">
                {pokemonDataFetch
                  ? pokemonDataFetch.types.map((type, index) => (
                      <h4 key={index} className={`pokemonType pokemonType${index}`}>
                        {capitalize(type.type.name)}
                      </h4>
                    ))
                  : null}
              </div>
              {pokemonDataFetch.abilities ? (
                <h4 style={{marginBottom: "0px", border: "white solid 3px", padding: "0px 2px 0px 2px"}}>
                  {capitalize(pokemonDataFetch.abilities[0].ability.name)}
                </h4>
              ) : null}
            </div>
          </div>
          <div></div>
        </div>
      ) : null}
    </>
  );
};

export default BlogPost;
