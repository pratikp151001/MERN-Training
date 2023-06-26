import { StockActiontype } from '../Action-type'
import axios from 'axios'

const AddStockAction=(stock) => {

    return  async function (dispatch){
        dispatch({type:StockActiontype.ADD_STOCK_REQUEST})
        
       const res= await axios.post("http://localhost:9090/addstock",stock)
        console.log("🚀 ~ file: AddStockAction.jsx:10 ~ res:", res)
        if(res.data.status){
            dispatch({
                type:StockActiontype.ADD_STOCK_SUCCESS,
                payload:res.data.data
            })
        }
        else{
            dispatch({
                type:StockActiontype.ADD_STOCK_FAIL,
                payload:res.data.error
            })
        }
        
    }
}
export default AddStockAction