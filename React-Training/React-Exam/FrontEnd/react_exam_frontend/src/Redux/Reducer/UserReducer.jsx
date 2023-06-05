import { UserActionTypes } from "../ActionType";

const initialState = {
    registerUser_data: null,
    loginUser_data: null,
    error: null,
    isLoading: false
}

const UserReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case (UserActionTypes.USER_REGISTRATION_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (UserActionTypes.USER_REGISTRATION_SUCCESS):
            return {
                ...state, isLoading: false, registerUser_data: actions.payload
            }
        case (UserActionTypes.USER_REGISTRATION_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }
        case (UserActionTypes.USER_LOGIN_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (UserActionTypes.USER_LOGIN_SUCCESS):
            return {
                ...state, isLoading: false, loginUser_data: actions.payload
            }
        case (UserActionTypes.USER_LOGIN_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }
        case (UserActionTypes.VIEW_PROFILE_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (UserActionTypes.VIEW_PROFILE_SUCCESS):
            return {
                ...state, isLoading: false, viewprofile_data: actions.payload
            }
        case (UserActionTypes.VIEW_PROFILE_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }
            case (UserActionTypes.UPDATE_PROFILE_REQUEST):
                return {
                    ...state, isLoading: true
                } 
                case (UserActionTypes.UPDATE_PROFILE_SUCCESS):
                return {
                    ...state, isLoading: false, updated_profile: actions.payload
                }
                 case (UserActionTypes.UPDATE_PROFILE_FAIL):
                return {
                    ...state, isLoading: false, error: actions.payload
                }

        default:
            return state
    }
}
export default UserReducer