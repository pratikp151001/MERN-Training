import  express  from "express";
import Controller from "../../Controller";
// import VerifyToken from "../../Middleware/TokenVerify";

const router=express.Router()

router.get('/permissions',Controller.GetPermissios.GetPermissions)
router.post('/addroles',Controller.AddRoles.AddRoles)
router.get('/fetchroles',Controller.GetRoles.GetRoles)



export  default router;