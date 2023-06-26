import SuppilerRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";



const FetchSuppiler=async(req:Request,res:Response)=>{
    try{
        let month=req.params.month
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
