import React, { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Tasklist from './components/TaskList';
import TaskProgress from './components/TaskProgress';
import './style.css';

function App() {
  const [tasks, settasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addtask = (task) =>{
    settasks([...tasks, task]);
  };
  const updateTask = (updatedTask , index) =>{
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    settasks(newtask);
  }
  const deleteTask = (index) =>{
    settasks(tasks.filter((_ , i) => i !== index));
  }
  const cleartask = () =>{
    settasks([]);
  }
  return (
    <div className='App'>
      <header>
        <h1 className='title'>To Do List</h1>
        <p className='tagline'>Your friendly task manager app </p>
      </header>
        <TaskForm addtask={addtask}/>
        <Tasklist tasks={tasks}
                  updateTask = {updateTask} 
                  deleteTask = {deleteTask} />
        <TaskProgress tasks={tasks}/>

        {tasks.length > 0 && (<button className='clear-btn' onClick={cleartask}>Clear all tasks</button>)}
   </div>
  );
}

export default App;
