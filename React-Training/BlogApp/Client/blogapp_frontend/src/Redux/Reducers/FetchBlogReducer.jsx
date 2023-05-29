import { BlogActionTypes } from "../Actions_Type";

const initialSate = {
    error: null,
    data: [],
    isLoading: false
}

const FetchBlogReducer = (state = initialSate, actions) => {
    switch (actions.type) {
        case BlogActionTypes.FETCH_REQUEST:
            return {
                ...state, isLoading: true
            }
        case BlogActionTypes.FETCH_SUCCESS:
            return {
                ...state, isLoading: false, data: actions.payload
            }
        case BlogActionTypes.FETCH_FAIL:
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
export default FetchBlogReducer
