import { responseModel } from "../../Models/ResponseModel";
import { NextFunction, Request, Response } from "express";
import jwtDecode from 'jwt-decode';
import PostRepo from "../../Repository/index";







const GetPost = async (req: Request, res: Response, next: NextFunction) => {
    console.log("GetPost Called")
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    //console.log(token)
    var decoded = jwtDecode(token as string);

    let id = (decoded as any).user_id;

    try {

        let users = await PostRepo.Postrepository.getPosts(id)
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

export default { GetPost }