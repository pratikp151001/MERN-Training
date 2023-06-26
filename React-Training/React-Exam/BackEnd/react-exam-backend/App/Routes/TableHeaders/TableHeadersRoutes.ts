import  express  from "express";
import Controller from "../../Controller";

import VerifyToken from "../../MiddleWare/VerifyToken";

const router=express.Router()

router.get('/getheaders/:month',VerifyToken,Controller.FetchTableHeaders.FetchHeaders)
router.post('/posttableheaders',VerifyToken,Controller.PostTableHeaders.PostTableHeaders)

export  default router;