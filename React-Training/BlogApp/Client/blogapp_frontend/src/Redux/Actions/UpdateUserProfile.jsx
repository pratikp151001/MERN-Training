import { UserApi } from "../../Apis/ApiHandler/Controller";
import { UserActionsType } from "../Actions_Type";

const UpdateUserProfile=(id,userDetails) => {
    console.log("🚀 ~ file: UpdateUserProfile.jsx:5 ~ UpdateUserProfile ~ userDetails:", userDetails)

    return async function(dispatch){
        dispatch({type:UserActionsType.UPDATE_PROFILE_REQUEST})

        const resp=await UserApi.UpdateProfile(id,userDetails)
        console.log("🚀 ~ file: UpdateUserProfile.jsx:8 ~ returnfunction ~ resp:", resp)

        if(resp.ResponseStatus==200){
            dispatch({
                type:UserActionsType.UPDATE_PROFILE_SUCCESS,
                payload:resp.Result
            })
        }
        else{
            dispatch({
                type:UserActionsType.UPDATE_PROFILE_FAIL,
                payload:resp.error
            })
        }
        
    }
}

export default UpdateUserProfile