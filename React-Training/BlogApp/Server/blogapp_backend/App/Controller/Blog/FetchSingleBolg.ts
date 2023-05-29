// import { BlogModel } from "../../Model/BlogModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import BlogRepository from "../../Repository/index"

const FetchSingleBlog=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: FetchBlog.ts:46 ~ FetchBlog ~ FetchBlog:", "FetchSingleBlog")
   
    try{

       
        var idtodelete = req.params.id
        let resBlog = await BlogRepository.BlogRepository.FetchsingleBlog(idtodelete)

        let response: responseModel = {
            status: 200,
            data: resBlog,
            error: null,

            message: "Blog Fetched successfully",
            success: true
        }

        res.json(response).status(200)

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Fetch Blog",
            success: false
        }

        res.json(response).status(400)

    }
}

export default {FetchSingleBlog}
