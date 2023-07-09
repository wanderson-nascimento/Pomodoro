import { useState } from "react";
import "./App.css";

function JanelaDePreenchimento({ sendDataToParent, fecharModal }) {
  const [atividadeNova, setAtividadeNova] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    sendDataToParent(atividadeNova);
    fecharModal();
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <label>
              Tarefa que você deseja trabalhar :
              <input
                type="text"
                name="taskName"
                value={atividadeNova}
                onChange={(e) => setAtividadeNova(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button className="closeButton" onClick={fecharModal}>
            Sair
          </button>
        </div>
      </div>
    </>
  );
}

export default JanelaDePreenchimento;
