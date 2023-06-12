import SuppilerRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
// import PermissionCheck from '../../Middleware/PermissionCheck';
// import PERMISSIONS from '../../Middleware/permission';


const FetchSuppiler=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: FetchSuppilers.ts:48 ~ FetchSuppiler ~ FetchSuppiler:", FetchSuppiler)

    try{
       
        // let id = (req as any).data
        // console.log("🚀 ~ file: GetAllUser.ts:11 ~ FetchAllUsers ~ id:", id)
       
        // let id=req.params.id
        // console.log("🚀 ~ file: GetUserbyId.ts:14 ~ FetchUserById ~ id:", id)
        // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAa",req)

        let month=req.params.month
        console.log("🚀 ~ file: FetchSuppilers.ts:20 ~ FetchSuppiler ~ month:", month)

        let resSup = await  SuppilerRepository.SuppilerRepository.GetSuppliers(month)

        let response: responseModel = {
            status: 200,
            data: resSup,
            error: null,

            message: "Suppilers Fetched successfully",
            success: true
        }

        res.json(response).status(200)
    }
  

    
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Fetch Suppilers",
            success: false
        }

        res.json(response).status(400)

    }
}

export default {FetchSuppiler}
