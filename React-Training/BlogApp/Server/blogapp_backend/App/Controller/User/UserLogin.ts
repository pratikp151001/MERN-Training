import { UserLoginModel } from "../../Model/UserLoginModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import UserRepository from '../../Repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const LoginUser = async (req: Request, res: Response) => {
    console.log("🚀 ~ file: UserLogin.ts:59 ~ RegisterUser ~ RegisterUser:", "RegisterUser")


    try {

    const User: UserLoginModel = {

        email: req.body.email,
        password: req.body.password,

    }
    let resUSer = await UserRepository.UserRepository.LoginUser(User.email)
    console.log("🚀 ~ file: UserLogin.ts:23 ~ LoginUser ~ resUSer:", resUSer[0].password)

    console.log("🚀 ~ file: UserLogin.ts:26 ~ LoginUser ~ bcrypt.compare(resUSer[0].password, User.password)):", await  bcrypt.compare(User.password,resUSer[0].password))
    if (resUSer && await  bcrypt.compare(User.password,resUSer[0].password)) {
    console.log("🚀 ~ file: UserLogin.ts:26 ~ LoginUser ~ resUSer:", resUSer)


        const key = process.env.TOKEN_KEY;
        const token = jwt.sign(
            { user_id: resUSer[0].id, user_email: resUSer[0].email, user_password: resUSer[0].password }, key as string, { expiresIn: 3600 });

    


            let response: responseModel = {
            status: 200,
            data: {data:resUSer,token:token},
            error: null,

            message: "User Login successfully",
            success: true
        }

        res.json(response).status(200)

    }
    else{
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
