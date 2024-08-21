import React, { FormEvent, useState } from 'react';
import './App.css';
import Tasks from "./components/Tasks"

const App:React.FC=()=>{

  const [task,setTask]=useState<string>("");
  const [tasks,setTasks]=useState<string[]>([]);

  const handleAddTask=(e:FormEvent)=>{
    e.preventDefault();
    console.log(task);
      setTasks((prev)=>[...prev,task]);   
      setTask("");
  }
  
  return (
    <div className="App">
      <form onSubmit={(e)=>{handleAddTask(e)}}>
       <input
         type="text"
         value={task}
         onChange={(e)=>{
          setTask(e.target.value);
         }}
         className='border-2 mt-4'
       ></input>
       <button type="submit" className='border-2 ml-4 bg-slate-400 font-semibold rounded-lg shadow-xl'>Add Task</button>
      </form>
      <div className='font-bold text-2xl '>TASKS</div>
       <Tasks tasks={tasks}/>
    </div>
  );

}

export default App;