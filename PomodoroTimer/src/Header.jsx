//import { useState } from 'react'
import './App.css'

function Header() {

  return (
    <>
      <div className="header">
        <ul>
            <li>PomoFocus</li>
            <li>
                <button>
                    Relatório
                </button>
            </li>
            <li>
                <button>
                    Configurações
                </button>
            </li>
            <li>
                <button>
                    Logo
                </button>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Header
