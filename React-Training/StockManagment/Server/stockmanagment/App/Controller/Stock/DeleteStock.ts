
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import StockRepository from "../../Repository/index"


const DeleteStock=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: DeleteBlog.ts:40 ~ DeleteBlog ~ DeleteBlog:", DeleteStock)
    
    try{

       
        var idtodelete = req.params.id
        console.log("🚀 ~ file: DeleteStock.ts:12 ~ DeleteStock ~ idtodelete:", idtodelete)
        let resstock = await StockRepository.StockRepositoty.DeleteStock(idtodelete)
        console.log("🚀 ~ file: DeleteStock.ts:16 ~ DeleteStock ~ resstock:", resstock)

        let response: responseModel = {
            status: 200,
            data: resstock,
            error: null,

            message: "stock Deleted successfully",
            success: true
        }
        console.log("🚀 ~ file: DeleteStock.ts:26 ~ DeleteStock ~ response:", response)

        res.json(response).status(200)

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Deete stock",
            success: false
        }

        res.json(response).status(400)

    }
}

export default {DeleteStock}
