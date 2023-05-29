import ContactstringReducer from "./ConcatReducer";
import CalulationReducer from "./CalculationReducer";
import { combineReducers } from 'redux';

const rootReducer=combineReducers({ContactstringReducer:ContactstringReducer,CalulationReducer:CalulationReducer})

export default rootReducer