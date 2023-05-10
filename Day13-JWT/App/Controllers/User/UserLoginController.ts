import { UserLoginModel } from "../../Models/User/UserLoginModel";
import userrepository from "../../Repository/index"
import { responseModel } from "../../Models/ResponseModel";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'



const LoginUser = async (req: Request, res: Response) => {
    console.log("Login User Called")

    try {
        dotenv.config({path:".env"});

        const user: UserLoginModel = {
            email: req.body.email,
            password: req.body.password
        }
        let users=await userrepository.userrepository.emailCheck(user.email)

      //  let users = await userrepository.userrepository.registerUser(user)
        // console.log("get studebt called", students)

        if(users && (await bcrypt.compare(user.password, users.password))){
        
        // console.log(response.data)
        const key=process.env.TOKEN_KEY;
        const token = jwt.sign(
            {user_id:users.id, user_email: user.email, user_password:user.password },key as string,{expiresIn:360});

            let response: responseModel = {
                status: 200,
                data: {user:users,token:token},
                error: null,
              
                message: "User Login  successfully",
            }

        res.json(response)
        }
        else{
            throw "Please Enter Valid email and Password"
        }

    } catch (error) {
        console.log(error);
        let response: responseModel = {
            status: 400,
            data: null,
            error: error as string,
            message: "Fail to Login  User",

        }

        res.send(response)

    }
}

export default { LoginUser }