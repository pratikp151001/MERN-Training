import { UserRegistrationModel } from "../../Model/UserRegistrationModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import  UserRepository from '../../Repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const RegisterUser = async (req: Request, res: Response) => {
    console.log("🚀 ~ file: UserRegistration.ts:64 ~ RegisterUser ~ RegisterUser:", RegisterUser)

  
    try {

        const User: UserRegistrationModel = {
            name: req.body.name,
            email:  req.body.email,
            password:  req.body.password,
            mobile:  req.body.mobile,
        }
        console.log("🚀 ~ file: UserRegistration.ts:22 ~ RegisterUser ~ User:", User)
      

        let encryptedPassword = await bcrypt.hash(User.password, 10);
        console.log("🚀 ~ file: UserRegistration.ts:23 ~ RegisterUser ~ encryptedPassword:", encryptedPassword)
        User.password = encryptedPassword;

       let resUSer = await UserRepository.UserRepository.RegisterUser(User)


        let response: responseModel = {
        status: 200,
        data: resUSer,
        error: null,

        message: "User Register successfully",
        success: true
    }

    res.json(response).status(200)

}
    catch (e) {
    let response: responseModel = {
        status: 400,
        data: null,
        error: e as string,

        message: "Fail to Register user",
        success: false
    }

    res.json(response).status(400)

}
}
export default { RegisterUser }
