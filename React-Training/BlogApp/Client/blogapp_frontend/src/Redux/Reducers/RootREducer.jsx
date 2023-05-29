import FetchBlogReducer from "./FetchBlogReducer";
import BlogReducer from "./BlogReducer";
import DeleteBlogReducer from "./DeleteBlogReducer";
import FetchSingleReducer from "./FetchSingleReducer";
import UpdateReducer from "./UpdateBlogReducer";

import { combineReducers } from 'redux';

const rootReducer=combineReducers({blogs:FetchBlogReducer,addbolgs:BlogReducer,deleteblogs:DeleteBlogReducer,singleblog:FetchSingleReducer,updateData:UpdateReducer})

export default rootReducer