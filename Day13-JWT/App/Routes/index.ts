import userRegisterRoutes from '../Routes/User/UserRoutes'
import PostRoutes from '../Routes/Post/PostRoutes'


import express from 'express'

const router=express.Router()
router.use(userRegisterRoutes)
router.use(PostRoutes)

export default router