import axios from "axios";
import { BlogActionTypes } from "../Actions_Type";
import { BlogApi } from "../../Apis/ApiHandler/Controller";

const FetchSingleBlogDataAction=(id)=>{
    console.log("objectqqqqqqqqqqqqqqqqqqqqq","ASCcccc")
    return async function(dispatch){
        console.log("🚀 ~ file: FetchSingleBlogData.jsx:8 ~ returnfunction ~ async:", "async")
        
        dispatch({type:BlogActionTypes.FETCH_SINGLE_REQUEST})
        const res= await BlogApi.GetSingleBlog(id)
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
       
        console.log("🚀 ~ file: FetchSingleBlogData.jsx:9 ~ returnfunction ~ res:", res)

        if(res){
            dispatch({
                type:BlogActionTypes.FETCH_SINGLE_SUCCESS,
                payload:res.Result
            })
        }
        if(!res){
            dispatch({
                type:BlogActionTypes.FETCH_SINGLE_FAIL,
                payload:res.error
            })
        }
        
    }
}
export default FetchSingleBlogDataAction