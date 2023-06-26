import axios from "axios";
import { UserActionTypes } from "../ActionType";

const UserRegistartionAction=(userDetails,nevigate) => {
    console.log("🚀 ~ file: UserRegistrationAction.jsx:5 ~ UserRegistartionAction ~ userDetails:", userDetails)
    return async function(dispatch){
        dispatch({type:UserActionTypes.USER_REGISTRATION_REQUEST})

        const res=await axios.post("http://localhost:9988/registeruser",userDetails)
        console.log("🚀 ~ file: UserRegistrationAction.jsx:9 ~ returnfunction ~ res:", res)

        if(res.data.status==200){
            console.log("🚀 ~ file: UserRegistrationAction.jsx:13 ~ returnfunction ~ data:", "INSIDE IF")
            
            dispatch({
                type:UserActionTypes.USER_REGISTRATION_SUCCESS,
                payload:res.data.data
            })
            nevigate('/login')
        }
        else{
            dispatch({
                type:UserActionTypes.USER_REGISTRATION_FAIL,
                payload:res.data.error
            })
        }
    }
}

export default UserRegistartionAction