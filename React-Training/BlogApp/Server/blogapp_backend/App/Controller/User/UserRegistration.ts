import { UserRegistrationModel } from "../../Model/UserRegistrationModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import  UserRepository from '../../Repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const RegisterUser = async (req: Request, res: Response) => {

    console.log("🚀 ~ file: index.ts:7 ~ AddBlog ~ AddBlog:", "AddBlog")
    try {

        const User: UserRegistrationModel = {
            name: req.body.name,
            email:  req.body.email,
            password:  req.body.password,
            mobile:  req.body.mobile,
            address:  req.body.address,
            pincode:  req.body.pincode,
            roleId: "64782b84f30954c54be63a2e"
        }
        console.log("🚀 ~ file: UserRegistration.ts:23 ~ RegisterUser ~ User:", User)

        let encryptedPassword = await bcrypt.hash(User.password, 10);
        console.log("🚀 ~ file: UserRegistration.ts:23 ~ RegisterUser ~ encryptedPassword:", encryptedPassword)
        User.password = encryptedPassword;

        let resUSer = await UserRepository.UserRepository.RegisterUser(User)

        const key = process.env.TOKEN_KEY;
        const token = jwt.sign(
            { user_id: resUSer.id, user_email: resUSer.email, user_password: resUSer.password }, key as string, { expiresIn:3600 });



        let response: responseModel = {
        status: 200,
        data: {data:resUSer,token:token},
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
