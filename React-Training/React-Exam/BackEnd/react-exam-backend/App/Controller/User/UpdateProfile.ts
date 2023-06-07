import { UserRegistrationModel } from "../../Model/UserRegistrationModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import  UserRepository from '../../Repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const UpdateUser = async (req: Request, res: Response) => {

    console.log("🚀 ~ file: UpdateProfile.ts:57 ~ RegisterUser ~ RegisterUser:", "UpdateUser")

    try {
        let id = (req as any).data
        console.log("🚀 ~ file: GetAllUser.ts:11 ~ FetchAllUsers ~ id:", id)

        const user= await UserRepository.UserRepository.UserProfile(id)
        console.log("🚀 ~ file: UpdateProfile.ts:19 ~ UpdateUser ~ user:", user)

        const User = {
            // name: req.body.name,
            // email:  user.email,
            // password:  user?.password,
            // mobile:  req.body.mobile,

            ...user,name: req.body.name,mobile:  req.body.mobile,
        }
        console.log("🚀 ~ file: UserRegistration.ts:22 ~ RegisterUser ~ User:", User)
      

        // let encryptedPassword = await bcrypt.hash(User.password, 10);
        // console.log("🚀 ~ file: UserRegistration.ts:23 ~ RegisterUser ~ encryptedPassword:", encryptedPassword)
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
