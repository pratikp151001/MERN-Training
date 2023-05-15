import { Request, Response } from "express";
import { AddPostModel } from "../../Models/Post/PostModel";
import PostRepo from "../../Repository/index";
import { responseModel } from "../../Models/responseModel";


const UpdatePost = async (req: Request, res: Response) => {
    console.log("update Post Called")

    try {
        let id=(req as any).data
        let postidtoUpdate=req.params.id 
        console.log("DSVsdV",postidtoUpdate)
        const post: AddPostModel = {
            type: req.body.type,
            userId: id
        }

        let Posts = await PostRepo.Postrepository.UpdatePosts(parseInt(postidtoUpdate as any),post)
        let response: responseModel = {
            status: 200,
            data: { Post: Posts },
            error: null,

            message: "Post Update successfully",
        }

        res.json(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Update Post",

        }

        res.send(response)

    }
}

export default { UpdatePost }