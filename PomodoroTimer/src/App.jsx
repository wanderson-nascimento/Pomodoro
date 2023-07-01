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
    console.log('contador')
    if (isPomodoro === true) {
      setContadorDePomodoros(
        (prevContadorDePomodoros) => prevContadorDePomodoros + 1
      );
      if ((contadorDePomodoros + 1) % 3 === 0) {
        console.log('multiplo de 3 vai dar em pausa longa')
        setIsPomodoro(false);
        handlePausalonga();
      } else {
        console.log('Handle em pausa curta')
        setIsPomodoro(false);
        handlePausaCurta();
      }
    }else handlePomodoro()
  }

  function handlePomodoro() {
    console.log('handle Pomodoro');
    setIsPomodoro(true);
    setIsPausado(true);
    setIsPausaCurta(false);
    setIsPausaLonga(false);
  }

  function handlePausaCurta() {
    console.log('Pausa Curta: ', isPausaCurta, 'pomodoro: ', isPomodoro, 'pausa longa: ', isPausaLonga, 'pausado: ', isPausado);
    if (isPomodoro) {
      setIsPausaCurta(true);
      setIsPausado(true);
      setIsPausaLonga(false);
      console.log('trocou os estados');
    } else {
      handlePomodoro();
    }
  }

  function handlePausalonga() {
    console.log('Pausa Longa');
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
