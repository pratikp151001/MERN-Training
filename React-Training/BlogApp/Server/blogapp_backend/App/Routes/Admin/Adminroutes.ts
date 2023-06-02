import  express  from "express";
import Controller from "../../Controller";
// import VerifyToken from "../../Middleware/TokenVerify";

const router=express.Router()

router.get('/permissions',Controller.GetPermissios.GetPermissions)

export  default router;