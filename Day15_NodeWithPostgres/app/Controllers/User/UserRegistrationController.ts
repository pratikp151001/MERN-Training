import { UserModel } from "../../Models/User/UserRegistartionModel";
import userrepository from "../../Repository/index"
import { responseModel } from "../../Models/responseModel";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'



const RegisterUser = async (req: Request, res: Response) => {
    console.log("Register User Called")

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

        let users = await userrepository.userrepository.registerUser(user)
        // console.log("get studebt called", students)


        // console.log(response.data)
        const key = process.env.TOKEN_KEY;
        const token = jwt.sign(
            { user_id: users.id, user_email: user.email, user_password: user.password }, key as string, { expiresIn:3600 });

        let response: responseModel = {
            status: 200,
            data: { user: users, token: token },
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

export default { RegisterUser }