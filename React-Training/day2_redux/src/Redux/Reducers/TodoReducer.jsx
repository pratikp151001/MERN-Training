import { FetchTodos } from "../Actions-Types";

const initialSate={
    
    isLoading:false
}

const FetchTodosReducer=(state=initialSate,actions)=>{
    switch (actions.type) {
        case (FetchTodos.FetchTodos_REQUEST):
            return {
                ...state,isLoading:true
            }
        case (FetchTodos.FetchTodos_SUCCESS):
            return {
                    ...state,isLoading:false,fetchedData:actions.payload
                }
        case (FetchTodos.FetchTodos_FAIL):
            return {
                ...state,isLoading:false,error:actions.payload
            }
            
    
        default:
            return state
    }
}
export default FetchTodosReducer;