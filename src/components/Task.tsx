import React, { Component, useState } from "react";
import { JsxElement } from "typescript";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

type taskDetail={
    todo:string,
    isDone:boolean
} 
interface Props {
  task: taskDetail;
  id: number;
  deleteTask: Function;
  setTasks: React.Dispatch<React.SetStateAction<taskDetail[]>>;
}
const Task: React.FC<Props> = ({ task, id, deleteTask, setTasks }) => {
  const [updatedTask, setUpdatedTask] = useState<string>(task.todo);
  const [editTask, setEditTask] = useState<boolean>(false);
  console.log(task);
  const handleEdit = () => {
    setTasks((prev) =>
      prev.map((task, idx) => (idx == id ? {todo:updatedTask,isDone:false} : task))
    );
    setEditTask(false);
  };

  const handleDone=()=>{
    setTasks((prev)=>prev.map((task,idx)=>(idx==id?{todo:task.todo,isDone:true}:task)));
  }

  return (
    <div>
      {task.isDone==false ? (
        <h3 className="border-2 flex justify-between   bg-green-600 text-xl h-16 font-bold rounded-xl ml-1">
          {editTask ? (
            <div className="flex ml-2">
              <input
                value={updatedTask}
                type="text"
                onChange={(e) => setUpdatedTask(e.target.value)}
                className="border-2 bg-slate-50 h-8 mt-2"
              ></input>
              <button
                className="border-2 bg-slate-700 text-white h-8 mt-2 ml-1 rounded-lg"
                onClick={handleEdit}
              >
                Update
              </button>
            </div>
          ) : (
            <span className="ml-8 mt-4 ">{task.todo}</span>
          )}
          <span className="mt-4">
            <button className="mr-12" onClick={handleDone}>
              <IoMdDoneAll />
            </button>
            {!editTask ? (
              <button className="mr-12" onClick={() => setEditTask(true)}>
                <MdEdit />
              </button>
            ) : (
              <></>
            )}
            <button className="mr-12" onClick={() => deleteTask(id)}>
              <MdDelete />
            </button>
          </span>
        </h3>
      ) : (
        <div className=" ml-4 bg-yellow-500 flex justify-between h-16 text-xl">
          <div className=" text-gray-800 text-center justify-center w-3/4  ml-2 mt-4 font-bold line-through">
            {task.todo}
          </div>
          <button className="mr-12" onClick={() => deleteTask(id)}>
            <MdDelete />
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
