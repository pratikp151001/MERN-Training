import { OrderActiontype } from "../Action-type";

const initianState = {
    error: null,
    isLoading: false,
    added_order:null,
    all_order:null,
    deleted_order:null
}

const OrderReducer = (state = initianState, actions) => {
    switch (actions.type) {
        case (OrderActiontype.ADD_ORDER_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (OrderActiontype.ADD_ORDER_SUCCESS):
            console.log("object", "d")
            return {
                ...state, isLoading: false, added_order: actions.payload
            }
        case (OrderActiontype.ADD_ORDER_FAIL):
            return {
                ...state, isLoading: false, error: actions.error
            }

            case (OrderActiontype.GET_ORDER_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (OrderActiontype.GET_ORDER_SUCCESS):
            console.log("object", "d")
            return {
                ...state, isLoading: false, all_order: actions.payload
            }
        case (OrderActiontype.GET_ORDER_FAIL):
            return {
                ...state, isLoading: false, error: actions.error
            }

            case (OrderActiontype.DELET_ORDER_REQUEST):
                return {
                    ...state, isLoading: true
                }
            case (OrderActiontype.DELET_ORDER_SUCCESS):
                console.log("object", "d")
                return {
                    ...state, isLoading: false, deleted_order: actions.payload
                }
            case (OrderActiontype.DELET_ORDER_FAIL):
                return {
                    ...state, isLoading: false, error: actions.error
                }


            default:
                return state
        }
    }

    export default OrderReducer