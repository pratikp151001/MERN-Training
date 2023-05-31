import axios from "axios";
import { BlogActionTypes } from "../Actions_Type";
import { BlogApi } from "../../Apis/ApiHandler/Controller";

const BlogFetchAction=()=>{
    return async function(dispatch){
        dispatch({type:BlogActionTypes.FETCH_REQUEST})
        const res= await BlogApi.GetAllBlog()
        console.log("🚀 ~ file: BlogFetchAction.jsx:8 ~ returnfunction ~ res:", res)

        if(res.ResponseStatus==200){
            dispatch({
                type:BlogActionTypes.FETCH_SUCCESS,
                payload:res.Result
            })
        }
        if(!res){
            dispatch({
                type:BlogActionTypes.FETCH_FAIL,
                payload:res.error
            })
        }
        
    }
}
export default BlogFetchAction