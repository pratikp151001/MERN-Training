import StockRoutes from "../Routes/Stock/StockRoutes"
import OrderRoutes from "../Routes/Order/OrderRoutes"


import express from 'express'

const router=express.Router()

router.use(StockRoutes)
router.use(OrderRoutes)

export  default router;