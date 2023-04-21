import { useState } from "react";

export const UnknownButton = ({ isCatched, onClickFunction }) => {
  const initialState = isCatched
    ? "../../public/buttons/unknown-off.png"
    : "../../public/buttons/unknown-on.png";
  const [unknownPokemon, setUnknownPokemon] = useState(initialState);

  return (
    <div>
      <img
        src={isCatched ? "./../public/buttons/unknown-off.png" : unknownPokemon}
        alt="unknown"
        style={{ width: "100px" }}
        onClick={() => {
          onClickFunction();
          setUnknownPokemon("../../public/buttons/unknown-off.png");
        }}
      />
    </div>
  );
};
