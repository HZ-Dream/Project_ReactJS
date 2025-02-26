import { useState, useRef } from "react";

import "./AddTask.css";

function AddTask({tasks, setTasks}) {
    const inputRef = useRef("");
    const [progress, setProgress] = useState(false);

    const handleReset = () => {
        setProgress(false);
        inputRef.current.value = "";
        inputRef.current.focus();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if( inputRef.current.value.trim() === "" ) {
            alert("Task name is required!");
            inputRef.current.focus();
            return;
        }
        else {
            const task = {
                id: Math.floor(Math.random() * 1000),
                name: inputRef.current.value,
                completed: Boolean(progress)
            }
            setTasks([...tasks, task]);
            handleReset();
        }
    }

    return ( 
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" name="task" id="task" spellCheck="false" 
                    placeholder="Input your task name..." autoComplete="off"/>
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <button type="submit">Add Task</button>
                <span className="reset" onClick={handleReset}>Reset</span>
            </form>
        </section>
     );
}

export default AddTask;