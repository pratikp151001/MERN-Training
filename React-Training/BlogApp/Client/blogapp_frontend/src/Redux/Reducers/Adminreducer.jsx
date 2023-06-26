import { AdminAction_type } from "../Actions_Type";

const initianState = {
    error: null,
    permissions: null,
    isLoading: false,
    added_role: null,
    roles:null
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

        case (AdminAction_type.ADD_ROLE_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (AdminAction_type.ADD_ROLE_SUCCESS):
            return {
                ...state, isLoading: false, added_role: actions.payload
            }
        case (AdminAction_type.ADD_ROLE_FAIL):
            return {
                ...state, isLoading: false, error: actions.error
            }


        case (AdminAction_type.FETCH_ROLE_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (AdminAction_type.FETCH_ROLE_SUCCESS):
            return {
                ...state, isLoading: false, roles: actions.payload
            }
        case (AdminAction_type.FETCH_ROLE_FAIL):
            return {
                ...state, isLoading: false, error: actions.error
            }
        default:
            return state
    }
}
export default AdminReducer