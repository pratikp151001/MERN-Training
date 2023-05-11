import { Request, Response, NextFunction } from "express";
import { responseModel } from "../Models/responseModel";
import { ValidateEmail } from "./FieldValidations/EmailValidation";
import { ValidatePassword } from "./FieldValidations/PasswordValidation";
import { ValidateOnlyString } from "./FieldValidations/OnlyStringValidation";
import { ValidateNumbers } from "./FieldValidations/NumberValidation";
import userrepository from "../Repository/index"



async function ValidateRegiterUser(req: Request, res: Response, next: NextFunction) {
    console.log("validate User Called")
    if (ValidateEmail(req.body.email)  && ValidateNumbers(req.body.age) && ValidatePassword(req.body.password) && ValidateOnlyString(req.body.name))
     {
       
        let emailisPresent=await  userrepository.userrepository.emailCheck(req.body.email)
       // console.log("wwwwwwwww",emailisPresent)
       if(emailisPresent==null){
        next()
    }else{
        let response: responseModel = {
            status: 400,
            data: null,
            error: "Email is Already Present ",
            message: "Fail To Register",

        }
        res.send(response)
    }
}
    else {
        let response: responseModel = {
            status: 400,
            data: null,
            error: "Please enter Valid Email(abc@gmail.com) or Password (Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character),name must contain only Strings and age shoud be between 1 to 100",
            message: "Fail To Register",

        }
        res.send(response)
    }
}
export default ValidateRegiterUser;