import { useEffect, useState } from "react";
import "../styles/TrainerForm.css";
import { addCatchedOrUnkownPokemon } from "../firebase";
import { getTrainers } from "../firebase";

function TrainerForm() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getTrainers().then((data) => {
      setTrainers(data);
    });
  }, [trainers]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCatchedOrUnkownPokemon(id, name, "trainer");
  };

  return trainers ? (
    <>
      <form className="pokemon-trainer-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Trainer Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="id">Trainer ID:</label>
          <input type="text" id="id" value={id} onChange={handleIdChange} />
        </div>
        <button className="btn-submit" type="submit">
          Enviar
        </button>
      </form>
      <div className="trainer">
        {trainers.map((trainer) => {
          return (
            <>
              <div>{trainer.name}</div>
              <div>{trainer.id}</div>
            </>
          );
        })}
      </div>
    </>
  ) : null;
}

export default TrainerForm;
