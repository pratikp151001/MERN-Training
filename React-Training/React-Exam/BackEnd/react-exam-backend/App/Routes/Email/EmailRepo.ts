import  express  from "express";
import Controller from "../../Controller";

import VerifyToken from "../../MiddleWare/VerifyToken";

const router=express.Router()

router.post('/sendemails',VerifyToken,Controller.sendEmail.SendEmail)

export  default router;