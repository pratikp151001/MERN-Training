import Controllers from "../../Controllers";
import express from 'express'
import verifyToken from "../../MiddleWare/VerifyToken";

const router = express.Router()

router.post('/addPost', verifyToken, Controllers.AddPost.AddPost)
router.get('/getPost', verifyToken, Controllers.GetPost.GetPost)

export default router