import { useState } from "react";

export const CatchedButton = ({ isCatched, onClickFunction }) => {
  const initialState = isCatched
    ? "../../public/buttons/master-on.png"
    : "../../public/buttons/master-off.png";
  const [catchedPokemon, setCatchedPokemon] = useState(initialState);

  console.log(initialState, isCatched, "pokee");

  return (
    <div>
      <img
        src={isCatched ? "./../public/buttons/master-on.png" : catchedPokemon}
        alt="Catched"
        style={{ width: "100px" }}
        onClick={() => {
          onClickFunction();
          setCatchedPokemon("../../public/buttons/master-on.png");
        }}
      />
    </div>
  );
};
