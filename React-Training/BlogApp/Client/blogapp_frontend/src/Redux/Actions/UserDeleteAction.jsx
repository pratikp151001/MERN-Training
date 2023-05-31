import axios from "axios";
import { UserActionsType } from "../Actions_Type";
import { UserApi } from "../../Apis/ApiHandler/Controller";

const DeleteUser=(id) => {
    console.log("🚀 ~ file: UserDeleteAction.jsx:5 ~ DeleteUser ~ id:", id)

    return async function(dispatch){
        dispatch({type:UserActionsType.DELETE_USER_REQUEST})

         const resp=await UserApi.DeleteUser(id)

         console.log("🚀 ~ file: UserDeleteAction.jsx:10 ~ returnfunction ~ resp:", resp)

        if(resp.ResponseStatus==200){
            dispatch({
                type:UserActionsType.DELETE_USER_SUCCESS,
                payload:resp.Result
            })
        }
        else{
            dispatch({
                type:UserActionsType.DELETE_USER_FAIL,
                payload:resp.error
            })
        }
    }
}

export default DeleteUser