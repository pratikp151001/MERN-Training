import RegisterUser from './User/UserRegistrationController'
import LoginUser from './User/UserLoginController'
import DeleteUser from './User/DeleteUserController'
import GetActiveUsers from './User/GetActiveUserDetails'
import AddPost from './Post/AddPostController'
import GetPost from './Post/GetPostOfActiveUserController'
import AddTags from './Tags/AddTagController'
import GetTags from './Tags/GetTagsContoller'
import SearchPost from './Post/serchPostController'
import FilterPost from './Post/FilterPostController'
import SortPost from './Post/SortingPostController'
import DeletePost from './Post/DeletePostController'
import DeleteTags from './Tags/DeleteTagsController'
import UpdateUser from './User/UpdateUserController'
import UpdatePost from './Post/UpdatePostController'
import UpdateTags from './Tags/UpdateTagController'


export default { RegisterUser ,LoginUser,GetActiveUsers,AddPost,GetPost,AddTags,GetTags,SearchPost,SortPost,FilterPost
,DeleteUser,DeletePost,DeleteTags,UpdateUser,UpdatePost,UpdateTags}