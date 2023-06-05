import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { responseModel } from "../Model/ResponseModel";


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

               
                next() 
                

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
