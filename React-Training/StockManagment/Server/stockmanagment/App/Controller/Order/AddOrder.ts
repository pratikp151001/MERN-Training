import { OrderModel } from "../../Model/OrderModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import OrderRepositoty from "../../Repository/index"

const AddOrder=async(req:Request,res:Response)=>{

    console.log("🚀 ~ file: index.ts:7 ~ AddBlog ~ AddBlog:", "AddBlog")
    try{
        console.log("object",req.body)
        const  order:OrderModel={
            customername:req.body.customername,
            quantityordered:parseInt(req.body.quantityorder),
            stocksname:req.body.stockname
        }
        // { customername: 'CCC', quantityorder: '4', stockname: 'DEF' }


          let resstock = await OrderRepositoty.OrderRepositoty.AddOrder(order)

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
export default {AddOrder}
