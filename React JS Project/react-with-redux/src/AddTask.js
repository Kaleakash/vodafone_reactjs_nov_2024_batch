import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./actions";

function AddTask() {
let [taskName,setTaskName]=useState("");
let [taskStatus,setTaskStatus]=useState("")
    let dispatch = useDispatch();   // this hook help us to call reducer function with action and 
                                // payload data. 
let handleSubmit=function(event){
    event.preventDefault();
    let newTask = {
        id:Date.now(),
        name:taskName,
        status:taskStatus
    }
    console.log(newTask)
        dispatch(addTask(newTask))
    setTaskName("")
    setTaskStatus("")
}
    return(
        <div>
            <h3>Add Task</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" value={taskName} name="taskName"
            onChange={(event)=>setTaskName(event.target.value)}
            placeholder="Enter the Task Name"/><br/>
            <input type="text" value={taskStatus} name="taskStatus"
            onChange={(event)=>setTaskStatus(event.target.value)}
            placeholder="Enter task status"/><br/>
            <input type="submit" value="Add Task"/>
            </form>
        </div>
    )
}

export default AddTask;