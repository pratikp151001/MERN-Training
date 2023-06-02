import  express  from "express";
import Controller from "../../Controller";
import VerifyToken from "../../Middleware/TokenVerify";

const router=express.Router()

router.post('/registeruser',Controller.UserRegistration.RegisterUser)
router.post('/loginuser',Controller.UserLogin.LoginUser)
router.get('/getallusers',VerifyToken,Controller.FetchAllUsers.FetchAllUsers)
router.get('/getuserbyid/:id',VerifyToken,Controller.FetchUserById.FetchUserById)
router.put('/deleteuser/:id',VerifyToken,Controller.DeleteUser.DeleteUser)
router.put('/updateuser/:id',VerifyToken,Controller.UpdateUser.UpdateUser)
router.get('/profile',VerifyToken,Controller.ViewOwnProfile.ViewOwnProfile)
export  default router;