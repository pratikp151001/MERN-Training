import { AddStockModel } from "../../Model/AddStokModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import StockRepository from "../../Repository/index"

const GetStock=async(req:Request,res:Response)=>{

    try{
       
        console.log("🚀 ~ file: GetStock.ts:46 ~ GetStock ~ GetStock:", GetStock)

         let resstock = await StockRepository.StockRepositoty.GetStock()
         console.log("🚀 ~ file: GetStock.ts:13 ~ GetStock ~ resstock:", resstock)

        let response: responseModel = {
            status: 200,
            data: resstock,
            error: null,

            message: "Stocks get successfully",
            success: true
        }

        res.json(response).status(200)

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to get Stock",
            success: false
        }

        res.json(response).status(400)

    }
}
export default {GetStock}
