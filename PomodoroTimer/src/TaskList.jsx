import { useState } from "react";
import "./App.css";
import JanelaDePreenchimento from "./JanelaDePreenchimento.jsx"

function TaskList() {
  const [isJanelaDePreenchimento, setIsJanelaDePreenchimento] = useState(false);
  const [listaDeAtividades, setListaDeAtividades] = useState([
    "Fazer compras",
    "Estudar JavaScript",
    "Lavar o carro",
    "Preparar o jantar",
    "Fazer exercícios",
  ]);

  let listItems = listaDeAtividades.map((Atividade) => (
    <li className="taskListElements" key={Atividade}>
      {Atividade} <input type="checkbox" />{" "}
    </li>
  ));

  function handleAddNovaTask() {
    setIsJanelaDePreenchimento(!isJanelaDePreenchimento);
  }

  function fecharModal() {
    setIsJanelaDePreenchimento(false);
  }

  function handleSubmit(data) {
    setListaDeAtividades([data, ...listaDeAtividades]);
    console.log(listaDeAtividades)
  }

  return (
    <>
      <div className="footer">
        <div>
          Lista de tarefa{" "}
          <button className="buttonAddTask" onClick={handleAddNovaTask}>
            Adicionar uma nova task
          </button>
          <div>
            {isJanelaDePreenchimento && <JanelaDePreenchimento sendDataToParent={handleSubmit} fecharModal={fecharModal}/>}
          </div>
          <hr></hr>
          <ul className="taskListGeral">{listItems}</ul>
        </div>
      </div>
    </>
  );
}

export default TaskList;
