
import { ActionsTypes_User } from "../Actions-Types";

const initialSate={
    isLoading:false,
    data:"",
    error:""
}

const UserReducer=(state=initialSate,actions)=>{
    switch(actions.type)
    {
        case(ActionsTypes_User.ADD_REQUEST):
            return {
                ...state,isLoading:true
            }
        case(ActionsTypes_User.ADD_SUCCESS):
            return {
                ...state,isLoading:false,data:actions.payload
            }
        case(ActionsTypes_User.fail):
            return {
                ...state,isLoading:false,error:actions.payload
            }
        default:
            return state
    }
}

export default UserReducer;