import Controllers from "../../Controllers";
import express from 'express'
import verifyToken from "../../Middleware/verifyToken";

const router = express.Router()

router.post('/addPost',verifyToken,  Controllers.AddPost.AddPost)
router.get('/getPost',verifyToken,  Controllers.GetPost.GetPost)
router.get('/searchPost',verifyToken,  Controllers.SearchPost.SearchPost)
router.get('/filterPost',verifyToken,  Controllers.FilterPost.FilterPost)
router.get('/sortPost',verifyToken,  Controllers.SortPost.SortPost)
router.delete('/DeletePost/:id',verifyToken,  Controllers.DeletePost.DeletePost)
router.put('/UpdatePost/:id',verifyToken,  Controllers.UpdatePost.UpdatePost)
export default router