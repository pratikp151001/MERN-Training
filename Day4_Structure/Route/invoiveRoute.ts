import  express  from "express";
import invoiceController from '../Controller/invoiceController'

const router=express.Router()

router.get('/getinvoice',invoiceController.getinvoice)
router.post('/postinvoice',invoiceController.postinvoice)
export default router;