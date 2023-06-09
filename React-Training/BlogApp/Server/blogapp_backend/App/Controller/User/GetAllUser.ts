import UserRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import PermissionCheck from '../../Middleware/PermissionCheck';
import PERMISSIONS from '../../Middleware/permission';


const FetchAllUsers=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: GetAllUser.ts:40 ~ FetchAllUsers ~ FetchAllUsers:", FetchAllUsers)

    try{
        let Permissons = (req as any).permissions
        // console.log("🚀 ~ file: GetAllUser.ts:11 ~ FetchAllUsers ~ Permissons:", Permissons)
        
        // PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons)
        console.log("🚀 ~ file: GetAllUser.ts:34 ~ FetchAllUsers ~ PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons):", PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons))

       if(PermissionCheck(PERMISSIONS.VIEW_USER_PERMISSION,Permissons)){
       

        let resUsers = await UserRepository.UserRepository.FetchAllUsers()

        let response: responseModel = {
            status: 200,
            data: resUsers,
            error: null,

            message: "Users Fetched successfully",
            success: true
        }

        res.json(response).status(200)
    }
    else{
        let response: responseModel = {
            status: 403,
            data: null,
            error: " Forbidden Error",

            message: "Fail Fetched successfully",
            success: true
        }

        res.json(response).status(200)

    }

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Fetch Users",
            success: false
        }

        res.json(response).status(400)

    }
}

export default {FetchAllUsers}
