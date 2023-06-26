import StockReducer from './StockReducer';
import OrderReducer from './OrderReducer';

import { combineReducers } from 'redux';

const rootReducer=combineReducers({stock:StockReducer,order:OrderReducer})

export default rootReducer