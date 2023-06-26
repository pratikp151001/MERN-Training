// import { BlogApi } from "../../Apis/ApiHandler/Controller";
import { AdminApi } from "../../Apis/ApiHandler/Controller";
import { AdminAction_type } from "../Actions_Type";
import axios from 'axios'

const ADDROLE=(ROLE) => {
    console.log("🚀 ~ file: AddRoleAction.jsx:26 ~ ADDROLE ~ ROLE:", ROLE)

    return  async function (dispatch){
        dispatch({type:AdminAction_type.ADD_ROLE_REQUEST})
        
        const res=await AdminApi.AddRole(ROLE)
        console.log("🚀 ~ file: AddRoleAction.jsx:13 ~ resp:", res)
        if(res.ResponseStatus){
            dispatch({
                type:AdminAction_type.ADD_ROLE_SUCCESS,
                payload:res.Result.data
            })
        }
        else{
            dispatch({
                type:AdminAction_type.ADD_ROLE_FAIL,
                payload:res.Result.error
            })
        }
        
    }
}
export default ADDROLE