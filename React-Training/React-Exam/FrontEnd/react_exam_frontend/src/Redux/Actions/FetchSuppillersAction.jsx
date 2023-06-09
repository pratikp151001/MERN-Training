import axios from "axios";
import { suppillerActiontypes } from "../ActionType";

const FetchSuppilers = (month) => {
    console.log("🚀 ~ file: FetchSuppillersAction.jsx:5 ~ FetchSuppilers ~ month:", month)
    console.log("🚀 ~ file: FetchSuppillersAction.jsx:40 ~ FetchSuppilers ~ FetchSuppilers:", FetchSuppilers)

    return async function (dispatch) {
        dispatch({ type: suppillerActiontypes.FETCH_SUPPILLERS_REQUEST })

        // const res = await axios.post("http://localhost:9988/profile", {
        //     headers: {
        //         "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //     }
        // })

        const resp =await axios.get(`http://localhost:9988/getsuppilers/${month}`)
        console.log("🚀 ~ file: viewProfile.jsx:11 ~ returnfunction ~ res:", resp)

        if(resp.data.status==200){
            console.log("🚀 ~ file: UserLoginAction.jsx:13 ~ returnfunction ~ status:", " INSIDEN IF")

            dispatch({
                type:suppillerActiontypes.FETCH_SUPPILLERS_SUCCESS,
                payload:resp.data.data
            })
        }
        else{
            dispatch({
                type:suppillerActiontypes.FETCH_SUPPILLERS_FAIL,
                payload:resp.data.error
            })
        }
    }
}

export default FetchSuppilers