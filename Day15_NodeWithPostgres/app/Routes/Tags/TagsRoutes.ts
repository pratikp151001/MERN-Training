import Controllers from "../../Controllers";
import express from 'express'
import verifyToken from "../../Middleware/verifyToken";

const router = express.Router()

router.post('/addTags',verifyToken,Controllers.AddTags.AddTags)
router.get('/getTags',verifyToken,Controllers.GetTags.GetTags)
router.delete('/deleteTags/:id',verifyToken,Controllers.DeleteTags.DeleteTags)
router.put('/updateTags/:id',verifyToken,Controllers.UpdateTags.UpdateTags)


export default router