//import { useState } from 'react'
import Header from "./Header"
import Timer from "./Timer"
import './App.css'

function App() {

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
          <Timer/>
        </div>
        <div className="functions">
          <button>PAUSAR</button>
          <button>SKIP</button>
        </div>
      </div>
      <div>
      </div>  
    </>
  )
}

export default App
