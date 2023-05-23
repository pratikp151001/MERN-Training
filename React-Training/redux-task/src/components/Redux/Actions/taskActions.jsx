import AddToto from "../../AddToto"
import { Add_Task, Delete_Task } from "./Actions-type"


//Add Task Action
export const addTask=(task)=>({
    type:Add_Task,
    playload:task
})

//Delete Task Action
export const deleteTask=(id)=>({
    type:Delete_Task,
    playload:id
})

