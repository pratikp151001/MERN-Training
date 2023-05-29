 import { Add_Task,Delete_Task } from "../Actions/Actions-type";

 const initialstate=[]
 export default (state=initialstate,action)=>{
    if(action.type==Add_Task)
    {
        return [...state,action.playload]
    }
    else if(action.type==Delete_Task)
    {
        return [...state,action.playload]
    }
    else{
        return state
    }
 }