import { useState } from 'react'
import Header from "./Header"
import Timer from "./Timer"
import './App.css'

function App() {
  const [isPausado, setIsPausado] = useState(false);

  function handleClick() {
    setIsPausado(prevIsPausado => !prevIsPausado);
  }

  return (
    <>
      <Header />
      <div className="central">
        <div className="options">
          <ul>
            <li>
              <button>
                Pomodoro
              </button>
            </li>
            <li>
              <button>
                Pausa curta
              </button>
            </li>
            <li>
              <button>
                Pausa longa
              </button>
            </li>
          </ul>
        </div>
        <div className="timer">
          <Timer isPausado={isPausado} />
        </div>
        <div className="functions">
          {isPausado ? <button onClick={handleClick}>COMEÇAR</button> : <button onClick={handleClick}>PAUSAR</button>}
          <button>SKIP</button>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default App
