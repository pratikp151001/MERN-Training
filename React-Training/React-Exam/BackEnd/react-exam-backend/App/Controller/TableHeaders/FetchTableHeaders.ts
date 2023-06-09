import HeaderRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
// import PermissionCheck from '../../Middleware/PermissionCheck';
// import PERMISSIONS from '../../Middleware/permission';


const FetchHeaders=async(req:Request,res:Response)=>{
    // console.log("🚀 ~ file: FetchTableHeaders.ts:52 ~ FetchHeaders ~ FetchHeaders:", FetchHeaders)

    try{
       
        

        let month=req.params.month
        // console.log("🚀 ~ file: FetchTableHeaders.ts:16 ~ FetchHeaders ~ month:", month)

        let resSup = await  HeaderRepository.HeaderRepository.GetTableHeaders(month)

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

export default {FetchHeaders}
