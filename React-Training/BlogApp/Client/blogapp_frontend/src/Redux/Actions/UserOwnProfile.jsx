import { UserApi } from "../../Apis/ApiHandler/Controller";
import { UserActionsType } from "../Actions_Type";

const OwnProfile=()=>{
return async function(dispatch){
    dispatch({type:UserActionsType.FETCH_OWN_PROFILE_REQUEST})

    const resp=await UserApi.OwnProfile()
    console.log("🚀 ~ file: UserOwnProfile.jsx:7 ~ returnfunction ~ resp:", resp)

    if(resp.Result.status==200){
        dispatch({
            type:UserActionsType.FETCH_PROFILE_SUCCESS,
            payload:resp.Result
        })
    }
    else{
        dispatch({
            type:UserActionsType.FETCH_PROFILE_FAIL,
            payload:resp.error
        })
    }
    
}
}

export default OwnProfile