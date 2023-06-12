import axios from "axios";
import { DownloadPDFTypes } from "../ActionType";

const DownloadPDF = (data) => {
console.log("🚀 ~ file: DownloadPDf.jsx:5 ~ DownloadPDF ~ data:", data)

    console.log("🚀 ~ file: DownloadPDf.jsx:36 ~ DownloadPDF ~ DownloadPDF:", DownloadPDF)

  
    return async function (dispatch) {
        dispatch({ type: DownloadPDFTypes.DOWNLOAD_PDF_REQUEST })

        // const res = await axios.post("http://localhost:9988/profile", {
        //     headers: {
        //         "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //     }
        // })

        const resp =await axios.post(`http://localhost:9988/pdf/${data.month}`,data.emails)

        console.log("🚀 ~ file: fetchHeaders.jsx:20 ~ resp:", resp)
        if(resp.data.status==200){
            console.log("🚀 ~ file: UserLoginAction.jsx:13 ~ returnfunction ~ status:", " INSIDEN IF")

            dispatch({
                type:DownloadPDFTypes.DOWNLOAD_PDF_SUCCESS,
                payload:resp.data.data
            })
        }
        else{
            dispatch({
                type:DownloadPDFTypes.DOWNLOAD_PDF_FAIL,
                payload:resp.data.error
            })
        }
    }
}

export default DownloadPDF