import axios from "axios";
import { HeaderActiontype } from "../ActionType";

const PostHeaders = (data) => {
    console.log("🚀 ~ file: PostHeaders.jsx:5 ~ PostData ~ data:", data)
    
    return async function (dispatch) {
        dispatch({ type: HeaderActiontype.POST_HEADER_REQUEST })

        const resp =await axios.post("http://localhost:9988/posttableheaders",data,
        {
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        )
        console.log("🚀 ~ file: viewProfile.jsx:11 ~ returnfunction ~ res:", resp)

        if(resp.data.status==200){
            console.log("🚀 ~ file: UserLoginAction.jsx:13 ~ returnfunction ~ status:", " INSIDEN IF")

            dispatch({
                type:HeaderActiontype.POST_HEADER_SUCCESS,
                payload:resp.data.data
            })
        }
        else{
            dispatch({
                type:HeaderActiontype.POST_HEADER_FAIL,
                payload:resp.data.error
            })
        }
     }
}

export default PostHeaders