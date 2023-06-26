import axios from "axios";
import { UserActionTypes } from "../ActionType";
// import { useNavigate } from "react-router-dom";


const UserUpdateProfileAction=(userDetails,nevigate) => {
console.log("🚀 ~ file: UpdateProfileAction.jsx:5 ~ UserUpdateProfileAction ~ userDetails:", userDetails)
console.log("🚀 ~ file: UpdateProfileAction.jsx:29 ~ UserUpdateProfileAction ~ UserUpdateProfileAction:", UserUpdateProfileAction)

return async function(dispatch){
  
console.log("🚀 ~ file: UpdateProfileAction.jsx:11 ~ returnfunction ~ nevigate:", nevigate)

        dispatch({type:UserActionTypes.UPDATE_PROFILE_REQUEST})

        const res=await axios.put("http://localhost:9988/updateprofile",userDetails,{
            headers: {
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        console.log("🚀 ~ file: UpdateProfileAction.jsx:17 ~ returnfunction ~ res:", res)

        if(res.data.status==200){
            console.log("🚀 ~ file: UserLoginAction.jsx:13 ~ returnfunction ~ status:", " INSIDEN IF")


            
            dispatch({
                type:UserActionTypes.UPDATE_PROFILE_SUCCESS,
                payload:res.data.data
            })

        //    window.location.replace("/dashboard")
        nevigate("/dashboard")
        }
        else{
            dispatch({
                type:UserActionTypes.UPDATE_PROFILE_FAIL,
                payload:res.data.error
            })
        }
    }
}

export default UserUpdateProfileAction