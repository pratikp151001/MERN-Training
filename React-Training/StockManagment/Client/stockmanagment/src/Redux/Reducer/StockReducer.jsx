import { StockActiontype } from "../Action-type";

const initianState = {
    error: null,
    isLoading: false,
    added_stock: null,
    all_stock: null,
    deleted_stock:null
}

const StockReducer = (state = initianState, actions) => {
    switch (actions.type) {
        case (StockActiontype.ADD_STOCK_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (StockActiontype.ADD_STOCK_SUCCESS):
            console.log("object", "d")
            return {
                ...state, isLoading: false, added_stock: actions.payload
            }
        case (StockActiontype.ADD_STOCK_FAIL):
            return {
                ...state, isLoading: false, error: actions.error
            }


        case (StockActiontype.GET_STOCK_REQUEST):
            console.log("Dvdfgdfh")
            return {
                ...state, isLoading: true
            }
        case (StockActiontype.GET_STOCK_SUCCESS):
            console.log("Dv444444444444444444dfgdfh",actions.payload)
            return {
                ...state, isLoading: false, all_stock: actions.payload
            }
        case (StockActiontype.GET_STOCK_FAIL):
            return {
                ...state, isLoading: false, error: actions.error
            }




            case (StockActiontype.DELETE_STOCK_REQUEST):
            console.log("Dvdfgdfh")
            return {
                ...state, isLoading: true
            }
        case (StockActiontype.DELETE_STOCK_SUCCESS):
            console.log("Dv444444444444444444dfgdfh",actions.payload)
            return {
                ...state, isLoading: false, deleted_stock: actions.payload
            }
        case (StockActiontype.DELETE_STOCK_FAIL):
            return {
                ...state, isLoading: false, error: actions.error
            }
        default:
            return state
    }
}
export default StockReducer