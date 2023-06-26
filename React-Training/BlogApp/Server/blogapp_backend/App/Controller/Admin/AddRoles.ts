import AdminRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import { RoleModel } from '../../Model/RoleModel';



const AddRoles=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: AddRoles.ts:37 ~ AddRoles ~ AddRoles:", AddRoles)

     try{
        const AddRole:RoleModel  = {
            role_name:req.body.role_name,
            permissionIds:req.body.permissionIds,
           
            
        }
    
       let resRole = await AdminRepository.AdminRepository.AddRoles(AddRole)

        let response: responseModel = {
            status: 200,
            data: resRole,
            error: null,

            message: "Role Added  successfully",
            success: true
        }

        res.json(response).status(200)
    // }else{
    //     let response: responseModel = {
    //         status: 403,
    //         data: null,
    //         error: "Forbidden Error",

    //         message: "Fail Deleted successfully",
    //         success: true
    //     }
    //     res.json(response).status(403)

    // }

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Add Role",
            success: false
        }

        res.json(response).status(400)

    }
}

export default {AddRoles}
