import axios from "axios";
import { UserActionTypes } from "../ActionType";

const ViewProfile = () => {
    // console.log("🚀 ~ file: viewProfile.jsx:20 ~ ${JSON.parse(localStorage.getItem('token'))}:",localStorage.getItem('token'))
    console.log("🚀 ~ file: viewProfile.jsx:29 ~ UserLoginAction ~ UserLoginAction:", "ViewProfile")

    return async function (dispatch) {
        dispatch({ type: UserActionTypes.VIEW_PROFILE_REQUEST })

        // const res = await axios.post("http://localhost:9988/profile", {
        //     headers: {
        //         "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //     }
        // })

        const resp =await axios.get("http://localhost:9988/profile",  {
            headers: {
                'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        console.log("🚀 ~ file: viewProfile.jsx:11 ~ returnfunction ~ res:", resp)

        if(resp.data.status==200){
            console.log("🚀 ~ file: UserLoginAction.jsx:13 ~ returnfunction ~ status:", " INSIDEN IF")

            dispatch({
                type:UserActionTypes.VIEW_PROFILE_SUCCESS,
                payload:resp.data.data
            })
        }
        else{
            dispatch({
                type:UserActionTypes.VIEW_PROFILE_FAIL,
                payload:resp.data.error
            })
        }
    }
}

export default ViewProfile