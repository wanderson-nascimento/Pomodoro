import { useState } from "react";
import "./App.css";
import JanelaDePreenchimento from "./JanelaDePreenchimento.jsx";

function TaskList() {
  //Definição de veriáveis iniciais
  const [isJanelaDePreenchimento, setIsJanelaDePreenchimento] = useState(false);

  const [listaDeAtividadesObj, setListaDeAtividadesObj] = useState([
    {
      id: 0,
      taskName: "Fazer umas compras loucas",
      isComplete: false,
      quantidadeDePomodoros: 3,
      quantidadeDePomodorosOriginal: 4,
    },
    {
      id: 1,
      taskName: "Estudar cripto",
      isComplete: true,
      quantidadeDePomodoros: 2,
      quantidadeDePomodorosOriginal: 4,
    },
  ]);

  //Filtros das listas de tarefas
  const listaDeAtividadesAtivos = listaDeAtividadesObj.filter(
    (listaDeAtividadesObj) => listaDeAtividadesObj.isComplete == false
  );

  const listaDeAtividadesInativos = listaDeAtividadesObj.filter(
    (listaDeAtividadesObj) => listaDeAtividadesObj.isComplete == true
  );

  //Renderização das diferentes listas
  const ComplexList = () => (
    <ul className="taskListGeral">
      {listaDeAtividadesAtivos.map((item) => (
        <li className="taskListElements" key={item.id}>
          {item.taskName}
          <input
            type="checkbox"
            defaultChecked={item.isComplete}
            onChange={() => handleCheckboxChange(item.id)}
          />
        </li>
      ))}
    </ul>
  );

  const TarefasConcluidas = () => (
    <ul className="taskListGeral">
      {listaDeAtividadesInativos.map((item) => (
        <li className="taskListElementsInactive" key={item.id}>
          {item.taskName}
          <input
            type="checkbox"
            defaultChecked={item.isComplete}
            onChange={() => handleCheckboxChange(item.id)}
          />
        </li>
      ))}
    </ul>
  );

  //Funções para lidar com eventos

  function handleCheckboxChange(taskId) {
    setListaDeAtividadesObj((prevList) =>
      prevList.map((item) => {
        if (item.id === taskId) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      })
    );
    console.log('Depois da modificação', listaDeAtividadesObj)
  }

  function handleAddNovaTask() {
    setIsJanelaDePreenchimento(!isJanelaDePreenchimento);
  }

  function fecharModal() {
    setIsJanelaDePreenchimento(false);
  }

  function handleSubmit(data) {
    const dataObj = {
      id: listaDeAtividadesObj.length,
      taskName: data,
      isComplete: false,
      quantidadeDePomodoros: 1,
      quantidadeDePomodorosOriginal: 1,
    };
    setListaDeAtividadesObj([...listaDeAtividadesObj, dataObj]); //O item adicionado está por último, mas é necessário ajustar
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
            <ComplexList />
          </div>
          <div>
            Tarefas concluídas
            <hr></hr>
            <TarefasConcluidas />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskList;
