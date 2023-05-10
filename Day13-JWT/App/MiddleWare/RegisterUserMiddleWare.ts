import { Request,Response, NextFunction } from "express";
import { responseModel } from "../Models/ResponseModel";
import { ValidateEmail } from "./FieldValidations/EmailValidation";
import { ValidatePassword } from "./FieldValidations/PasswordValidation";
import { ValidateOnlyString } from "./FieldValidations/OnlyStringValidation";
import { ValidateNumbers } from "./FieldValidations/NumberValidation";


function ValidateRegiterUser(req:Request,res:Response,next:NextFunction){
    console.log("validate User Called")
    if(ValidateEmail(req.body.email) && ValidateNumbers(req.body.age) && ValidatePassword(req.body.password) && ValidateOnlyString(req.body.first_name) && ValidateOnlyString(req.body.last_name ) ){
        next()
       }
       else{
        let response: responseModel = {
            status: 400,
            data: null,
            error: "Please enter Valid Email(abc@gmail.com) or Password (Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character)",
            message: "Fail To Login",
    
        }
        res.send(response)
       }
}
export default ValidateRegiterUser;