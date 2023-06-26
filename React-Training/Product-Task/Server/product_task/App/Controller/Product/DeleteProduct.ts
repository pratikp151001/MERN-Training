import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import ProductRepositoty from "../../Repository/index";




const DeleteProduct=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: DeleteProduct.ts:47 ~ DeleteProduct ~ DeleteProduct:", DeleteProduct)
    try{

        let ids=req.params.id
        console.log("🚀 ~ file: DeleteProduct.ts:13 ~ DeleteProduct ~ idstoDelete:", ids)
        console.log("🚀 ~ file: DeleteProduct.ts:13 ~ DeleteProduct ~ idstoDelete:", typeof(ids))
        const idstoDelete=ids.split(",")
        console.log("🚀 ~ file: DeleteProduct.ts:16 ~ DeleteProduct ~ idstoDelete:", idstoDelete)

      let resBlog = await ProductRepositoty.ProductRepository.DeleteProduct(idstoDelete)

        let response: responseModel = {
            status: 200,
            data: resBlog,
            error: null,

            message: "Product Deleted successfully",
            success: true
        }
        console.log("🚀 ~ file: DeleteProduct.ts:28 ~ DeleteProduct ~ response: responseModel.resBlog:", resBlog)

        res.json(response).status(200)

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Delete Product",
            success: false
        }

        res.json(response).status(400)

    }
}
export default {DeleteProduct}
