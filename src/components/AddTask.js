function AddTask({taskList, setTaskList, task, setTask}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        if(task.id) {
            const date = new Date();
            const updateTask = taskList.map((todo) => (
                todo.id === task.id ? {
                    id: task.id,
                    name: task.name,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                } : todo
            ))
            setTaskList(updateTask);
            setTask({})
            e.target.task.focus();
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            
            setTaskList([...taskList, newTask]);
            setTask({})
            e.target.task.focus();
        }
    }

    return ( 
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" autoComplete="off" placeholder="add task" 
                    maxLength="25" spellCheck="false" value={task.name || ""} onChange={e => setTask({...task, name: e.target.value})}/>
                <button>{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
     );
}

export default AddTask;