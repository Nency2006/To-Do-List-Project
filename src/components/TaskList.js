import React from 'react'

export default function Tasklist({tasks, updateTask, deleteTask}) {
    const toggleCompleted = (index) =>{
        const updatedTask = {...tasks[index], completed : !tasks[index].completed};
        updateTask(updatedTask, index);
    }
    return (
    <div>
      <ul className='task-list'>
        {tasks.map((task, index)=>(
            <li key={index} className={task.completed ? "completed" : ""}>
                <div>
                    <span>{task.text}</span>
                    <small>({task.priority}, {task.catagory})</small>
                </div>     
                <div>
                    <button onClick={()=>toggleCompleted(index)}>{task.completed ? "undo" : "complete"}</button>
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                </div>
            </li>
        ))}
      </ul>
    </div>
  )
}
