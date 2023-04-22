import { useState } from "react";
import "../styles/Button.css"

export const CatchedButton = ({ isCatched, onClickFunction }) => {
    const [isBeingCatched, setIsBeingCatched] = useState(isCatched)
  const initialState = isCatched
    ? "buttons/master-on.png"
    : "buttons/master-off.png";
  const [catchedPokemon, setCatchedPokemon] = useState(initialState);

  console.log(initialState, isCatched, "pokee");

  return (
    <div className={`actionBtn ${!isBeingCatched ? "click" : "noClick"}`}>
      <img
        src={isCatched ? "buttons/master-on.png" : catchedPokemon}
        alt="Catched"
        style={{ width: "100px" }}
        onClick={() => {
          if (!isBeingCatched) {
            onClickFunction();
            setCatchedPokemon("buttons/master-on.png");
            setIsBeingCatched(!isBeingCatched)
          }
        }}
      />
    </div>
  );
};
