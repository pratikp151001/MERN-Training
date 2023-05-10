import { Request, Response } from "express";
import { AddPostModel } from "../../Models/Post/AddPostModel";
import PostRepo from "../../Repository/index";
import { responseModel } from "../../Models/ResponseModel";
import jwtDecode from 'jwt-decode';

const AddPost = async (req: Request, res: Response) => {
    console.log("Add Post Called")

    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        //console.log(token)
        var decoded = jwtDecode(token as string);

        let id = (decoded as any).user_id;
        const post: AddPostModel = {
            type: req.body.type,
            userId: id
        }

        let Posts = await PostRepo.Postrepository.registerUser(post)
        let response: responseModel = {
            status: 200,
            data: { Post: Posts },
            error: null,

            message: "User Register  successfully",
        }

        res.json(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Register User",

        }

        res.send(response)

    }
}

export default { AddPost }