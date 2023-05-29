import axios from "axios";
import { BlogActionTypes } from "../Actions_Type";

const BlogFetchAction=()=>{
    return async function(dispatch){
        dispatch({type:BlogActionTypes.FETCH_REQUEST})
        const res= await axios.get("http://localhost:9999/fetchblog")
        console.log("🚀 ~ file: BlogFetchAction.jsx:8 ~ returnfunction ~ res:", res)

        if(res.status==200){
            dispatch({
                type:BlogActionTypes.FETCH_SUCCESS,
                payload:res.data.data
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