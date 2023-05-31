import { UserApi } from "../../Apis/ApiHandler/Controller";
import { UserActionsType } from "../Actions_Type";
import axios from "axios";

const UserSignUpAction=(userDetails) => {
    console.log("🚀 ~ file: UserSignUpAction.jsx:5 ~ UserSignUpAction ~ userDetails:", userDetails)
    console.log("🚀 ~ file: UserSignUpAction.jsx:5 ~ UserSignUpAction ~ userDetails:", typeof(userDetails))
   
    return async function(dispatch){
        dispatch({type:UserActionsType.SIGNUP_REQUEST})

        let resp=await UserApi.RegisterUser(userDetails)
        console.log("🚀 ~ file: UserSignUpAction.jsx:8 ~ returnfunction ~ resp:11111111111111111111111111", resp.Result.data.token)

      

        if(resp.ResponseStatus==200){
            localStorage.setItem('token', JSON.stringify(resp.Result.data.token));
            dispatch({
                type:UserActionsType.SIGNUP_SUCCESS,
                payload:resp.Result
            })
        }
        else{
            dispatch({
                type:UserActionsType.SIGNUP_FAIL,
                payload:resp.error
            })

        }

       

        
    }
}

export default UserSignUpAction