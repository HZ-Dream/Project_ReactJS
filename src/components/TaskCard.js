import "./TaskCard.css";

function TaskCard({task, handleDelete}) {
    return ( 
        <div className="taskcard">
            <li className={task.completed ? "completed" : "incomplete"}>
                <span>{task.id} - {task.name}</span>
                <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
            </li>
        </div>
     );
}

export default TaskCard;