import { UserRegistrationModel } from "../../Model/UserRegistrationModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import  UserRepository from '../../Repository/index'
import bcrypt from 'bcrypt'
import PermissionCheck from '../../Middleware/PermissionCheck';
import PERMISSIONS from '../../Middleware/permission';



const UpdateUser = async (req: Request, res: Response) => {
    console.log("🚀 ~ file: UpdateUser.ts:60 ~ UpdateUser ~ UpdateUser:", UpdateUser)

    try {
        let Permissons = (req as any).permissions
        // console.log("🚀 ~ file: GetAllUser.ts:11 ~ FetchAllUsers ~ Permissons:", Permissons)
        
        // PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons)
        console.log("🚀 ~ file: GetAllUser.ts:34 ~ FetchAllUsers ~ PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons):", PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons))

       if(PermissionCheck(PERMISSIONS.EDIT_USER_PERMISSION,Permissons)){

        let id=req.params.id
        console.log("🚀 ~ file: UpdateUser.ts:15 ~ UpdateUser ~ id:", id)

        const User: UserRegistrationModel = {
            name: req.body.name,
            email:  req.body.email,
            password:  req.body.password,
            mobile:  req.body.mobile,
            address:  req.body.address,
            pincode:  req.body.pincode,
            roleId: req.body.roleId
        }


        let encryptedPassword = await bcrypt.hash(User.password, 10);
        console.log("🚀 ~ file: UserRegistration.ts:23 ~ RegisterUser ~ encryptedPassword:", encryptedPassword)
        User.password = encryptedPassword;

       

        let resUSer = await UserRepository.UserRepository.UpdateUser(id,User)


        let response: responseModel = {
        status: 200,
        data: resUSer,
        error: null,

        message: "User Register successfully",
        success: true
    }

    res.json(response).status(200)
}
else{

    let response: responseModel = {
        status: 403,
        data: null,
        error: "Forbidden Error",

        message: "Fail to Update  successfully",
        success: true
    }

    res.json(response).status(403)
}

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
