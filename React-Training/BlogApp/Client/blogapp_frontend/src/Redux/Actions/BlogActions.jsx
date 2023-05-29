import { BlogActionTypes } from "../Actions_Type";
import axios from 'axios'

const BlogActions=(BlogData) => {
    console.log("🚀 ~ file: BlogActions.jsx:5 ~ BlogActions ~ BlogData:", BlogData)
    
    return  async function (dispatch){
        dispatch({type:BlogActionTypes.ADD_REQUEST})
        
        console.log("🚀 ~ file: BlogActions.jsx:10 ~ BlogActions ~ BlogData:", BlogData)
        const res=await axios.post("http://localhost:9999/addblog",BlogData)
        console.log("🚀 ~ file: BlogActions.jsx:7 ~ res:", res)
        if(res){
            dispatch({
                type:BlogActionTypes.ADD_SUCCESS,
                payload:res.data
            })
        }
        else{
            dispatch({
                type:BlogActionTypes.ADD_FAIL,
                payload:res.error
            })
        }
        
    }
}
export default BlogActions