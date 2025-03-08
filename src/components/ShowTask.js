function ShowTask({taskList, setTaskList, task, setTask}) {
    const handleRemove = (id) => {
        const updateTaskList = taskList.filter( todo => todo.id !== id )
        setTaskList(updateTaskList)
    }

    const handleChange = (id) => {
        const selectedTask = taskList.find(todo => todo.id === id)
        setTask(selectedTask)
    }

    return ( 
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
            </div>
            <ul>
                {taskList.map(task => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i onClick={() => handleChange(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleRemove(task.id)} className="bi bi-trash"></i>
                    </li>
                ))}
            </ul>
        </section>
     );
}

export default ShowTask;