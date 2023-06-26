import  express  from "express";
import Controller from "../../Controller";

import VerifyToken from "../../MiddleWare/VerifyToken";

const router=express.Router()

router.get('/getsuppilers/:month',VerifyToken,Controller.FetchSuppilers.FetchSuppiler)
router.post('/postdata',VerifyToken,Controller.PostSuppillerData.PostSuppillerData)

export  default router;