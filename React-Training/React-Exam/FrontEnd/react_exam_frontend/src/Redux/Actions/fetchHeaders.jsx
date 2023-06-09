import axios from "axios";
import { HeaderActiontype } from "../ActionType";

const FetchHeaders = (month) => {

    console.log("🚀 ~ file: fetchHeaders.jsx:34 ~ FetchSuppilers ~ FetchSuppilers:", FetchHeaders)

  
    return async function (dispatch) {
        dispatch({ type: HeaderActiontype.FETCH_HEADER_REQUEST })

        // const res = await axios.post("http://localhost:9988/profile", {
        //     headers: {
        //         "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //     }
        // })

        const resp =await axios.get(`http://localhost:9988/getheaders/${month}`)

        console.log("🚀 ~ file: fetchHeaders.jsx:20 ~ resp:", resp)
        if(resp.data.status==200){
            console.log("🚀 ~ file: UserLoginAction.jsx:13 ~ returnfunction ~ status:", " INSIDEN IF")

            dispatch({
                type:HeaderActiontype.FETCH_HEADER_SUCCESS,
                payload:resp.data.data
            })
        }
        else{
            dispatch({
                type:HeaderActiontype.FETCH_HEADER_FAIL,
                payload:resp.data.error
            })
        }
    }
}

export default FetchHeaders