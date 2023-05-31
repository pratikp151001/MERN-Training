import UserRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";


const FetchUserById=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: GetUserbyId.ts:41 ~ FetchUserById ~ FetchUserById:", FetchUserById)

    try{
        // let id = (req as any).data
        // console.log("🚀 ~ file: GetAllUser.ts:11 ~ FetchAllUsers ~ id:", id)
       
        let id=req.params.id
        console.log("🚀 ~ file: GetUserbyId.ts:14 ~ FetchUserById ~ id:", id)

        let resUsers = await UserRepository.UserRepository.FetchUserById(id)

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

export default {FetchUserById}
