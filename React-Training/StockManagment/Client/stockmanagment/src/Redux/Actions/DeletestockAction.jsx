import { StockActiontype } from '../Action-type'
import axios from 'axios'

const DeleteStockAction=(id) => {
console.log("🚀 ~ file: DeletestockAction.jsx:5 ~ DeleteStockAction ~ id:", id)

    return  async function (dispatch){
        dispatch({type:StockActiontype.DELETE_STOCK_REQUEST})
        
       const res= await axios.delete(`http://localhost:9090/deletestock/${id}`)
        console.log("🚀 ~ file: AddStockAction.jsx:10555555555555 ~ res:", res)
        console.log("🚀 ~ file: DeletestockAction.jsx:11 ~ res:", res)
        if(res.data.status){
            dispatch({
                type:StockActiontype.DELETE_STOCK_SUCCESS,
                payload:res.data.data
            })
        }
        else{
            dispatch({
                type:StockActiontype.DELETE_STOCK_FAIL,
                payload:res.data.error
            })
        }
        
    }
}
export default DeleteStockAction