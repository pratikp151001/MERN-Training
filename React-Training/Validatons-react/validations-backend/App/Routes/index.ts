import UserRoutes from "../Routes/User/UserRoutes"
import express from 'express'

const router=express.Router()

router.use(UserRoutes)

export  default router;