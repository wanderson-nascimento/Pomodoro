import { useState } from "react";
import "./App.css";
import JanelaDePreenchimento from "./JanelaDePreenchimento.jsx";

function TaskList() {
  const [isJanelaDePreenchimento, setIsJanelaDePreenchimento] = useState(false);
  const [listaDeAtividades, setListaDeAtividades] = useState([
    "Fazer compras",
    "Estudar JavaScript",
    "Lavar o carro",
    "Preparar o jantar",
    "Fazer exercícios",
  ]);

  const [listaDeAtividadesObj, setListaDeAtividadesObj] = useState([
    {
      taskName: "Fazer umas compras loucas",
      estado: true,
      quantidadeDePomodoros: 3,
      quantidadeDePomodorosOriginal: 4
    },
    {
      taskName: "Estudar cripto",
      estado: true,
      quantidadeDePomodoros: 2,
      quantidadeDePomodorosOriginal: 4
    },
  ]);

  let listItems = listaDeAtividades.map((Atividade) => (
    <li className="taskListElements" key={Atividade}>
      {Atividade} <input type="checkbox" />{" "}
    </li>
  ));

  const ComplexList = () => (
    <ul className="taskListGeral">
      {listaDeAtividadesObj.map((item) => (
        <li className="taskListElements" key={item.taskName}>
           {item.taskName}  
           <input type="checkbox"
            />
        </li>
      ))}
    </ul>
  );

  function handleAddNovaTask() {
    setIsJanelaDePreenchimento(!isJanelaDePreenchimento);
  }

  function fecharModal() {
    setIsJanelaDePreenchimento(false);
  }

  function handleSubmit(data) {
    setListaDeAtividades([data, ...listaDeAtividades]);
    console.log(listaDeAtividades);
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
            {isJanelaDePreenchimento && (
              <JanelaDePreenchimento
                sendDataToParent={handleSubmit}
                fecharModal={fecharModal}
              />
            )}
          </div>
          <hr></hr>
          <div>
            <ComplexList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskList;
