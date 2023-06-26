import  express  from "express";
import Controller from "../../Controller/index";
// import VerifyToken from "../../Middleware/TokenVerify";

const router=express.Router()

router.post('/addstock',Controller.AddStock.AddStock)
router.get('/stocks',Controller.GetStock.GetStock)
router.delete('/deletestock/:id',Controller.DeleteStock.DeleteStock)





export  default router;