import { createStore,applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import datareducer from "../Reducers/DataReducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store=createStore(datareducer,composedEnhancer)

export default store;