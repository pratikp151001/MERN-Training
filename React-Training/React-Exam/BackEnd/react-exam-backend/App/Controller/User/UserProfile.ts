import UserRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
// import PermissionCheck from '../../Middleware/PermissionCheck';
// import PERMISSIONS from '../../Middleware/permission';


const ViewOwnProfile=async(req:Request,res:Response)=>{
    try{
       
        let id = (req as any).data
       
        // let id=req.params.id
        let resUsers = await UserRepository.UserRepository.UserProfile(id)

        let response: responseModel = {
            status: 200,
            data: resUsers,
            error: null,

            message: "Users Fetched successfully",
            success: true
        }

        res.json(response).status(200)
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

export default {ViewOwnProfile}
