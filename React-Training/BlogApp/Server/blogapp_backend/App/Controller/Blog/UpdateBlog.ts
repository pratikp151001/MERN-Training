import { BlogModel } from "../../Model/BlogModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import BlogRepository from "../../Repository/index"

const UpdateBlog=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: UpdateBlog.ts:46 ~ UpdateBlog ~ UpdateBlog:", UpdateBlog)

   
    try{

        const Blog: BlogModel = {
            title:req.body.title,
            description:req.body.description,
            category:req.body.category,
            
        }
        var idtodelete = req.params.id
        let resBlog = await BlogRepository.BlogRepository.UpdateBlog(Blog,idtodelete)

        let response: responseModel = {
            status: 200,
            data: resBlog,
            error: null,

            message: "Blog Update successfully",
            success: true
        }

        res.json(response).status(200)

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Update Blog",
            success: false
        }

        res.json(response).status(400)

    }
}
export default {UpdateBlog}
