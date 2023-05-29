
import { FetchTodoApi } from "../../APi/FetchTodoApi"
// import FetchTodoAPI from "../../APi/TODOFetchApi"
import { FetchTodos } from "../Actions-Types"
const FetchTodoAction=()=>{

    return async function(dispatch){
        dispatch({type:FetchTodos.FetchTodos_REQUEST})
        let res= await FetchTodoApi()
        console.log("🚀 ~ file: TofoFetch.jsx:9 ~ returnfunction ~ res:", res)

        setTimeout(()=>{
            if(res.status==200){
                console.log("🚀 ~ file: TofoFetch.jsx:11 ~ returnfunction ~ res:", res.data)
                
                dispatch({
                    type:FetchTodos.FetchTodos_SUCCESS,
                    payload:res.data
                })
            }
        },5000)
     
        if(res.status==200 && !res){
            dispatch({
                type:FetchTodos.FetchTodos_FAIL,
                payload:res.data.error
            })
        }

        
    }
}
export default FetchTodoAction