import { FetchDataFromAppi } from "../../APi/FetchDataFromApi"
import { FetchData } from "../Actions-Types"
const FetchDataAction=()=>{

    return async function(dispatch){
        dispatch({type:FetchData.FETCHdATA_REQUEST})
        let res= await FetchDataFromAppi()
        console.log("🚀 ~ file: FetchDataAction.jsx:8 ~ returnfunction ~ res:", res)

        setTimeout(()=>{
            if(res.status==200 && res){
                dispatch({
                    type:FetchData.FETCHdATA_SUCCESS,
                    payload:res.data
                })
            }
        },2000)
       
        if(res.status==200 && !res){
            dispatch({
                type:FetchData.FETCHdATA_FAIL,
                payload:res.data.error
            })
        }

        
    }
}
export default FetchDataAction