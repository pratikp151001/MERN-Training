import axios from "axios";
import { EmailActionsType } from "../ActionType";

const EmailActions = (data) => {
    console.log("🚀 ~ file: SendEmail.jsx:5 ~ EmailActions ~ data:", data)
    

    return async function (dispatch) {
        dispatch({ type: EmailActionsType.SEND_EMAIL_REQUEST })

        const resp =await axios.post("http://localhost:9988/sendemails",data)
        console.log("🚀 ~ file: viewProfile.jsx:11 ~ returnfunction ~ res:", "resp")

        // if(resp.data.status==200){
        //     console.log("🚀 ~ file: UserLoginAction.jsx:13 ~ returnfunction ~ status:", " INSIDEN IF")

        //     dispatch({
        //         type:HeaderActiontype.POST_HEADER_SUCCESS,
        //         payload:resp.data.data
        //     })
        // }
        // else{
        //     dispatch({
        //         type:HeaderActiontype.POST_HEADER_FAIL,
        //         payload:resp.data.error
        //     })
        // }
     }
}

export default EmailActions