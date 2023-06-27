import { useState, useEffect } from 'react'
import Header from "./Header"
import Timer from "./Timer"
import './App.css'

function App() {
  const [isPausado, setIsPausado] = useState(true);
  const [isPomodoro, setIsPomodoro] = useState(false);
  const [isPausaCurta, setIsPausaCurta] = useState(false);
  const [isPausaLonga, setIsPausaLonga] = useState(false);


  function handleClick() {
    setIsPausado(prevIsPausado => !prevIsPausado);
  }

  function handlePomodoro(){
    setIsPomodoro(true);
    setIsPausado(true);
    setIsPausaCurta(false);
    setIsPausaLonga(false);
  }

  function handlePausaCurta(){
    setIsPausaCurta(true);
    setIsPausado(true);
    setIsPomodoro(false);
    setIsPausaLonga(false);
  }

  function handlePausalonga(){
    setIsPausaLonga(true);
    setIsPausado(true);
    setIsPausaCurta(false);
    setIsPomodoro(false);
  }


  // 
    let backgroundColor = 'rgb(186, 73, 73)'; // Cor vermelho padrão

    if (isPausaCurta) {
      backgroundColor = 'rgb(56, 133, 138)'; // Cor azul claro para pausa curta
    } else if (isPausaLonga) {
      backgroundColor = 'rgb(57, 112, 151)'; // Cor azul escuro para pausa longa
    }

  return (
    <>
    <div style={{backgroundColor}}>
      <Header />
      <div className="central" >
        <div className="options">
          <ul>
            <li>
              <button onClick={handlePomodoro}>
                Pomodoro 
              </button>
            </li>
            <li>
              <button onClick={handlePausaCurta}>
                Pausa curta 
              </button>
            </li>
            <li>
              <button onClick={handlePausalonga}>
                Pausa longa
              </button>
            </li>
          </ul>
        </div>
        <div className="timer">
          <Timer isPausado={isPausado} isPomodoro={isPomodoro} isPausaCurta={isPausaCurta} isPausaLonga={isPausaLonga} handleClick={handleClick}/>
        </div>
        <div className="functions">
          {isPausado ? <button onClick={handleClick}>COMEÇAR</button> : <button onClick={handleClick}>PAUSAR</button>}
          <button>SKIP</button>
        </div>
      </div>
      <div>
      </div>
      </div>
    </>
  )
}

export default App
