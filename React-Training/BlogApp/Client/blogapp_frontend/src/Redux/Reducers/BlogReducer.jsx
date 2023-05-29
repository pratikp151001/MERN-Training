import { BlogActionTypes } from "../Actions_Type";

const initialSate={
    error:null,
    data:[],
    isLoading:false
}

const BlogReducer=(state=initialSate,actions)=>{
    switch(actions.type){
        case BlogActionTypes.ADD_REQUEST:
            return{
                ...state,isLoading:true
            }
        case BlogActionTypes.ADD_SUCCESS:
            return{
                ...state,isLoading:false,data:actions.payload
            }
        case BlogActionTypes.ADD_FAIL:
            return{
                ...state,isLoading:false,error:actions.payload
            }
       

        default:
            return state
    }
}
export default BlogReducer