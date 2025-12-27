import React, { useState } from 'react';

export default function TaskForm({addtask}) {
  const [task, settask] = useState("");
  const [priority, setpriority] = useState("Mediam");
  const [catagory, setcatagory] = useState("Genral");

  const handleSubmit = (e) => {
    e.preventDefault();
    addtask({text:task, priority, catagory, completed:false});

    settask('');
    setpriority("Mediam");
    setcatagory("Genral");
  };

    return (
    <div>
      <form onSubmit={handleSubmit} className='task-form' >
        <div id='inp'>
            <input type='text' placeholder='Enter your task' value={task} onChange={(e)=> settask(e.target.value)}></input>
            <span><button type='submit'>Add task</button></span>
           
        </div>

         <div id='btns' >
            <select id='priority' value={priority} onChange={(e)=>setpriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Low">low</option>
                <option value="Mediam">Mediam</option>
            </select>

              <select id='catagory' value={catagory} onChange={(e)=>setcatagory(e.target.value)}>
                <option value="Genral">Genral</option>
                <option value="work">Work</option>
                <option value="Personal">Personal</option>
            </select>
             
        </div>
      </form>
    </div>
  )
}

