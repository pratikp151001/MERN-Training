import  express  from "express";
import Controller from "../../Controller";

import VerifyToken from "../../MiddleWare/VerifyToken";

const router=express.Router()

router.get('/getsuppilers/:month',Controller.FetchSuppilers.FetchSuppiler)
router.post('/postdata',Controller.PostSuppillerData.PostSuppillerData)

export  default router;