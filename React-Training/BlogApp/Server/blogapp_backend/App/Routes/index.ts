import BlogRoutes from "../Routes/Blog/BlogRoutes"
import UserRoutes from "../Routes/User/UserRoutes"
import express from 'express'

const router=express.Router()

router.use(BlogRoutes)
router.use(UserRoutes)

export  default router;