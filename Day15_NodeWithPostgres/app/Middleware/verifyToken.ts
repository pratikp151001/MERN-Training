import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({ path: ".env" });
import { responseModel } from "../Models/responseModel";



function verifyToken(req: any, res: Response, next: NextFunction) {
    console.log("very called")
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    let KEY = process.env.TOKEN_KEY
    //  let user=  { user_email: user.email, user_password:user.password }
    if (token != null) {
        jwt.verify(token, KEY as string, (err: any, user: any) => {
            console.log(user)
            if (err) {
                let response: responseModel = {
                    status: 400,
                    data: null,
                    error: err as string,
                    message: "Unauthorized User",

                }
                res.send(response)
            }
            else {
                req.data = user.user_id

                next()

            }
        })
    }
    else {
        let response: responseModel = {
            status: 400,
            data: null,
            error: "Token is not Present",
            message: "Unauthorized User",

        }
        res.send(response)
    }
}
export default verifyToken;