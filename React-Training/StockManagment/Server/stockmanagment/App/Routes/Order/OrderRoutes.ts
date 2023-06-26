import  express  from "express";
import Controller from "../../Controller/index";
// import VerifyToken from "../../Middleware/TokenVerify";

const router=express.Router()

router.post('/addorder',Controller.AddOrder.AddOrder)
router.get('/getorder',Controller.GetOrders.GetOrder)
router.delete('/deleteorder/:id',Controller.DeleteOrder.DeleteOrder)






export  default router;