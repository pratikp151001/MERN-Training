import express,{Request,Response} from 'express'
import UserRouter from '../Routes/userRoute'
 
const router=express.Router()
router.use('/user',UserRouter)

export default router;
