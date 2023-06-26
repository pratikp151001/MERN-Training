import { StockActiontype } from '../Action-type'
import axios from 'axios'

const GetStockAction=() => {

    return  async function (dispatch){
        dispatch({type:StockActiontype.GET_STOCK_REQUEST})
        
       const res= await axios.get("http://localhost:9090/stocks")
        console.log("🚀 ~ file: dsvdsv res:", res)
        
        if(res.data.status){
            console.log("🚀 ~ file: GetAllStocks.jsx:18 ~ res.data.data:", res.data.data)
            console.log("dsdvdsvdfbdfbfdbdf")
            dispatch({
                type:StockActiontype.GET_STOCK_SUCCESS,
                payload:res.data.data
            })
        }
        else{
            dispatch({
                type:StockActiontype.GET_STOCK_FAIL,
                payload:res.data.error
            })
        }
        
    }
}
export default GetStockAction