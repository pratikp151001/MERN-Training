import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import { ProductModel } from "../../Model/ProductModel";
import ProductRepositoty from "../../Repository/index";



const GetProduct = async (req: Request, res: Response) => {
    // console.log("🚀 ~ file: GetProducts.ts:9 ~ GetProduct ~ req:", req.query)

    console.log("🚀 ~ file: GetProducts.ts:48 ~ GetProduct ~ GetProduct:", GetProduct)

    try {

        const params = req.query
        console.log("🚀 ~ file: GetProducts.ts:16 ~ GetProduct ~ params:", params)
        let resproducts;
        // if (params) {
            resproducts = await ProductRepositoty.ProductRepository.GetSortedProduct(params)

        // }
        // else {
        //     resproducts = await ProductRepositoty.ProductRepository.GetProduct()

        // }
        let response: responseModel = {
            status: 200,
            data: resproducts,
            error: null,

            message: "Blog Added successfully",
            success: true
        }

        res.json(response).status(200)

    }
    catch (e) {
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
export default { GetProduct }
