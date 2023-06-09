import { HeaderActiontype } from "../ActionType";

const initialState = {
    headers_data: null,
    error: null,
    isLoading: false
}

const TableHeaderReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case (HeaderActiontype.FETCH_HEADER_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (HeaderActiontype.FETCH_HEADER_SUCCESS):
            return {
                ...state, isLoading: false, headers_data: actions.payload
            }
        case (HeaderActiontype.FETCH_HEADER_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }
        case (HeaderActiontype.POST_HEADER_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (HeaderActiontype.POST_HEADER_SUCCESS):
            return {
                ...state, isLoading: false, post_headerdata: actions.payload
            }
        case (HeaderActiontype.POST_HEADER_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }



        default:
            return state
    }
}
export default TableHeaderReducer