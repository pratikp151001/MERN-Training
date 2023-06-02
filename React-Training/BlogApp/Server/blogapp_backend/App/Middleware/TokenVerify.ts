import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { responseModel } from "../Model/ResponseModel";
import UserRepository from '../Repository/index'

dotenv.config({ path: ".env" });

async function VerifyToken(req: any, res: Response, next: NextFunction) {
    console.log("🚀 ~ file: TokenVerify.ts:9 ~ VerifyToken ~ VerifyToken:", "VerifyToken")

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log("🚀 ~ file: TokenVerify.ts:13 ~ VerifyToken ~ token:", token)
    let KEY = process.env.TOKEN_KEY

    if (token != null) {
        Jwt.verify(token, KEY as string, async (err: any, user: any) => {
            console.log("🚀 ~ file: TokenVerify.ts:18 ~ Jwt.verify ~ user:", user)

            if (err) {
                let response: responseModel = {
                    status: 400,
                    data: null,
                    error: err as string,

                    message: "Unauthorized User",
                    success: false
                }

                res.json(response).status(400)
            }
            else{

                req.data=user.user_id

                const logedInUser=await UserRepository.UserRepository.GetUserDetailsForValidationCheck(user.user_id)

                req.permissions=logedInUser?.role.permisson
                console.log("🚀 ~ file: TokenVerify.ts:38 ~ Jwt.verify ~ logedInUser:", logedInUser)
                next() 
                console.log("🚀 ~ file: TokenVerify.ts:36 ~ Jwt.verify ~ user:", user.user_id)

            }

        })
    }
    else{
        let response: responseModel = {
            status: 400,
            data: null,
            error: "No Token",

            message: "Unauthorized User",
            success: false
        }

        res.json(response).status(400)

    }


}

export default VerifyToken
