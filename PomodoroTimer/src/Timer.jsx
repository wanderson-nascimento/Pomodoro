import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

function Timer({isPausado, isPomodoro, isPausaCurta, isPausaLonga, handleClick}) {
    const [segundos, setSegundos] = useState(1500);

    useEffect(() => {
        if(isPausaCurta){
            setSegundos(300);
        }
    },[isPausaCurta]);

    useEffect(() => {
        if(isPausaLonga){
            setSegundos(900);
        }
    },[isPausaLonga]);

    useEffect(() => {
        if(isPomodoro){
            setSegundos(1500);
        }
    },[isPomodoro]);

    useEffect(() => {
        if(segundos <= 0){
            handleClick();
        }
    },[segundos])


    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPausado && segundos>0) {
                setSegundos(prevSegundos => prevSegundos - 1)
            }
        }, 1);

        return () => {
            clearInterval(interval);
        };

    }, [isPausado])

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
