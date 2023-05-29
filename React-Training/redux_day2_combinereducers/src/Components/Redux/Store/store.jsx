import UserReducer from "../Reducers/UserReducer";
import { createStore,applyMiddleware } from "redux";
// import { createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store=createStore(UserReducer,composedEnhancer)
export default store;