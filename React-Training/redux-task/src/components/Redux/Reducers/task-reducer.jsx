 import { Add_Task } from "../Actions/Actions-type";

 const initialstate=[]
 export default (state=initialstate,action)=>{
    if(action.type==Add_Task)
    {
        return [...state,action.playload]
    }
 }