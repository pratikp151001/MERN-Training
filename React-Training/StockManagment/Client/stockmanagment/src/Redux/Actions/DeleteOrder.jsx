import { OrderActiontype } from '../Action-type'
import axios from 'axios'

const DeleteOrderAction=(id) => {
console.log("🚀 ~ file: DeletestockAction.jsx:5 ~ DeleteStockAction ~ id:", id)

    return  async function (dispatch){
        dispatch({type:OrderActiontype.DELET_ORDER_REQUEST})
        
      const res= await axios.delete(`http://localhost:9090/deleteorder/${id}`)
       
        if(res.data.status){
            dispatch({
                type:OrderActiontype.DELET_ORDER_SUCCESS,
                payload:res.data.data
            })
        }
        else{
            dispatch({
                type:OrderActiontype.DELET_ORDER_FAIL,
                payload:res.data.error
            })
        }
        
    }
}
export default DeleteOrderAction