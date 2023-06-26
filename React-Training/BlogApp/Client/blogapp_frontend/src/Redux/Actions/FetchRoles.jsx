// import { BlogApi } from "../../Apis/ApiHandler/Controller";
import { AdminApi } from "../../Apis/ApiHandler/Controller";
import { AdminAction_type } from "../Actions_Type";
import axios from 'axios'

const FETCHROLE=() => {
    console.log("🚀 ~ file: FetchRoles.jsx:28 ~ FETCHROLE ~ FETCHROLE:", FETCHROLE)

    return  async function (dispatch){
        dispatch({type:AdminAction_type.FETCH_ROLE_REQUEST})
        
        const res=await AdminApi.FetchRole()
       console.log("🚀 ~ file: FetchRoles.jsx:13 ~ res:", res)
       
        if(res.ResponseStatus){
            dispatch({
                type:AdminAction_type.FETCH_ROLE_SUCCESS,
                payload:res.Result.data
            })
        }
        else{
            dispatch({
                type:AdminAction_type.FETCH_ROLE_FAIL,
                payload:res.Result.error
            })
        }
        
    }
}
export default FETCHROLE