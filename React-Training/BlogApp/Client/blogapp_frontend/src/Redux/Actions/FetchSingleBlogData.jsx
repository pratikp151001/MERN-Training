import axios from "axios";
import { BlogActionTypes } from "../Actions_Type";

const FetchSingleBlogDataAction=(id)=>{
    console.log("objectqqqqqqqqqqqqqqqqqqqqq","ASCcccc")
    return async function(dispatch){
        console.log("objectqqqqqqqqqqqqqqqqqqqqq","id")
        dispatch({type:BlogActionTypes.FETCH_SINGLE_REQUEST})
        const res= await axios.get(`http://localhost:9999/fetchblog/${id}`)
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
       
        console.log("🚀 ~ file: FetchSingleBlogData.jsx:9 ~ returnfunction ~ res:", res)

        if(res.status==200){
            dispatch({
                type:BlogActionTypes.FETCH_SINGLE_SUCCESS,
                payload:res.data.data
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