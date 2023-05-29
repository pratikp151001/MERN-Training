import axios from "axios";
import { BlogActionTypes } from "../Actions_Type";

const UpateBLogActions=(blog,id)=>{
    return async function(dispatch){
         dispatch({type:BlogActionTypes.UPDATE_REQUEST})
         const res=await axios.put(`http://localhost:9999/updateblog/${id}`,blog)
         console.log("🚀 ~ file: UpdateBlogActions.jsx:8 ~ returnfunction ~ res:", res)

         if(res){
            dispatch({
                type:BlogActionTypes.UPDATE_SUCCESS,
                payload:res
            })
         }
         if(!res){
            dispatch({
                type:BlogActionTypes.UPDATE_SUCCESS,
                payload:res.data.eror
            })
         }


         

    }
}

export default UpateBLogActions