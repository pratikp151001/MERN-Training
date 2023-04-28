import express,{Request,Response} from 'express'
import UserRouter from '../Routes/studentRoutes'
 
const router=express.Router()
router.use('/student',UserRouter)

export default router;
