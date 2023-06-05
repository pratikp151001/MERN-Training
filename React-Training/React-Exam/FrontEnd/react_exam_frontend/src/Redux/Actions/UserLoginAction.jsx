import axios from "axios";
import { UserActionTypes } from "../ActionType";

const UserLoginAction=(userDetails) => {
    console.log("🚀 ~ file: UserLoginAction.jsx:5 ~ UserRegistartionAction ~ userDetails:", userDetails)
    return async function(dispatch){
        dispatch({type:UserActionTypes.USER_LOGIN_REQUEST})

        const res=await axios.post("http://localhost:9988/loginuser",userDetails)
        console.log("🚀 ~ file: UserLoginAction.jsx:10 ~ returnfunction ~ res:", res)

        if(res.data.status==200){
            console.log("🚀 ~ file: UserLoginAction.jsx:13 ~ returnfunction ~ status:", " INSIDEN IF")

            localStorage.setItem('token',JSON.stringify(res.data.data.token))
            
            dispatch({
                type:UserActionTypes.USER_LOGIN_SUCCESS,
                payload:res.data.data
            })
        }
        else{
            dispatch({
                type:UserActionTypes.USER_LOGIN_FAIL,
                payload:res.data.error
            })
        }
    }
}

export default UserLoginAction