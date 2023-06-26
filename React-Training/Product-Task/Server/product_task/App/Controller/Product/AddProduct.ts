import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import { ProductModel } from "../../Model/ProductModel";
import ProductRepositoty from "../../Repository/index";



const AddProduct=async(req:Request,res:Response)=>{
    console.log("🚀 ~ file: AddProduct.ts:46 ~ AddProduct ~ AddProduct:", AddProduct)

    try{

        const Product:ProductModel  = {
            title:req.body.title,
            description:req.body.description,
            category:req.body.category,
            Image:(req.file)? req.file.filename : `${req.body.title}_file`
            
        }

        let resBlog = await ProductRepositoty.ProductRepository.AddProduct(Product)

        let response: responseModel = {
            status: 200,
            data: resBlog,
            error: null,

            message: "Blog Added successfully",
            success: true
        }

        res.json(response).status(200)

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Add Blog",
            success: false
        }

        res.json(response).status(400)

    }
}
export default {AddProduct}
