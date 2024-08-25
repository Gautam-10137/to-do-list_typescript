import React, { FormEvent, useState } from 'react';
import './App.css';
import Tasks from "./components/Tasks"

type taskDetail={
  todo:string,
  isDone:boolean
}
const App:React.FC=()=>{

  const [task,setTask]=useState<string>("");
  const [tasks,setTasks]=useState<taskDetail[]>([]);

  const handleAddTask=(e:FormEvent)=>{
    e.preventDefault();
    setTasks((prev)=>[...prev,{todo:task,isDone:false}]);   
    setTask("");
  }

  const deleteTask=(id:number)=>{
      setTasks(tasks.filter((t,idx)=>idx!=id));
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
       <Tasks tasks={tasks} deleteTask={deleteTask} setTasks={setTasks}/>
    </div>
  );

}

export default App;