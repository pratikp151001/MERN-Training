import userrepository from "../../Repository/index"
import { responseModel } from "../../Models/responseModel";
import { NextFunction, Request, Response } from "express";


const GetActiveUsers = async (req: Request, res: Response, next: NextFunction) => {
    console.log("GetActiveUser Called")
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]
    // //console.log(token)
    // var decoded = jwtDecode(token as string);

    // let id = (decoded as any).user_id;
    let id = (req as any).data
    console.log(id)

    try {

        let users = await userrepository.userrepository.GetActiveUsers(id)
        //  console.log(users)
        let response: responseModel = {
            status: 400,
            data: users,
            error: null,
            message: "Get User Data",

        }
        res.send(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Get  User",

        }

        res.send(response)

    }
}

export default { GetActiveUsers }