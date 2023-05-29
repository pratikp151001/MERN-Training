import userRegisterRoutes from '../Routes/User/UserRoutes'
import PostRoutes from '../Routes/Post/PostRoutes'
import TagsRoutes from '../Routes/Tags/TagsRoutes'
import cors from 'cors'

import express from 'express'


const router = express.Router()

router.use(cors())
router.use(userRegisterRoutes)
router.use(PostRoutes)
router.use(TagsRoutes)

export default router