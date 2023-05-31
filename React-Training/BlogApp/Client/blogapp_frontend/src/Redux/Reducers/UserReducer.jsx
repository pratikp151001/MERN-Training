import { UserActionsType } from "../Actions_Type";

const initialState = {
    signup_data: null,
    error: null,
    login_data: null,
    isLoading: false,
    all_users: null,
    view_profile: null
}

const UserReducer = (state = initialState, actions) => {

    console.log("INSIDE REDUCER")
    console.log("🚀 ~ file: UserReducer.jsx:10 ~ UserReducer ~ actions:", actions.payload)
    console.log("🚀 ~ file: UserReducer.jsx:28 ~ UserReducer ~ UserReducer:", "UserReducer")

    switch (actions.type) {
        case (UserActionsType.SIGNUP_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (UserActionsType.SIGNUP_SUCCESS):
            return {
                ...state, isLoading: false, signup_data: actions.payload
            }
        case (UserActionsType.SIGNUP_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }
        case (UserActionsType.LOGIN_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (UserActionsType.LOGIN_SUCCESS):
            return {
                ...state, isLoading: false, login_data: actions.payload
            }
        case (UserActionsType.LOGIN_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }
        case (UserActionsType.FETCHALL_USERS_FAIL):
            return {
                ...state, isLoading: true
            }
        case (UserActionsType.FETCHALL_USERS_SUCCESS):
            return {
                ...state, isLoading: false, all_users: actions.payload
            }
        case (UserActionsType.FETCHALL_USERS_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }
        case (UserActionsType.DELETE_USER_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (UserActionsType.DELETE_USER_SUCCESS):
            return {
                ...state, isLoading: false, delted_user: actions.payload
            }
        case (UserActionsType.DELETE_USER_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }
        case (UserActionsType.FETCH_PROFILE_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (UserActionsType.FETCH_PROFILE_SUCCESS):
            return {
                ...state, isLoading: false, view_profile: actions.payload
            }
        case (UserActionsType.FETCH_PROFILE_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }

        case (UserActionsType.UPDATE_PROFILE_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (UserActionsType.UPDATE_PROFILE_SUCCESS):
            return {
                ...state, isLoading: false, updated_data: actions.payload

            }
        case (UserActionsType.UPDATE_PROFILE_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload

            }


        default:
            return state
    }
}

export default UserReducer