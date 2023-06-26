import { AddStockModel } from "../../Model/AddStokModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import StockRepository from "../../Repository/index"

const AddStock=async(req:Request,res:Response)=>{

    console.log("🚀 ~ file: index.ts:7 ~ AddBlog ~ AddBlog:", "AddBlog")
    try{
        console.log("object",req.body)

        const stock: AddStockModel = {
           stockname:req.body.stockname,
           quantity:parseInt(req.body.quantity)
            
        }
        console.log("🚀 ~ file: AddStock.ts:16 ~ AddStock ~ stock:", stock)

         let resstock = await StockRepository.StockRepositoty.AddStock(stock)

        let response: responseModel = {
            status: 200,
            data: resstock,
            error: null,

            message: "Stock Added successfully",
            success: true
        }

        res.json(response).status(200)

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Add Stock",
            success: false
        }

        res.json(response).status(400)

    }
}
export default {AddStock}
