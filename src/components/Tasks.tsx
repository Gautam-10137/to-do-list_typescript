import React from "react";
import Task from "./Task";

interface Props{
    tasks:string[]
}
function Tasks({tasks}:Props) {

    return(<>
    <div className=" grid  grid-cols-3">
        {tasks.map((task,id)=>(   
          <div className=" h-10" key={id}>
            <Task task={task}/>
          </div>
        ))}

    </div>
    </>)      
}

export default Tasks;