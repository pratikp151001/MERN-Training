import FetchBlogReducer from "./FetchBlogReducer";
import BlogReducer from "./BlogReducer";
import DeleteBlogReducer from "./DeleteBlogReducer";
import FetchSingleReducer from "./FetchSingleReducer";
import UpdateReducer from "./UpdateBlogReducer";
import UserReducer from "./UserReducer";
import AdminReducer from "./Adminreducer";

import { combineReducers } from 'redux';

const rootReducer=combineReducers({blogs:FetchBlogReducer,addbolgs:BlogReducer,deleteblogs:DeleteBlogReducer,singleblog:FetchSingleReducer,updateData:UpdateReducer,user:UserReducer,
admin:AdminReducer})

export default rootReducer