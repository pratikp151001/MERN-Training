import BlogRoutes from "../Routes/Blog/BlogRoutes"
import UserRoutes from "../Routes/User/UserRoutes"
import adminRoutes from '../Routes/Admin/Adminroutes'
import express from 'express'

const router=express.Router()

router.use(BlogRoutes)
router.use(UserRoutes)
router.use(adminRoutes)

export  default router;