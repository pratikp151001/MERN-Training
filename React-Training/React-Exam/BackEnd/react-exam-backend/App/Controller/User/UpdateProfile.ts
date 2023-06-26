import { UserRegistrationModel } from "../../Model/UserRegistrationModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import  UserRepository from '../../Repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const UpdateUser = async (req: Request, res: Response) => {
    try {
        let id = (req as any).data
        const user= await UserRepository.UserRepository.UserProfile(id)
        const User = {
            // name: req.body.name,
            // email:  user.email,
            // password:  user?.password,
            // mobile:  req.body.mobile,

            ...user,name: req.body.name,mobile:  req.body.mobile,
        }
      

        // let encryptedPassword = await bcrypt.hash(User.password, 10);
        // User.password = encryptedPassword;

       let resUSer = await UserRepository.UserRepository.UpdateUserProfile(id,User)


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
export default { UpdateUser }
