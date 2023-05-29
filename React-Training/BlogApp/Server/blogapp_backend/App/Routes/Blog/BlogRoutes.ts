import  express  from "express";
import Controller from "../../Controller";

const router=express.Router()

router.post('/addblog',Controller.AddBlog.AddBlog)
router.get('/fetchblog',Controller.FetchBlog.FetchBlog)
router.delete('/deleteblog/:id',Controller.DeleteBlog.DeleteBlog)
router.get('/fetchblog/:id',Controller.FetchSingleBolg.FetchSingleBlog)
router.put('/updateblog/:id',Controller.UpdateBlog.UpdateBlog)


export  default router;