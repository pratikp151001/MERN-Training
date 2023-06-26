import { UserLoginModel } from "../../Model/UserLoginModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import UserRepository from '../../Repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const LoginUser = async (req: Request, res: Response) => {

    try {

        const User: UserLoginModel = {

            email: req.body.email,
            password: req.body.password,

        }
        let resUSer = await UserRepository.UserRepository.LoginUser(User.email)
        if (resUSer && await bcrypt.compare(User.password, resUSer[0].password)) {

            const key = process.env.TOKEN_KEY;
            const token = jwt.sign(
                { user_id: resUSer[0].id, user_email: resUSer[0].email, user_password: resUSer[0].password }, key as string, { expiresIn: 3600 });




            let response: responseModel = {
                status: 200,
                data: { data: resUSer, token: token },
                error: null,

                message: "User Login successfully",
                success: true
            }

            res.json(response).status(200)

        }
        else {
            throw "Please Enter Valid email and Password"
        }
    }
    catch (e) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Login user",
            success: false
        }

        res.json(response).status(400)

    }
}
export default { LoginUser }
