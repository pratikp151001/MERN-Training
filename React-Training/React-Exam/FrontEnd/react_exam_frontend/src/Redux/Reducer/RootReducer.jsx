import UserReducer from './UserReducer';
import SuppilerReducer from './SuppillerReducer';
import TableHeaderReducer from './HeaderReducer';



import { combineReducers } from 'redux';

const rootReducer=combineReducers({user:UserReducer,suppiller:SuppilerReducer,headers:TableHeaderReducer})

export default rootReducer