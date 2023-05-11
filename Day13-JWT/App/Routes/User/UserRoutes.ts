import Controllers from "../../Controllers";
import express from 'express'
import verifyToken from "../../MiddleWare/VerifyToken";
import ValidateRegiterUser from "../../MiddleWare/RegisterUserMiddleWare"
import ValidateLoginUser from "../../MiddleWare/LoginUserValidation";
const router = express.Router()

router.post('/registerUser', ValidateRegiterUser, Controllers.RegisterUser.RegisterUser)
router.post('/loginUser', ValidateLoginUser, Controllers.LoginUser.LoginUser)
router.get('/getAllUser', verifyToken, Controllers.GetAllUsers.GetAllUsers)

export default router