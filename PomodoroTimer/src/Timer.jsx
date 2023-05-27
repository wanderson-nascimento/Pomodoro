import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

function Timer() {
    const [segundos, setSegundos] = useState(1500);
    const [minutos, setMinutos] = useState(0);
 

    useEffect(() => {
        const interval = setInterval(() => {
            setSegundos(prevSegundos => prevSegundos - 1)
        }, 1000);

        return () => {
            clearInterval(interval);
          };

    },[])

    const minutosDisplay = String(Math.ceil(segundos / 60)).padStart(2, '0');
    const segundosDisplay = String(Math.ceil(segundos % 60)).padStart(2, '0');


    return (
        <>
            <div className="timer">
                <div>
                   {minutosDisplay}:{segundosDisplay}
                </div>
            </div>
        </>
    )
}

export default Timer
