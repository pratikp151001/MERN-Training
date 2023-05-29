import { Navigate, useNavigate } from "react-router-dom";
import { BlogActionTypes } from "../Actions_Type";

const initialSate = {
    error: null,
    data: [],
    isLoading: false
}

const FetchSingleReducer = (state = initialSate, actions) => {
  //  const navigate=useNavigate()
    switch (actions.type) {
        case BlogActionTypes.FETCH_SINGLE_REQUEST:
            return {
                ...state, isLoading: true
            }
            case BlogActionTypes.FETCH_SINGLE_SUCCESS:
           // <Navigate to="/blogdata"/>
            return {
                ...state, isLoading: false, data: actions.payload
            }
        case BlogActionTypes.FETCH_SINGLE_FAIL:
            return {
                ...state, isLoading: false, error: actions.payload
            }
            // case BlogActionTypes.DELETE_REQUEST:
            //     return {
            //         ...state, isLoading: true
            //     }
            // case BlogActionTypes.DELETE_SUCCESS:
            //     return {
            //         ...state, isLoading: false, data: actions.payload
            //     }
            // case BlogActionTypes.DELETE_FAIL:
            //     return {
            //         ...state, isLoading: false, error: actions.payload
            //     }
        
        default:
            return state
    }
}
export default FetchSingleReducer
