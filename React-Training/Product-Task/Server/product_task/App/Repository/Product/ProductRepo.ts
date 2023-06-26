import { PrismaClient } from "@prisma/client"
import { ProductModel } from "../../Model/ProductModel";
import { connect } from "react-redux";
import { query } from "express";


const prisma = new PrismaClient()

class ProductRepository {
    async AddProduct(product: ProductModel) {
        console.log("🚀 ~ file: ProductRepo.ts:9 ~ ProductRepository ~ AddProduct ~ AddProduct:", "AddProduct")

        // let User = await prisma.product.create({
        //     data:{
        //         title :product.title,
        //         description: product.description,
        //         Image  :product.Image,
        //         categories:{
        //             create:[
        //                 {
        //                     CategoriesName:product.category
        //                 }

        //             ]
        //             ,
        //             connect:{}
        //         },



        //     }
        // })

        try {
            const existinfCategories = await prisma.categories.findFirst({
                where: {
                    CategoriesName: product.category
                }
            })
            let Product;
            if (existinfCategories) {
                Product = await prisma.product.create({

                    data: {
                        title: product.title,
                        description: product.description,
                        Image: product.Image,
                        CategoriesID: existinfCategories.id

                    }
                })

                Product = await prisma.categories.update({
                    where: {
                        id: existinfCategories.id
                    },
                    data: {
                        ProductId: {
                            push: Product.id
                        }
                    }
                })
            } else {
                Product = await prisma.product.create({

                    data: {
                        title: product.title,
                        description: product.description,
                        Image: product.Image,
                        categories: {
                            create: [{
                                CategoriesName: product.category
                            },
                            ]
                        }

                    }
                })
            }
            return Product;

        }
        catch (e) {

            return e
        }
    }



    async GetProduct() {
        try {
            const products = await prisma.product.findMany()
            return products
        }
        catch (e) {
            return e
        }
    }
    async DeleteProduct(idstoDelete: any) {
        try {
            const products = await prisma.product.deleteMany(
                {
                    where: {
                        id: {
                            in: idstoDelete
                        }
                    }
                }
            )
            console.log("🚀 ~ file: ProductRepo.ts:110 ~ ProductRepository ~ DeleteProduct ~ products:", products)
            return products
        }
        catch (e) {
            return e
        }
    }

    async GetSortedProduct(params: any) {
        console.log("🚀 ~ file: ProductRepo.ts:120 ~ ProductRepository ~ GetSortedProduct ~ params:", params)
        try {
            // const products = await prisma.product.findMany({
               
            // })
            let query={
               
                skip:0,
                 take:5,
                where:{},
                orderBy: {},
            }
            if(params.searchtitle!=undefined && params.searchtitle!=""){
                query.where={
                    title:{
                        contains:params.searchtitle,
                        mode: 'insensitive'
                    }
                }
            }
            
            if(params.fieldname!=undefined && params.fieldname!="" && params.isAscending!=undefined)
            query.orderBy={
                [params.fieldname]: params.isAscending
            }
            
           
            if(params.noofRows){
                query.take=parseInt(params.noofRows)
                if(params.noofRows){
                    query.skip=(parseInt(params.noofRows)*(parseInt(params.currentPage)-1)) as number
                }
    
            }
            const {take,skip,...rest}=query
            const CountRecords=rest
            console.log("🚀 ~ file: ProductRepo.ts:155 ~ ProductRepository ~ GetSortedProduct ~ CountRecords:", CountRecords)
            const products=await prisma.$transaction([
                prisma.product.count(CountRecords),
                prisma.product.findMany(query)
            ])
           
            // console.log("🚀 ~ file: ProductRepo.ts:160 ~ ProductRepository ~ GetSortedProduct ~ CountRecords:", CountRecords)
            // console.log("🚀 ~ file: ProductRepo.ts:158 ~ ProductRepository ~ GetSortedProduct ~ data:", data)
            //const products= await  prisma.product.findMany(query)
            console.log("🚀 ~ file: ProductRepo.ts:127 ~ ProductRepository ~ GetSortedProduct ~ products:", products)
            return products
        }
        catch (e) {
            console.log("🚀 ~ file: ProductRepo.ts:150 ~ ProductRepository ~ GetSortedProduct ~ e:", e)
            return e
        }
    }

}

export default new ProductRepository()