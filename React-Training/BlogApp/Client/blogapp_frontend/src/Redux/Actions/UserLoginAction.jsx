import axios from "axios";
import { UserActionsType } from "../Actions_Type";
import { UserApi } from "../../Apis/ApiHandler/Controller";

const UserLogIn=(userdetails) => {
    console.log("🚀 ~ file: UserLoginAction.jsx:5 ~ UserLogIn ~ userdetails:", userdetails)
  
    return async function(dispatch){
        dispatch({type:UserActionsType.LOGIN_REQUEST})
        console.log("🚀 ~ file: UserLoginAction.jsx:9 ~ UserLogIn ~ userdetails:", userdetails)

        const resp=await UserApi.LoginUser(userdetails)
        console.log("🚀 ~ file: UserLoginAction.jsx:12 ~ returnfunction ~ resp 000000000000000000000000000000000:", resp)
       

        if(resp.Result.status==200){
            localStorage.setItem('token',JSON.stringify(resp.Result.data.token))
            dispatch({
                type:UserActionsType.LOGIN_SUCCESS,
                payload:resp.Result
            })
        }
        else{
            dispatch({
                type:UserActionsType.LOGIN_FAIL,
                payload:resp.error
            })
        }
        
    }
}

export default UserLogIn