import FetchDataReducer from "./FetchDataReducer";
import FetchTodosReducer from "./TodoReducer";
import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers({user:UserReducer,fetchData:FetchDataReducer,todo:FetchTodosReducer})

export default rootReducer