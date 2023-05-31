import axios from "axios";
import { BlogActionTypes } from "../Actions_Type";
import { BlogApi } from "../../Apis/ApiHandler/Controller";

const BlogDelteAction=(id)=>{
    console.log("objectDelete Actioncalled")
    return async function(dispatch){
        dispatch({type:BlogActionTypes.DELETE_REQUEST})
       const  res= await BlogApi.DeleteBlog(id)
       console.log("🚀 ~ file: BlogDeleteAction.jsx:8 ~ returnfunction ~ res:", res)

       if(res){
           console.log("🚀 ~ file: BlogDeleteAction.jsx:13 ~ returnfunction ~ ResponseStatus:",res )
           dispatch({
            type:BlogActionTypes.DELETE_SUCCESS,
            payload:res.Result
        })
    }
    else{
        dispatch({
            type:BlogActionTypes.DELETE_FAIL,
            payload:res.error
        })
    }
       

    }
}

export default BlogDelteAction