import Controllers from "../../Controllers";
import express from 'express'
import verifyToken from "../../Middleware/verifyToken";

const router = express.Router()

router.post('/addTags',verifyToken,Controllers.AddTags.AddTags)


export default router