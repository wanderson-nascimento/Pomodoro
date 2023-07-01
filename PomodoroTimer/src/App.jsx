import { useState, useEffect } from "react";
import Header from "./Header";
import Timer from "./Timer";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  const [isPausado, setIsPausado] = useState(true);
  const [isPomodoro, setIsPomodoro] = useState(true);
  const [isPausaCurta, setIsPausaCurta] = useState(false);
  const [isPausaLonga, setIsPausaLonga] = useState(false);
  const [contadorDePomodoros, setContadorDePomodoros] = useState(0);

  function handleClick() {
    setIsPausado((prevIsPausado) => !prevIsPausado);
  }

  function handleContador() {
    if (isPomodoro === true) {
      setContadorDePomodoros(
        (prevContadorDePomodoros) => prevContadorDePomodoros + 1
      );
      if ((contadorDePomodoros + 1) % 3 === 0) {
        setIsPomodoro(false);
        handlePausalonga();
      } else {
        setIsPomodoro(false);
        handlePausaCurta();
      }
    }else handlePomodoro()
  }

  function handlePomodoro() {
    setIsPomodoro(true);
    setIsPausado(true);
    setIsPausaCurta(false);
    setIsPausaLonga(false);
  }

  function handlePausaCurta() {
    if (isPomodoro) {
      setIsPausaCurta(true);
      setIsPausado(true);
      setIsPausaLonga(false);
    } else {
      handlePomodoro();
    }
  }

  function handlePausalonga() {
    if (isPomodoro) {
      setIsPausaLonga(true);
      setIsPausado(true);
      setIsPausaCurta(false);
    } else {
      handlePomodoro();
    }
  }

  //
  let backgroundColor = "rgb(186, 73, 73)"; // Cor vermelho padrão

  if (isPausaCurta) {
    backgroundColor = "rgb(56, 133, 138)"; // Cor azul claro para pausa curta
  } else if (isPausaLonga) {
    backgroundColor = "rgb(57, 112, 151)"; // Cor azul escuro para pausa longa
  }

  return (
    <>
      <div style={{ backgroundColor }}>
        <Header />
        <title>Teste</title>
        <div className="central">
          <div className="options">
            <ul>
              <li>
                <button onClick={handlePomodoro}>Pomodoro</button>
              </li>
              <li>
                <button onClick={handlePausaCurta}>Pausa curta</button>
              </li>
              <li>
                <button onClick={handlePausalonga}>Pausa longa</button>
              </li>
            </ul>
          </div>
          <div className="timer">
            <Timer
              isPausado={isPausado}
              isPomodoro={isPomodoro}
              isPausaCurta={isPausaCurta}
              isPausaLonga={isPausaLonga}
              handleClick={handleClick}
              handleContador={handleContador}
            />
          </div>
          <div className="functions">
            {isPausado ? (
              <button onClick={handleClick}>COMEÇAR</button>
            ) : (
              <button onClick={handleClick}>PAUSAR</button>
            )}
            <button>SKIP</button>
          </div>
        </div>
        <div className="contador">#{contadorDePomodoros}</div>
        <div>
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
