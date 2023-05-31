import axios from "axios";
import { UserActionsType } from "../Actions_Type";
import { UserApi } from "../../Apis/ApiHandler/Controller";

const FetchProfile=(id) => {
    console.log("🚀 ~ file: FetchSingleUserProfile.jsx:5 ~ FetchProfile ~ id:", id)

    return async function(dispatch)
    {
        dispatch({type:UserActionsType.FETCH_PROFILE_REQUEST})

        const resp=await UserApi.FetchProfile(id)
        console.log("🚀 ~ file: FetchSingleUserProfile.jsx:10 ~ FetchProfile ~ resp:", resp)

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

export default FetchProfile