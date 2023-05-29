import BlogRoutes from "../Routes/Blog/BlogRoutes"
import express from 'express'

const router=express.Router()

router.use(BlogRoutes)

export  default router;