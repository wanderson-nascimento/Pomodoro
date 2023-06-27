import { useEffect, useState} from 'react';
import './App.css'
import sound from '/assets/sound.wav'

function Timer({ isPausado, isPomodoro, isPausaCurta, isPausaLonga, handleClick, handlePausaCurta }) {
    const [segundos, setSegundos] = useState(5); 

    function play() {
        new Audio(sound).play();
    }

    useEffect(() => {
        if (isPausaCurta) {
            setSegundos(300);
        }
    }, [isPausaCurta]);

    useEffect(() => {
        if (isPausaLonga) {
            setSegundos(900);
        }
    }, [isPausaLonga]);

    useEffect(() => {
        if (isPomodoro) {
            setSegundos(5); 
        }
    }, [isPomodoro]);

    useEffect(() => {
        if (segundos <= 0) {
            play();
            handleClick();
            handlePausaCurta();
        }
    }, [segundos])


    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPausado && segundos > 0) {
                setSegundos(prevSegundos => prevSegundos - 1)
            }
        }, 1000);

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

