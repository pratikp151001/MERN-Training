import Action_Type from "../Actions-Types"
import axios from 'axios'
const fetchdata=()=>{
    // console.log("Action")
    // try{
    //     let res= await axios.get("https://jsonplaceholder.typicode.com/users")
    //     console.log("🚀 ~ file: FetchDataActions.jsx:6 ~ fetchdata ~ res:", res.data)
        
    //     return {
    //         type:Action_Type.Fetch_Data,
    //         payload:res.data
    //     }

    // }catch(e){
    //     console.log("e",e)
    // }
    return function(dispatch) {

        return axios.get('https://jsonplaceholder.typicode.com/todos').then(data=>{
            // dispatch
            console.log("data",data.data)
            dispatch({
                type: Action_Type.Fetch_Data,
               payload:data.data
            });
        });
    };
   
}
export {fetchdata}