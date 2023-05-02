//import { useState } from 'react'
import Header from "./Header"
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>     
      <Header/>
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
          <p>25:00</p>
        </div>
        <div className="functions">
          <button>PAUSAR</button>
          <button>SKIP</button>
        </div>
      </div>
      <div>
        <p>Task list</p>
      </div>  
    </>
  )
}

export default App
