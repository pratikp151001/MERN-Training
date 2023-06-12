import UserReducer from './UserReducer';
import SuppilerReducer from './SuppillerReducer';
import TableHeaderReducer from './HeaderReducer';
import PDFReducer from './PdfReducer';


import { combineReducers } from 'redux';

const rootReducer=combineReducers({user:UserReducer,suppiller:SuppilerReducer,headers:TableHeaderReducer,pdf:PDFReducer})

export default rootReducer