import axios from "axios";
import {UserActionsType } from "../Actions_Type";
import { UserApi } from "../../Apis/ApiHandler/Controller";

const FetchAllUsers=()=>{
    // return async function(dispatch){
    //     dispatch({type:UserActionsType.FETCHALL_USERS_REQUEST})

    //     const resp=await UserApi.GetAllUsers()
    //     console.log("🚀 ~ file: FetchAllUsers.jsx:9 ~ returnfunction ~ resp:", resp)

    //     if(resp){
    //         dispatch({
    //             type:UserActionsType.FETCHALL_USERS_SUCCESS,
    //             payload:resp.Result
    //         })
    //     }
    //     else{
    //         dispatch({
    //             type:UserActionsType.FETCHALL_USERS_FAIL,
    //             payload:resp.error
    //         })
    //     }
        
    // }

    return async function(dispatch){
        dispatch({type:UserActionsType.FETCHALL_USERS_REQUEST})
        const res= await UserApi.GetAllUsers()
        console.log("🚀 ~ file: FetchAllUsers.jsx:30 ~ returnfunction ~ res:", res)

        if(res.ResponseStatus==200){
            dispatch({
                type:UserActionsType.FETCHALL_USERS_SUCCESS,
                payload:res.Result
            })
        }
        if(!res){
            dispatch({
                type:UserActionsType.FETCHALL_USERS_FAIL,
                payload:res.error
            })
        }
        
    }
}
export  default FetchAllUsers