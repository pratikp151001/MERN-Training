import  express  from "express";
import Controller from "../../Controller";

import VerifyToken from "../../MiddleWare/VerifyToken";

const router=express.Router()

router.post('/pdf/:month',VerifyToken,Controller.GeneratePDF.generatePDF)


export  default router;