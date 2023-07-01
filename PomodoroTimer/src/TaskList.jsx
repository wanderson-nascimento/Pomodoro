import { useEffect, useState } from "react";
import "./App.css";

function TaskList({
  isPausado,
  isPomodoro,
  isPausaCurta,
  isPausaLonga,
  handleClick,
  handlePausaCurta,
}) {
  const [estado, setEstado] = useState(0);
  const people = [
    "Fazer compras",
    "Estudar JavaScript",
    "Lavar o carro",
    "Preparar o jantar",
    "Fazer exercícios",
  ];
  const listItems = people.map((person) => (
    <li className="taskListElements" key={person}>
      {person} <input type="checkbox" />{" "}
    </li>
  ));

  function handleAddNovaTask(){
  }

  return (
    <>
      <div className="footer">
        <div>
          Lista de tarefa <button className="buttonAddTask" > Adicionar uma nova task </button>
          <hr></hr>
          <ul className="taskListGeral">{listItems}</ul>
        </div>
      </div>
    </>
  );
}

export default TaskList;
