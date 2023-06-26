import ProductRoutes from "../Routes/Product/ProductRoutes"
import express from 'express'

const router=express.Router()

router.use(ProductRoutes)


export  default router;