
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import BlogRepository from "../../Repository/index"

const DeleteBlog=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: DeleteBlog.ts:40 ~ DeleteBlog ~ DeleteBlog:", DeleteBlog)
    
    try{

       
        var idtodelete = req.params.id
       let resBlog = await BlogRepository.BlogRepository.DeleteBlog(idtodelete)

        let response: responseModel = {
            status: 200,
            data: resBlog,
            error: null,

            message: "Blog Deleted successfully",
            success: true
        }

        res.json(response).status(200)

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Deete Blog",
            success: false
        }

        res.json(response).status(400)

    }
}

export default {DeleteBlog}
