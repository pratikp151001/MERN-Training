import { RegisterUser } from "../../../API/UserAPis";
import { ActionsTypes_User } from "../Actions-type";

const UserActions=()=>{
    return async function(dispatch) {

        // return axios.get('https://jsonplaceholder.typicode.com/todos').then(data=>{
        //     // dispatch
        //     console.log("data",data.data)
        //     dispatch({
        //         type: Action_Type.Fetch_Data,
        //        payload:data.data
        //     });
        // });
        dispatch({type:ActionsTypes_User.ADD_REQUEST});
        const res = await RegisterUser()
        console.log("🚀 ~ file: UserActions.jsx:16 ~ returnfunction ~ res:", res)

        if(res.status==200 && res ==true){
            dispatch({
                type: ActionsTypes_User.ADD_SUCCESS,
                payload: res.data,
               });
        }
         if(res.status==200 && res == false){
            dispatch({
                type: ActionsTypes_User.ADD_FAIL,
                payload: res.data.error,
               });
        }
        // const { success } = res.data;
    }


}
export default UserActions