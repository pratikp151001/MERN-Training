import  express  from "express";
import Controller from "../../Controller";

import VerifyToken from "../../MiddleWare/VerifyToken";

const router=express.Router()

router.post('/registeruser',Controller.UserRegistration.RegisterUser)
router.post('/loginuser',Controller.UserLogin.LoginUser)
router.get('/profile',VerifyToken,Controller.ViewOwnProfile.ViewOwnProfile)
router.put('/updateprofile',VerifyToken,Controller.UpdateProfile.UpdateUser)

export  default router;