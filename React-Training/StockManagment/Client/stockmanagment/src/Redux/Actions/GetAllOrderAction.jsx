import { OrderActiontype } from '../Action-type'
import axios from 'axios'

const GetOrderAction=() => {

    return  async function (dispatch){
        dispatch({type:OrderActiontype.GET_ORDER_REQUEST})
        
       const res= await axios.get("http://localhost:9090/getorder")
        console.log("🚀 ~ file: dsvdsv res:", res)
        
        if(res.data.status){
            console.log("🚀 ~ file: GetAllStocks.jsx:18 ~ res.data.data:", res.data.data)
            console.log("dsdvdsvdfbdfbfdbdf")
            dispatch({
                type:OrderActiontype.GET_ORDER_SUCCESS,
                payload:res.data.data
            })
        }
        else{
            dispatch({
                type:OrderActiontype.GET_ORDER_FAIL,
                payload:res.data.error
            })
        }
        
    }
}
export default GetOrderAction