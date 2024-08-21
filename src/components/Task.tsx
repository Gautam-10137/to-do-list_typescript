import React, { Component } from "react";
import { JsxElement } from "typescript";

interface Props{
    task:string
}
const Task:React.FC<Props>=({task})=>{

    return(
    <div>
        <h3 className="border-2 bg-green-600 text-xl font-bold rounded-xl ml-1">{task}</h3>
    </div>
    )
}

export default Task;
