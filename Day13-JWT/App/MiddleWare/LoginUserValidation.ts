import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'
dotenv.config({ path: ".env" });
import { responseModel } from "../Models/ResponseModel";
import { ValidateEmail } from "./FieldValidations/EmailValidation";
import { ValidatePassword } from "./FieldValidations/PasswordValidation";

function ValidateLoginUser(req: Request, res: Response, next: NextFunction) {
    if (ValidateEmail(req.body.email) && ValidatePassword(req.body.password)) {
        next()
    }
    else {
        let response: responseModel = {
            status: 400,
            data: null,
            error: "Please enter Valid Email(abc@gmail.com) or Password (Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character)",
            message: "Fail To Login",

        }
        res.send(response)
    }

}
export default ValidateLoginUser;