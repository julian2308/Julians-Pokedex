import { useState } from "react";
import "../styles/Button.css"

export const UnknownButton = ({ isCatched, onClickFunction }) => {

    const [isBeingKnown, setIsBeingKnown] = useState(isCatched)
  const initialState = isCatched
    ? "buttons/unknown-off.png"
    : "buttons/unknown-on.png";
  const [unknownPokemon, setUnknownPokemon] = useState(initialState);

  return (
    <div className="actionBtn">
      <img
        src={isCatched ? "buttons/unknown-off.png" : unknownPokemon}
        alt="unknown"
        style={{ width: "100px" }}
        onClick={() => {
          if (!isBeingKnown) {
            onClickFunction();
            setUnknownPokemon("buttons/unknown-off.png");
            setIsBeingKnown(!isBeingKnown)
          }
        }}
      />
    </div>
  );
};
