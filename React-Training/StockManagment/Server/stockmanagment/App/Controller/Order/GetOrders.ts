import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import OrderRepositoty from "../../Repository/index"

const GetOrder=async(req:Request,res:Response)=>{

    try{
       

     let resOrder = await OrderRepositoty.OrderRepositoty.GetOrder()
         console.log("🚀 ~ file: GetStock.ts:13 ~ GetStock ~ resstock:", resOrder)

        let response: responseModel = {
            status: 200,
            data: resOrder,
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
export default {GetOrder}
