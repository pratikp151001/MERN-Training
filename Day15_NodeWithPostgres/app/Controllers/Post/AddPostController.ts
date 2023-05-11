import { Request, Response } from "express";
import { AddPostModel } from "../../Models/Post/PostModel";
import PostRepo from "../../Repository/index";
import { responseModel } from "../../Models/responseModel";


const AddPost = async (req: Request, res: Response) => {
    console.log("Add Post Called")

    try {
        let id=(req as any).data
        const post: AddPostModel = {
            type: req.body.type,
            userId: id
        }

        let Posts = await PostRepo.Postrepository.addPost(post)
        let response: responseModel = {
            status: 200,
            data: { Post: Posts },
            error: null,

            message: "Post Added successfully",
        }

        res.json(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Add Post",

        }

        res.send(response)

    }
}

export default { AddPost }