import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import AdminRepository from '../../Repository/index'



const GetRoles=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: fetchRoles.ts:62 ~ GetRoles ~ GetRoles:", GetRoles)

     try{
    

       let Roles = await AdminRepository.AdminRepository.FetchRoles()

        let response: responseModel = {
            status: 200,
            data: Roles,
            error: null,

            message: "Fetch Roles successfully",
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

            message: "Fail to Fetch Roles",
            success: false
        }

        res.json(response).status(400)

    }
}

export default {GetRoles}
