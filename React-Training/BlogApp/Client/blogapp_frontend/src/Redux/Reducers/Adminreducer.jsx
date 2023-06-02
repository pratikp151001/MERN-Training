import { AdminAction_type } from "../Actions_Type";

const initianState = {
    error: null,
    permissions: null,
    isLoading: false,
}

const AdminReducer = (state = initianState, actions) => {
    switch (actions.type) {
        case (AdminAction_type.FETCH_PERMISSION_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (AdminAction_type.FETCH_PERMISSION_SUCCESS):
            return {
                ...state, isLoading: false, permissions: actions.payload
            }
        case (AdminAction_type.FETCH_PERMISSION_REQUEST):
            return {
                ...state, isLoading: false, error: actions.error
            }
        default:
            return state
    }
}
export default AdminReducer