// import BlogRoutes from "../Routes/Blog/BlogRoutes"
// import UserRoutes from "../Routes/User/UserRoutes"
// import adminRoutes from '../Routes/Admin/Adminroutes'
import UserRoutes from '../Routes/User/Userroute'
import express from 'express'

const router=express.Router()

router.use(UserRoutes)

export  default router;