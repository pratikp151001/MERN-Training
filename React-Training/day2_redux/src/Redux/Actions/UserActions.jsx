
import { RegisterUser } from "../../APi/UserAPIs";
import { ActionsTypes_User } from "../Actions-Types";
import axios from 'axios'

const UserActions=(userDeatils)=>{
    console.log("userDeatils",userDeatils)
    return async function(dispatch) {

       
        dispatch({type:ActionsTypes_User.ADD_REQUEST});
        console.log("object",userDeatils)
        const res = await RegisterUser(userDeatils)
        console.log("userDeatils",userDeatils)
        console.log("🚀 ~ file: UserActions.jsx:16 ~ returnfunction ~ res:", res)

        if(res.status==200 && res){
            console.log("🚀 ~ file: UserActions.jsx:21 ~ returnfunction ~ res:", res)
            
            dispatch({
                type: ActionsTypes_User.ADD_SUCCESS,
                payload: res.data,
               });
        }
         if(res.status==200 && !res){
            dispatch({
                type: ActionsTypes_User.ADD_FAIL,
                payload: res.data.error,
               });
        }
        // const { success } = res.data;
    }


}
export default UserActions