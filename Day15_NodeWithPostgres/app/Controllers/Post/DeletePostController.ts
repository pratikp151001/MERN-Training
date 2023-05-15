import { responseModel } from "../../Models/responseModel";
import { NextFunction, Request, Response } from "express";
import PostRepo from "../../Repository/index";

const DeletePost = async (req: Request, res: Response, next: NextFunction) => {


    try {

        console.log("DeletePost Called")
        let id = (req as any).data
        let idGT = req.query.id

        console.log(req.params.id)

        let postidtoDelete = req.params.id


        let users = await PostRepo.Postrepository.DeletePosts(postidtoDelete,id)
        //  console.log(users)
        let response: responseModel = {
            status: 400,
            data: users,
            error: null,
            message: "Delete Post Data",

        }
        res.send(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Delete  Post",

        }

        res.send(response)

    }
}

export default { DeletePost }