import { FetchData } from "../Actions-Types";

const initialSate={
    
    isLoading:false
}

const FetchDataReducer=(state=initialSate,actions)=>{
    switch (actions.type) {
        case (FetchData.FETCHdATA_REQUEST):
            return {
                ...state,isLoading:true
            }
        case (FetchData.FETCHdATA_SUCCESS):
            return {
                    ...state,isLoading:false,fetchedData:actions.payload
                }
        case (FetchData.FETCHdATA_FAIL):
            return {
                ...state,isLoading:false,error:actions.payload
            }
            
    
        default:
            return state
    }
}
export default FetchDataReducer;