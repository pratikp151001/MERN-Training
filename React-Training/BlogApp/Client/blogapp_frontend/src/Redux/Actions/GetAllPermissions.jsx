import { AdminApi } from "../../Apis/ApiHandler/Controller";
import { AdminAction_type } from "../Actions_Type";

const FetchALLPermission=()=>{
    return async function(dispatch)
    {
         dispatch({type:AdminAction_type.FETCH_PERMISSION_REQUEST})

         const resp=await AdminApi.FetchPermissions()
         console.log("🚀 ~ file: GetAllPermissions.jsx:9 ~ FetchALLPermission ~ resp:", resp)


         if(resp.ResponseStatus==200){
            dispatch({
                type:AdminAction_type.FETCH_PERMISSION_SUCCESS,
                payload:resp.Result
            })
         }
         else{
            dispatch({
                type:AdminAction_type.FETCH_PERMISSION_FAIL,
                payload:resp.Result
            })
         }
    }
}

export default FetchALLPermission