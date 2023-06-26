import axios from "axios";
import { suppillerActiontypes } from "../ActionType";

const PostData = (data) => {
    console.log("🚀 ~ file: PostDataAction.jsx:5 ~ PostData ~ data:", data)
    console.log("🚀 ~ file: PostDataAction.jsx:34 ~ PostData ~ PostData:", PostData)


    return async function (dispatch) {
        dispatch({ type: suppillerActiontypes.POST_DATA_REQUEST })

        // const res = await axios.post("http://localhost:9988/profile", {
        //     headers: {
        //         "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //     }
        // })

        const resp =await axios.post("http://localhost:9988/postdata",data,
        {
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        )
        console.log("🚀 ~ file: PostDataAction.jsx:19 ~ resp:", resp)
       

        if(resp.data.status==200){
            console.log("🚀 ~ file: UserLoginAction.jsx:13 ~ returnfunction ~ status:", " INSIDEN IF")

            dispatch({
                type:suppillerActiontypes.POST_DATA_SUCCESS,
                payload:resp.data.data
            })
        }
        else{
            dispatch({
                type:suppillerActiontypes.POST_DATA_FAIL,
                payload:resp.data.error
            })
        }
     }
}

export default PostData