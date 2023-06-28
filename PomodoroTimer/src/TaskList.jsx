import { useEffect, useState} from 'react';
import './App.css'

function TaskList({ isPausado, isPomodoro, isPausaCurta, isPausaLonga, handleClick, handlePausaCurta }) {
    const [estado, setEstado] = useState(0); 


    return (
        <>
            <div className="taskList">
                <div>
                   Lista de tarefa
                </div>
            </div>
        </>
    )
}

export default TaskList

