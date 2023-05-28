import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

function Timer(props) {
    const [segundos, setSegundos] = useState(1500);
    const [minutos, setMinutos] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            if (!props.isPausado) {
                setSegundos(prevSegundos => prevSegundos - 1)
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, [props.isPausado])

    const minutosDisplay = String(Math.floor(segundos / 60)).padStart(2, '0');
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
