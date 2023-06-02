import UserRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import PermissionCheck from '../../Middleware/PermissionCheck';
import PERMISSIONS from '../../Middleware/permission';


const DeleteUser=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: DeleteUser.ts:43 ~ DeleteUser ~ DeleteUser:", DeleteUser)

    try{
        // let id = (req as any).data
        // console.log("🚀 ~ file: GetAllUser.ts:11 ~ FetchAllUsers ~ id:", id)
        let Permissons = (req as any).permissions
        // console.log("🚀 ~ file: GetAllUser.ts:11 ~ FetchAllUsers ~ Permissons:", Permissons)
        
        // PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons)
        console.log("🚀 ~ file: GetAllUser.ts:34 ~ FetchAllUsers ~ PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons):", PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons))

       if(PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION,Permissons)){
       
        let id=req.params.id
        console.log("🚀 ~ file: DeleteUser.ts:14 ~ DeleteUser ~ id:", id)

        let resUsers = await UserRepository.UserRepository.DeleteUser(id)

        let response: responseModel = {
            status: 200,
            data: resUsers,
            error: null,

            message: "Users Deleted successfully",
            success: true
        }

        res.json(response).status(200)
    }else{
        let response: responseModel = {
            status: 403,
            data: null,
            error: "Forbidden Error",

            message: "Fail Deleted successfully",
            success: true
        }
        res.json(response).status(403)

    }

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Delete Users",
            success: false
        }

        res.json(response).status(400)

    }
}

export default {DeleteUser}
