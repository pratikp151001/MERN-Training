import userrepository from "../../Repository/index"
import { responseModel } from "../../Models/responseModel";
import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../Models/User/UserRegistartionModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const UpdateUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log("UpdateUser Called")
    // const authHeader = req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1]
    // //console.log(token)
    // var decoded = jwtDecode(token as string);

    // let id = (decoded as any).user_id;
    let id = (req as any).data
    console.log(id)
    try {
        dotenv.config({ path: ".env" });

        const user: UserModel = {
           name:req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password
        }



        let encryptedPassword = await bcrypt.hash(user.password, 10);
        user.password = encryptedPassword;

        let users = await userrepository.userrepository.UpdateUser(id,user)
        // console.log("get studebt called", students)


        // console.log(response.data)
        const key = process.env.TOKEN_KEY;
        const token = jwt.sign(
            { user_id: users.id, user_email: user.email, user_password: user.password }, key as string, { expiresIn:3600 });

        let response: responseModel = {
            status: 200,
            data: { user: users, token: token },
            error: null,

            message: "User Update  successfully",
        }

        res.json(response)


    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Update User",

        }

        res.send(response)

    }
    
}

export default { UpdateUser }