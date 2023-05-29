import axios from "axios";
import { BlogActionTypes } from "../Actions_Type";

const BlogDelteAction=(id)=>{
    console.log("objectDelete Actioncalled")
    return async function(dispatch){
        dispatch({type:BlogActionTypes.DELETE_REQUEST})
       const  res= await axios.delete(`http://localhost:9999/deleteblog/${id}`)
       console.log("🚀 ~ file: BlogDeleteAction.jsx:8 ~ returnfunction ~ res:", res)

       if(res){
        dispatch({
            type:BlogActionTypes.DELETE_SUCCESS,
            payload:res.data
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