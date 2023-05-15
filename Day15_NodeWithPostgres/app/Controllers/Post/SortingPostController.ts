import { responseModel } from "../../Models/responseModel";
import { NextFunction, Request, Response } from "express";
import PostRepo from "../../Repository/index";

const SortPost = async (req: Request, res: Response, next: NextFunction) => {

    console.log((req as any).data)
    console.log("Sort Post Called")
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]
    // //console.log(token)
    // var decoded = jwtDecode(token as string);

    // let id = (decoded as any).user_id;
    let id=(req as any).data
    let sortIn=req.query.sortIn

    console.log(req.query.sortIn)
    try {

        let users = await PostRepo.Postrepository.SortPosts(id,sortIn as string)
        //  console.log(users)
        let response: responseModel = {
            status: 400,
            data: users,
            error: null,
            message: "Get Post Data",

        }
        res.send(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Get  Post",

        }

        res.send(response)

    }
}

export default { SortPost }