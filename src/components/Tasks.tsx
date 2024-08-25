import React from "react";
import Task from "./Task";

type taskDetail={
  todo:string,
  isDone:boolean
}
interface Props{
    tasks:taskDetail[],
    deleteTask:Function,
    setTasks:React.Dispatch<React.SetStateAction<taskDetail[]>>
}
function Tasks({tasks,deleteTask,setTasks}:Props) {

    return(<>
    <div className=" grid  grid-cols-3">
        {tasks.map((task,idx)=>(   
          <div className=" h-10" key={idx}>
            <Task task={task} id={idx} deleteTask={deleteTask} setTasks={setTasks}/>
          </div>
        ))}
    </div>
    </>)     
}

export default Tasks;

