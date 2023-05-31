import UserRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";


const FetchAllUsers=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: GetAllUser.ts:40 ~ FetchAllUsers ~ FetchAllUsers:", FetchAllUsers)

    try{
        // let id = (req as any).data
        // console.log("🚀 ~ file: GetAllUser.ts:11 ~ FetchAllUsers ~ id:", id)
       

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
