import { suppillerActiontypes } from "../ActionType";

const initialState = {
    suppiller_data: null,
    error: null,
    isLoading: false
}

const SuppilerReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case (suppillerActiontypes.FETCH_SUPPILLERS_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (suppillerActiontypes.FETCH_SUPPILLERS_SUCCESS):
            return {
                ...state, isLoading: false,suppiller_data:actions.payload
            }
        case (suppillerActiontypes.FETCH_SUPPILLERS_REQUEST):
            return {
                ...state, isLoading: false,error:actions.payload
            }

            case (suppillerActiontypes.POST_DATA_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (suppillerActiontypes.POST_DATA_SUCCESS):
            return {
                ...state, isLoading: false,post_data:actions.payload
            }
        case (suppillerActiontypes.POST_DATA_FAIL):
            return {
                ...state, isLoading: false,error:actions.payload
            }


        default:
            return state
    }
}
export default SuppilerReducer