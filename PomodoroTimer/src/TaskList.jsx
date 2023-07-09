import { useState } from "react";
import "./App.css";
import JanelaDePreenchimento from "./JanelaDePreenchimento.jsx";

function TaskList() {
  const [isJanelaDePreenchimento, setIsJanelaDePreenchimento] = useState(false);


  const [listaDeAtividadesObj, setListaDeAtividadesObj] = useState([
    {
      taskName: "Fazer umas compras loucas",
      isComplete: false,
      quantidadeDePomodoros: 3,
      quantidadeDePomodorosOriginal: 4
    },
    {
      taskName: "Estudar cripto",
      isComplete: true,
      quantidadeDePomodoros: 2,
      quantidadeDePomodorosOriginal: 4
    },
  ]);

  const listaDeAtividadesAtivos = listaDeAtividadesObj.filter(listaDeAtividadesObj => listaDeAtividadesObj.isComplete == false)

  const listaDeAtividadesInativos = listaDeAtividadesObj.filter(listaDeAtividadesObj => listaDeAtividadesObj.isComplete == true)


  const ComplexList = () => (
    <ul className="taskListGeral">
      {listaDeAtividadesAtivos.map((item) => (
        <li className="taskListElements" key={item.taskName}>
           {item.taskName}  
           <input type="checkbox"
            />
        </li>
      ))}
    </ul>
  );

  const TarefasConcluidas = () =>(
    <ul className="taskListGeral">
    {listaDeAtividadesInativos.map((item) => (
      <li className="taskListElementsInactive" key={item.taskName}>
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
    const dataObj = {
      taskName: data,
      isComplete: false,
      quantidadeDePomodoros: 1,
      quantidadeDePomodorosOriginal: 1
    }
    setListaDeAtividadesObj([dataObj, ...listaDeAtividadesObj]);
    console.log(listaDeAtividadesObj);
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
          <div>
            Tarefas concluídas
            <hr></hr>
            <TarefasConcluidas/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskList;
