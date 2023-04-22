import "../styles/TrainerCard.css";
import { handleDeleteTrainer, handleUpdateTrainer } from "../firebase";
import { useState } from "react";

const TrainerCard = ({ name, id, idTrainerDb }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [edit, setEdit] = useState("");
  const handleEditChange = (event) => {
    setEdit(event.target.value);
  };

  



  const data = { name:edit ,id: id}
  return (
    <div className="trainerContainer">
      <img src="/pokemonTrainer.png" alt="" />
      <div className="trainerInformation">
        <h3>{name}</h3>
        <p>Trainer ID {id}</p>
        <button onClick={() => handleDeleteTrainer(idTrainerDb)}>
          DELETE TRAINER
        </button>
        <button onClick={() => setIsEditing(true)}>EDIT</button>
        {
          isEditing ? <>
          <input style={{width: "90%"}} type="text" id="id" value={edit} onChange={handleEditChange} />
          <button onClick={() => {
            handleUpdateTrainer(idTrainerDb,data)
            setIsEditing(false)
    
            }}>Send</button>
          </> : null
        }
      </div>
    </div>
  );
};

export default TrainerCard;
