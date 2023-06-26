import Order from '../../Components/Order/Order'
import { OrderActiontype } from '../Action-type'
import axios from 'axios'

const AddOrder=(order) => {

    return  async function (dispatch){
        dispatch({type:OrderActiontype.ADD_ORDER_REQUEST})
        
       const res= await axios.post("http://localhost:9090/addorder",order)
        console.log("🚀 ~ file: AddStockAction.jsx:10 ~ res:", res)
        if(res.data.status){
            dispatch({
                type:OrderActiontype.ADD_ORDER_SUCCESS,
                payload:res.data.data
            })
        }
        else{
            dispatch({
                type:OrderActiontype.ADD_ORDER_FAIL,
                payload:res.data.error
            })
        }
        
    }
}
export default AddOrder