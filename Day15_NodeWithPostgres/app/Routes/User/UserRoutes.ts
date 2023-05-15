import Controllers from "../../Controllers";
import express from 'express'
import verifyToken from "../../Middleware/verifyToken";
import ValidateRegiterUser from "../../Middleware/UserRegistrationMiddleware"
import ValidateLoginUser from "../../Middleware/UserLoginMiddleware";
const router = express.Router()

router.post('/registerUser',ValidateRegiterUser,Controllers.RegisterUser.RegisterUser)
router.post('/loginUser', ValidateLoginUser, Controllers.LoginUser.LoginUser)
router.get('/getActiveUser',verifyToken,  Controllers.GetActiveUsers.GetActiveUsers)
router.delete('/deleteUser',verifyToken,  Controllers.DeleteUser.DeleteUser)
router.put('/updateUser',verifyToken,  Controllers.UpdateUser.UpdateUser)

export default router